import{bP as s}from"./index.319382ae.js";const r="Backup",i="Restore",a="Start backup",n="Finish backup",d="[ {{item}} ] Backup was successful",l="[ {{item}} ] Backup failed",c="No file selected",_="Start restore",p="Finish restore",u="[ {{item}} ] Restore was successful",h="[ {{item}} ] Restore failed",m="Override",f={backup:r,restore:i,start_backup:a,finish_backup:n,success_backup_item:d,failed_backup_item:l,no_file:c,start_restore:_,finish_restore:p,success_restore_item:u,failed_restore_item:h,override:m},g={paths:"Paths"},y={internal_upload:"Internal upload",order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},rapid_upload:"Rapid upload",refresh_token:"Refresh token",root_folder_id:"Root folder id"},b={client_id:"Client id","client_id-tips":"Keep it empty if you don't have one",client_secret:"Client secret","client_secret-tips":"Keep it empty if you don't have one",drive_type:"Drive type",drive_types:{backup:"Backup",default:"Default",resource:"Resource"},internal_upload:"Internal upload","internal_upload-tips":"If you are using Aliyun ECS is located in Beijing, you can turn it on to boost the upload speed",livp_download_format:"Livp download format",livp_download_formats:{jpeg:"Jpeg",mov:"Mov"},oauth_token_url:"Oauth token url",order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},rapid_upload:"Rapid upload","rapid_upload-tips":"If you enable this option, the file will be uploaded to the server first, so the progress will be incorrect",refresh_token:"Refresh token",remove_way:"Remove way",remove_ways:{delete:"Delete",trash:"Trash"},root_folder_id:"Root folder id"},w={order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},refresh_token:"Refresh token",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd"},k={client_id:"Client id",client_secret:"Client secret",custom_crack_ua:"Custom crack ua",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path",upload_api:"Upload api",upload_thread:"Upload thread","upload_thread-tips":"1<=thread<=32"},v={album_id:"Album id",client_id:"Client id",client_secret:"Client secret",delete_origin:"Delete origin",refresh_token:"Refresh token",show_type:"Show type",show_types:{root:"Root",root_only_album:"Root only album",root_only_file:"Root only file"},upload_thread:"Upload thread","upload_thread-tips":"1<=thread<=32"},S={BDUSS:"BDUSS",pwd:"Pwd",root_folder_path:"Root folder path",surl:"Surl"},P={address:"Address",cookie:"Cookie",custom_ua:"Custom ua",password:"Password",root_folder_path:"Root folder path",username:"Username"},C={directory_name_encryption:"Directory name encryption",directory_name_encryptions:{false:"False",true:"True"},encrypted_suffix:"Encrypted suffix","encrypted_suffix-tips":"for advanced user only! encrypted files will have this suffix",filename_encoding:"Filename encoding","filename_encoding-tips":"for advanced user only!",filename_encodings:{base32:"Base32",base32768:"Base32768",base64:"Base64"},filename_encryption:"Filename encryption",filename_encryptions:{obfuscate:"Obfuscate",off:"Off",standard:"Standard"},password:"Password","password-tips":"the main password",remote_path:"Remote path","remote_path-tips":"This is where the encrypted data stores",salt:"Salt","salt-tips":"If you don't know what is salt, treat it as a second password. Optional but recommended"},x={client_id:"Client id","client_id-tips":"Keep it empty if you don't have one",client_secret:"Client secret","client_secret-tips":"Keep it empty if you don't have one",oauth_token_url:"Oauth token url",refresh_token:"Refresh token",root_folder_path:"Root folder path"},A={address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username"},R={chunk_size:"Chunk size","chunk_size-tips":"chunk size while uploading (unit: MB)",client_id:"Client id",client_secret:"Client secret",order_by:"Order by","order_by-tips":"such as: folder,name,modifiedTime",order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_id:"Root folder id"},U={client_id:"Client id",client_secret:"Client secret",refresh_token:"Refresh token",root_folder_id:"Root folder id",show_archive:"Show archive"},T={account:"Account",baseUrl:"BaseUrl","baseUrl-tips":"basic URL for file operation",cookie:"Cookie","cookie-tips":"about 15 days valid, ignore if shareUrl is used",password:"Password",repair_file_info:"Repair file info","repair_file_info-tips":"To use webdav, you need to enable it",root_folder_id:"Root folder id",shareUrl:"ShareUrl","shareUrl-tips":"used to get the sharing page",share_password:"Share password",type:"Type",types:{account:"Account",cookie:"Cookie",url:"Url"}},D={mkdir_perm:"Mkdir perm",root_folder_path:"Root folder path",show_hidden:"Show hidden","show_hidden-tips":"show hidden directories and files",thumb_cache_folder:"Thumb cache folder",thumbnail:"Thumbnail","thumbnail-tips":"enable thumbnail"},O={access_token:"Access token",order_by:"Order by",order_bys:{size:"Size",title:"Title",updated_at:"Updated at"},order_desc:"Order desc",project_id:"Project id",root_folder_id:"Root folder id"},z={email:"Email",password:"Password"},F={cloud_id:"Cloud id",device_info:"Device info",order_by:"Order by",order_bys:{filename:"Filename",filesize:"Filesize",lastOpTime:"LastOpTime"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",phone:"Phone",root_folder_id:"Root folder id",upload_thread:"Upload thread","upload_thread-tips":"1<=thread<=32"},L={chunk_size:"Chunk size",client_id:"Client id",client_secret:"Client secret",is_sharepoint:"Is sharepoint",redirect_uri:"Redirect uri",refresh_token:"Refresh token",region:"Region",regions:{cn:"Cn",de:"De",global:"Global",us:"Us"},root_folder_path:"Root folder path",site_id:"Site id"},B={chunk_size:"Chunk size",client_id:"Client id",client_secret:"Client secret",email:"Email",region:"Region",regions:{cn:"Cn",de:"De",global:"Global",us:"Us"},root_folder_path:"Root folder path",tenant_id:"Tenant id"},M={disable_media_link:"Disable media link",password:"Password",root_folder_id:"Root folder id",username:"Username"},N={password:"Password",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd",username:"Username"},I={cookie:"Cookie",order_by:"Order by",order_bys:{file_name:"File name",file_type:"File type",none:"None",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id"},j={access_key_id:"Access key id",add_filename_to_disposition:"Add filename to disposition","add_filename_to_disposition-tips":"Add filename to Content-Disposition header.",bucket:"Bucket",custom_host:"Custom host",endpoint:"Endpoint",force_path_style:"Force path style",list_object_version:"List object version",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"Placeholder",region:"Region",remove_bucket:"Remove bucket","remove_bucket-tips":"Remove bucket name from path when using custom host.",root_folder_path:"Root folder path",secret_access_key:"Secret access key",session_token:"Session token",sign_url_expire:"Sign url expire"},q={address:"Address",password:"Password",private_key:"Private key",root_folder_path:"Root folder path",username:"Username"},E={address:"Address",password:"Password",root_folder_path:"Root folder path",share_name:"Share name",username:"Username"},V={address:"Address",password:"Password",repoId:"RepoId",root_folder_path:"Root folder path",username:"Username"},W={cookie:"Cookie",order_by:"Order by",order_bys:{created:"Created",fileName:"FileName",fileSize:"FileSize",updated:"Updated"},order_direction:"Order direction",order_directions:{Asc:"Asc",Desc:"Desc"},project_id:"Project id",region:"Region",regions:{china:"China",international:"International"},root_folder_id:"Root folder id",use_s3_upload_method:"Use s3 upload method"},G={cookie:"Cookie",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},js_token:"Js token",order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_path:"Root folder path"},Y={captcha_token:"Captcha token",password:"Password",root_folder_id:"Root folder id",username:"Username"},Q={algorithms:"Algorithms","algorithms-tips":"sign type is algorithms,this is required",captcha_sign:"Captcha sign","captcha_sign-tips":"sign type is captcha_sign,this is required",captcha_token:"Captcha token",client_id:"Client id",client_secret:"Client secret",client_version:"Client version",device_id:"Device id",download_user_agent:"Download user agent",login_type:"Login type",login_types:{refresh_token:"Refresh token",user:"User"},package_name:"Package name",password:"Password","password-tips":"login type is user,this is required",refresh_token:"Refresh token","refresh_token-tips":"login type is refresh_token,this is required",root_folder_id:"Root folder id",sign_type:"Sign type",sign_types:{algorithms:"Algorithms",captcha_sign:"Captcha sign"},timestamp:"Timestamp","timestamp-tips":"sign type is captcha_sign,this is required",use_video_url:"Use video url",user_agent:"User agent",username:"Username","username-tips":"login type is user,this is required"},H={AUSHELLPORTAL:"AUSHELLPORTAL",apikey:"Apikey",root_folder_id:"Root folder id"},K={cookie:"Cookie",order_by:"Order by",order_bys:{file_name:"File name",file_type:"File type",none:"None",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id"},$={anti_theft_chain_token:"Anti theft chain token",bucket:"Bucket",endpoint:"Endpoint",operator_name:"Operator name",operator_password:"Operator password",root_folder_path:"Root folder path",sign_url_expire:"Sign url expire"},J={head_size:"Head size","head_size-tips":"Use head method to get file size, but it may be failed.",url_structure:"Url structure","url_structure-tips":`structure:FolderName:
  [FileName:][FileSize:][Modified:]Url`},X={max_file_size:"Max file size",min_file_size:"Min file size",num_file:"Num file",num_folder:"Num folder",root_folder_path:"Root folder path"},Z={address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username",vendor:"Vendor",vendors:{other:"Other",sharepoint:"Sharepoint"}},ee={cookies:"Cookies",order_by:"Order by",order_bys:{name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id",upload_thread:"Upload thread","upload_thread-tips":"4<=thread<=32"},oe={access_token:"Access token",family_id:"Family id","family_id-tips":"Keep it empty if you want to use your personal drive",refresh_token:"Refresh token",root_folder_id:"Root folder id",sort_rule:"Sort rule",sort_rules:{name_asc:"Name asc",name_desc:"Name desc",size_asc:"Size asc",size_desc:"Size desc",time_asc:"Time asc",time_desc:"Time desc"}},te={client_id:"Client id",client_secret:"Client secret",order_by:"Order by",order_bys:{created:"Created",modified:"Modified",name:"Name",path:"Path",size:"Size"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path"},se={"115 Cloud":{},"123Pan":{},"123PanLink":{},"123PanShare":{},"139Yun":{},"189Cloud":{alert:"You can try to use 189PC driver if this driver does not work."},"189CloudPC":{},"AList V2":{},"AList V3":{},Alias:{},Aliyundrive:{alert:`There may be an infinite loop bug in this driver.
Deprecated, no longer maintained and will be removed in a future version.
We recommend using the official driver AliyundriveOpen.`},AliyundriveOpen:{},AliyundriveShare:{},BaiduNetdisk:{},BaiduPhoto:{},BaiduShare:{},Cloudreve:{},Crypt:{},Dropbox:{},FTP:{},GoogleDrive:{},GooglePhoto:{},"IPFS API":{},Lanzou:{},Local:{},MediaTrack:{},Mega_nz:{},MoPan:{alert:"This network disk may store your password in clear text. Please set your password carefully"},Onedrive:{},OnedriveAPP:{},PikPak:{},PikPakShare:{},Quark:{},S3:{},SFTP:{},SMB:{},Seafile:{},Teambition:{},Terabox:{},Thunder:{},ThunderExpert:{},Trainbit:{},UC:{},USS:{},UrlTree:{},Virtual:{},WebDav:{},WeiYun:{},WoPan:{},YandexDisk:{}},re={"115 Cloud":"115 Cloud","123Pan":"123Pan","123PanLink":"123PanLink","123PanShare":"123PanShare","139Yun":"139Yun","189Cloud":"189Cloud","189CloudPC":"189CloudPC","AList V2":"AList V2","AList V3":"AList V3",Alias:"Alias",Aliyundrive:"Aliyundrive",AliyundriveOpen:"AliyundriveOpen",AliyundriveShare:"AliyundriveShare",BaiduNetdisk:"BaiduNetdisk",BaiduPhoto:"BaiduPhoto",BaiduShare:"BaiduShare",Cloudreve:"Cloudreve",Crypt:"Crypt",Dropbox:"Dropbox",FTP:"FTP",GoogleDrive:"GoogleDrive",GooglePhoto:"GooglePhoto","IPFS API":"IPFS API",Lanzou:"Lanzou",Local:"Local",MediaTrack:"MediaTrack",Mega_nz:"Mega nz",MoPan:"MoPan",Onedrive:"Onedrive",OnedriveAPP:"OnedriveAPP",PikPak:"PikPak",PikPakShare:"PikPakShare",Quark:"Quark",S3:"S3",SFTP:"SFTP",SMB:"SMB",Seafile:"Seafile",Teambition:"Teambition",Terabox:"Terabox",Thunder:"Thunder",ThunderExpert:"ThunderExpert",Trainbit:"Trainbit",UC:"UC",USS:"USS",UrlTree:"UrlTree",Virtual:"Virtual",WebDav:"WebDav",WeiYun:"WeiYun",WoPan:"WoPan",YandexDisk:"YandexDisk"},ie={"115 Cloud":{cookie:"Cookie","cookie-tips":"one of QR code token and cookie required",page_size:"Page size","page_size-tips":"list api per page size of 115 driver",qrcode_token:"Qrcode token","qrcode_token-tips":"one of QR code token and cookie required",root_folder_id:"Root folder id"},"123Pan":{order_by:"Order by",order_bys:{file_name:"File name",size:"Size",update_at:"Update at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",root_folder_id:"Root folder id",username:"Username"},"123PanLink":{origin_urls:"Origin urls","origin_urls-tips":`structure:FolderName:
  [FileSize:][Modified:]Url`,private_key:"Private key",uid:"Uid",valid_duration:"Valid duration","valid_duration-tips":"minutes"},"123PanShare":{order_by:"Order by",order_bys:{file_name:"File name",size:"Size",update_at:"Update at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id",sharekey:"Sharekey",sharepassword:"Sharepassword"},"139Yun":{authorization:"Authorization",cloud_id:"Cloud id",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"}},"189Cloud":{cookie:"Cookie","cookie-tips":"Fill in the cookie if need captcha",password:"Password",root_folder_id:"Root folder id",username:"Username"},"189CloudPC":{family_id:"Family id",no_use_ocr:"No use ocr",order_by:"Order by",order_bys:{filename:"Filename",filesize:"Filesize",lastOpTime:"LastOpTime"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",rapid_upload:"Rapid upload",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"},upload_method:"Upload method",upload_methods:{old:"Old",rapid:"Rapid",stream:"Stream"},upload_thread:"Upload thread","upload_thread-tips":"1<=thread<=32",username:"Username",validate_code:"Validate code"},"AList V2":{access_token:"Access token",password:"Password",root_folder_path:"Root folder path",url:"Url"},"AList V3":{meta_password:"Meta password",password:"Password",root_folder_path:"Root folder path",token:"Token",url:"Url",username:"Username"},Alias:g,Aliyundrive:y,AliyundriveOpen:b,AliyundriveShare:w,BaiduNetdisk:k,BaiduPhoto:v,BaiduShare:S,Cloudreve:P,Crypt:C,Dropbox:x,FTP:A,GoogleDrive:R,GooglePhoto:U,"IPFS API":{endpoint:"Endpoint",gateway:"Gateway",root_folder_path:"Root folder path"},Lanzou:T,Local:D,MediaTrack:O,Mega_nz:z,MoPan:F,Onedrive:L,OnedriveAPP:B,PikPak:M,PikPakShare:N,Quark:I,S3:j,SFTP:q,SMB:E,Seafile:V,Teambition:W,Terabox:G,Thunder:Y,ThunderExpert:Q,Trainbit:H,UC:K,USS:$,UrlTree:J,Virtual:X,WebDav:Z,WeiYun:ee,WoPan:oe,YandexDisk:te,config:se,drivers:re},ae="Refresh",ne="Add",de="Edit",le="Save",ce="Update",_e="Copied",pe="Deleted successfully",ue="Saved successfully",he="Updated successfully",me="Choose",fe="Confirm",ge="Cancel",ye="Are you sure you want to delete [{{name}}]?",be="Operations",we="Yes",ke="No",ve="Clear",Se="Select folder",Pe="Select folder or input path",Ce="Disable",xe="Enable",Ae="OK",Re="Back",Ue="Have an account?",Te="Go to login",De="Close",Oe="Not currently supported",ze="Please enter",Fe={refresh:ae,add:ne,edit:de,delete:"Delete",save:le,update:ce,copied:_e,delete_success:pe,save_success:ue,update_success:he,choose:me,confirm:fe,cancel:ge,delete_confirm:ye,operations:be,yes:we,no:ke,clear:ve,choose_folder:Se,choose_or_input_path:Pe,disable:Ce,enable:xe,ok:Ae,back:Re,have_account:Ue,go_login:Te,close:De,no_support_now:Oe,empty_input:ze},Le={name:"Name",size:"Size",modified:"Modified"},Be={download:"Download",failed_load_img:"Failed to load image",open_with:"Open with ...",install:"Install",installing:"Installing","tr-install":"TrollStore","tr-installing":"TrollStore Installing",open_in_new_window:"Open in new window",auto_next:"Auto next"},Me={list:"List View",grid:"Grid View",image:"Image View"},Ne="No images in the current folder",Ie="Load more",je="No more",qe="Please input password",Ee={more:"More",refresh:"Refresh",toggle_theme:"Toggle Theme",switch_lang:"Switch Language",toggle_checkbox:"Toggle Checkbox",rename:"Rename",input_new_name:"Input new name","only_one-tips":"Only one object can be selected to rename",move:"Move",copy:"Copy",choose_dst_folder:"Select destination folder",delete:"Delete","delete-tips":"Are you sure to delete the selected object?",copy_link:"Copy link",preview_page:"Preview page",down_link:"Download link",encode_down_link:"Encode download link",mkdir:"New Folder",input_dir_name:"Input folder name",new_file:"New File",input_filename:"Input filename",cancel_select:"Cancel Select",offline_download:"Offline download","offline_download-tips":"One URL per line",download:"Download",batch_download:"Batch Download",package_download:"Package Download",package_download_disabled:"Package download is disabled",send_aria2:"Send to Aria2",aria2_not_set:"Please set aria2 rpc url",send_aria2_success:"Send to aria2 successfully","pre_package_download-tips":"Using streamsaver in the browser instead of the server for package download requires the corresponding storage to support cors, and the unsupported storage will fail.","package_download-tips":"Downloading, please wait don't close the page",upload:"Upload",local_settings:"Local Settings",recursive_move:"Recursive Move","recursive_move_directory-tips":"Are you sure you want to move all files in the current folder and its subfolders to the specified folder?",remove_empty_directory:"Remove Empty Folder","remove_empty_directory-tips":"Are you sure to delete all its empty subfolders?",batch_rename:"Batch Rename",regex_rename:"Regex Rename",sequential_renaming:"Sequential Rename",regex_rename_preview:"Changed Files",regex_rename_preview_old_name:"Old Name",regex_rename_preview_new_name:"New Name",regular_rename:"Regular expression file renaming. Input the source file name regular expression on the first line, and input the new file name regular expression on the second line.",sequential_renaming_desc:"The new file name will have a numerical starting value appended to it, and it will be displayed sequentially by adding 1 to the starting value. Enter the new file name on the first line and the starting value on the second line."},Ve={add_as_task:"Add as task","upload-tips":"Drag files here to upload, or click:",release:"Release to upload",no_files_drag:"No files were dragged in.",upload_files:"Choose Files",upload_folder:"Choose Folder",pending:"Pending",uploading:"Uploading",backending:"Uploading in the backend",success:"Success",error:"Error",back:"Back to Upload",clear_done:"Clear Done"},We={aria2_rpc_url:"Aria2 RPC URL",aria2_rpc_secret:"Aria2 RPC secret",aria2_dir:"Aria2 download directory",show_folder_in_image_view:"Show folder in image view",show_folder_in_image_view_options:{top:"Top",bottom:"Bottom",none:"None"},global_default_layout:"Global default layout",global_default_layout_options:{list:"List View",grid:"Grid View",image:"Image View"}},Ge={current_status:"Current Status",initializing:"Initializing",fetching_struct:"Fetching folder structure",fetching_struct_failed:"Failed to fetch folder structure",downloading:"Downloading files, don't close or refresh the page",failed:"Failed to package download",success:"Download completed"},Ye={powered_by:"Powered by AList",manage:"Manage"},Qe={search:"Search",no_result:"No result yet",scopes:{all:"All",folder:"Folder",file:"File"}},He="Failed fetching settings: ",Ke="Failed get current user: ",$e={obj:Le,preview:Be,layouts:Me,no_images:Ne,load_more:Ie,no_more:je,input_password:qe,toolbar:Ee,upload:Ve,local_settings:We,package_download:Ge,footer:Ye,search:Qe,fetching_settings_failed:He,get_current_user_failed:Ke,"Loading storage, please wait":"Loading storage, please wait"},Je="Search index",Xe="Current indexes",Ze="Build indexes",eo="Rebuild indexes",oo="Paths to update",to="Max depth",so="Update indexes",ro="Object count",io="Last done time",ao="Unknown",no="Stop",lo="Clear",co="Error",_o={search_index:Je,current:Xe,build:Ze,rebuild:eo,paths_to_update:oo,max_depth:to,update:so,obj_count:ro,last_done_time:io,unknown:ao,stop:no,clear:lo,error:co},po="Login to the",uo="Remember me",ho="Forget password?",mo="https://alist.nn.ci/faq/howto.html#how-to-get-password-if-i-forget-it",fo="Clear",go="Login",yo="Browse as a guest",bo="Login successfully",wo={login_to:po,"username-tips":"Input your username","password-tips":"Input your password","otp-tips":"Input your OTP Code",remember:uo,forget:ho,forget_url:mo,clear:fo,login:go,use_guest:yo,success:bo},ko={dashboard:"Dashboard",settings:"Settings",site:"Site",style:"Style",preview:"Preview",global:"Global",other:"Other",users:"Users",storages:"Storages",metas:"Metas",profile:"Profile",about:"About",tasks:"Tasks",aria2:"Aria2",upload:"Upload",copy:"Copy","backup-restore":"Backup & Restore",home:"Home",indexes:"Indexes",sso:"Single Sign-on",qbit:"qBittorrent",docs:"Documentation"},vo="Manage",So="You are not admin user, please login with admin account.",Po="Logout successfully",Co="Send",xo="Receive",Ao="Received messages",Ro={sidemenu:ko,title:vo,not_admin:So,logout_success:Po,send:Co,receive:xo,received_msgs:Ao,"add_storage-tips":"You may need to fill in some information in the newly opened tab.","messenger-tips":"You may need to fill in some information on this tab as prompted."},Uo="Path",To="Password",Do="Write",Oo="Hide",zo="Readme",Fo="Apply to sub folder",Lo="One regular expression per line",Bo="Support markdown content or markdown link",Mo={path:Uo,password:To,write:Do,hide:Oo,readme:zo,apply_sub:Fo,hide_help:Lo,readme_help:Bo},No="Allow indexed",Io="Allow mounted",jo="Announcement",qo="Aria2 secret",Eo="Aria2 uri",Vo="Audio autoplay",Wo="Audio cover",Go="Audio types",Yo="Auto update index",Qo="Customize body",Ho="Customize head",Ko="Default page size",$o="External previews",Jo="Favicon",Xo="Filename char mapping",Zo="Forward direct link params",et="Hide files",ot="Home container",tt={hope_container:"Hope container",max_980px:"Max 980px"},st="Home icon",rt="Iframe previews",it="Ignore paths",at="Image types",nt="Index progress",dt="Link expiration",lt="Logo",ct="Main color",_t="Max index depth",pt="Ocr api",ut="Package download",ht="Pagination type",mt={all:"All",auto_load_more:"Auto load more",load_more:"Load more",pagination:"Pagination"},ft="Privacy regs",gt="Proxy ignore headers",yt="Proxy types",bt="Qbittorrent seedtime",wt="Qbittorrent url",kt="Robots txt",vt="Search index",St={bleve:"Bleve",database:"Database",database_non_full_text:"Database non full text",none:"None"},Pt="Settings layout",Ct={list:"List",responsive:"Responsive"},xt="Sign all",At="Site title",Rt="Sso application name",Ut="Sso auto register",Tt="Sso client id",Dt="Sso client secret",Ot="Sso default dir",zt="Sso default permission",Ft="Sso endpoint name",Lt="Sso jwt public key",Bt="Sso login enabled",Mt="Sso login platform",Nt={Casdoor:"Casdoor",Dingtalk:"Dingtalk",Github:"Github",Google:"Google",Microsoft:"Microsoft",OIDC:"OIDC"},It="Sso organization name",jt="Text types",qt="Token",Et="Version",Vt="Video autoplay",Wt="Video types",Gt="Webauthn login enabled",Yt="Logo text",Qt="Beian",Ht="Customize About page content",Kt={allow_indexed:No,allow_mounted:Io,announcement:jo,aria2_secret:qo,aria2_uri:Eo,audio_autoplay:Vo,audio_cover:Wo,audio_types:Go,auto_update_index:Yo,customize_body:Qo,customize_head:Ho,default_page_size:Ko,external_previews:$o,favicon:Jo,filename_char_mapping:Xo,forward_direct_link_params:Zo,hide_files:et,home_container:ot,home_containers:tt,home_icon:st,iframe_previews:rt,ignore_paths:it,"ignore_paths-tips":"one path per line",image_types:at,index_progress:nt,link_expiration:dt,logo:lt,main_color:ct,max_index_depth:_t,"max_index_depth-tips":"max depth of index",ocr_api:pt,package_download:ut,pagination_type:ht,pagination_types:mt,privacy_regs:ft,proxy_ignore_headers:gt,proxy_types:yt,qbittorrent_seedtime:bt,qbittorrent_url:wt,robots_txt:kt,search_index:vt,search_indexs:St,settings_layout:Pt,settings_layouts:Ct,sign_all:xt,site_title:At,sso_application_name:Rt,sso_auto_register:Ut,sso_client_id:Tt,sso_client_secret:Dt,sso_default_dir:Ot,sso_default_permission:zt,sso_endpoint_name:Ft,sso_jwt_public_key:Lt,sso_login_enabled:Bt,sso_login_platform:Mt,sso_login_platforms:Nt,sso_organization_name:It,text_types:jt,token:qt,version:Et,video_autoplay:Vt,video_types:Wt,webauthn_login_enabled:Gt,logo_text:Yt,site_beian:Qt,contact_us:Ht},$t="Aria2",Jt="Aria2 Version:",Xt="Set aria2",Zt="Copy Token",es="Reset Token",os="Reset Token Successfully",ts="Unknown type",ss="Set qBittorrent",rs="qBittorrent",is={aria2:$t,aria2_version:Jt,set_aria2:Xt,copy_token:Zt,reset_token:es,reset_token_success:os,unknown_type:ts,set_qbit:ss,qbittorrent:rs},as={mount_path:"Mount Path","mount_path-tips":"The path you want to mount to, it is unique and cannot be repeated",driver:"Driver",order:"Order","order-tips":"Use to sort",status:"Status",remark:"Remark",cache_expiration:"Cache Expiration","cache_expiration-tips":"The cache expiration time for this storage(minutes)",down_proxy_url:"Download proxy URL",web_proxy:"Web proxy",webdav_policy:"WebDAV policy",webdav_policys:{"302_redirect":"302 redirect",use_proxy_url:"use proxy URL",native_proxy:"native proxy"},order_by:"Order by",order_bys:{name:"Name",size:"Size",modified:"Modified"},order_direction:"Order direction",order_directions:{asc:"Ascending",desc:"Descending"},extract_folder:"Extract folder",extract_folders:{front:"Extract to front",back:"Extract to back"},enable_sign:"Enable sign"},ns={start_load_success:"Start loading",load_all:"Reload All",filter_by_driver:"Filter by driver",table_layout:"Table layout"},ds={common:as,other:ns},ls="Download file to local machine",cs="Transfer downloaded file to corresponding storage",_s="Download file to local machine",ps="Transfer downloaded file to corresponding storage",us="Upload file to corresponding storage",hs="Copy file from a storage to another storage",ms="Completed",fs="Running",gs="Pending",ys="Running",bs="Canceling",ws="Succeeded",ks="Canceled",vs="Errored",Ss="Clear Succeeded",Ps="Retry",Cs={aria2_down:ls,aria2_transfer:cs,qbit_down:_s,qbit_transfer:ps,upload:us,copy:hs,done:ms,undone:fs,pending:gs,running:ys,canceling:bs,succeeded:ws,canceled:ks,errored:vs,clear_succeeded:Ss,retry:Ps},xs={see_hides:"Can see hides",access_without_password:"Access without password",offline_download:"Add offline download tasks",write:"Make dir or upload",rename:"Rename",move:"Move",copy:"Copy",delete:"Delete",webdav_read:"Webdav read",webdav_manage:"Webdav manage"},As="Username",Rs="Password",Us="Base path",Ts="Role",Ds="Permission",Os="Disabled",zs="Available",Fs="Update Profile",Ls="Update profile successfully, please re-login.",Bs="Change Username",Ms="Change Password",Ns="Confirm Password",Is="The password you input twice is not the same",js="Enable 2FA",qs="Cancel 2FA",Es="Cancel 2FA successfully",Vs="Scan the QR code to save the secret key",Ws="Or input the secret key manually",Gs="Input the code of your 2FA app",Ys="Verify",Qs="So you cannot modify anything in the manage page.",Hs="Single sign-on Login",Ks="Connect Single sign-on Platform",$s="Disconnect Single sign-on Platform",Js="WebAuthn",Xs="Add a Webauthn credential",Zs="Webauthn credential successfully added!",er="Webauthn is not supported in your browser or you are in an unsafe origin",or={permissions:xs,username:As,password:Rs,base_path:Us,role:Ts,permission:Ds,disabled:Os,available:zs,update_profile:Fs,update_profile_success:Ls,change_username:Bs,change_password:Ms,"change_password-tips":"Keep the password empty if you don't want to change it",confirm_password:Ns,"confirm_password-tips":"Repeat the password that you just input",confirm_password_not_same:Is,enable_2fa:js,cancel_2fa:qs,cancel_2fa_success:Es,"2fa_already_enabled":"2FA is already enabled",scan_qr:Vs,or_manual:Ws,input_code:Gs,verify:Ys,"guest-tips":"You are currently visiting as a guest.",modify_nothing:Qs,sso_login:Hs,connect_sso:Ks,disconnect_sso:$s,webauthn:Js,add_webauthn:Xs,add_webauthn_success:Zs,webauthn_not_supported:er},o=Object.assign({"./br.json":f,"./drivers.json":ie,"./global.json":Fe,"./home.json":$e,"./index.json":s,"./indexes.json":_o,"./login.json":wo,"./manage.json":Ro,"./metas.json":Mo,"./settings.json":Kt,"./settings_other.json":is,"./storages.json":ds,"./tasks.json":Cs,"./users.json":or}),tr={};for(const e in o){const t=e.split("/")[1].split(".")[0];tr[t]=o[e]}export{tr as default};
