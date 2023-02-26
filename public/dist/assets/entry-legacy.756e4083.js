System.register(["./index-legacy.0dc56a73.js"],(function(e){"use strict";var o;return{setters:[function(e){o=e.bz}],execute:function(){var r={backup:"備份",restore:"還原",start_backup:"開始備份",finish_backup:"備份完成",success_backup_item:"[ {{item}} ] 備份成功",failed_backup_item:"[ {{item}} ] 備份失敗",no_file:"沒有選擇檔案",start_restore:"開始還原",finish_restore:"還原完成",success_restore_item:"[ {{item}} ] 還原成功",failed_restore_item:"[ {{item}} ] 還原失敗"},i={"115 Cloud":{cookie:"Cookie",qrcode_token:"二維碼令牌",root_folder_id:"根資料夾ID"},"123Pan":{order_by:"排序",order_bys:{file_name:"檔案名稱",size:"大小",update_at:"修改時間"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},password:"密碼",root_folder_id:"根資料夾ID",stream_upload:"流式上傳",username:"用戶名"},"139Yun":{account:"帳號",cloud_id:"Cloud id",cookie:"Cookie",root_folder_id:"根資料夾ID",type:"類型",types:{family:"家庭雲",personal:"個人雲"}},"189Cloud":{password:"密碼",root_folder_id:"根資料夾ID",username:"用戶名"},"189CloudPC":{family_id:"Family id",no_use_ocr:"不使用OCR",order_by:"排序",order_bys:{filename:"檔名",filesize:"文件大小",lastOpTime:"修改時間"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},password:"密碼",rapid_upload:"秒傳",root_folder_id:"根資料夾ID",type:"類型",types:{family:"家庭雲",personal:"個人雲"},username:"用戶名",validate_code:"驗證碼"},"AList V2":{access_token:"訪問權杖",password:"密碼",root_folder_path:"根資料夾路徑",url:"链接"},"AList V3":{access_token:"訪問權杖",password:"密碼",root_folder_path:"根資料夾路徑",url:"链接"},Aliyundrive:{internal_upload:"內部上傳",order_by:"排序",order_bys:{created_at:"創建時間",name:"名稱",size:"大小",updated_at:"修改時間"},order_direction:"排序方式",order_directions:{ASC:"升序",DESC:"降序"},rapid_upload:"秒傳",refresh_token:"刷新令牌",root_folder_id:"根資料夾ID"},AliyundriveOpen:{client_id:"客户端ID","client_id-tips":"如果你沒有，請留空",client_secret:"客户端密钥","client_secret-tips":"如果你沒有，請留空",oauth_token_url:"Oauth令牌連結",order_by:"排序",order_bys:{created_at:"創建時間",name:"名稱",size:"大小",updated_at:"修改時間"},order_direction:"排序方式",order_directions:{ASC:"升序",DESC:"降序"},refresh_token:"刷新令牌",root_folder_id:"根資料夾ID"},AliyundriveShare:{order_by:"排序",order_bys:{created_at:"創建時間",name:"名稱",size:"大小",updated_at:"修改時間"},order_direction:"排序方式",order_directions:{ASC:"升序",DESC:"降序"},refresh_token:"刷新令牌",root_folder_id:"根資料夾ID",share_id:"分享ID",share_pwd:"分享密碼"},BaiduNetdisk:{client_id:"客户端ID",client_secret:"客户端密钥",download_api:"下載介面",download_apis:{crack:"非官方",official:"官方"},order_by:"排序",order_bys:{name:"名稱",size:"大小",time:"時間"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},refresh_token:"刷新令牌",root_folder_path:"根資料夾路徑"},BaiduPhoto:{album_id:"相簿ID",client_id:"客户端ID",client_secret:"客户端密钥",refresh_token:"刷新令牌",show_type:"展示類型",show_types:{root:"根",root_only_album:"僅根目錄下相簿",root_only_file:"僅根目錄下檔案"}},Cloudreve:{address:"地址",password:"密碼",root_folder_path:"根資料夾路徑",username:"用戶名"},FTP:{address:"地址",password:"密碼",root_folder_path:"根資料夾路徑",username:"用戶名"},GoogleDrive:{chunk_size:"分片大小","chunk_size-tips":"上傳分塊大小 (單位： MB)",client_id:"客户端ID",client_secret:"客户端密钥",order_by:"排序","order_by-tips":"例如:folder,name,modifiedTime",order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},refresh_token:"刷新令牌",root_folder_id:"根資料夾ID"},GooglePhoto:{client_id:"客户端ID",client_secret:"客户端密钥",refresh_token:"刷新令牌",root_folder_id:"根資料夾ID",show_archive:"顯示歸檔"},Lanzou:{baseUrl:"基本URL","baseUrl-tips":"檔案操作的基本URL",cookie:"Cookie","cookie-tips":"大約15天有效，如使用shareUrl則忽略",repair_file_info:"修復檔案信息","repair_file_info-tips":"啟用WebDAV才可使用此功能",root_folder_id:"根資料夾ID",shareUrl:"分享链接","shareUrl-tips":"用於獲取分享頁面",share_password:"分享密碼",type:"類型",types:{cookie:"Cookie",url:"链接"}},Local:{mkdir_perm:"創建資料夾許可",root_folder_path:"根資料夾路徑",show_hidden:"顯示隱藏","show_hidden-tips":"顯示隱藏目錄以及檔",thumbnail:"縮略圖","thumbnail-tips":"啟用縮略圖"},MediaTrack:{access_token:"訪問令牌",order_by:"排序",order_bys:{size:"大小",title:"名稱",updated_at:"修改時間"},order_desc:"降序排列",project_id:"項目ID",root_folder_id:"根資料夾ID"},Mega_nz:{email:"郵箱",password:"密碼"},Onedrive:{chunk_size:"分片大小","chunk_size-tips":"上傳分塊大小 (單位： MB)",client_id:"客户端ID",client_secret:"客户端密钥",is_sharepoint:"是否Sharepoint",redirect_uri:"重定向Uri",refresh_token:"刷新令牌",region:"地區",regions:{cn:"世紀互聯",de:"德國版",global:"全域設定",us:"美國版"},root_folder_path:"根資料夾路徑",site_id:"網站ID"},PikPak:{password:"密碼",root_folder_id:"根資料夾ID",username:"用戶名"},PikPakShare:{password:"密碼",root_folder_id:"根資料夾ID",share_id:"分享ID",share_pwd:"分享密碼",username:"用戶名"},Quark:{cookie:"Cookie",order_by:"排序",order_bys:{file_name:"檔案名稱",file_type:"檔案類型",none:"無",updated_at:"修改時間"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},root_folder_id:"根資料夾ID"},S3:{access_key_id:"訪問密钥 Id",bucket:"存儲桶",custom_host:"自定義HOST",endpoint:"Endpoint",force_path_style:"強制路徑樣式",list_object_version:"列出對象版本",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"占位檔名",region:"地區",root_folder_path:"根資料夾路徑",secret_access_key:"安全訪問密钥",sign_url_expire:"簽名链接有效期"},SFTP:{address:"地址",password:"密碼",private_key:"私密金鑰",root_folder_path:"根資料夾路徑",username:"用戶名"},SMB:{address:"地址",password:"密碼",root_folder_path:"根資料夾路徑",share_name:"分享名稱",username:"用戶名"},Seafile:{address:"地址",password:"密碼",repoId:"資料庫ID",root_folder_path:"根資料夾路徑",username:"用戶名"},Teambition:{cookie:"Cookie",order_by:"排序",order_bys:{created:"創建時間",fileName:"檔名",fileSize:"文件大小",updated:"修改時間"},order_direction:"排序方式",order_directions:{Asc:"升序",Desc:"降序"},project_id:"項目ID",region:"地區",regions:{china:"中國",international:"國際版"},root_folder_id:"根資料夾ID"},Terabox:{cookie:"Cookie",download_api:"下載介面",download_apis:{crack:"非官方",official:"官方"},order_by:"排序",order_bys:{name:"名稱",size:"大小",time:"時間"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},root_folder_path:"根資料夾路徑"},Thunder:{captcha_token:"驗證碼",password:"密碼",root_folder_id:"根資料夾ID",username:"用戶名"},ThunderExpert:{algorithms:"算法","algorithms-tips":"簽名類型是用戶名,此為必填項",captcha_sign:"驗證碼簽名","captcha_sign-tips":"簽名類型是驗證碼簽名,此為必填項",captcha_token:"驗證碼",client_id:"客户端ID",client_secret:"客户端密钥",client_version:"客户端版本",device_id:"設備id",download_user_agent:"下載用戶代理",login_type:"登入類型",login_types:{refresh_token:"刷新令牌",user:"用戶名"},package_name:"包名",password:"密碼","password-tips":"登入類型是用戶名,此為必填項",refresh_token:"刷新令牌","refresh_token-tips":"登入類型是刷新令牌,此為必填項",root_folder_id:"根資料夾ID",sign_type:"簽名類型",sign_types:{algorithms:"算法",captcha_sign:"驗證碼簽名"},timestamp:"時間戳","timestamp-tips":"簽名類型是驗證碼簽名,此為必填項",use_video_url:"使用視頻url",user_agent:"用戶代理",username:"用戶名","username-tips":"登入類型是用戶名,此為必填項"},USS:{bucket:"存儲桶",endpoint:"Endpoint",operator_name:"操作員名稱",operator_password:"操作員密碼",root_folder_path:"根資料夾路徑",sign_url_expire:"簽名链接有效期"},Virtual:{max_file_size:"最大文件大小",min_file_size:"最小文件大小",num_file:"檔案數量",num_folder:"資料夾數量",root_folder_path:"根資料夾路徑"},WebDav:{address:"地址",password:"密碼",root_folder_path:"根資料夾路徑",username:"用戶名",vendor:"供應商",vendors:{other:"其他",sharepoint:"Sharepoint"}},YandexDisk:{client_id:"客户端ID",client_secret:"客户端密钥",order_by:"排序",order_bys:{created:"創建時間",modified:"修改時間",name:"名稱",path:"路徑",size:"大小"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},refresh_token:"刷新令牌",root_folder_path:"根資料夾路徑"},config:{"115 Cloud":{},"123Pan":{},"139Yun":{},"189Cloud":{},"189CloudPC":{},"AList V2":{},"AList V3":{},Aliyundrive:{alert:"此加載方式可能有一個死迴圈錯誤。 \n已廢棄，不再維護，並將在未來的版本中删除。 \n建議使用官方的阿裡雲盤Open。"},AliyundriveOpen:{},AliyundriveShare:{},BaiduNetdisk:{},BaiduPhoto:{},Cloudreve:{},FTP:{},GoogleDrive:{},GooglePhoto:{},Lanzou:{},Local:{},MediaTrack:{},Mega_nz:{},Onedrive:{},PikPak:{},PikPakShare:{},Quark:{},S3:{},SFTP:{},SMB:{},Seafile:{},Teambition:{},Terabox:{},Thunder:{},ThunderExpert:{},USS:{},Virtual:{},WebDav:{},YandexDisk:{}},drivers:{"115 Cloud":"115 網盤","123Pan":"123雲盤","139Yun":"中國移動雲盤","189Cloud":"天翼雲盤","189CloudPC":"天翼雲盤用戶端","AList V2":"AList V2","AList V3":"AList V3",Aliyundrive:"阿裡雲盤",AliyundriveOpen:"阿裡雲盤開放平臺",AliyundriveShare:"阿裡雲盤分享",BaiduNetdisk:"百度網盤",BaiduPhoto:"一刻相册",Cloudreve:"Cloudreve",FTP:"FTP",GoogleDrive:"Google雲盤",GooglePhoto:"Google相册",Lanzou:"藍奏雲",Local:"本機存儲",MediaTrack:"分秒幀",Mega_nz:"Mega 網盤",Onedrive:"Onedrive",PikPak:"PikPak",PikPakShare:"PikPak分享",Quark:"誇克",S3:"對象存儲",SFTP:"SFTP",SMB:"SMB",Seafile:"Seafile",Teambition:"Teambition網盤",Terabox:"Terabox",Thunder:"迅雷",ThunderExpert:"迅雷專家版",USS:"又拍雲存儲",Virtual:"虛擬存儲",WebDav:"WebDav",YandexDisk:"Yandex網盤"}},a={refresh:"刷新",add:"添加",edit:"編輯",delete:"刪除",save:"保存",update:"更新",copied:"已復製",delete_success:"刪除成功",save_success:"保存成功",update_success:"更新成功",choose:"選擇",confirm:"確認",cancel:"取消",delete_confirm:"你確認要刪除[{{name}}]?",operations:"操作",yes:"是",no:"否",clear:"清除",choose_folder:"選擇資料夾",choose_or_input_path:"選擇文件夾或輸入路徑",disable:"禁用",enable:"啟用",ok:"確定",back:"返回",have_account:"已有賬號？",go_login:"轉到登錄",close:"關閉",no_support_now:"暫不支持",empty_input:"請輸入"},t={obj:{name:"名稱",size:"大小",modified:"修改時間"},preview:{download:"下載",failed_load_img:"載入圖像失敗",open_with:"使用... 打開",install:"安裝",installing:"正在安裝"},layouts:{list:"清單視圖",grid:"網格視圖",image:"圖片視圖"},no_images:"當前資料夾中無圖像",load_more:"加載更多",no_more:"沒有更多了",input_password:"請輸入密碼",toolbar:{more:"更多",refresh:"刷新",toggle_theme:"切換主題",switch_lang:"切換語言",toggle_checkbox:"開關復選框",rename:"重命名",input_new_name:"輸入一個新名稱","only_one-tips":"只能選擇一個對象重命名",move:"移動",copy:"複製",choose_dst_folder:"選擇目標文件夾",delete:"刪除","delete-tips":"確定要刪除所選對象嗎?",copy_link:"復製鏈接",preview_page:"預覽頁面",down_link:"下載鏈接",encode_down_link:"編碼下載鏈接",mkdir:"新建文件夾",input_dir_name:"輸入文件夾名稱",new_file:"新建文件",input_filename:"輸入文件名",cancel_select:"取消選擇",offline_download:"離線下載","offline_download-tips":"每行一條連結",download:"下載",batch_download:"批量下载",package_download:"打包下载",package_download_disabled:"打包下載已禁用",send_aria2:"發送到aria2",aria2_not_set:"请设置 aria2 rpc url",send_aria2_success:"成功發送到aria2","pre_package_download-tips":"在瀏覽器中使用streamsaver而不是服務器來進行包下載需要相應的存儲支持cors，而不支持的存儲將失敗。","package_download-tips":"正在下載，請稍候不要關閉頁面",upload:"上傳",local_settings:"本地設置"},upload:{add_as_task:"添加為任務","upload-tips":"拖動文件到此處以上傳，或點擊：",release:"松開以上傳",no_files_drag:"沒有檔案被拖入。",only_files_or_one_folder:"每次只能拖動檔或一個資料夾。",upload_files:"選擇文件",upload_folder:"選擇文件夾",pending:"等待中",uploading:"上傳中",backending:"正在後臺上傳",success:"成功",error:"錯誤",back:"返回上傳",clear_done:"清空完成"},local_settings:{aria2_rpc_url:"Aria2 RPC 鏈接",aria2_rpc_secret:"Aria2 RPC 密鑰",aria2_dir:"Aria2 下載目錄"},package_download:{current_status:"當前狀態",initializing:"正在初始化",fetching_struct:"正在獲取文件夾結構",fetching_struct_failed:"獲取文件夾結構失敗",downloading:"下載文件中，不要關閉或刷新頁面",failed:"打包下載失敗",success:"下載完成"},footer:{powered_by:"Powered by AList",manage:"管理"},search:{search:"搜索",no_result:"暫無結果"},fetching_settings_failed:"獲取設定失敗: ",get_current_user_failed:"獲取當前用戶失敗: ","Loading storage, please wait":"請稍後，正在加載儲存"},s={search_index:"搜索索引",current:"當前索引",build:"構建索引",rebuild:"重建索引",paths_to_update:"要更新索引的路徑",max_depth:"最大深度",update:"更新索引",obj_count:"對象計數",last_done_time:"上次完成時間",unknown:"未知",stop:"停止",clear:"清除",error:"錯誤"},d={login_to:"登錄到","username-tips":"輸入您的用戶名","password-tips":"輸入您的密碼","otp-tips":"輸入您的 OTP 代碼",remember:"記住我的登錄資料",forget:"忘記密碼？",forget_url:"https://alist.nn.ci/faq/howto.html#how-to-get-password-if-i-forget-it",clear:"清除",login:"登錄",use_guest:"以遊客身份瀏覽",success:"登錄成功"},_={sidemenu:{dashboard:"控制面板",settings:"設置",site:"站點",style:"樣式",preview:"預覽",global:"全域設定",other:"其他",users:"用戶",storages:"存储",metas:"元信息",profile:"配置文件",about:"關於",tasks:"任務",aria2:"Aria2",upload:"上傳",copy:"複製","backup-restore":"備份 & 還原",home:"主頁",indexes:"索引",github:"Github",qbit:"qBittorrent",docs:"檔案"},title:"後臺管理",not_admin:"你不是管理員，請使用管理員賬戶登錄。",logout_success:"登錄成功",send:"發送",receive:"接收",received_msgs:"收到的消息","add_storage-tips":"您可能需要在新打開的選項卡中填寫一些信息。","messenger-tips":"您可能需要在這個標簽頁中按提示填寫一些信息。"},n={path:"路徑",password:"密碼",write:"寫入",hide:"隱藏",readme:"說明",apply_sub:"應用到子文件夾",hide_help:"每行一個正則表達式",readme_help:"支持Markdown内容或Markdown链接"},l={allow_indexed:"允許索引",announcement:"站點公告",aria2_secret:"Aria2 密鑰",aria2_uri:"Aria2地址",audio_autoplay:"自動播放音頻",audio_cover:"音頻封面",audio_types:"音頻類型",auto_update_index:"自動更新索引",customize_body:"自定義內容",customize_head:"自定義頭部",default_page_size:"默認每頁數量",external_previews:"外部預覽",favicon:"網站圖標",filename_char_mapping:"文件名字符映射",forward_direct_link_params:"轉發直鏈參數",github_client_id:"Github Oauth應用用戶端ID",github_client_secrets:"Github Oauth應用用戶端機密",github_login_enabled:"啟用Github登入",hide_files:"隱藏文件",home_container:"主容器",home_containers:{hope_container:"Hope 容器",max_980px:"最大 980px"},home_icon:"首頁圖標",iframe_previews:"Iframe 預覽",ignore_paths:"忽略路徑","ignore_paths-tips":"每行一條路徑",image_types:"圖片類型",index_progress:"索引進度",link_expiration:"直鏈有效期",logo:"Logo",main_color:"主顏色",max_index_depth:"最大索引深度","max_index_depth-tips":"索引的最大深度",ocr_api:"Ocr接口",package_download:"打包下載",pagination_type:"分頁類型",pagination_types:{all:"全部",auto_load_more:"自動加載更多",load_more:"加載更多",pagination:"分頁"},privacy_regs:"隱私內容正則表達式",proxy_ignore_headers:"代理忽略頭部",proxy_types:"代理類型",qbittorrent_url:"Qbittorrent链接",search_index:"搜索索引",search_indexs:{bleve:"Bleve",database:"數據庫",database_non_full_text:"數據庫(非全文搜索)",none:"無"},settings_layout:"設定佈局",settings_layouts:{list:"清單",responsive:"響應式"},sign_all:"簽名所有",site_title:"網站標題",text_types:"文本類型",token:"令牌",version:"版本",video_autoplay:"自動播放視頻",video_types:"視頻類型",logo_text:"文字Logo",site_beian:"備案號",contact_us:"聯繫我們"},c={aria2:"Aria2",aria2_version:"Aria2 版本：",set_aria2:"設置aria2",copy_token:"復製令牌",reset_token:"重置令牌",reset_token_success:"重置令牌成功",unknown_type:"未知類型",set_qbit:"設置qBittorrent"},p={common:{start_load_success:"開始加載",load_all:"重新加載全部",mount_path:"掛載路徑",driver:"驅動",order:"排序","order-tips":"用於排序",status:"狀態",remark:"備註",cache_expiration:"緩存過期時間","cache_expiration-tips":"此存儲的緩存過期時間(分鐘)",down_proxy_url:"下載代理URL",web_proxy:"Web代理",webdav_policy:"WebDAV 策略",webdav_policys:{"302_redirect":"302重定向",use_proxy_url:"使用代理地址",native_proxy:"本地代理"},order_by:"排序",order_bys:{name:"名稱",size:"大小",modified:"修改時間"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},extract_folder:"選取資料夾",extract_folders:{front:"選取到最前",back:"選取到最後"}}},u={aria2_down:"下載文件到本地機器",aria2_transfer:"將下載的文件傳輸到相應的存儲",qbit_down:"下載文件到本地機器",qbit_transfer:"將下載的文件傳輸到相應的存儲",upload:"上傳文件到對應的存儲",copy:"將文件從存儲複製到另一個存儲",done:"已完成",undone:"執行中",pending:"等待中",running:"執行中",canceling:"正在取消...",succeeded:"成功",canceled:"取消",errored:"錯誤"},h={permissions:{see_hides:"可以看到隱藏",access_without_password:"無密碼訪問",offline_download:"添加離線下載任務",write:"創建目錄或上傳",rename:"重命名",move:"移動",copy:"複製",delete:"刪除",webdav_read:"Webdav 读取",webdav_manage:"Webdav 管理文件"},username:"用戶名",password:"密碼",base_path:"基本路徑",role:"角色",permission:"權限",disabled:"停用",available:"已啟用",update_profile:"更新配置文件",update_profile_success:"更新個人資料成功，請重新登錄。",change_username:"修改用戶名稱",change_password:"變更密碼","change_password-tips":"如果您不想更改密碼，請保持為空",enable_2fa:"啟用雙重驗證","2fa_already_enabled":"雙重驗證已启用",scan_qr:"掃描二維碼保存秘鑰",input_code:"請輸入您的雙重驗證應用程式中的驗證碼",verify:"驗證","guest-tips":"您正在作為訪客訪問。",modify_nothing:"所以您不能在管理頁面中修改任何內容。",github_login:"Github登入",connect_github:"綁定Github",disconnect_github:"解綁Github"},f=Object.assign({"./br.json":r,"./drivers.json":i,"./global.json":a,"./home.json":t,"./index.json":o,"./indexes.json":s,"./login.json":d,"./manage.json":_,"./metas.json":n,"./settings.json":l,"./settings_other.json":c,"./storages.json":p,"./tasks.json":u,"./users.json":h}),m=e("default",{});for(var g in f)m[g.split("/")[1].split(".")[0]]=f[g]}}}));
