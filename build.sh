appName="alist"
builtAt="$(date +'%F %T %z')"
goVersion=$(go version | sed 's/go version //')
gitAuthor="Xhofe <i@nn.ci>"
gitCommit=$(git log --pretty=format:"%h" -1)
gitTag=$(git describe --long --tags --dirty --always)

if [ "$1" = "dev" ]; then
  version="dev"
  webVersion="dev"
else
  version="3.11.0.3"
  webVersion="3.11.0.3"
fi

echo "backend version: $version"
echo "frontend version: $webVersion"

ldflags="\
-w -s \
-X 'github.com/alist-org/alist/v3/internal/conf.BuiltAt=$builtAt' \
-X 'github.com/alist-org/alist/v3/internal/conf.GoVersion=$goVersion' \
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
  go build -o ./bin/alist -ldflags="$ldflags" -tags=jsoniter .
}

BuildRelease() {
  rm -rf .git/
  mkdir -p "build"
  muslflags="--extldflags '-static -fpic' $ldflags"
  BASE="https://musl.cc/"
  FILES=(x86_64-linux-musl-cross aarch64-linux-musl-cross arm-linux-musleabihf-cross)
  for i in "${FILES[@]}"; do
    url="${BASE}${i}.tgz"
    curl -L -o "${i}.tgz" "${url}"
    sudo tar xf "${i}.tgz" --strip-components 1 -C /usr/local
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
  upx -9 ./alist-windows*
  mv alist-* build
  cd build
  find . -type f -print0 | xargs -0 md5sum >md5.txt
  cat md5.txt
}

MakeRelease() {
  cd build
  mkdir compress
  for i in $(find . -type f -name "$appName-linux-*"); do
    cp "$i" alist
    tar -czvf compress/"$i".tar.gz alist
    rm -f alist
  done
  for i in $(find . -type f -name "$appName-darwin-*"); do
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
  else
    BuildRelease
  fi
else
  echo -e "Parameter error"
fi
