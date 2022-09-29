System.register(["./index-legacy.ee191362.js"],(function(e,o){"use strict";var r;return{setters:[e=>{r=e.by}],execute:function(){const o={"123Pan":{order_by:"排序",order_bys:{name:"名称",fileId:"文件ID",updateAt:"修改时间",createAt:"创建时间"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},root_folder_id:"根文件夹ID",stream_upload:"流式上传",username:"用户名",password:"密码"},drivers:{Local:"本机存储",WebDav:"WebDav",GoogleDrive:"谷歌云盘",Quark:"夸克",SFTP:"SFTP",Teambition:"Teambition网盘",Lanzou:"蓝奏云",Aliyundrive:"阿里云盘",AliyundriveShare:"阿里云盘分享",Thunder:"迅雷","123Pan":"123云盘",PikPak:"PikPak",USS:"又拍云存储","189Cloud":"天翼云盘",FTP:"FTP",YandexDisk:"Yandex网盘",S3:"对象存储",Onedrive:"Onedrive",MediaTrack:"分秒帧",ThunderExpert:"迅雷专家版",Virtual:"虚拟存储","189CloudPC":"天翼云盘客户端","139Yun":"中国移动云盘",BaiduNetdisk:"百度网盘",BaiduPhoto:"一刻相册"},AliyundriveShare:{order_direction:"排序方式",order_directions:{ASC:"升序",DESC:"降序"},refresh_token:"刷新令牌",share_id:"分享ID",share_pwd:"分享密码",root_folder_id:"根文件夹ID",order_by:"排序",order_bys:{name:"名称",size:"大小",updated_at:"修改时间",created_at:"创建时间"}},FTP:{address:"地址",username:"用户名",password:"密码",root_folder_path:"根文件夹路径"},S3:{custom_host:"自定义HOST",sign_url_expire:"签名链接有效期",placeholder:"占位文件名",list_object_version:"列出对象版本",endpoint:"Endpoint",region:"地区",secret_access_key:"安全访问密钥",force_path_style:"强制路径样式",list_object_versions:{v1:"V1",v2:"V2"},root_folder_path:"根文件夹路径",bucket:"存储桶",access_key_id:"访问密钥 Id"},Teambition:{regions:{china:"中国",international:"国际版"},cookie:"Cookie",project_id:"项目 ID",root_folder_id:"根文件夹ID",order_bys:{fileName:"文件名",fileSize:"文件大小",updated:"修改时间",created:"创建时间"},order_direction:"排序方式",region:"地区",order_by:"排序",order_directions:{Asc:"升序",Desc:"降序"}},Lanzou:{cookie:"Cookie","cookie-tips":"大概15天有效",root_folder_id:"根文件夹ID",share_password:"分享密码",baseUrl:"基本URL",shareUrl:"分享链接",type:"类型",types:{cookie:"Cookie",url:"链接"}},Onedrive:{region:"地区",client_id:"客户端ID",refresh_token:"刷新令牌",site_id:"站点ID",root_folder_path:"根文件夹路径",regions:{global:"国际版",cn:"世纪互联",us:"美国版",de:"德国版"},is_sharepoint:"是否Sharepoint",client_secret:"客户端密钥",redirect_uri:"重定向 Uri"},USS:{operator_name:"操作员名称",operator_password:"操作员密码",custom_host:"自定义HOST",sign_url_expire:"签名链接有效期",root_folder_path:"根文件夹路径",bucket:"存储桶",endpoint:"Endpoint"},Virtual:{num_folder:"文件夹数量",max_file_size:"最大文件大小",min_file_size:"最小文件大小",root_folder_path:"根文件夹路径",num_file:"文件数量"},"189Cloud":{username:"用户名",password:"密码",root_folder_id:"根文件夹ID"},SFTP:{password:"密码",root_folder_path:"根文件夹路径",address:"地址",username:"用户名",private_key:"私钥"},"139Yun":{root_folder_id:"根文件夹ID",type:"类型",types:{personal:"个人云",family:"家庭云"},cloud_id:"Cloud id",account:"帐号",cookie:"Cookie"},Local:{"thumbnail-tips":"启用缩略图",root_folder_path:"根文件夹路径",thumbnail:"缩略图"},ThunderExpert:{package_name:"包名",download_user_agent:"下载用户代理",use_video_url:"使用视频url",sign_type:"签名类型","captcha_sign-tips":"签名类型是验证码签名,此为必填项","timestamp-tips":"签名类型是验证码签名,此为必填项",client_secret:"客户端密钥",password:"密码","password-tips":"登录类型是用户名,此为必填项","refresh_token-tips":"登录类型是刷新令牌,此为必填项",algorithms:"算法",root_folder_id:"根文件夹ID",login_type:"登录类型",username:"用户名","username-tips":"登录类型是用户名,此为必填项",captcha_sign:"验证码签名",timestamp:"时间戳",client_version:"客户端版本",user_agent:"用户代理",sign_types:{algorithms:"算法",captcha_sign:"验证码签名"},"algorithms-tips":"签名类型是用户名,此为必填项",captcha_token:"验证码",device_id:"设备id",login_types:{user:"用户名",refresh_token:"刷新令牌"},refresh_token:"刷新令牌",client_id:"客户端ID"},WebDav:{address:"地址",username:"用户名",password:"密码",root_folder_path:"根文件夹路径",vendor:"供应商",vendors:{sharepoint:"Sharepoint",other:"其他"}},Aliyundrive:{root_folder_id:"根文件夹ID",refresh_token:"刷新令牌",order_by:"排序",order_bys:{size:"大小",updated_at:"修改时间",created_at:"创建时间",name:"名称"},order_direction:"排序方式",order_directions:{ASC:"升序",DESC:"降序"},rapid_upload:"秒传"},GoogleDrive:{order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},client_id:"客户端ID",client_secret:"客户端密钥",root_folder_id:"根文件夹ID",refresh_token:"刷新令牌",order_by:"排序","order_by-tips":"例如: folder,name,modifiedTime"},Quark:{order_directions:{asc:"升序",desc:"降序"},cookie:"Cookie",root_folder_id:"根文件夹ID",order_by:"排序",order_bys:{none:"无",file_type:"文件类型",file_name:"文件名称",updated_at:"修改时间"},order_direction:"排序方式"},Thunder:{root_folder_id:"根文件夹ID",username:"用户名",password:"密码",captcha_token:"验证码"},BaiduNetdisk:{refresh_token:"刷新令牌",root_folder_path:"根文件夹路径",download_api:"下载接口",download_apis:{official:"官方",crack:"非官方"},client_secret:"客户端密钥",order_by:"排序",order_bys:{time:"时间",size:"大小",name:"名称"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},client_id:"客户端ID"},"189CloudPC":{rapid_upload:"秒传",username:"用户名",root_folder_id:"根文件夹ID",order_by:"排序",order_bys:{lastOpTime:"修改时间",filename:"文件名",filesize:"文件大小"},type:"类型",family_id:"Family id",password:"密码",validate_code:"验证码",order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},types:{personal:"个人云",family:"家庭云"}},YandexDisk:{refresh_token:"刷新令牌",order_by:"排序",order_bys:{name:"名称",path:"路径",created:"创建时间",modified:"修改时间",size:"大小"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},root_folder_path:"根文件夹路径",client_id:"客户端ID",client_secret:"客户端密钥"},BaiduPhoto:{show_type:"展示类型",show_types:{root:"根目录",root_only_album:"仅根目录下相簿",root_only_file:"仅根目录下文件"},album_id:"相簿ID",client_id:"客户端ID",client_secret:"客户端密钥",refresh_token:"刷新令牌"},MediaTrack:{order_bys:{updated_at:"修改时间",title:"名称",size:"大小"},order_desc:"降序排列",access_token:"访问令牌",project_id:"项目 ID",root_folder_id:"根文件夹ID",order_by:"排序"},PikPak:{root_folder_id:"根文件夹ID",username:"用户名",password:"密码"}},i={refresh:"刷新",add:"添加",edit:"编辑",delete:"删除",save:"保存",update:"更新",copied:"已复制",delete_success:"删除成功!",save_success:"保存成功",update_success:"更新成功",choose:"选择",confirm:"确认",cancel:"取消",delete_confirm:"确认要删除 [{{name}}] 吗？",operations:"操作",yes:"是",no:"否",clear:"清除",choose_folder:"选择文件夹",choose_or_input_path:"选择文件夹或输入路径",disable:"禁用",enable:"启用",ok:"确定",back:"返回",have_account:"已有账号？",go_login:"转到登录",close:"关闭",no_support_now:"暂不支持",empty_input:"请输入"},a={obj:{name:"名称",size:"大小",modified:"修改时间"},preview:{download:"下载",failed_load_img:"载入图像失败",open_with:"使用... 打开",install:"安装",installing:"正在安装"},load_more:"加载更多",no_more:"没有更多了",input_password:"请输入密码",toolbar:{more:"更多",refresh:"刷新",toggle_theme:"切换主题",switch_lang:"切换语言",toggle_checkbox:"开关复选框",rename:"重命名",input_new_name:"输入一个新名称","only_one-tips":"只能选择一个对象重命名",move:"移动",copy:"复制",choose_dst_folder:"选择目标文件夹",delete:"删除","delete-tips":"确定要删除所选对象吗?",copy_link:"复制链接",preview_page:"预览页面",down_link:"下载链接",encode_down_link:"编码下载链接",mkdir:"新建文件夹",input_dir_name:"输入文件夹名称",new_file:"新建文件",input_filename:"输入文件名",cancel_select:"取消选择",add_aria2:"添加到Aria2 下载","add_aria2-tips":"每行一个链接",download:"下载",batch_download:"批量下载",package_download:"打包下载",package_download_disabled:"打包下载已禁用",send_aria2:"发送到Aria2",aria2_not_set:"请设置 aria2 rpc url",send_aria2_success:"成功发送到aria2","pre_package_download-tips":"在浏览器中使用streamsaver而不是服务器来进行包下载需要相应的存储支持cors，而不支持的存储将失败。","package_download-tips":"正在下载，请稍候不要关闭页面",upload:"上传",local_settings:"本地设置"},upload:{add_as_task:"添加为任务","upload-tips":"拖动文件到此处以上传，或点击：",release:"松开以上传",no_files_drag:"没有文件被拖入.",only_files_or_one_folder:"每次只能拖动文件或一个文件夹。",upload_files:"选择文件",upload_folder:"选择文件夹",pending:"等待中...",uploading:"上传中",backending:"正在后台上传",success:"成功",error:"错误",back:"返回上传",clear_done:"清空完成"},local_settings:{aria2_rpc_url:"Aria2 RPC 链接",aria2_rpc_secret:"Aria2 RPC 密钥",aria2_dir:"Aria2 下载目录"},package_download:{current_status:"当前状态",initializing:"正在初始化",fetching_struct:"正在获取文件夹结构",fetching_struct_failed:"获取文件夹结构失败",downloading:"下载文件中，不要关闭或刷新页面",failed:"打包下载失败",success:"下载完成"},footer:{powered_by:"由 AList 驱动",manage:"管理"}},s={title:"登录到ALIST","username-tips":"输入您的用户名","password-tips":"输入您的密码","otp-tips":"输入您的 OTP 代码",remember:"记住账号",forget:"忘记密码？",forget_url:"https://alist.nn.ci/zh/faq/howto.html#%E5%Bf%98%E8%Ae%B0%E5%Af%86%E7%A0%81%E6%80%8E%E4%B9%88%E5%8A%9E",clear:"清空",login:"登录",use_guest:"以游客身份浏览",success:"登录成功"},t={sidemenu:{dashboard:"控制面板",settings:"设置",site:"站点",style:"样式",preview:"预览",global:"全局",other:"其他",users:"用户",storages:"存储",metas:"元信息",profile:"个人资料",about:"关于",tasks:"任务",aria2:"Aria2",upload:"上传",copy:"复制",home:"主页"},title:"AList 管理",not_admin:"您不是管理员用户，请使用管理员帐户登录。",logout_success:"退出成功",send:"发送",recieve:"接收",recieved_msgs:"收到的消息","add_storage-tips":"您可能需要在新打开的选项卡中填写一些信息。","messenger-tips":"您可能需要在这个标签页中按提示填写一些信息。"},d={path:"路径",password:"密码",write:"写入",hide:"隐藏",readme:"说明",apply_sub:"应用到子文件夹",hide_help:"每行一个正则表达式",readme_help:"支持Markdown内容或Markdown链接"},_={home_container:"主容器",text_types:"文本类型",privacy_regs:"隐私内容正则表达式",aria2_uri:"Aria2地址",audio_types:"音频类型",video_types:"视频类型",audio_cover:"音频封面",package_download:"打包下载",hide_files:"隐藏文件",iframe_previews:"Iframe 预览",customize_head:"自定义头部",version:"版本",logo:"图标",main_color:"主颜色",image_types:"图片类型",proxy_types:"代理类型",favicon:"网站图标",home_containers:{max_980px:"最大 980px",hope_container:"Hope 容器"},external_previews:"外部预览",ocr_api:"Ocr接口",aria2_secret:"Aria2 密钥",pagination_type:"分页类型",pagination_types:{all:"全部",pagination:"分页",load_more:"加载更多",auto_load_more:"自动加载更多"},default_page_size:"默认每页数量",video_autoplay:"自动播放视频",link_expiration:"直链有效期",announcement:"站点公告",home_icon:"首页图标",audio_autoplay:"自动播放音频",customize_body:"自定义内容",site_title:"网站标题",token:"令牌"},n={aria2:"Aria2",aria2_version:"Aria2 版本：",set_aria2:"设置aria2",copy_token:"复制令牌",reset_token:"重置令牌",reset_token_success:"重置令牌成功",unkown_type:"未知类型"},c={common:{mount_path:"挂载路径",driver:"驱动",order:"序号","order-tips":"用于排序",status:"状态",remark:"备注",cache_expiration:"缓存过期时间","cache_expiration-tips":"此存储的缓存过期时间(分钟)",down_proxy_url:"下载代理URL",web_proxy:"Web 代理",webdav_policy:"WebDAV 策略",webdav_policys:{"302_redirect":"302重定向",use_proxy_url:"使用代理地址",native_proxy:"本地代理"},order_by:"排序",order_bys:{name:"名称",size:"文件大小",modified:"修改时间"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},extract_folder:"提取文件夹",extract_folders:{front:"提取到最前",back:"提取到最后"}}},l={down:"下载文件到本地设备",transfer:"将下载的文件传输到相应的存储",upload:"上传文件到对应的存储",copy:"将文件从一个存储复制到另一个存储",done:"已完成",undone:"运行中...",pending:"等待中...",running:"正在运行...",canceling:"正在取消···",succeeded:"成功",canceled:"已取消",errored:"错误"},p={permissions:{see_hides:"可以看到隐藏",access_without_password:"无需密码访问",add_aria2:"添加 aria2 任务",write:"创建目录或上传",rename:"重命名",move:"移动",copy:"复制",delete:"删除",webdav_read:"Webdav 读取",webdav_manage:"Webdav 管理"},username:"用户名",password:"密码",base_path:"基本路径",role:"角色",permission:"权限",update_profile:"更新配置文件",update_profile_success:"更新个人资料成功，请重新登录。",change_username:"修改用户名",change_password:"更改密码","change_password-tips":"如果您不想更改密码，请保持为空",enable_2fa:"启用双重身份验证","2fa_already_enabled":"已启用双重身份验证",scan_qr:"扫描二维码保存密钥",input_code:"输入您的双重验证应用中显示的验证码",verify:"验证","guest-tips":"您正在作为访客访问。",modify_nothing:"所以您不能在管理页面中修改任何内容。"},u=Object.assign({"./drivers.json":o,"./global.json":i,"./home.json":a,"./index.json":r,"./login.json":s,"./manage.json":t,"./metas.json":d,"./settings.json":_,"./settings_other.json":n,"./storages.json":c,"./tasks.json":l,"./users.json":p}),m=e("default",{});for(const e in u)m[e.split("/")[1].split(".")[0]]=u[e]}}}));
