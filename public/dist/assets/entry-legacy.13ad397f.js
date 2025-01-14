System.register(["./index-legacy.e91490ae.js"],(function(e){"use strict";var o;return{setters:[function(e){o=e.cp}],execute:function(){var r={backup:"備份",restore:"還原",start_backup:"開始備份",finish_backup:"備份完成",success_backup_item:"[ {{item}} ] 備份成功",failed_backup_item:"[ {{item}} ] 備份失敗",no_file:"未選擇檔案",start_restore:"開始還原",finish_restore:"還原完成",success_restore_item:"[ {{item}} ] 還原成功",failed_restore_item:"[ {{item}} ] 還原失敗",override:"覆蓋",encrypt_password_placeholder:"如無需加密，請留空",encrypt_password:"加密密碼",wrong_encrypt_password:"加密密碼錯誤"},i={"115 Cloud":{cookie:"Cookie","cookie-tips":"需要 QR 代碼令牌和 cookie 中的一個",limit_rate:"次數限制","limit_rate-tips":"限制所有 API 次數上限 ([limit]r/1s)",page_size:"分頁大小","page_size-tips":"115驅動程序列表API的每頁大小",qrcode_source:"二維碼來源","qrcode_source-tips":"選擇二維碼設備，默認Linux",qrcode_sources:{alipaymini:"Alipaymini",android:"Android",ios:"IOS",qandroid:"Qandroid",tv:"Tv",web:"Web",wechatmini:"Wechatmini"},qrcode_token:"二維碼令牌","qrcode_token-tips":"需要 QR code Token 和 cookie 其中一個",root_folder_id:"根文件夾ID"},"115 Share":{cookie:"Cookie","cookie-tips":"需要 QR 代碼令牌和 cookie 中的一個",limit_rate:"次數限制","limit_rate-tips":"限制所有 API 次數上限 (1r/[limit_rate])",page_size:"分頁大小","page_size-tips":"115 驅動程式的清單 API 的每頁大小",qrcode_source:"二維碼來源","qrcode_source-tips":"選擇二維碼設備，默認Linux",qrcode_sources:{alipaymini:"Alipaymini",android:"Android",ios:"IOS",qandroid:"Qandroid",tv:"Tv",web:"Web",wechatmini:"Wechatmini"},qrcode_token:"二維碼令牌","qrcode_token-tips":"需要 QR 代碼令牌和 cookie 中的一個",receive_code:"分享鏈接 ID","receive_code-tips":"115 分享鏈接 ID",root_folder_id:"根文件夾ID",share_code:"分享鏈接提取碼","share_code-tips":"115 分享鏈接提取碼"},"123Pan":{password:"密碼",root_folder_id:"根文件夾ID",username:"用戶名"},"123PanLink":{origin_urls:"初始urls","origin_urls-tips":"結構:\nFolderName:\n  [FileName:][FileSize:][Modified:]Url",private_key:"私密密钥",uid:"帳號 Uid",valid_duration:"有效時長","valid_duration-tips":"分鐘"},"123PanShare":{accesstoken:"訪問令牌",root_folder_id:"根資料夾ID",sharekey:"分享key",sharepassword:"分享密碼"},"139Yun":{authorization:"Authorization",cloud_id:"Cloud id",custom_upload_part_size:"自定義上傳分片大小","custom_upload_part_size-tips":"0 表示根據 VIP 等級對應大小",root_folder_id:"根文件夾ID",type:"類型",types:{family:"家庭雲",personal:"個人雲",personal_new:"新版個人雲"}},"189Cloud":{cookie:"Cookie","cookie-tips":"如需輸入驗證碼，請填寫Cookie。",password:"密碼",root_folder_id:"根文件夾ID",username:"用戶名"},"189CloudPC":{family_id:"Family id",family_transfer:"家庭轉移",no_use_ocr:"不使用OCR",order_by:"排序",order_bys:{filename:"文件名",filesize:"文件大小",lastOpTime:"修改時間"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},password:"密碼",rapid_upload:"秒傳",root_folder_id:"根文件夾ID",type:"類型",types:{family:"家庭雲",personal:"個人雲"},upload_method:"上傳方式",upload_methods:{old:"舊版",rapid:"秒傳",stream:"流式上傳"},upload_thread:"上傳線程","upload_thread-tips":"1<=線程<=32",username:"用戶名",validate_code:"驗證碼"},"AList V2":{access_token:"訪問令牌",password:"密碼",root_folder_path:"根文件夾路徑",url:"链接"},"AList V3":{meta_password:"元信息密碼",pass_ua_to_upsteam:"傳遞UA至上游",password:"密碼",root_folder_path:"根文件夾路徑",token:"Token",url:"链接",username:"用戶名"},Alias:{paths:"路徑",protect_same_name:"保護同名","protect_same_name-tips":"保護同名的文件不被刪除或重命名"},Aliyundrive:{internal_upload:"內部上傳",order_by:"排序",order_bys:{created_at:"創建時間",name:"名稱",size:"大小",updated_at:"修改時間"},order_direction:"排序方式",order_directions:{ASC:"升序",DESC:"降序"},rapid_upload:"秒傳",refresh_token:"刷新令牌",root_folder_id:"根文件夾ID"},AliyundriveOpen:{client_id:"客户端ID","client_id-tips":"如果沒有，請留空",client_secret:"客户端密钥","client_secret-tips":"如果沒有，請留空",drive_type:"雲盤類型",drive_types:{backup:"備份盤",default:"默認",resource:"資源庫"},internal_upload:"內部上傳","internal_upload-tips":"如在使用北京區阿里雲ECS，可以開啟用來提高上傳速度",livp_download_format:"Livp下載格式",livp_download_formats:{jpeg:"Jpeg",mov:"Mov"},oauth_token_url:"Oauth令牌連結",order_by:"排序",order_bys:{created_at:"創建時間",name:"名稱",size:"大小",updated_at:"修改時間"},order_direction:"排序方式",order_directions:{ASC:"升序",DESC:"降序"},rapid_upload:"秒傳","rapid_upload-tips":"如啟用此選項，文件將先上傳到服務器，上傳進度將不正確",refresh_token:"刷新令牌",remove_way:"移除方式",remove_ways:{delete:"刪除",trash:"回收站"},root_folder_id:"根文件夾ID"},AliyundriveShare:{order_by:"排序",order_bys:{created_at:"創建時間",name:"名稱",size:"大小",updated_at:"修改時間"},order_direction:"排序方式",order_directions:{ASC:"升序",DESC:"降序"},refresh_token:"刷新令牌",root_folder_id:"根文件夾ID",share_id:"分享ID",share_pwd:"分享密碼"},BaiduNetdisk:{client_id:"客户端ID",client_secret:"客户端密钥",custom_crack_ua:"自定義破解ua",custom_upload_part_size:"自定義上傳分片大小","custom_upload_part_size-tips":"0表示根據VIP等級對應大小",download_api:"下載 API",download_apis:{crack:"非官方",official:"官方"},order_by:"排序",order_bys:{name:"名稱",size:"大小",time:"時間"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},refresh_token:"刷新令牌",root_folder_path:"根文件夾路徑",upload_api:"上傳 api",upload_thread:"上傳線程","upload_thread-tips":"1<=線程<=32"},BaiduPhoto:{album_id:"相簿ID",cookie:"Cookie",delete_origin:"刪除源文件",show_type:"顯示類型",show_types:{root:"根目錄",root_only_album:"僅根目錄下相簿",root_only_file:"僅根目錄下檔案"},upload_thread:"上傳線程","upload_thread-tips":"1<=線程<=32"},BaiduShare:{BDUSS:"BDUSS",pwd:"百度網盤分享密碼",root_folder_path:"根文件夾路徑",surl:"百度網盤分享連結"},ChaoXingGroupDrive:{bbsid:"Bbsid",cookie:"Cookie",password:"密碼",root_folder_id:"根文件夾ID",user_name:"用戶名"},Cloudreve:{address:"地址",cookie:"Cookie",custom_ua:"自定義UA",enable_thumb_and_folder_size:"啟用縮略圖和文件夾大小",password:"密碼",root_folder_path:"根文件夾路徑",username:"用戶名"},Crypt:{directory_name_encryption:"文件夹名称加密",directory_name_encryptions:{false:"False",true:"True"},encrypted_suffix:"加密後綴","encrypted_suffix-tips":"高級選項！加密的文件將有此後綴",filename_encoding:"文件名編碼","filename_encoding-tips":"高級選項！",filename_encodings:{base32:"Base32",base32768:"Base32768",base64:"Base64"},filename_encryption:"文件名加密",filename_encryptions:{obfuscate:"混淆",off:"關閉",standard:"標準"},password:"密碼","password-tips":"主密碼",remote_path:"遠端路徑","remote_path-tips":"這是加密資料儲存的位置",salt:"鹽值","salt-tips":"如果您不知道什麼是鹽值，將其作為第二個密碼處理。",show_hidden:"顯示隱藏","show_hidden-tips":"顯示隱藏目錄以及檔案",thumbnail:"縮圖","thumbnail-tips":"啟用在縮略圖文件夾下預先生成的縮略圖"},Doge:{access_key_id:"訪問密钥ID",add_filename_to_disposition:"新增 filename 到 disposition","add_filename_to_disposition-tips":"新增 filename 到 Content-Disposition header 中。",bucket:"存儲桶",custom_host:"自定義HOST",enable_custom_host_presign:"啟用自定義主機預覽",endpoint:"地區",force_path_style:"強制路徑樣式",list_object_version:"列出對象版本",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"占位文件名",region:"地區",remove_bucket:"删除存儲桶","remove_bucket-tips":"使用自定義主機時從路徑中刪除存儲桶名稱。",root_folder_path:"根文件夾路徑",secret_access_key:"安全瀏覽密钥",session_token:"會話令牌",sign_url_expire:"簽名連結有效期"},Dropbox:{client_id:"客户端ID","client_id-tips":"沒有請留空",client_secret:"客户端密钥","client_secret-tips":"沒有請留空",oauth_token_url:"Oauth令牌連結",refresh_token:"刷新令牌",root_folder_path:"根文件夾路徑"},FTP:{address:"地址",encoding:"字符編碼",password:"密碼",root_folder_path:"根文件夾路徑",username:"用戶名"},FebBox:{client_id:"客户端ID",client_secret:"客戶端密钥",page_size:"分頁大小","page_size-tips":"按分頁大小顯示FebBox driver api",root_folder_id:"根資料夾ID",sort_rule:"排序規則",sort_rules:{ext_asc:"擴展名正序",ext_desc:"擴展名倒序",name_asc:"名稱升序",name_desc:"名稱降序",size_asc:"大小升序",size_desc:"大小降序",update_asc:"修改時間正序",update_desc:"修改時間倒序"},user_ip:"用戶ip","user_ip-tips":"用戶IP地址用於下載链接，可以加快下載"},FeijiPan:{password:"密碼",root_folder_id:"根文件夾ID",username:"用戶名"},"GitHub API":{author_email:"作者電子郵件",author_name:"作者姓名",committer_email:"傭金電子郵件",committer_name:"傭金名稱",copy_commit_message:"複製提交消息",delete_commit_message:"删除提交消息",mkdir_commit_message:"Mkdir 提交消息",move_commit_message:"移動提交消息",owner:"所有者",put_commit_message:"放置提交消息",ref:"參攷值","ref-tips":"默認情况下，一個分支、一個標籤或提交SHA，主要分支。",rename_commit_message:"重命名提交消息",repo:"複數",root_folder_path:"根文件夾路徑",token:"令牌"},GoogleDrive:{chunk_size:"分片大小","chunk_size-tips":"上傳分塊大小 (單位： MB)",client_id:"客户端ID",client_secret:"客户端密钥",order_by:"排序","order_by-tips":"例如:folder,name,modifiedTime",order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},refresh_token:"刷新令牌",root_folder_id:"根文件夾ID"},GooglePhoto:{client_id:"客户端ID",client_secret:"客户端密钥",refresh_token:"刷新令牌",root_folder_id:"根文件夾ID",show_archive:"顯示歸檔"},HalalCloud:{app_id:"應用ID",app_secret:"應用令牌",app_version:"應用版本",refresh_token:"刷新令牌","refresh_token-tips":"登录类型是刷新令牌，此為必填項目",root_folder_path:"根文件夾路徑",upload_thread:"上傳線程","upload_thread-tips":"1 <= thread <= 32"},ILanZou:{password:"密碼",root_folder_id:"根文件夾ID",username:"用戶名"},"IPFS API":{endpoint:"Endpoint",gateway:"網關",root_folder_path:"根文件夾路徑"},KodBox:{address:"地址",password:"密碼",root_folder_path:"根文件夾路徑",username:"用戶名"},Lanzou:{account:"帳戶",baseUrl:"基本URL","baseUrl-tips":"檔案操作的基本URL",cookie:"Cookie","cookie-tips":"大約15天有效，如使用分享連結則忽略",password:"密碼",repair_file_info:"修復文件信息","repair_file_info-tips":"啟用WebDAV才可使用此功能",root_folder_id:"根文件夾ID",shareUrl:"分享链接","shareUrl-tips":"用於獲取分享頁面",share_password:"分享密碼",type:"類型",types:{account:"帳戶",cookie:"Cookie",url:"链接"},user_agent:"使用代理"},Lark:{app_id:"應用ID","app_id-tips":"應用ID",app_secret:"應用令牌","app_secret-tips":"應用令牌",external_mode:"外部預覽模式","external_mode-tips":"打開後複製飛書鏈接，可跳轉到飛書網頁預覽",root_folder_path:"根文件夾路徑",tenant_url_prefix:"租戶url首碼","tenant_url_prefix-tips":"租户url前綴"},LenovoNasShare:{host:"主機","host-tips":"可以改為自己的局域網",root_folder_path:"根文件夾路徑",share_id:"分享ID","share_id-tips":"分享鏈接中最後一個/後面的部分",share_pwd:"分享密碼","share_pwd-tips":"分享鏈接的密碼"},Local:{mkdir_perm:"創建文件夾許可",recycle_bin_path:"回收站路徑","recycle_bin_path-tips":"回收站的路徑，如果為空或保留設定為'delete permanently'則永久删除",root_folder_path:"根文件夾路徑",show_hidden:"顯示隱藏","show_hidden-tips":"顯示隱藏目錄以及檔",thumb_cache_folder:"縮略圖缓存文件夾",thumb_concurrency:"縮略圖併發","thumb_concurrency-tips":"併發縮略圖生成隊列的數量，影響並行生成的縮略圖數量。",thumbnail:"縮略圖","thumbnail-tips":"啟用縮略圖",video_thumb_pos:"視頻縮略圖","video_thumb_pos-tips":"視頻縮略圖的位置。 如果該值是一個數字（整數點浮點），它代表幾秒鐘的時間。 如果值以“%”結尾，則代表視頻持續時間的百分比。"},MediaTrack:{access_token:"訪問令牌",order_by:"排序",order_bys:{size:"大小",title:"名稱",updated_at:"修改時間"},order_desc:"降序排列",project_id:"項目ID",root_folder_id:"根文件夾ID"},Mega_nz:{email:"郵箱",password:"密碼",two_fa_code:"2FA驗證碼","two_fa_code-tips":"2FA 6位驗證碼，單獨填寫2FA驗證碼不能重新加載驅動程序",two_fa_secret:"2FA令牌","two_fa_secret-tips":"2FA令牌"},MoPan:{cloud_id:"Cloud id",device_info:"設備信息",order_by:"排序",order_bys:{filename:"檔案名稱",filesize:"檔案大小",lastOpTime:"修改時間"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},password:"密碼",phone:"手機號碼",root_folder_id:"根文件夾ID",sms_code:"短信驗證碼","sms_code-tips":"輸入'send'發送短信",upload_thread:"上傳線程","upload_thread-tips":"1<=線程<=32"},NeteaseMusic:{cookie:"Cookie",song_limit:"歌曲限制","song_limit-tips":"默認情况下只能獲得200首歌曲"},Onedrive:{chunk_size:"分片大小","chunk_size-tips":"上傳分塊大小 (單位： MB)",client_id:"客户端ID",client_secret:"客户端密钥",custom_host:"自定義HOST","custom_host-tips":"為Onedrive下載链接自定義HOST",is_sharepoint:"是否Sharepoint",redirect_uri:"重定向Uri",refresh_token:"刷新令牌",region:"地區",regions:{cn:"世紀互聯",de:"德國版",global:"全域設定",us:"美國版"},root_folder_path:"根文件夾路徑",site_id:"網站ID"},"Onedrive Sharelink":{password:"密碼",root_folder_path:"根文件夾路徑",url:"鏈接"},OnedriveAPP:{chunk_size:"分片大小",client_id:"客户端ID",client_secret:"客户端密钥",custom_host:"自定義HOST","custom_host-tips":"為Onedrive下載链接自定義HOST",email:"郵箱",region:"地區",regions:{cn:"世紀互聯",de:"德國版",global:"全域設定",us:"美國版"},root_folder_path:"根文件夾路徑",tenant_id:"租戶ID"},PikPak:{captcha_token:"驗證碼",device_id:"設備id",disable_media_link:"禁用媒體鏈接",password:"密碼",platform:"平臺",platforms:{android:"Android",pc:"Pc",web:"Web"},refresh_token:"刷新令牌",root_folder_id:"根文件夾ID",username:"用戶名"},PikPakShare:{device_id:"設備id",platform:"平臺",platforms:{android:"Android",pc:"Pc",web:"Web"},root_folder_id:"根文件夾ID",share_id:"分享ID",share_pwd:"分享密碼",use_transcoding_address:"使用轉碼地址"},Quark:{cookie:"Cookie",order_by:"排序",order_bys:{file_name:"文件名稱",file_type:"文件類型",none:"無",updated_at:"修改時間"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},root_folder_id:"根文件夾ID"},QuarkTV:{device_id:"設備id",query_token:"査詢令牌","query_token-tips":"不要編輯",refresh_token:"刷新令牌",root_folder_id:"根文件夾ID"},Quqi:{cdn:"Cdn","cdn-tips":"啟用此選項，可提高下載速度，但會影響性能",cookie:"Cookie","cookie-tips":"Cookie可以同時在多個用戶端上使用",password:"密碼",phone:"手機號碼",root_folder_id:"根文件夾ID"},S3:{access_key_id:"訪問密钥 Id",add_filename_to_disposition:"添加 filename 至Disposition","add_filename_to_disposition-tips":"添加 filename 至Content-Disposition header.",bucket:"存儲桶",custom_host:"自定義HOST",enable_custom_host_presign:"啟用自定義主機預覽",endpoint:"地區",force_path_style:"強制路徑樣式",list_object_version:"列出對象版本",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"占位文件名",region:"地區",remove_bucket:"删除存儲桶","remove_bucket-tips":"使用自定義主機時從路徑中删除存儲桶名稱.",root_folder_path:"根文件夾路徑",secret_access_key:"安全訪問密钥",session_token:"會話令牌",sign_url_expire:"簽名链接有效期"},SFTP:{address:"地址",ignore_symlink_error:"忽略符號鏈接錯誤",passphrase:"密碼短語",password:"密碼",private_key:"私密密鑰",root_folder_path:"根文件夾路徑",username:"用戶名"},SMB:{address:"地址",password:"密碼",root_folder_path:"根文件夾路徑",share_name:"分享名稱",username:"用戶名"},Seafile:{address:"地址",password:"密碼",repoId:"倉庫Id",repoPwd:"倉庫密碼",root_folder_path:"根文件夾路徑",token:"Token",username:"用戶名"},Teambition:{cookie:"Cookie",order_by:"排序",order_bys:{created:"創建時間",fileName:"文件名",fileSize:"文件大小",updated:"修改時間"},order_direction:"排序方式",order_directions:{Asc:"升序",Desc:"降序"},project_id:"項目ID",region:"地區",regions:{china:"中國",international:"國際版"},root_folder_id:"根文件夾ID",use_s3_upload_method:"使用 s3 上傳方式"},Terabox:{cookie:"Cookie",download_api:"下載 API",download_apis:{crack:"非官方",official:"官方"},order_by:"排序",order_bys:{name:"名稱",size:"大小",time:"時間"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},root_folder_path:"根文件夾路徑"},Thunder:{captcha_token:"驗證碼",password:"密碼",root_folder_id:"根文件夾ID",username:"用戶名"},ThunderBrowser:{captcha_token:"驗證碼",password:"密碼",remove_way:"移除方式",remove_ways:{delete:"刪除",trash:"回收桶"},root_folder_id:"根文件夾ID",safe_password:"安全密碼",use_video_url:"使用視頻url",username:"用戶名"},ThunderBrowserExpert:{algorithms:"算法","algorithms-tips":"簽名類型是算法簽名,此為必填項",captcha_sign:"驗證碼簽名","captcha_sign-tips":"驗證碼簽名的簽名類型，此為必填項目",captcha_token:"驗證碼",client_id:"客户端ID",client_secret:"客戶端密钥",client_version:"客户端版本",device_id:"設備id",download_user_agent:"下載用戶 Proxy 代理",login_type:"登入類型",login_types:{refresh_token:"刷新令牌",user:"用戶"},package_name:"套件名稱",password:"密碼","password-tips":"用戶的登入類型，此為必填項目",refresh_token:"刷新令牌","refresh_token-tips":"刷新令牌的登入類型，此為必填項目",remove_way:"移除方式",remove_ways:{delete:"刪除",trash:"回收桶"},root_folder_id:"根文件夾ID",safe_password:"安全密碼","safe_password-tips":"用戶的登入類型，此為必填項目",sign_type:"簽名類型",sign_types:{algorithms:"算法",captcha_sign:"驗證碼簽名"},timestamp:"時間戳","timestamp-tips":"簽名類型是驗證碼簽名,此為必填項",use_video_url:"使用視頻url",user_agent:"用戶代理",username:"用戶名","username-tips":"用戶的登入類型，此為必填項目"},ThunderExpert:{algorithms:"算法","algorithms-tips":"簽名類型演算法，此為必填項目",captcha_sign:"驗證碼簽名","captcha_sign-tips":"簽名類型是驗證碼簽名,此為必填項",captcha_token:"驗證碼",client_id:"客户端ID",client_secret:"客戶端密钥",client_version:"客户端版本",device_id:"設備id",download_user_agent:"下載用户 Proxy 代理",login_type:"登入類型",login_types:{refresh_token:"刷新令牌",user:"用户"},package_name:"包名",password:"密碼","password-tips":"用户的登入類型，此為必填項目",refresh_token:"刷新令牌","refresh_token-tips":"刷新令牌的登入類型，此為必填項目",root_folder_id:"根文件夾ID",sign_type:"簽名類型",sign_types:{algorithms:"算法",captcha_sign:"驗證碼簽名"},timestamp:"時間戳","timestamp-tips":"簽名類型是驗證碼簽名,此為必填項",use_video_url:"使用視頻url",user_agent:"用戶代理",username:"用戶名","username-tips":"用户的登入類型，此為必填項目"},ThunderX:{captcha_token:"驗證碼",password:"密碼",root_folder_id:"根文件夾ID",use_video_url:"使用視頻url",username:"用戶名"},ThunderXExpert:{algorithms:"算法","algorithms-tips":"簽名類型是算法簽名,此為必填項",captcha_sign:"驗證碼簽名","captcha_sign-tips":"簽名類型是驗證碼簽名,此為必填項",captcha_token:"驗證碼",client_id:"客户端ID",client_secret:"客戶端密钥",client_version:"客户端版本",device_id:"設備id",download_user_agent:"下載用戶 Proxy 代理",login_type:"登入類型",login_types:{refresh_token:"刷新令牌",user:"用戶"},package_name:"套件名稱",password:"密碼","password-tips":"使用者的登入類型，此為必填項目",refresh_token:"刷新令牌","refresh_token-tips":"刷新令牌的登入類型，此為必填項目",root_folder_id:"根資料夾ID",sign_type:"簽名類型",sign_types:{algorithms:"算法",captcha_sign:"驗證碼簽名"},timestamp:"時間戳","timestamp-tips":"時間戳,此為必填項",use_video_url:"使用視頻url",user_agent:"用戶代理",username:"用戶名","username-tips":"用户的登入類型，此為必填項目"},Trainbit:{AUSHELLPORTAL:"AUSHELLPORTAL",apikey:"API Key",root_folder_id:"根文件夾ID"},UC:{cookie:"Cookie",order_by:"排序",order_bys:{file_name:"文件名稱",file_type:"文件類型",none:"無",updated_at:"修改時間"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},root_folder_id:"根文件夾ID"},UCTV:{device_id:"設備id",query_token:"査詢令牌","query_token-tips":"不要編輯",refresh_token:"刷新令牌",root_folder_id:"根文件ID"},USS:{anti_theft_chain_token:"Token 防盜鏈",bucket:"存儲桶",endpoint:"地區",operator_name:"操作員名稱",operator_password:"操作員密碼",root_folder_path:"根文件夾路徑",sign_url_expire:"簽名链接有效期"},UrlTree:{head_size:"Head 大小","head_size-tips":"使用HEAD方法獲取文件大小，但可能失敗。",url_structure:"Url結構","url_structure-tips":"結構:\nFolderName:\n  [FileName:][FileSize:][Modified:]Url",writable:"可寫"},VTencent:{cookie:"Cookie",order_by:"排序",order_bys:{CreatTime:"創建時間",Name:"名稱",Size:"大小",UpdateTime:"修改時間"},order_direction:"排序方式",order_directions:{Asc:"遞增排序",Desc:"遞減排序"},root_folder_id:"根文件夾ID",tf_uid:"Tf uid"},Virtual:{max_file_size:"最大文件大小",min_file_size:"最小文件大小",num_file:"文件數量",num_folder:"文件夾數量",root_folder_path:"根文件夾路徑"},WebDav:{address:"地址",password:"密碼",root_folder_path:"根文件夾路徑",tls_insecure_skip_verify:"Tls不安全 跳過驗證",username:"用戶名",vendor:"供應商",vendors:{other:"其他",sharepoint:"Sharepoint"}},WeiYun:{cookies:"Cookies",order_by:"排序",order_bys:{name:"名稱",size:"大小",updated_at:"修改時間"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},root_folder_id:"根文件夾ID",upload_thread:"上傳線程","upload_thread-tips":"4<=線程<=32"},WoPan:{access_token:"訪問令牌",family_id:"Family id","family_id-tips":"如果需要使用您的個人空間，請保持為空",refresh_token:"刷新令牌",root_folder_id:"根文件夾ID",sort_rule:"排序規則",sort_rules:{name_asc:"名稱升序",name_desc:"名稱降序",size_asc:"大小升序",size_desc:"大小降序",time_asc:"時間升序",time_desc:"時間降序"}},YandexDisk:{client_id:"客户端ID",client_secret:"客户端密钥",order_by:"排序",order_bys:{created:"創建時間",modified:"修改時間",name:"名稱",path:"路徑",size:"大小"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},refresh_token:"刷新令牌",root_folder_path:"根文件夾路徑"},config:{"115 Cloud":{},"115 Share":{},"123Pan":{},"123PanLink":{},"123PanShare":{},"139Yun":{},"189Cloud":{alert:"如果此驅動無法工作，你可以嘗試使用「天翼網盤用戶端」驅動。"},"189CloudPC":{},"AList V2":{},"AList V3":{},Alias:{},Aliyundrive:{alert:"此加載方式可能有一個死循環錯誤。 \n已廢棄，不再維護，並將在未來的版本中删除。 \n建議使用官方的阿裡雲盤開放平臺。"},AliyundriveOpen:{},AliyundriveShare:{},BaiduNetdisk:{},BaiduPhoto:{},BaiduShare:{},ChaoXingGroupDrive:{},Cloudreve:{},Crypt:{},Doge:{},Dropbox:{},FTP:{},FebBox:{},FeijiPan:{},"GitHub API":{},GoogleDrive:{},GooglePhoto:{},HalalCloud:{},ILanZou:{},"IPFS API":{},KodBox:{},Lanzou:{},Lark:{},LenovoNasShare:{},Local:{},MediaTrack:{},Mega_nz:{},MoPan:{alert:"這個網盤可能將您的密碼以明文存儲，請小心設置您的密碼"},NeteaseMusic:{},Onedrive:{},"Onedrive Sharelink":{},OnedriveAPP:{},PikPak:{},PikPakShare:{},Quark:{},QuarkTV:{},Quqi:{},S3:{},SFTP:{},SMB:{},Seafile:{},Teambition:{},Terabox:{},Thunder:{},ThunderBrowser:{},ThunderBrowserExpert:{},ThunderExpert:{},ThunderX:{},ThunderXExpert:{},Trainbit:{},UC:{},UCTV:{},USS:{},UrlTree:{},VTencent:{},Virtual:{},WebDav:{},WeiYun:{},WoPan:{},YandexDisk:{}},drivers:{"115 Cloud":"115 網盤","115 Share":"115 雲盤分享","123Pan":"123雲盤","123PanLink":"123雲盤直鏈","123PanShare":"123雲盤分享","139Yun":"中國移動雲盤","189Cloud":"天翼雲盤","189CloudPC":"天翼雲盤用戶端","AList V2":"AList V2","AList V3":"AList V3",Alias:"Alias",Aliyundrive:"阿裡雲盤",AliyundriveOpen:"阿裡雲盤開放平臺",AliyundriveShare:"阿裡雲盤分享",BaiduNetdisk:"百度網盤",BaiduPhoto:"一刻相册",BaiduShare:"百度分享",ChaoXingGroupDrive:"超星星小組盤",Cloudreve:"Cloudreve",Crypt:"Crypt",Doge:"多吉雲",Dropbox:"Dropbox",FTP:"FTP",FebBox:"FebBox",FeijiPan:"飛機盤","GitHub API":"GitHub API",GoogleDrive:"Google雲盤",GooglePhoto:"Google相册",HalalCloud:"HalalCloud",ILanZou:"藍奏雲優享版","IPFS API":"IPFS API",KodBox:"KodBox",Lanzou:"藍奏雲",Lark:"飛書",LenovoNasShare:"聯想家庭存儲鏈接分享",Local:"本機存儲",MediaTrack:"分秒幀",Mega_nz:"Mega 網盤",MoPan:"魔盤",NeteaseMusic:"網易雲音樂",Onedrive:"OneDrive","Onedrive Sharelink":"Onedrive 分享鏈接",OnedriveAPP:"OneDrive APP",PikPak:"PikPak",PikPakShare:"PikPak分享",Quark:"誇克",QuarkTV:"誇克TV",Quqi:"曲奇雲盤",S3:"S3",SFTP:"SFTP",SMB:"SMB",Seafile:"Seafile",Teambition:"Teambition網盤",Terabox:"Terabox",Thunder:"迅雷",ThunderBrowser:"迅雷瀏覽器",ThunderBrowserExpert:"迅雷瀏覽器專家版",ThunderExpert:"迅雷專家版",ThunderX:"迅雷X",ThunderXExpert:"迅雷X專家版",Trainbit:"Trainbit",UC:"UC",UCTV:"UCTV",USS:"又拍雲存儲",UrlTree:"UrlTree",VTencent:"騰訊智能創作平台",Virtual:"虛擬存儲",WebDav:"WebDav",WeiYun:"騰訊微雲",WoPan:"聯通雲盤",YandexDisk:"Yandex網盤"}},t={refresh:"刷新",add:"添加",edit:"編輯",delete:"刪除",save:"保存",update:"更新",copied:"已復製",delete_success:"刪除成功",save_success:"保存成功",update_success:"更新成功",choose:"選擇",confirm:"確認",cancel:"取消",delete_confirm:"你確認要刪除[{{name}}]?",operations:"操作",yes:"是",no:"否",clear:"清除",choose_folder:"選擇資料夾",choose_or_input_path:"選擇文件夾或輸入路徑",disable:"禁用",enable:"啟用",ok:"確定",back:"返回",have_account:"已有賬號？",go_login:"轉到登錄",close:"關閉",no_support_now:"暫不支持",empty_input:"請輸入",name:"名稱"},a={obj:{name:"名稱",size:"大小",modified:"修改時間"},preview:{download:"下載",failed_load_img:"載入圖像失敗",open_with:"使用... 打開",play_with:"使用... 播放",install:"安裝",installing:"正在安裝","tr-install":"TrollStore","tr-installing":"TrollStore 正在安裝",open_in_new_window:"在新窗口中打開",auto_next:"自動下一個"},layouts:{list:"清單視圖",grid:"網格視圖",image:"圖片視圖"},no_images:"當前資料夾中無圖像",load_more:"加載更多",no_more:"沒有更多了",input_password:"請輸入密碼",toolbar:{more:"更多",refresh:"刷新",toggle_theme:"切換主題",switch_lang:"切換語言",toggle_markdown_toc:"切換輪廓",toggle_checkbox:"開關復選框",rename:"重命名",input_new_name:"輸入一個新名稱","only_one-tips":"只能選擇一個對象重命名",move:"移動",copy:"複製",choose_dst_folder:"選擇目標文件夾",delete:"刪除","delete-tips":"確定要刪除所選對象嗎?",copy_link:"復製鏈接",preview_page:"預覽頁面",down_link:"下載鏈接",encode_down_link:"編碼下載鏈接",mkdir:"新建文件夾",input_dir_name:"輸入文件夾名稱",new_file:"新建文件",input_filename:"輸入文件名",cancel_select:"取消選擇",offline_download:"離線下載","offline_download-tips":"每行一條連結",delete_policy:{delete_on_upload_succeed:"上傳成功後删除",delete_on_upload_failed:"上傳失敗時删除",delete_never:"從不删除",delete_always:"始終删除"},download:"下載",batch_download:"批量下载",package_download:"打包下载",package_download_disabled:"打包下載已禁用",send_aria2:"發送到aria2",aria2_not_set:"请设置 aria2 rpc url",send_aria2_success:"成功發送到aria2","pre_package_download-tips":"在瀏覽器中使用streamsaver而不是服務器來進行包下載需要相應的存儲支持cors，而不支持的存儲將失敗。","package_download-tips":"正在下載，請稍候不要關閉頁面",playlist_download:"播放清單下載",upload:"上傳",local_settings:"本地設置",recursive_move:"聚合移動","recursive_move_directory-tips":"您確定要將當前文件夾及其子文件夾中的所有文件移動到指定的文件夾嗎？",remove_empty_directory:"移除空的子目錄","remove_empty_directory-tips":"您確定要删除所有空子文件夾嗎？",batch_rename:"批量重命名",regex_rename:"正則表達式重命名",sequential_renaming:"順序重命名",regex_rename_preview:"更改的文件",regex_rename_preview_old_name:"舊名稱",regex_rename_preview_new_name:"新名稱",regular_rename:"正則表達式文件重命名。 在第一行輸入源文件名正則表達式，並在第二行輸入新文件名正則表達式。",sequential_renaming_desc:"新文件名將有一個數值起始值附加到它，並且它將通過向起始值添加1來按順序顯示。 在第一行輸入新的文件名，並在第二行輸入起始值。"},upload:{add_as_task:"添加為任務","upload-tips":"拖動文件到此處以上傳，或點擊：",release:"松開以上傳",no_files_drag:"沒有檔案被拖入。",upload_files:"選擇文件",upload_folder:"選擇文件夾",pending:"等待中",uploading:"上傳中",backending:"正在後臺上傳",success:"成功",error:"錯誤",back:"返回上傳",clear_done:"清空完成"},local_settings:{aria2_rpc_url:"Aria2 RPC 鏈接",aria2_rpc_secret:"Aria2 RPC 密鑰",aria2_dir:"Aria2 下載目錄",show_folder_in_image_view:"在圖片視圖中顯示文件夾",show_folder_in_image_view_options:{top:"上方",bottom:"下方",none:"無"},global_default_layout:"全局默認佈局",global_default_layout_options:{list:"清單視圖",grid:"網格視圖",image:"圖片視圖"},position_of_header_navbar:"標題欄和導航欄的位置",position_of_header_navbar_options:{static:"正常",sticky:"吸附到頁面頂部",only_navbar_sticky:"僅吸附導航欄"},show_sidebar:"顯示側邊欄",show_sidebar_options:{none:"無",visible:"顯示"},grid_item_size:"網格項目大小",list_item_filename_overflow:"列表項目文件名超長顯示",list_item_filename_overflow_options:{ellipsis:"省略號",scrollable:"可滾動",multi_line:"多行顯示"},open_item_on_checkbox:"在多選框中打開選項",open_item_on_checkbox_options:{direct:"直接打開",disable_while_checked:"選中時禁用",with_ctrl:"使用 Ctrl/Command 按鍵打開",with_alt:"使用 Alt/Option 按鍵打開"},select_with_mouse:"多選框關閉時用滑鼠選擇",select_with_mouse_options:{disabled:"停用",open_item_with_dblclick:"雙擊打開"}},package_download:{current_status:"當前狀態",initializing:"正在初始化",fetching_struct:"正在獲取文件夾結構",fetching_struct_failed:"獲取文件夾結構失敗",downloading:"下載文件中，不要關閉或刷新頁面",failed:"打包下載失敗",success:"下載完成"},footer:{powered_by:"Powered by AList",manage:"管理"},search:{search:"搜索",no_result:"暫無結果",scopes:{all:"全部",folder:"文件夾",file:"文件"}},fetching_settings_failed:"獲取設定失敗: ",get_current_user_failed:"獲取當前用戶失敗: ","Loading storage, please wait":"請稍後，正在載入儲存"},s={search_index:"搜索索引",current:"當前索引",build:"構建索引",rebuild:"重建索引",paths_to_update:"要更新索引的路徑",max_depth:"最大深度",update:"更新索引",obj_count:"對象計數",last_done_time:"上次完成時間",unknown:"未知",stop:"停止",clear:"清除",error:"錯誤"},_={login_to:"登錄到","username-tips":"輸入您的用戶名","password-tips":"輸入您的密碼","otp-tips":"輸入您的一次性密碼",remember:"記住我的登錄資料",forget:"忘記密碼？",forget_url:"https://alist.nn.ci/zh/faq/howto.html#%E5%Bf%98%E8%Ae%B0%E5%Af%86%E7%A0%81%E6%80%8E%E4%B9%88%E5%8A%9E",clear:"清除",login:"登錄",use_guest:"以遊客身份瀏覽",success:"登錄成功"},d={sidemenu:{dashboard:"控制面板",settings:"設置",site:"站點",style:"樣式",preview:"預覽",global:"全域設定",other:"其他",users:"用戶",storages:"存储",metas:"元信息",profile:"個人檔案",about:"關於",tasks:"任務",upload:"上傳",copy:"複製","backup-restore":"備份 & 還原",home:"主頁",indexes:"索引",sso:"SSO 登入",docs:"文件",offline_download:"離線下載",ldap:"LDAP",s3:"S3",ftp:"FTP"},title:"後臺管理",not_admin:"你不是管理員，請使用管理員賬戶登錄。",logout_success:"登錄成功",send:"發送",receive:"接收",received_msgs:"收到的消息","add_storage-tips":"您可能需要在新打開的選項卡中填寫一些信息。","messenger-tips":"您可能需要在這個標簽頁中按提示填寫一些信息。"},n={path:"路徑",password:"密碼",write:"寫入",hide:"隱藏",readme:"說明",readme_help:"顯示在底部，支持Markdown，包括文字與链接",header:"頂部說明",header_help:"顯示在頂部，支持Markdown，包括文字與链接",apply_sub:"應用到子文件夾",hide_help:"每行一個正則表達式"},l={allow_indexed:"允許索引",allow_mounted:"允許掛載",announcement:"站點公告",aria2_secret:"Aria2 密鑰",aria2_uri:"Aria2地址",audio_autoplay:"自動播放音頻",audio_cover:"音頻封面",audio_types:"音頻類型",auto_update_index:"自動更新索引",customize_body:"自定義內容",customize_head:"自定義頭部",default_page_size:"默認每頁數量",external_previews:"外部預覽",favicon:"網站圖標",filename_char_mapping:"文件名字符映射",forward_direct_link_params:"轉發直鏈參數",ftp_implicit_tls:"Ftp 默認tls",ftp_mandatory_tls:"Ftp 強制tls",ftp_pasv_port_map:"Ftp pasv 端口地圖",ftp_proxy_user_agent:"Ftp 代理用戶代理",ftp_public_host:"Ftp 公共主機",ftp_tls_private_key_path:"Ftp tls 私鑰路徑",ftp_tls_public_cert_path:"Ftp tls 公開證書路徑",hide_files:"隱藏文件",home_container:"主容器",home_containers:{hope_container:"Hope 容器",max_980px:"最大 980px"},home_icon:"首頁圖標",iframe_previews:"Iframe 預覽",ignore_direct_link_params:"忽略直鏈參數",ignore_paths:"忽略路徑","ignore_paths-tips":"每行一條路徑",image_types:"圖片類型",index_progress:"索引進度",ldap_default_dir:"Ldap 默認路徑",ldap_default_permission:"Ldap 默認權限",ldap_login_enabled:"啟用 Ldap 登錄",ldap_login_tips:"Ldap 登錄提示",ldap_manager_dn:"Ldap 管理器 dn",ldap_manager_password:"Ldap 管理員密碼",ldap_server:"Ldap 服務器",ldap_user_search_base:"Ldap 用戶搜索基礎",ldap_user_search_filter:"Ldap 用戶搜索過濾器",link_expiration:"直鏈有效期",logo:"Logo",main_color:"主顏色",max_index_depth:"最大索引深度","max_index_depth-tips":"索引的最大深度",ocr_api:"Ocr接口",package_download:"打包下載",pagination_type:"分頁類型",pagination_types:{all:"全部",auto_load_more:"自動加載更多",load_more:"加載更多",pagination:"分頁"},privacy_regs:"隱私內容正則表達式",proxy_ignore_headers:"代理忽略頭部",proxy_types:"代理類型",qbittorrent_seedtime:"Qbittorrent 做種時間",qbittorrent_url:"qBittorrent 鏈接",robots_txt:"Robots txt",s3_buckets_empty:"存儲桶名稱與路徑不能為空",s3_buckets_duplicate_name:"存儲桶名稱不能相同",s3_generate:"生成訪問密钥和id",s3_access_key_id:"S3訪問密钥Id",s3_buckets:"S3存儲桶",s3_restart_to_apply:"重啓以應用以上設定",s3_secret_access_key:"S3安全訪問密钥",search_index:"搜索索引",search_indexs:{bleve:"Bleve",database:"數據庫",database_non_full_text:"數據庫（非全文搜索）",meilisearch:"Meilisearch",none:"無"},settings_layout:"設定佈局",settings_layouts:{list:"清單",responsive:"響應式"},sign_all:"簽名所有",site_title:"網站標題",sso_application_name:"單點登錄應用名稱",sso_auto_register:"單點登錄自動注册",sso_client_id:"單點登錄用戶端ID",sso_client_secret:"單點登錄用戶端機密",sso_compatibility_mode:"單點登錄兼容模式",sso_default_dir:"單點登錄默認目錄",sso_default_permission:"單點登錄默認權限",sso_endpoint_name:"單點登錄端點名稱",sso_extra_scopes:"Sso 額外範圍",sso_jwt_public_key:"單點登錄JWT公鑰",sso_login_enabled:"啟用單點登錄",sso_login_platform:"單點登錄平臺",sso_login_platforms:{Casdoor:"Casdoor",Dingtalk:"釘釘",Github:"Github",Google:"Google",Microsoft:"微軟",OIDC:"OIDC"},sso_oidc_username_key:"單點登錄OIDC用戶名密鑰",sso_organization_name:"單點登錄組織名稱",text_types:"文本類型",token:"令牌",transmission_seedtime:"Transmission種子時間",transmission_uri:"Transmission URI",version:"版本",video_autoplay:"自動播放視頻",video_types:"視頻類型",webauthn_login_enabled:"啟用Webauthn登錄",logo_text:"文字Logo",site_beian:"備案號",contact_us:"自定義關於頁面內容"},p={115:"115",aria2:"Aria2",aria2_version:"Aria2 版本：",set_aria2:"設置aria2",copy_token:"復製令牌",reset_token:"重置令牌",reset_token_success:"重置令牌成功",unknown_type:"未知類型",set_qbit:"設置 qBittorrent",qbittorrent:"qBittorrent",transmission:"Transmission",set_transmission:"設置Transmission",set_115:"設置115",pikpak:"PikPak",set_pikpak:"設置PikPak",thunder:"Thunder",set_thunder:"設置Thunder"},c={common:{mount_path:"掛載路徑","mount_path-tips":"要掛載到的路徑，不能重複",driver:"驅動",order:"排序","order-tips":"用於排序",status:"狀態",remark:"備註",cache_expiration:"緩存過期時間","cache_expiration-tips":"此存儲的緩存過期時間(分鐘)",down_proxy_url:"下載代理URL",web_proxy:"Web代理",webdav_policy:"WebDAV 策略",proxy_range:"代理範圍","proxy_range-tips":"需要啟用代理",webdav_policys:{"302_redirect":"302重定向",use_proxy_url:"使用代理地址",native_proxy:"本地代理"},order_by:"排序",order_bys:{name:"名稱",size:"大小",modified:"修改時間"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},extract_folder:"提取資料夾",extract_folders:{front:"提取到最前",back:"提取到最後"},enable_sign:"啟用簽名",disable_index:"禁用存儲索引"},other:{start_load_success:"開始加載",load_all:"全部重新加載",filter_by_driver:"按驅動篩選",table_layout:"表格佈局"}},u={offline_download:"下載文件到本地設備",offline_download_transfer:"將下載的文件傳輸到相應的存儲",upload:"上傳文件到對應的存儲",copy:"將文件從存儲複製到另一個存儲",done:"已完成",undone:"執行中",clear_succeeded:"清除成功",retry:"重試",retry_failed:"重試失敗項",state:{0:"等待中",1:"執行中",2:"成功",3:"取消",4:"已取消",5:"錯誤",6:"失敗中",7:"失敗",8:"正在等待重試",9:"重試前置操作中"},retry_selected:"重試已選擇",cancel_selected:"取消選中的",delete_selected:"删除選中的",filter:"篩選器",expand:"展開",fold:"折疊",expand_all:"全部展開",fold_all:"全部折疊",attr:{name:"名稱",creator:"創建者",state:"狀態",progress:"行程",speed:"速度",operation:"操作",copy:{src:"源目錄",dst:"目標目錄"},upload:{path:"目錄"},offline_download:{url:"URL",path:"目標目錄",transfer_src:"源目錄",transfer_dst:"目標目錄"},time_elapsed:"耗時",status:"狀態",err:"錯誤"},show_only_mine:"只顯示我的任務"},m={permissions:{see_hides:"可以看到隱藏",access_without_password:"無密碼訪問",offline_download:"添加離線下載任務",write:"創建目錄或上傳",rename:"重命名",move:"移動",copy:"複製",delete:"刪除",webdav_read:"Webdav 读取",webdav_manage:"Webdav 管理",ftp_read:"FTP 已讀",ftp_manage:"FTP 管理"},username:"用戶名",password:"密碼",base_path:"基本路徑",role:"角色",permission:"權限",disabled:"停用",available:"已啟用",update_profile:"更新配置文件",update_profile_success:"更新個人資料成功，請重新登錄。",change_username:"修改用戶名稱",change_password:"變更密碼","change_password-tips":"如果您不想更改密碼，請保持為空",confirm_password:"確認密碼","confirm_password-tips":"重複您剛輸入的密碼",confirm_password_not_same:"您兩次輸入的密碼不一致",enable_2fa:"啟用雙重驗證",cancel_2fa:"取消兩步驗證",cancel_2fa_success:"取消兩步驗證成功","2fa_already_enabled":"雙重驗證已启用",scan_qr:"掃描二維碼保存秘鑰",or_manual:"或者手動輸入密鑰",input_code:"請輸入您的雙重驗證應用程式中的驗證碼",verify:"驗證","guest-tips":"您正在作為訪客訪問。",modify_nothing:"所以您不能在管理頁面中修改任何內容。",sso_login:"SSO 登錄",connect_sso:"綁定SSO 登錄平臺",disconnect_sso:"解綁SSO 登錄平臺",webauthn:"WebAuthn",add_webauthn:"添加Webauthn 憑據",add_webauthn_success:"Webauthn 憑據添加成功！",webauthn_not_supported:"您的瀏覽器不支持Webauth，或者您的來源不安全",ssh_keys:{heading:"SSH 密鑰",add_heading:"添加新的 SSH 密鑰",title:"名稱",key:"關鍵字",fingerprint:"指紋",last_used:"上次使用時間",operation:"操作"}},h=Object.assign({"./br.json":r,"./drivers.json":i,"./global.json":t,"./home.json":a,"./index.json":o,"./indexes.json":s,"./login.json":_,"./manage.json":d,"./metas.json":n,"./settings.json":l,"./settings_other.json":p,"./storages.json":c,"./tasks.json":u,"./users.json":m}),f=e("default",{});for(var k in h)f[k.split("/")[1].split(".")[0]]=h[k]}}}));
