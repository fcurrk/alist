System.register(["./index-legacy.e91490ae.js"],(function(e){"use strict";var o;return{setters:[function(e){o=e.co}],execute:function(){var r={backup:"备份",restore:"恢复",start_backup:"开始备份",finish_backup:"备份完成",success_backup_item:"[ {{item}} ] 备份成功",failed_backup_item:"[ {{item}} ] 备份失败",no_file:"未选择文件",start_restore:"开始恢复",finish_restore:"恢复完成",success_restore_item:"[ {{item}} ] 恢复成功",failed_restore_item:"[ {{item}} ] 恢复失败",override:"覆盖",encrypt_password_placeholder:"如无需加密，请留空",encrypt_password:"加密密码",wrong_encrypt_password:"加密密码错误"},i={"115 Cloud":{cookie:"Cookie","cookie-tips":"需要 QR 代码令牌和 cookie 中的一个",limit_rate:"限制速率","limit_rate-tips":"限制所有 api 请求速率([limit]r/1s)",page_size:"分页大小","page_size-tips":"115 驱动程序的列表 API 的每页大小",qrcode_source:"二维码来源","qrcode_source-tips":"选择二维码设备，默认Linux",qrcode_sources:{alipaymini:"Alipaymini",android:"Android",ios:"IOS",qandroid:"Qandroid",tv:"Tv",web:"Web",wechatmini:"Wechatmini"},qrcode_token:"二维码令牌","qrcode_token-tips":"需要 QR 代码令牌和 cookie 中的一个",root_folder_id:"根文件夹ID"},"115 Share":{cookie:"Cookie","cookie-tips":"需要 QR 代码令牌和 cookie 中的一个",limit_rate:"限制速率","limit_rate-tips":"限制所有 api 请求速率(1r/[limit_rate]s)",page_size:"分页大小","page_size-tips":"115 驱动程序的列表 API 的每页大小",qrcode_source:"二维码来源","qrcode_source-tips":"选择二维码设备，默认Linux",qrcode_sources:{alipaymini:"Alipaymini",android:"Android",ios:"IOS",qandroid:"Qandroid",tv:"Tv",web:"Web",wechatmini:"Wechatmini"},qrcode_token:"二维码令牌","qrcode_token-tips":"需要 QR 代码令牌和 cookie 中的一个",receive_code:"提取码","receive_code-tips":"115 分享链接提取码",root_folder_id:"根文件夹ID",share_code:"分享码","share_code-tips":"分享链接的分享码"},"123Pan":{password:"密码",root_folder_id:"根文件夹ID",username:"用户名"},"123PanLink":{origin_urls:"原始链接","origin_urls-tips":"结构:\nFolderName:\n  [FileSize:][Modified:]Url",private_key:"私钥",uid:"账号 Uid",valid_duration:"有效时长","valid_duration-tips":"分钟"},"123PanShare":{accesstoken:"访问令牌",root_folder_id:"根文件夹ID",sharekey:"分享key",sharepassword:"分享密码"},"139Yun":{authorization:"Authorization",cloud_id:"Cloud id",custom_upload_part_size:"自定义上传分片大小","custom_upload_part_size-tips":"0 表示根据VIP等级对应大小",root_folder_id:"根文件夹ID",type:"类型",types:{family:"家庭云",personal:"个人云",personal_new:"新版个人云"}},"189Cloud":{cookie:"Cookie","cookie-tips":"如需输入验证码，请填写Cookie。",password:"密码",root_folder_id:"根文件夹ID",username:"用户名"},"189CloudPC":{family_id:"Family id",family_transfer:"家庭转移",no_use_ocr:"不使用OCR",order_by:"排序",order_bys:{filename:"文件名",filesize:"文件大小",lastOpTime:"修改时间"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},password:"密码",rapid_upload:"秒传",root_folder_id:"根文件夹ID",type:"类型",types:{family:"家庭云",personal:"个人云"},upload_method:"上传方式",upload_methods:{old:"旧版",rapid:"秒传",stream:"流式"},upload_thread:"上传线程","upload_thread-tips":"1<=线程<=32",username:"用户名",validate_code:"验证码"},"AList V2":{access_token:"访问令牌",password:"密码",root_folder_path:"根文件夹路径",url:"链接"},"AList V3":{meta_password:"元信息密码",pass_ua_to_upsteam:"传递UA至上游",password:"密码",root_folder_path:"根文件夹路径",token:"令牌",url:"链接",username:"用户名"},Alias:{paths:"路径",protect_same_name:"保护同名","protect_same_name-tips":"保护同名的文件不被删除或重命名"},Aliyundrive:{internal_upload:"内部上传",order_by:"排序",order_bys:{created_at:"创建时间",name:"名称",size:"大小",updated_at:"修改时间"},order_direction:"排序方式",order_directions:{ASC:"升序",DESC:"降序"},rapid_upload:"秒传",refresh_token:"刷新令牌",root_folder_id:"根文件夹ID"},AliyundriveOpen:{client_id:"客户端ID","client_id-tips":"如果你没有，请留空",client_secret:"客户端密钥","client_secret-tips":"如果你没有，请留空",drive_type:"云盘类型",drive_types:{backup:"备份盘",default:"默认",resource:"资源库"},internal_upload:"内部上传","internal_upload-tips":"如在使用北京区阿里云ECS，可以开启用来提高上传速度",livp_download_format:"Livp 下载格式",livp_download_formats:{jpeg:"Jpeg",mov:"Mov"},oauth_token_url:"Oauth令牌链接",order_by:"排序",order_bys:{created_at:"创建时间",name:"名称",size:"大小",updated_at:"修改时间"},order_direction:"排序方式",order_directions:{ASC:"升序",DESC:"降序"},rapid_upload:"秒传","rapid_upload-tips":"如启用此选项，文件将先上传到服务器，上传进度将不正确",refresh_token:"刷新令牌",remove_way:"移除方式",remove_ways:{delete:"删除",trash:"回收站"},root_folder_id:"根文件夹ID"},AliyundriveShare:{order_by:"排序",order_bys:{created_at:"创建时间",name:"名称",size:"大小",updated_at:"修改时间"},order_direction:"排序方式",order_directions:{ASC:"升序",DESC:"降序"},refresh_token:"刷新令牌",root_folder_id:"根文件夹ID",share_id:"分享ID",share_pwd:"分享密码"},BaiduNetdisk:{client_id:"客户端ID",client_secret:"客户端密钥",custom_crack_ua:"自定义破解ua",custom_upload_part_size:"自定义上传分片大小","custom_upload_part_size-tips":"0 表示根据VIP等级对应大小",download_api:"下载接口",download_apis:{crack:"非官方",official:"官方"},order_by:"排序",order_bys:{name:"名称",size:"大小",time:"时间"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},refresh_token:"刷新令牌",root_folder_path:"根文件夹路径",upload_api:"上传 api",upload_thread:"上传线程","upload_thread-tips":"1<=线程<=32"},BaiduPhoto:{album_id:"相簿ID",cookie:"Cookie",delete_origin:"删除源文件",show_type:"展示类型",show_types:{root:"根",root_only_album:"仅根目录下相簿",root_only_file:"仅根目录下文件"},upload_thread:"上传线程","upload_thread-tips":"1<=线程<=32"},BaiduShare:{BDUSS:"BDUSS",pwd:"百度网盘分享密码",root_folder_path:"根文件夹路径",surl:"百度网盘分享链接"},ChaoXingGroupDrive:{bbsid:"Bbsid",cookie:"Cookie",password:"密码",root_folder_id:"根文件夹ID",user_name:"用户名"},Cloudreve:{address:"地址",cookie:"Cookie",custom_ua:"自定义UA",enable_thumb_and_folder_size:"启用缩略图和文件夹大小",password:"密码",root_folder_path:"根文件夹路径",username:"用户名"},Crypt:{directory_name_encryption:"文件夹名称加密",directory_name_encryptions:{false:"False",true:"True"},encrypted_suffix:"加密后缀","encrypted_suffix-tips":"高级选项！加密的文件将使用此后缀",filename_encoding:"文件名编码","filename_encoding-tips":"高级选项",filename_encodings:{base32:"Base32",base32768:"Base32768",base64:"Base64"},filename_encryption:"文件名加密",filename_encryptions:{obfuscate:"混淆",off:"关闭",standard:"标准"},password:"密码","password-tips":"主密码",remote_path:"加密后文件存储路径","remote_path-tips":"这是加密数据存储的位置",salt:"加盐","salt-tips":"如果您不知道什么是加盐，可以视为第二个密码。可选，推荐。",show_hidden:"显示隐藏","show_hidden-tips":"显示隐藏目录以及文件",thumbnail:"缩略图","thumbnail-tips":"在缩略图文件夹下预先生成缩略图"},Doge:{access_key_id:"访问密钥 Id",add_filename_to_disposition:"添加filename到disposition","add_filename_to_disposition-tips":"添加filename到Content-Disposition头中。",bucket:"存储桶",custom_host:"自定义HOST",enable_custom_host_presign:"启用自定义主机预览",endpoint:"Endpoint",force_path_style:"强制路径样式",list_object_version:"列出对象版本",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"占位文件名",region:"地区",remove_bucket:"移除存储桶","remove_bucket-tips":"使用自定义主机时从路径中删除存储桶名称。",root_folder_path:"根文件夹路径",secret_access_key:"安全访问密钥",session_token:"会话令牌",sign_url_expire:"签名链接有效期"},Dropbox:{client_id:"客户端ID","client_id-tips":"没有请留空",client_secret:"客户端密钥","client_secret-tips":"没有请留空",oauth_token_url:"Oauth令牌链接",refresh_token:"刷新令牌",root_folder_path:"根文件夹路径"},FTP:{address:"地址",encoding:"字符编码",password:"密码",root_folder_path:"根文件夹路径",username:"用户名"},FebBox:{client_id:"客户端ID",client_secret:"客户端密钥",page_size:"分页大小","page_size-tips":"按分页大小显示FebBox driver api",root_folder_id:"根文件夹ID",sort_rule:"排序规则",sort_rules:{ext_asc:"扩展名正序",ext_desc:"扩展名倒序",name_asc:"名称升序",name_desc:"名称降序",size_asc:"大小升序",size_desc:"大小降序",update_asc:"修改时间正序",update_desc:"修改时间倒序"},user_ip:"用户ip","user_ip-tips":"用户IP地址用于下载链接，可以加快下载"},FeijiPan:{password:"密码",root_folder_id:"根文件夹ID",username:"用户名"},"GitHub API":{author_email:"作者电子邮件",author_name:"作者姓名",committer_email:"佣金电子邮件",committer_name:"佣金名称",copy_commit_message:"复制提交消息",delete_commit_message:"删除提交消息",mkdir_commit_message:"Mkdir 提交消息",move_commit_message:"移动提交消息",owner:"所有者",put_commit_message:"放置提交消息",ref:"参考值","ref-tips":"默认情况下，一个分支、一个标签或提交 SHA, 主要分支。",rename_commit_message:"重命名提交消息",repo:"复数",root_folder_path:"根文件夹路径",token:"令牌"},GoogleDrive:{chunk_size:"分片大小","chunk_size-tips":"上传分块大小 (单位: MB)",client_id:"客户端ID",client_secret:"客户端密钥",order_by:"排序","order_by-tips":"例如: folder,name,modifiedTime",order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},refresh_token:"刷新令牌",root_folder_id:"根文件夹ID"},GooglePhoto:{client_id:"客户端ID",client_secret:"客户端密钥",refresh_token:"刷新令牌",root_folder_id:"根文件夹ID",show_archive:"显示归档"},HalalCloud:{app_id:"应用ID",app_secret:"应用令牌\n",app_version:"应用版本",refresh_token:"刷新令牌","refresh_token-tips":"登录类型是刷新令牌,此为必填项",root_folder_path:"根文件夹路径",upload_thread:"上传线程","upload_thread-tips":"1<=线程<=32"},ILanZou:{password:"密码",root_folder_id:"根文件夹ID",username:"用户名"},"IPFS API":{endpoint:"Endpoint",gateway:"网关",root_folder_path:"根文件夹路径"},KodBox:{address:"地址",password:"密码",root_folder_path:"根文件夹路径",username:"用户名"},Lanzou:{account:"账户",baseUrl:"基本URL","baseUrl-tips":"进行文件操作的基础 URL",cookie:"Cookie","cookie-tips":"有效期约为15天，若使用分享链接则忽略",password:"密码",repair_file_info:"修复文件信息","repair_file_info-tips":"启用WebDAV才可使用此功能",root_folder_id:"根文件夹ID",shareUrl:"分享链接","shareUrl-tips":"用于获取分享页面",share_password:"分享密码",type:"类型",types:{account:"账户",cookie:"Cookie",url:"链接"},user_agent:"使用代理"},Lark:{app_id:"应用ID","app_id-tips":"应用ID",app_secret:"应用令牌","app_secret-tips":"应用令牌",external_mode:"外部预览模式","external_mode-tips":"打开后复制飞书链接，可跳转到飞书网页预览",root_folder_path:"根文件夹路径",tenant_url_prefix:"租户url前缀","tenant_url_prefix-tips":"租户url前缀"},LenovoNasShare:{host:"主机","host-tips":"可以改为自己的局域网",root_folder_path:"根文件夹路径",share_id:"分享ID","share_id-tips":"分享链接中最后一个/后面的部分",share_pwd:"分享密码","share_pwd-tips":"分享链接的密码"},Local:{mkdir_perm:"创建文件夹权限",recycle_bin_path:"回收站路径","recycle_bin_path-tips":"回收站的路径，如果空或保留“永久删除”则永久删除",root_folder_path:"根文件夹路径",show_hidden:"显示隐藏","show_hidden-tips":"显示隐藏目录以及文件",thumb_cache_folder:"缩略图缓存文件夹",thumb_concurrency:"缩略图并发","thumb_concurrency-tips":"并发缩略图生成队列的数量，影响并行生成的缩略图数量。",thumbnail:"缩略图","thumbnail-tips":"启用缩略图",video_thumb_pos:"视频缩略图","video_thumb_pos-tips":"视频缩略图的位置。如果该值是一个数字(整数点浮点)，它代表几秒钟的时间。 如果值以“%”结尾，则代表视频持续时间的百分比。"},MediaTrack:{access_token:"访问令牌",order_by:"排序",order_bys:{size:"大小",title:"名称",updated_at:"修改时间"},order_desc:"降序排列",project_id:"项目 ID",root_folder_id:"根文件夹ID"},Mega_nz:{email:"邮箱",password:"密码",two_fa_code:"2FA验证码","two_fa_code-tips":"2FA 6位代码，单独填写2FA代码不能重新加载驱动程序",two_fa_secret:"2FA令牌","two_fa_secret-tips":"2FA令牌"},MoPan:{cloud_id:"Cloud id",device_info:"设备信息",order_by:"排序",order_bys:{filename:"文件名",filesize:"文件大小",lastOpTime:"修改时间"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},password:"密码",phone:"手机号码",root_folder_id:"根文件夹ID",sms_code:"短信验证码","sms_code-tips":"输入'send'发送短信",upload_thread:"上传线程","upload_thread-tips":"1<=线程<=32"},NeteaseMusic:{cookie:"Cookie",song_limit:"歌曲获取上限","song_limit-tips":"默认只获取 200 首歌曲"},Onedrive:{chunk_size:"分片大小","chunk_size-tips":"上传分片大小 (单位: MB)",client_id:"客户端ID",client_secret:"客户端密钥",custom_host:"自定义HOST","custom_host-tips":"自定义加速下载链接",is_sharepoint:"是否Sharepoint",redirect_uri:"重定向 Uri",refresh_token:"刷新令牌",region:"地区",regions:{cn:"世纪互联",de:"德国版",global:"全局",us:"美国版"},root_folder_path:"根文件夹路径",site_id:"站点ID"},"Onedrive Sharelink":{password:"密码",root_folder_path:"根文件夹路径",url:"链接"},OnedriveAPP:{chunk_size:"分片大小",client_id:"客户端ID",client_secret:"客户端密钥",custom_host:"自定义HOST","custom_host-tips":"自定义加速下载链接",email:"邮箱",region:"地区",regions:{cn:"世纪互联",de:"德国版",global:"全局",us:"美国版"},root_folder_path:"根文件夹路径",tenant_id:"租户 ID"},PikPak:{captcha_token:"验证码",device_id:"设备id",disable_media_link:"禁用媒体链接",password:"密码",platform:"平台",platforms:{android:"安卓",pc:"Pc",web:"网页"},refresh_token:"刷新令牌",root_folder_id:"根文件夹ID",username:"用户名"},PikPakShare:{device_id:"设备id",platform:"平台",platforms:{android:"安卓",pc:"Pc",web:"网页"},root_folder_id:"根文件夹ID",share_id:"分享ID",share_pwd:"分享密码",use_transcoding_address:"使用转码地址"},Quark:{cookie:"Cookie",order_by:"排序",order_bys:{file_name:"文件名称",file_type:"文件类型",none:"无",updated_at:"修改时间"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},root_folder_id:"根文件夹ID"},QuarkTV:{device_id:"设备id",query_token:"查询令牌","query_token-tips":"不要修改",refresh_token:"刷新令牌",root_folder_id:"根目录ID"},Quqi:{cdn:"CDN","cdn-tips":"启用此选项，可提高下载速度，但会影响性能",cookie:"Cookie","cookie-tips":"Cookie可以同时在多个客户端上使用",password:"密码",phone:"手机号码",root_folder_id:"根文件夹ID"},S3:{access_key_id:"访问密钥 Id",add_filename_to_disposition:"添加filename到disposition","add_filename_to_disposition-tips":"添加filename到Content-Disposition头中。",bucket:"存储桶",custom_host:"自定义HOST",enable_custom_host_presign:"启用自定义主机预览",endpoint:"Endpoint",force_path_style:"强制路径样式",list_object_version:"列出对象版本",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"占位文件名",region:"地区",remove_bucket:"删除存储桶","remove_bucket-tips":"使用自定义主机时从路径中删除存储桶名称.",root_folder_path:"根文件夹路径",secret_access_key:"安全访问密钥",session_token:"会话令牌",sign_url_expire:"签名链接有效期"},SFTP:{address:"地址",ignore_symlink_error:"忽略软链接错误",passphrase:"密码短语",password:"密码",private_key:"私钥",root_folder_path:"根文件夹路径",username:"用户名"},SMB:{address:"地址",password:"密码",root_folder_path:"根文件夹路径",share_name:"分享名称",username:"用户名"},Seafile:{address:"地址",password:"密码",repoId:"仓库Id",repoPwd:"仓库密码",root_folder_path:"根文件夹路径",token:"令牌",username:"用户名"},Teambition:{cookie:"Cookie",order_by:"排序",order_bys:{created:"创建时间",fileName:"文件名",fileSize:"文件大小",updated:"修改时间"},order_direction:"排序方式",order_directions:{Asc:"升序",Desc:"降序"},project_id:"项目 ID",region:"地区",regions:{china:"中国",international:"国际版"},root_folder_id:"根文件夹ID",use_s3_upload_method:"使用 s3 上传方法"},Terabox:{cookie:"Cookie",download_api:"下载接口",download_apis:{crack:"非官方",official:"官方"},order_by:"排序",order_bys:{name:"名称",size:"大小",time:"时间"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},root_folder_path:"根文件夹路径"},Thunder:{captcha_token:"验证码",password:"密码",root_folder_id:"根文件夹ID",username:"用户名"},ThunderBrowser:{captcha_token:"验证码",password:"密码",remove_way:"移除方式",remove_ways:{delete:"删除",trash:"回收站"},root_folder_id:"根文件夹ID",safe_password:"安全密码",use_video_url:"使用视频url",username:"用户名"},ThunderBrowserExpert:{algorithms:"算法","algorithms-tips":"签名类型是用户名,此为必填项",captcha_sign:"验证码签名","captcha_sign-tips":"签名类型是验证码签名,此为必填项",captcha_token:"验证码",client_id:"客户端ID",client_secret:"客户端密钥",client_version:"客户端版本",device_id:"设备id",download_user_agent:"下载用户代理",login_type:"登录类型",login_types:{refresh_token:"刷新令牌",user:"用户名"},package_name:"包名",password:"密码","password-tips":"登录类型是用户名,此为必填项",refresh_token:"刷新令牌","refresh_token-tips":"登录类型是刷新令牌,此为必填项",remove_way:"移除方式",remove_ways:{delete:"删除",trash:"回收站"},root_folder_id:"根文件夹ID",safe_password:"安全密码","safe_password-tips":"超安全密码",sign_type:"签名类型",sign_types:{algorithms:"算法",captcha_sign:"验证码签名"},timestamp:"时间戳","timestamp-tips":"签名类型是验证码签名,此为必填项",use_video_url:"使用视频url",user_agent:"用户代理",username:"用户名","username-tips":"登录类型是用户名,此为必填项"},ThunderExpert:{algorithms:"算法","algorithms-tips":"签名类型是用户名,此为必填项",captcha_sign:"验证码签名","captcha_sign-tips":"签名类型是验证码签名,此为必填项",captcha_token:"验证码",client_id:"客户端ID",client_secret:"客户端密钥",client_version:"客户端版本",device_id:"设备id",download_user_agent:"下载用户代理",login_type:"登录类型",login_types:{refresh_token:"刷新令牌",user:"用户名"},package_name:"包名",password:"密码","password-tips":"登录类型是用户名,此为必填项",refresh_token:"刷新令牌","refresh_token-tips":"登录类型是刷新令牌,此为必填项",root_folder_id:"根文件夹ID",sign_type:"签名类型",sign_types:{algorithms:"算法",captcha_sign:"验证码签名"},timestamp:"时间戳","timestamp-tips":"签名类型是验证码签名,此为必填项",use_video_url:"使用视频url",user_agent:"用户代理",username:"用户名","username-tips":"登录类型是用户名,此为必填项"},ThunderX:{captcha_token:"验证码",password:"密码",root_folder_id:"根文件夹ID",use_video_url:"使用视频url",username:"用户名"},ThunderXExpert:{algorithms:"算法","algorithms-tips":"签名类型是用户名,此为必填项",captcha_sign:"验证码签名","captcha_sign-tips":"签名类型是验证码签名,此为必填项",captcha_token:"验证码",client_id:"客户端ID",client_secret:"客户端密钥",client_version:"客户端版本",device_id:"设备id",download_user_agent:"下载用户代理",login_type:"登录类型",login_types:{refresh_token:"刷新令牌",user:"用户名"},package_name:"包名",password:"密码","password-tips":"登录类型是用户名,此为必填项",refresh_token:"刷新令牌","refresh_token-tips":"登录类型是刷新令牌,此为必填项",root_folder_id:"根文件夹ID",sign_type:"签名类型",sign_types:{algorithms:"算法",captcha_sign:"验证码签名"},timestamp:"时间戳","timestamp-tips":"签名类型是验证码签名,此为必填项",use_video_url:"使用视频url",user_agent:"用户代理",username:"用户名","username-tips":"登录类型是用户名,此为必填项"},Trainbit:{AUSHELLPORTAL:"AUSHELLPORTAL",apikey:"Apikey",root_folder_id:"根文件夹ID"},UC:{cookie:"Cookie",order_by:"排序",order_bys:{file_name:"文件名称",file_type:"文件类型",none:"无",updated_at:"修改时间"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},root_folder_id:"根文件夹ID"},UCTV:{device_id:"设备id",query_token:"查询令牌","query_token-tips":"不要修改'",refresh_token:"刷新令牌",root_folder_id:"根目录ID"},USS:{anti_theft_chain_token:"反盗链令牌",bucket:"存储桶",endpoint:"Endpoint",operator_name:"操作员名称",operator_password:"操作员密码",root_folder_path:"根文件夹路径",sign_url_expire:"签名链接有效期"},UrlTree:{head_size:"Head 大小","head_size-tips":"使用HEAD方法获取文件大小，但可能失败。",url_structure:"Url 结构","url_structure-tips":"结构:\nFolderName:\n  [FileName:][FileSize:][Modified:]Url",writable:"可写"},VTencent:{cookie:"Cookie",order_by:"排序",order_bys:{CreatTime:"创建时间",Name:"名称",Size:"大小",UpdateTime:"修改时间"},order_direction:"排序方式",order_directions:{Asc:"升序",Desc:"降序"},root_folder_id:"根文件夹ID",tf_uid:"Tf uid"},Virtual:{max_file_size:"最大文件大小",min_file_size:"最小文件大小",num_file:"文件数量",num_folder:"文件夹数量",root_folder_path:"根文件夹路径"},WebDav:{address:"地址",password:"密码",root_folder_path:"根文件夹路径",tls_insecure_skip_verify:"跳过SSL证书验证",username:"用户名",vendor:"供应商",vendors:{other:"其他",sharepoint:"Sharepoint"}},WeiYun:{cookies:"Cookie",order_by:"排序",order_bys:{name:"名称",size:"大小",updated_at:"修改时间"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},root_folder_id:"根文件夹ID",upload_thread:"上传线程","upload_thread-tips":"4<=线程<=32"},WoPan:{access_token:"访问令牌",family_id:"Family id","family_id-tips":"如果您想要使用您的个人空间，请保持为空",refresh_token:"刷新令牌",root_folder_id:"根文件夹ID",sort_rule:"排序规则",sort_rules:{name_asc:"名称升序",name_desc:"名称降序",size_asc:"大小升序",size_desc:"大小降序",time_asc:"时间升序",time_desc:"时间降序"}},YandexDisk:{client_id:"客户端ID",client_secret:"客户端密钥",order_by:"排序",order_bys:{created:"创建时间",modified:"修改时间",name:"名称",path:"路径",size:"大小"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},refresh_token:"刷新令牌",root_folder_path:"根文件夹路径"},config:{"115 Cloud":{},"115 Share":{},"123Pan":{},"123PanLink":{},"123PanShare":{},"139Yun":{},"189Cloud":{alert:"如果此驱动无法工作，你可以尝试使用“天翼网盘客户端”驱动。"},"189CloudPC":{},"AList V2":{},"AList V3":{},Alias:{},Aliyundrive:{alert:"此加载方式可能有一个死循环错误。 \n已废弃，不再维护，并将在未来的版本中删除。 \n建议使用官方的阿里云盘开放平台。"},AliyundriveOpen:{},AliyundriveShare:{},BaiduNetdisk:{},BaiduPhoto:{},BaiduShare:{},ChaoXingGroupDrive:{},Cloudreve:{},Crypt:{},Doge:{},Dropbox:{},FTP:{},FebBox:{},FeijiPan:{},"GitHub API":{},GoogleDrive:{},GooglePhoto:{},HalalCloud:{},ILanZou:{},"IPFS API":{},KodBox:{},Lanzou:{},Lark:{},LenovoNasShare:{},Local:{},MediaTrack:{},Mega_nz:{},MoPan:{alert:"这个网盘可能将您的密码以明文存储，请小心设置您的密码"},NeteaseMusic:{},Onedrive:{},"Onedrive Sharelink":{},OnedriveAPP:{},PikPak:{},PikPakShare:{},Quark:{},QuarkTV:{},Quqi:{},S3:{},SFTP:{},SMB:{},Seafile:{},Teambition:{},Terabox:{},Thunder:{},ThunderBrowser:{},ThunderBrowserExpert:{},ThunderExpert:{},ThunderX:{},ThunderXExpert:{},Trainbit:{},UC:{},UCTV:{},USS:{},UrlTree:{},VTencent:{},Virtual:{},WebDav:{},WeiYun:{},WoPan:{},YandexDisk:{}},drivers:{"115 Cloud":"115 网盘","115 Share":"115 云盘分享","123Pan":"123云盘","123PanLink":"123云盘直链","123PanShare":"123云盘分享","139Yun":"中国移动云盘","189Cloud":"天翼云盘","189CloudPC":"天翼云盘客户端","AList V2":"AList V2","AList V3":"AList V3",Alias:"别名",Aliyundrive:"阿里云盘",AliyundriveOpen:"阿里云盘开放平台",AliyundriveShare:"阿里云盘分享",BaiduNetdisk:"百度网盘",BaiduPhoto:"一刻相册",BaiduShare:"百度分享",ChaoXingGroupDrive:"超星小组盘",Cloudreve:"Cloudreve",Crypt:"Crypt",Doge:"多吉云",Dropbox:"Dropbox",FTP:"FTP",FebBox:"FebBox",FeijiPan:"飞机盘","GitHub API":"GitHub API",GoogleDrive:"谷歌云盘",GooglePhoto:"谷歌相册",HalalCloud:"HalalCloud",ILanZou:"蓝奏云优享版","IPFS API":"IPFS API",KodBox:"可道云",Lanzou:"蓝奏云",Lark:"飞书",LenovoNasShare:"联想家庭存储链接分享",Local:"本机存储",MediaTrack:"分秒帧",Mega_nz:"Mega 网盘",MoPan:"魔盘",NeteaseMusic:"网易云音乐",Onedrive:"Onedrive","Onedrive Sharelink":"Onedrive 分享链接",OnedriveAPP:"OnedriveAPP",PikPak:"PikPak",PikPakShare:"PikPak分享",Quark:"夸克",QuarkTV:"夸克TV",Quqi:"曲奇云盘",S3:"对象存储",SFTP:"SFTP",SMB:"SMB",Seafile:"Seafile",Teambition:"Teambition网盘",Terabox:"Terabox",Thunder:"迅雷",ThunderBrowser:"迅雷浏览器",ThunderBrowserExpert:"迅雷浏览器专家版",ThunderExpert:"迅雷专家版",ThunderX:"迅雷X",ThunderXExpert:"迅雷X专家版",Trainbit:"Trainbit",UC:"UC",UCTV:"UCTV",USS:"又拍云存储",UrlTree:"UrlTree",VTencent:"腾讯智能创作平台",Virtual:"虚拟存储",WebDav:"WebDav",WeiYun:"腾讯微云",WoPan:"联通云盘",YandexDisk:"Yandex网盘"}},t={refresh:"刷新",add:"添加",edit:"编辑",delete:"删除",save:"保存",update:"更新",copied:"已复制",delete_success:"删除成功!",save_success:"保存成功",update_success:"更新成功",choose:"选择",confirm:"确认",cancel:"取消",delete_confirm:"确认要删除 [{{name}}] 吗？",operations:"操作",yes:"是",no:"否",clear:"清除",choose_folder:"选择文件夹",choose_or_input_path:"选择文件夹或输入路径",disable:"禁用",enable:"启用",ok:"确定",back:"返回",have_account:"已有账号？",go_login:"转到登录",close:"关闭",no_support_now:"暂不支持",empty_input:"请输入",name:"名称"},s={obj:{name:"名称",size:"大小",modified:"修改时间"},preview:{download:"下载",failed_load_img:"载入图像失败",open_with:"使用... 打开",play_with:"使用... 播放",install:"安装",installing:"正在安装","tr-install":"TrollStore","tr-installing":"TrollStore 正在安装",open_in_new_window:"在新窗口中打开",auto_next:"自动下一个"},layouts:{list:"列表视图",grid:"网格视图",image:"图片视图"},no_images:"当前文件夹中无图像",load_more:"加载更多",no_more:"没有更多了",input_password:"请输入密码",toolbar:{more:"更多",refresh:"刷新",toggle_theme:"切换主题",switch_lang:"切换语言",toggle_markdown_toc:"是否显示大纲",toggle_checkbox:"开关复选框",rename:"重命名",input_new_name:"输入一个新名称","only_one-tips":"只能选择一个对象重命名",move:"移动",copy:"复制",choose_dst_folder:"选择目标文件夹",delete:"删除","delete-tips":"确定要删除所选对象吗?",copy_link:"复制链接",preview_page:"预览页面",down_link:"下载链接",encode_down_link:"编码下载链接",mkdir:"新建文件夹",input_dir_name:"输入文件夹名称",new_file:"新建文件",input_filename:"输入文件名",cancel_select:"取消选择",offline_download:"离线下载","offline_download-tips":"每行一条链接",delete_policy:{delete_on_upload_succeed:"上传成功后删除",delete_on_upload_failed:"上传失败时删除",delete_never:"从不删除",delete_always:"总是删除"},download:"下载",batch_download:"批量下载",package_download:"打包下载",package_download_disabled:"打包下载已禁用",send_aria2:"发送到 Aria2",aria2_not_set:"请设置 aria2 rpc url",send_aria2_success:"成功发送到 aria2","pre_package_download-tips":"在浏览器中使用streamsaver而不是服务器来进行包下载需要相应的存储支持cors，而不支持的存储将失败。","package_download-tips":"正在下载，请稍候不要关闭页面",playlist_download:"播放列表下载",upload:"上传",local_settings:"本地设置",recursive_move:"聚合移动","recursive_move_directory-tips":"您确定要将当前文件夹及其子文件夹中的所有文件移动到指定的文件夹吗？",remove_empty_directory:"移除空的子目录","remove_empty_directory-tips":"您确定要删除所有空子文件夹吗？",batch_rename:"批量重命名",regex_rename:"正则表达式重命名",sequential_renaming:"顺序重命名",regex_rename_preview:"更改的文件",regex_rename_preview_old_name:"旧名称",regex_rename_preview_new_name:"新名称",regular_rename:"正则表达式文件重命名。 在第一行输入源文件名正则表达式，并在第二行输入新文件名正则表达式。",sequential_renaming_desc:"新文件名将有一个数值起始值附加到它， 并且它将通过向起始值添加 1 来按顺序显示。 在第一行输入新的文件名，并在第二行输入起始值。"},upload:{add_as_task:"添加为任务","upload-tips":"拖动文件到此处以上传，或点击：",release:"松开以上传",no_files_drag:"没有文件被拖入。",upload_files:"选择文件",upload_folder:"选择文件夹",pending:"等待中...",uploading:"上传中",backending:"正在后台上传",success:"成功",error:"错误",back:"返回上传",clear_done:"清空完成"},local_settings:{aria2_rpc_url:"Aria2 RPC 链接",aria2_rpc_secret:"Aria2 RPC 密钥",aria2_dir:"Aria2 下载目录",show_folder_in_image_view:"在图片视图中显示文件夹",show_folder_in_image_view_options:{top:"上方",bottom:"下方",none:"无"},global_default_layout:"全局默认布局",global_default_layout_options:{list:"列表视图",grid:"网格视图",image:"图片视图"},position_of_header_navbar:"标题栏和导航栏的位置",position_of_header_navbar_options:{static:"普通",sticky:"吸附到页面顶部",only_navbar_sticky:"仅吸附导航栏"},show_sidebar:"显示侧边栏",show_sidebar_options:{none:"无",visible:"显示"},grid_item_size:"网格项目大小",list_item_filename_overflow:"列表项目文件名超长显示",list_item_filename_overflow_options:{ellipsis:"省略号",scrollable:"可滚动",multi_line:"多行显示"},open_item_on_checkbox:"在多选框中打开选项",open_item_on_checkbox_options:{direct:"直接打开",disable_while_checked:"选中时禁用",with_ctrl:"按住 Ctrl/Command 按键打开",with_alt:"按住 Alt/Option 按键打开"},select_with_mouse:"多选框关闭时用鼠标选择",select_with_mouse_options:{disabled:"停用",open_item_with_dblclick:"双击打开"}},package_download:{current_status:"当前状态",initializing:"正在初始化",fetching_struct:"正在获取文件夹结构",fetching_struct_failed:"获取文件夹结构失败",downloading:"下载文件中，不要关闭或刷新页面",failed:"打包下载失败",success:"下载完成"},footer:{powered_by:"Powered by AList",manage:"管理"},search:{search:"搜索",no_result:"暂无结果",scopes:{all:"全部",folder:"文件夹",file:"文件"}},fetching_settings_failed:"获取设置失败： ",get_current_user_failed:"获取当前用户失败： ","Loading storage, please wait":"请稍候，正在加载储存"},a={search_index:"搜索索引",current:"当前索引",build:"构建索引",rebuild:"重建索引",paths_to_update:"要更新索引的路径",max_depth:"最大深度",update:"更新索引",obj_count:"对象计数",last_done_time:"上次完成时间",unknown:"未知",stop:"停止",clear:"清除",error:"错误"},_={login_to:"登录到","username-tips":"输入您的用户名","password-tips":"输入您的密码","otp-tips":"输入您的 OTP 代码",remember:"记住账号",forget:"忘记密码？",forget_url:"https://alist.nn.ci/zh/faq/howto.html#%E5%Bf%98%E8%Ae%B0%E5%Af%86%E7%A0%81%E6%80%8E%E4%B9%88%E5%8A%9E",clear:"清除",login:"登录",use_guest:"以游客身份浏览",success:"登录成功"},d={sidemenu:{dashboard:"控制面板",settings:"设置",site:"站点",style:"样式",preview:"预览",global:"全局",other:"其他",users:"用户",storages:"存储",metas:"元信息",profile:"个人资料",about:"关于",tasks:"任务",upload:"上传",copy:"复制","backup-restore":"备份 & 恢复",home:"主页",indexes:"索引",sso:"单点登录",docs:"文档",offline_download:"离线下载",ldap:"LDAP",s3:"对象存储",ftp:"FTP"},title:"后台管理",not_admin:"您不是管理员用户，请使用管理员帐户登录。",logout_success:"退出成功",send:"发送",receive:"接收",received_msgs:"收到的消息","add_storage-tips":"您可能需要在新打开的选项卡中填写一些信息。","messenger-tips":"您可能需要在这个标签页中按提示填写一些信息。"},n={path:"路径",password:"密码",write:"写入",hide:"隐藏",readme:"说明",readme_help:"显示在底部,支持Markdown,包括文字与链接",header:"顶部说明",header_help:"显示在顶部,支持Markdown,包括文字与链接",apply_sub:"应用到子文件夹",hide_help:"每行一个正则表达式"},l={allow_indexed:"允许索引",allow_mounted:"允许挂载",announcement:"站点公告",aria2_secret:"Aria2 密钥",aria2_uri:"Aria2 地址",audio_autoplay:"自动播放音频",audio_cover:"音频封面",audio_types:"音频类型",auto_update_index:"自动更新索引",customize_body:"自定义内容",customize_head:"自定义头部",default_page_size:"默认每页数量",external_previews:"外部预览",favicon:"网站图标",filename_char_mapping:"文件名字符映射",forward_direct_link_params:"转发直链参数",ftp_implicit_tls:"Ftp 默认tls",ftp_mandatory_tls:"Ftp 强制tls",ftp_pasv_port_map:"Ftp pasv 端口地图",ftp_proxy_user_agent:"Ftp 代理用户代理",ftp_public_host:"Ftp 公共主机",ftp_tls_private_key_path:"Ftp tls 私钥路径",ftp_tls_public_cert_path:"Ftp tls 公开证书路径",hide_files:"隐藏文件",home_container:"主容器",home_containers:{hope_container:"Hope 容器",max_980px:"最大 980px"},home_icon:"首页图标",iframe_previews:"Iframe 预览",ignore_direct_link_params:"忽略直链参数",ignore_paths:"忽略路径","ignore_paths-tips":"每行一条路径",image_types:"图片类型",index_progress:"索引进度",ldap_default_dir:"Ldap默认路径",ldap_default_permission:"Ldap 默认权限",ldap_login_enabled:"启用Ldap登录",ldap_login_tips:"Ldap登录提示",ldap_manager_dn:"Ldap 管理器 dn",ldap_manager_password:"Ldap 管理员密码",ldap_server:"Ldap 服务器",ldap_user_search_base:"Ldap 用户搜索基础",ldap_user_search_filter:"Ldap 用户搜索过滤器",link_expiration:"直链有效期",logo:"Logo",main_color:"主颜色",max_index_depth:"最大索引深度","max_index_depth-tips":"索引的最大深度",ocr_api:"Ocr接口",package_download:"打包下载",pagination_type:"分页类型",pagination_types:{all:"全部",auto_load_more:"自动加载更多",load_more:"加载更多",pagination:"分页"},privacy_regs:"隐私内容正则表达式",proxy_ignore_headers:"代理忽略头部",proxy_types:"代理类型",qbittorrent_seedtime:"qBittorrent 做种时间",qbittorrent_url:"qBittorrent链接",robots_txt:"Robots.txt",s3_buckets_empty:"空的桶名称或路径",s3_buckets_duplicate_name:"桶名称已重复",s3_generate:"生成访问密钥和 id",s3_access_key_id:"S3 访问密钥 id",s3_buckets:"S3 桶",s3_restart_to_apply:"重启以应用以上设置",s3_secret_access_key:"S3 访问密钥",search_index:"搜索索引",search_indexs:{bleve:"Bleve",database:"数据库",database_non_full_text:"数据库（非全文搜索）",meilisearch:"Meilissearch",none:"无"},settings_layout:"设置布局",settings_layouts:{list:"列表",responsive:"响应式"},sign_all:"签名所有",site_title:"网站标题",sso_application_name:"单点登录应用名称",sso_auto_register:"Sso自动注册",sso_client_id:"单点登录客户端ID",sso_client_secret:"单点登录客户端机密",sso_compatibility_mode:"Sso 兼容模式",sso_default_dir:"Sso默认路径",sso_default_permission:"Sso 默认权限",sso_endpoint_name:"单点登录端点名称",sso_extra_scopes:"Sso 额外范围",sso_jwt_public_key:"单点登录JWT公钥",sso_login_enabled:"启用单点登录",sso_login_platform:"单点登录平台",sso_login_platforms:{Casdoor:"Casdoor",Dingtalk:"钉钉",Github:"GitHub",Google:"谷歌",Microsoft:"微软",OIDC:"OIDC"},sso_oidc_username_key:"Sso oidc 用户名键",sso_organization_name:"单点登录组织名称",text_types:"文本类型",token:"令牌",transmission_seedtime:"Transmission种子时间",transmission_uri:"Transmission URI",version:"版本",video_autoplay:"自动播放视频",video_types:"视频类型",webauthn_login_enabled:"启用Webauthn登录",logo_text:"文字Logo",site_beian:"备案号",contact_us:"自定义关于页面内容"},p={115:"115",aria2:"Aria2",aria2_version:"Aria2 版本：",set_aria2:"设置 aria2",copy_token:"复制令牌",reset_token:"重置令牌",reset_token_success:"重置令牌成功",unknown_type:"未知类型",set_qbit:"设置 qBittorrent",qbittorrent:"qBittorrent",transmission:"Transmission",set_transmission:"设置Transmission",set_115:"设置115",pikpak:"PikPak",set_pikpak:"设置PikPak",thunder:"Thunder",set_thunder:"设置Thunder"},c={common:{mount_path:"挂载路径","mount_path-tips":"要挂载到的路径，不能重复",driver:"驱动",order:"序号","order-tips":"用于排序",status:"状态",remark:"备注",cache_expiration:"缓存过期时间","cache_expiration-tips":"此存储的缓存过期时间(分钟)",down_proxy_url:"下载代理URL",web_proxy:"Web 代理",webdav_policy:"WebDAV 策略",proxy_range:"代理范围","proxy_range-tips":"需要启用代理",webdav_policys:{"302_redirect":"302 重定向",use_proxy_url:"使用代理地址",native_proxy:"本地代理"},order_by:"排序",order_bys:{name:"名称",size:"大小",modified:"修改时间"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},extract_folder:"提取文件夹",extract_folders:{front:"提取到最前",back:"提取到最后"},enable_sign:"启用签名",disable_index:"禁用存储索引"},other:{start_load_success:"开始加载",load_all:"全部重新加载",filter_by_driver:"按驱动筛选",table_layout:"表格布局"}},u={offline_download:"下载文件到本地设备",offline_download_transfer:"将下载的文件传输到相应的存储",upload:"上传文件到对应的存储",copy:"将文件从一个存储复制到另一个存储",done:"已完成",undone:"运行中...",clear_succeeded:"删除已成功",retry:"重试",retry_failed:"重试失败项",state:{0:"等待中...",1:"运行中...",2:"成功",3:"正在取消···",4:"已取消",5:"错误",6:"失败中…",7:"失败",8:"等待重试",9:"重试前置操作中"},retry_selected:"重试已选择",cancel_selected:"取消选中的",delete_selected:"删除选中的",filter:"筛选器",expand:"展开",fold:"折叠",expand_all:"全部展开",fold_all:"全部折叠",attr:{name:"名称",creator:"创建者",state:"状态",progress:"进度",speed:"速度",operation:"操作",copy:{src:"源路径",dst:"目标路径"},upload:{path:"路径"},offline_download:{url:"链接地址",path:"目标路径",transfer_src:"源路径",transfer_dst:"目标路径"},time_elapsed:"耗时",status:"状态",err:"错误"},show_only_mine:"只显示我的任务"},m={permissions:{see_hides:"可以看到隐藏",access_without_password:"无需密码访问",offline_download:"添加离线下载任务",write:"创建目录或上传",rename:"重命名",move:"移动",copy:"复制",delete:"删除",webdav_read:"Webdav 读取",webdav_manage:"Webdav 管理",ftp_read:"FTP 读取",ftp_manage:"FTP 管理"},username:"用户名",password:"密码",base_path:"基本路径",role:"角色",permission:"权限",disabled:"停用",available:"已启用",update_profile:"更新配置文件",update_profile_success:"更新个人资料成功，请重新登录。",change_username:"修改用户名",change_password:"更改密码","change_password-tips":"如果您不想更改密码，请保持为空",confirm_password:"确认密码","confirm_password-tips":"重复您刚输入的密码",confirm_password_not_same:"您两次输入的密码不一致",enable_2fa:"启用双重身份验证",cancel_2fa:"取消两步验证",cancel_2fa_success:"取消两步验证成功","2fa_already_enabled":"已启用双重身份验证",scan_qr:"扫描二维码保存密钥",or_manual:"或者手动输入密钥",input_code:"输入您的双重验证应用中显示的验证码",verify:"验证","guest-tips":"您正在作为访客访问。",modify_nothing:"所以您不能在管理页面中修改任何内容。",sso_login:"单点登录",connect_sso:"绑定单点登录平台",disconnect_sso:"解绑单点登录平台",webauthn:"WebAuthn",add_webauthn:"添加Webauthn 凭据",add_webauthn_success:"Webauthn 凭据添加成功！",webauthn_not_supported:"您的浏览器不支持Webauth，或者您的Origin不安全",ssh_keys:{heading:"SSH 密钥",add_heading:"添加新的 SSH 密钥",title:"名称",key:"关键字",fingerprint:"指纹",last_used:"上次使用时间",operation:"操作"}},h=Object.assign({"./br.json":r,"./drivers.json":i,"./global.json":t,"./home.json":s,"./index.json":o,"./indexes.json":a,"./login.json":_,"./manage.json":d,"./metas.json":n,"./settings.json":l,"./settings_other.json":p,"./storages.json":c,"./tasks.json":u,"./users.json":m}),f=e("default",{});for(var k in h)f[k.split("/")[1].split(".")[0]]=h[k]}}}));
