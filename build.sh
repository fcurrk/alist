appName="alist"
builtAt="$(date +'%F %T %z')"
gitAuthor="Xhofe <i@nn.ci>"
gitCommit=$(git log --pretty=format:"%h" -1)
gitTag=$(git describe --long --tags --dirty --always)

if [ "$1" = "dev" ]; then
  version="dev"
  webVersion="dev"
else
  version="3.44.0.250415"
  webVersion="3.44.0.250415"
fi

echo "backend version: $version"
echo "frontend version: $webVersion"

ldflags="\
-w -s \
-X 'github.com/alist-org/alist/v3/internal/conf.BuiltAt=$builtAt' \
-X 'github.com/alist-org/alist/v3/internal/conf.GitAuthor=$gitAuthor' \
-X 'github.com/alist-org/alist/v3/internal/conf.GitCommit=$gitCommit' \
-X 'github.com/alist-org/alist/v3/internal/conf.Version=$version' \
-X 'github.com/alist-org/alist/v3/internal/conf.WebVersion=$webVersion' \
"

FetchWebDev() {
  curl -L https://codeload.github.com/alist-org/web-dist/tar.gz/refs/heads/dev -o web-dist-dev.tar.gz
  tar -zxvf web-dist-dev.tar.gz
  rm -rf public/dist
  mv -f web-dist-dev/dist public
  rm -rf web-dist-dev web-dist-dev.tar.gz
}

FetchWebRelease() {
  curl -L https://github.com/alist-org/alist-web/releases/latest/download/dist.tar.gz -o dist.tar.gz
  tar -zxvf dist.tar.gz
  rm -rf public/dist
  mv -f dist public
  rm -rf dist.tar.gz
}

BuildWinArm64() {
  echo building for windows-arm64
  chmod +x ./wrapper/zcc-arm64
  chmod +x ./wrapper/zcxx-arm64
  export GOOS=windows
  export GOARCH=arm64
  export CC=$(pwd)/wrapper/zcc-arm64
  export CXX=$(pwd)/wrapper/zcxx-arm64
  export CGO_ENABLED=1
  go build -o "$1" -ldflags="$ldflags" -tags=jsoniter .
}

BuildDev() {
  rm -rf .git/
  xgo -targets=windows/amd64 -out "$appName" -ldflags="$ldflags" -tags=jsoniter .
  mkdir -p "dist"
  mv alist-* dist
  cd dist
  upx -9 ./alist-linux*
  upx -9 ./alist-windows*
  find . -type f -print0 | xargs -0 md5sum >md5.txt
  cat md5.txt
}

BuildDocker() {
  echo "replace github.com/mattn/go-sqlite3 => github.com/leso-kn/go-sqlite3 v0.0.0-20230710125852-03158dc838ed" >>go.mod
  go get gorm.io/driver/sqlite@v1.4.4
  go build -o ./bin/alist -ldflags="$ldflags" -tags=jsoniter .
}

BuildRelease() {
  rm -rf .git/
  mkdir -p "build"
  muslflags="--extldflags '-static -fpic' $ldflags"
  BASE="https://musl.nn.ci/"
  FILES=(x86_64-linux-musl-cross aarch64-linux-musl-cross arm-linux-musleabihf-cross)
  for i in "${FILES[@]}"; do
    url="${BASE}${i}.tgz"
    curl -L -o "${i}.tgz" "${url}"
    sudo tar xf "${i}.tgz" --strip-components 1 -C /usr/local
    rm -f "${i}.tgz"
  done
  OS_ARCHES=(linux-musl-amd64 linux-musl-arm64 linux-musl-arm)
  CGO_ARGS=(x86_64-linux-musl-gcc aarch64-linux-musl-gcc arm-linux-musleabihf-gcc)
  for i in "${!OS_ARCHES[@]}"; do
    os_arch=${OS_ARCHES[$i]}
    cgo_cc=${CGO_ARGS[$i]}
    echo building for ${os_arch}
    export GOOS=${os_arch%%-*}
    export GOARCH=${os_arch##*-}
    export CC=${cgo_cc}
    export CGO_ENABLED=1
    go build -o ./build/$appName-$os_arch -ldflags="$muslflags" -tags=jsoniter .
  done
  BuildWinArm64 ./build/alist-windows-arm64.exe
  xgo -targets=linux/amd64,windows/amd64,linux/arm64 -out "$appName" -ldflags="$ldflags" -tags=jsoniter .
  # why? Because some target platforms seem to have issues with upx compression
  upx -9 ./alist-linux-amd64
  cp ./alist-windows-amd64.exe ./alist-windows-amd64-upx.exe
  upx -9 ./alist-windows-amd64-upx.exe
  mv alist-* build
  cd build
  find . -type f -print0 | xargs -0 md5sum >md5.txt
  cat md5.txt
}

BuildReleaseLinuxMusl() {
  rm -rf .git/
  mkdir -p "build"
  muslflags="--extldflags '-static -fpic' $ldflags"
  BASE="https://musl.nn.ci/"
  FILES=(x86_64-linux-musl-cross aarch64-linux-musl-cross mips-linux-musl-cross mips64-linux-musl-cross mips64el-linux-musl-cross mipsel-linux-musl-cross powerpc64le-linux-musl-cross s390x-linux-musl-cross)
  for i in "${FILES[@]}"; do
    url="${BASE}${i}.tgz"
    curl -L -o "${i}.tgz" "${url}"
    sudo tar xf "${i}.tgz" --strip-components 1 -C /usr/local
    rm -f "${i}.tgz"
  done
  OS_ARCHES=(linux-musl-amd64 linux-musl-arm64 linux-musl-mips linux-musl-mips64 linux-musl-mips64le linux-musl-mipsle linux-musl-ppc64le linux-musl-s390x)
  CGO_ARGS=(x86_64-linux-musl-gcc aarch64-linux-musl-gcc mips-linux-musl-gcc mips64-linux-musl-gcc mips64el-linux-musl-gcc mipsel-linux-musl-gcc powerpc64le-linux-musl-gcc s390x-linux-musl-gcc)
  for i in "${!OS_ARCHES[@]}"; do
    os_arch=${OS_ARCHES[$i]}
    cgo_cc=${CGO_ARGS[$i]}
    echo building for ${os_arch}
    export GOOS=${os_arch%%-*}
    export GOARCH=${os_arch##*-}
    export CC=${cgo_cc}
    export CGO_ENABLED=1
    go build -o ./build/$appName-$os_arch -ldflags="$muslflags" -tags=jsoniter .
  done
}

BuildReleaseLinuxMuslArm() {
  rm -rf .git/
  mkdir -p "build"
  muslflags="--extldflags '-static -fpic' $ldflags"
  BASE="https://musl.nn.ci/"
#  FILES=(arm-linux-musleabi-cross arm-linux-musleabihf-cross armeb-linux-musleabi-cross armeb-linux-musleabihf-cross armel-linux-musleabi-cross armel-linux-musleabihf-cross armv5l-linux-musleabi-cross armv5l-linux-musleabihf-cross armv6-linux-musleabi-cross armv6-linux-musleabihf-cross armv7l-linux-musleabihf-cross armv7m-linux-musleabi-cross armv7r-linux-musleabihf-cross)
  FILES=(arm-linux-musleabi-cross arm-linux-musleabihf-cross armel-linux-musleabi-cross armel-linux-musleabihf-cross armv5l-linux-musleabi-cross armv5l-linux-musleabihf-cross armv6-linux-musleabi-cross armv6-linux-musleabihf-cross armv7l-linux-musleabihf-cross armv7m-linux-musleabi-cross armv7r-linux-musleabihf-cross)
  for i in "${FILES[@]}"; do
    url="${BASE}${i}.tgz"
    curl -L -o "${i}.tgz" "${url}"
    sudo tar xf "${i}.tgz" --strip-components 1 -C /usr/local
    rm -f "${i}.tgz"
  done
#  OS_ARCHES=(linux-musleabi-arm linux-musleabihf-arm linux-musleabi-armeb linux-musleabihf-armeb linux-musleabi-armel linux-musleabihf-armel linux-musleabi-armv5l linux-musleabihf-armv5l linux-musleabi-armv6 linux-musleabihf-armv6 linux-musleabihf-armv7l linux-musleabi-armv7m linux-musleabihf-armv7r)
#  CGO_ARGS=(arm-linux-musleabi-gcc arm-linux-musleabihf-gcc armeb-linux-musleabi-gcc armeb-linux-musleabihf-gcc armel-linux-musleabi-gcc armel-linux-musleabihf-gcc armv5l-linux-musleabi-gcc armv5l-linux-musleabihf-gcc armv6-linux-musleabi-gcc armv6-linux-musleabihf-gcc armv7l-linux-musleabihf-gcc armv7m-linux-musleabi-gcc armv7r-linux-musleabihf-gcc)
#  GOARMS=('' '' '' '' '' '' '5' '5' '6' '6' '7' '7' '7')
  OS_ARCHES=(linux-musleabi-arm linux-musleabihf-arm linux-musleabi-armel linux-musleabihf-armel linux-musleabi-armv5l linux-musleabihf-armv5l linux-musleabi-armv6 linux-musleabihf-armv6 linux-musleabihf-armv7l linux-musleabi-armv7m linux-musleabihf-armv7r)
  CGO_ARGS=(arm-linux-musleabi-gcc arm-linux-musleabihf-gcc armel-linux-musleabi-gcc armel-linux-musleabihf-gcc armv5l-linux-musleabi-gcc armv5l-linux-musleabihf-gcc armv6-linux-musleabi-gcc armv6-linux-musleabihf-gcc armv7l-linux-musleabihf-gcc armv7m-linux-musleabi-gcc armv7r-linux-musleabihf-gcc)
  GOARMS=('' '' '' '' '5' '5' '6' '6' '7' '7' '7')
  for i in "${!OS_ARCHES[@]}"; do
    os_arch=${OS_ARCHES[$i]}
    cgo_cc=${CGO_ARGS[$i]}
    arm=${GOARMS[$i]}
    echo building for ${os_arch}
    export GOOS=linux
    export GOARCH=arm
    export CC=${cgo_cc}
    export CGO_ENABLED=1
    export GOARM=${arm}
    go build -o ./build/$appName-$os_arch -ldflags="$muslflags" -tags=jsoniter .
  done
}

BuildReleaseAndroid() {
  rm -rf .git/
  mkdir -p "build"
  wget https://dl.google.com/android/repository/android-ndk-r26b-linux.zip
  unzip android-ndk-r26b-linux.zip
  rm android-ndk-r26b-linux.zip
  OS_ARCHES=(amd64 arm64 386 arm)
  CGO_ARGS=(x86_64-linux-android24-clang aarch64-linux-android24-clang i686-linux-android24-clang armv7a-linux-androideabi24-clang)
  for i in "${!OS_ARCHES[@]}"; do
    os_arch=${OS_ARCHES[$i]}
    cgo_cc=$(realpath android-ndk-r26b/toolchains/llvm/prebuilt/linux-x86_64/bin/${CGO_ARGS[$i]})
    echo building for android-${os_arch}
    export GOOS=android
    export GOARCH=${os_arch##*-}
    export CC=${cgo_cc}
    export CGO_ENABLED=1
    go build -o ./build/$appName-android-$os_arch -ldflags="$ldflags" -tags=jsoniter .
    android-ndk-r26b/toolchains/llvm/prebuilt/linux-x86_64/bin/llvm-strip ./build/$appName-android-$os_arch
  done
}

BuildReleaseFreeBSD() {
  rm -rf .git/
  mkdir -p "build/freebsd"
  OS_ARCHES=(amd64 arm64 i386)
  GO_ARCHES=(amd64 arm64 386)
  CGO_ARGS=(x86_64-unknown-freebsd14.1 aarch64-unknown-freebsd14.1 i386-unknown-freebsd14.1)
  for i in "${!OS_ARCHES[@]}"; do
    os_arch=${OS_ARCHES[$i]}
    cgo_cc="clang --target=${CGO_ARGS[$i]} --sysroot=/opt/freebsd/${os_arch}"
    echo building for freebsd-${os_arch}
    sudo mkdir -p "/opt/freebsd/${os_arch}"
    wget -q https://download.freebsd.org/releases/${os_arch}/14.1-RELEASE/base.txz
    sudo tar -xf ./base.txz -C /opt/freebsd/${os_arch}
    rm base.txz
    export GOOS=freebsd
    export GOARCH=${GO_ARCHES[$i]}
    export CC=${cgo_cc}
    export CGO_ENABLED=1
    export CGO_LDFLAGS="-fuse-ld=lld"
    go build -o ./build/$appName-freebsd-$os_arch -ldflags="$ldflags" -tags=jsoniter .
  done
}

MakeRelease() {
  cd build
  mkdir compress
  for i in $(find . -type f -name "$appName-linux-*"); do
    cp "$i" alist
    tar -czvf compress/"$i".tar.gz alist
    rm -f alist
  done
    for i in $(find . -type f -name "$appName-android-*"); do
    cp "$i" alist
    tar -czvf compress/"$i".tar.gz alist
    rm -f alist
  done
  for i in $(find . -type f -name "$appName-darwin-*"); do
    cp "$i" alist
    tar -czvf compress/"$i".tar.gz alist
    rm -f alist
  done
  for i in $(find . -type f -name "$appName-freebsd-*"); do
    cp "$i" alist
    tar -czvf compress/"$i".tar.gz alist
    rm -f alist
  done
  for i in $(find . -type f -name "$appName-windows-*"); do
    cp "$i" alist.exe
    zip compress/$(echo $i | sed 's/\.[^.]*$//').zip alist.exe
    rm -f alist.exe
  done
  cd compress
  find . -type f -print0 | xargs -0 md5sum >md5.txt
  cat md5.txt
  cd ../..
}

if [ "$1" = "dev" ]; then

  if [ "$2" = "docker" ]; then
    BuildDocker
  else
    BuildDev
  fi
elif [ "$1" = "release" ]; then
  if [ "$2" = "docker" ]; then
    BuildDocker
  elif [ "$2" = "docker-multiplatform" ]; then
    BuildDockerMultiplatform
  elif [ "$2" = "linux_musl_arm" ]; then
    BuildReleaseLinuxMuslArm
    MakeRelease "md5-linux-musl-arm.txt"
  elif [ "$2" = "linux_musl" ]; then
    BuildReleaseLinuxMusl
    MakeRelease "md5-linux-musl.txt"
  elif [ "$2" = "android" ]; then
    BuildReleaseAndroid
    MakeRelease "md5-android.txt"
  elif [ "$2" = "freebsd" ]; then
    BuildReleaseFreeBSD
    MakeRelease "md5-freebsd.txt"
  else
    BuildRelease
  fi
else
  echo -e "Parameter error"
fi
