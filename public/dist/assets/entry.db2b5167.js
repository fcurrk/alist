import{c7 as s}from"./index.bfb69936.js";const i="Backup",r="Restore",a="Start backup",n="Finish backup",d="[ {{item}} ] Backup was successful",l="[ {{item}} ] Backup failed",c="No file selected",_="Start restore",p="Finish restore",u="[ {{item}} ] Restore was successful",h="[ {{item}} ] Restore failed",m="Override",f="Leave empty if you don't need encryption",g="Encryption password",y="Wrong encryption password",b={backup:i,restore:r,start_backup:a,finish_backup:n,success_backup_item:d,failed_backup_item:l,no_file:c,start_restore:_,finish_restore:p,success_restore_item:u,failed_restore_item:h,override:m,encrypt_password_placeholder:f,encrypt_password:g,wrong_encrypt_password:y},w={paths:"Paths"},k={internal_upload:"Internal upload",order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},rapid_upload:"Rapid upload",refresh_token:"Refresh token",root_folder_id:"Root folder id"},v={client_id:"Client id","client_id-tips":"Keep it empty if you don't have one",client_secret:"Client secret","client_secret-tips":"Keep it empty if you don't have one",drive_type:"Drive type",drive_types:{backup:"Backup",default:"Default",resource:"Resource"},internal_upload:"Internal upload","internal_upload-tips":"If you are using Aliyun ECS is located in Beijing, you can turn it on to boost the upload speed",livp_download_format:"Livp download format",livp_download_formats:{jpeg:"Jpeg",mov:"Mov"},oauth_token_url:"Oauth token url",order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},rapid_upload:"Rapid upload","rapid_upload-tips":"If you enable this option, the file will be uploaded to the server first, so the progress will be incorrect",refresh_token:"Refresh token",remove_way:"Remove way",remove_ways:{delete:"Delete",trash:"Trash"},root_folder_id:"Root folder id"},S={order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},refresh_token:"Refresh token",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd"},P={client_id:"Client id",client_secret:"Client secret",custom_crack_ua:"Custom crack ua",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path",upload_api:"Upload api",upload_thread:"Upload thread","upload_thread-tips":"1<=thread<=32"},C={album_id:"Album id",client_id:"Client id",client_secret:"Client secret",delete_origin:"Delete origin",refresh_token:"Refresh token",show_type:"Show type",show_types:{root:"Root",root_only_album:"Root only album",root_only_file:"Root only file"},upload_thread:"Upload thread","upload_thread-tips":"1<=thread<=32"},R={BDUSS:"BDUSS",pwd:"Pwd",root_folder_path:"Root folder path",surl:"Surl"},x={bbsid:"Bbsid",cookie:"Cookie",password:"Password",root_folder_id:"Root folder id",user_name:"User name"},A={address:"Address",cookie:"Cookie",custom_ua:"Custom ua",enable_thumb_and_folder_size:"Enable thumb and folder size",password:"Password",root_folder_path:"Root folder path",username:"Username"},D={directory_name_encryption:"Directory name encryption",directory_name_encryptions:{false:"False",true:"True"},encrypted_suffix:"Encrypted suffix","encrypted_suffix-tips":"for advanced user only! encrypted files will have this suffix",filename_encoding:"Filename encoding","filename_encoding-tips":"for advanced user only!",filename_encodings:{base32:"Base32",base32768:"Base32768",base64:"Base64"},filename_encryption:"Filename encryption",filename_encryptions:{obfuscate:"Obfuscate",off:"Off",standard:"Standard"},password:"Password","password-tips":"the main password",remote_path:"Remote path","remote_path-tips":"This is where the encrypted data stores",salt:"Salt","salt-tips":"If you don't know what is salt, treat it as a second password. Optional but recommended",show_hidden:"Show hidden","show_hidden-tips":"show hidden directories and files",thumbnail:"Thumbnail","thumbnail-tips":"enable thumbnail which pre-generated under .thumbnails folder"},T={access_key_id:"Access key id",add_filename_to_disposition:"Add filename to disposition","add_filename_to_disposition-tips":"Add filename to Content-Disposition header.",bucket:"Bucket",custom_host:"Custom host",endpoint:"Endpoint",force_path_style:"Force path style",list_object_version:"List object version",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"Placeholder",region:"Region",remove_bucket:"Remove bucket","remove_bucket-tips":"Remove bucket name from path when using custom host.",root_folder_path:"Root folder path",secret_access_key:"Secret access key",session_token:"Session token",sign_url_expire:"Sign url expire"},U={client_id:"Client id","client_id-tips":"Keep it empty if you don't have one",client_secret:"Client secret","client_secret-tips":"Keep it empty if you don't have one",oauth_token_url:"Oauth token url",refresh_token:"Refresh token",root_folder_path:"Root folder path"},O={address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username"},z={password:"Password",root_folder_id:"Root folder id",username:"Username"},L={chunk_size:"Chunk size","chunk_size-tips":"chunk size while uploading (unit: MB)",client_id:"Client id",client_secret:"Client secret",order_by:"Order by","order_by-tips":"such as: folder,name,modifiedTime",order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_id:"Root folder id"},F={client_id:"Client id",client_secret:"Client secret",refresh_token:"Refresh token",root_folder_id:"Root folder id",show_archive:"Show archive"},B={password:"Password",root_folder_id:"Root folder id",username:"Username"},M={account:"Account",baseUrl:"BaseUrl","baseUrl-tips":"basic URL for file operation",cookie:"Cookie","cookie-tips":"about 15 days valid, ignore if shareUrl is used",password:"Password",repair_file_info:"Repair file info","repair_file_info-tips":"To use webdav, you need to enable it",root_folder_id:"Root folder id",shareUrl:"ShareUrl","shareUrl-tips":"used to get the sharing page",share_password:"Share password",type:"Type",types:{account:"Account",cookie:"Cookie",url:"Url"}},I={mkdir_perm:"Mkdir perm",recycle_bin_path:"Recycle bin path","recycle_bin_path-tips":"path to recycle bin, delete permanently if empty or keep 'delete permanently'",root_folder_path:"Root folder path",show_hidden:"Show hidden","show_hidden-tips":"show hidden directories and files",thumb_cache_folder:"Thumb cache folder",thumbnail:"Thumbnail","thumbnail-tips":"enable thumbnail"},q={access_token:"Access token",order_by:"Order by",order_bys:{size:"Size",title:"Title",updated_at:"Updated at"},order_desc:"Order desc",project_id:"Project id",root_folder_id:"Root folder id"},N={email:"Email",password:"Password"},j={cloud_id:"Cloud id",device_info:"Device info",order_by:"Order by",order_bys:{filename:"Filename",filesize:"Filesize",lastOpTime:"LastOpTime"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",phone:"Phone",root_folder_id:"Root folder id",sms_code:"Sms code","sms_code-tips":"input 'send' send sms ",upload_thread:"Upload thread","upload_thread-tips":"1<=thread<=32"},E={chunk_size:"Chunk size",client_id:"Client id",client_secret:"Client secret",custom_host:"Custom host","custom_host-tips":"Custom host for onedrive download link",is_sharepoint:"Is sharepoint",redirect_uri:"Redirect uri",refresh_token:"Refresh token",region:"Region",regions:{cn:"Cn",de:"De",global:"Global",us:"Us"},root_folder_path:"Root folder path",site_id:"Site id"},V={chunk_size:"Chunk size",client_id:"Client id",client_secret:"Client secret",custom_host:"Custom host","custom_host-tips":"Custom host for onedrive download link",email:"Email",region:"Region",regions:{cn:"Cn",de:"De",global:"Global",us:"Us"},root_folder_path:"Root folder path",tenant_id:"Tenant id"},W={disable_media_link:"Disable media link",password:"Password",root_folder_id:"Root folder id",username:"Username"},G={password:"Password",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd",username:"Username"},Q={cookie:"Cookie",order_by:"Order by",order_bys:{file_name:"File name",file_type:"File type",none:"None",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id"},Y={cdn:"Cdn","cdn-tips":"If you enable this option, the download speed can be increased, but there will be some performance loss",cookie:"Cookie","cookie-tips":"Cookie can be used on multiple clients at the same time",password:"Password",phone:"Phone",root_folder_id:"Root folder id"},H={access_key_id:"Access key id",add_filename_to_disposition:"Add filename to disposition","add_filename_to_disposition-tips":"Add filename to Content-Disposition header.",bucket:"Bucket",custom_host:"Custom host",endpoint:"Endpoint",force_path_style:"Force path style",list_object_version:"List object version",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"Placeholder",region:"Region",remove_bucket:"Remove bucket","remove_bucket-tips":"Remove bucket name from path when using custom host.",root_folder_path:"Root folder path",secret_access_key:"Secret access key",session_token:"Session token",sign_url_expire:"Sign url expire"},K={address:"Address",ignore_symlink_error:"Ignore symlink error",password:"Password",private_key:"Private key",root_folder_path:"Root folder path",username:"Username"},$={address:"Address",password:"Password",root_folder_path:"Root folder path",share_name:"Share name",username:"Username"},X={address:"Address",password:"Password",repoId:"RepoId",repoPwd:"RepoPwd",root_folder_path:"Root folder path",username:"Username"},Z={cookie:"Cookie",order_by:"Order by",order_bys:{created:"Created",fileName:"FileName",fileSize:"FileSize",updated:"Updated"},order_direction:"Order direction",order_directions:{Asc:"Asc",Desc:"Desc"},project_id:"Project id",region:"Region",regions:{china:"China",international:"International"},root_folder_id:"Root folder id",use_s3_upload_method:"Use s3 upload method"},J={cookie:"Cookie",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_path:"Root folder path"},ee={captcha_token:"Captcha token",password:"Password",root_folder_id:"Root folder id",username:"Username"},oe={algorithms:"Algorithms","algorithms-tips":"sign type is algorithms,this is required",captcha_sign:"Captcha sign","captcha_sign-tips":"sign type is captcha_sign,this is required",captcha_token:"Captcha token",client_id:"Client id",client_secret:"Client secret",client_version:"Client version",device_id:"Device id",download_user_agent:"Download user agent",login_type:"Login type",login_types:{refresh_token:"Refresh token",user:"User"},package_name:"Package name",password:"Password","password-tips":"login type is user,this is required",refresh_token:"Refresh token","refresh_token-tips":"login type is refresh_token,this is required",root_folder_id:"Root folder id",sign_type:"Sign type",sign_types:{algorithms:"Algorithms",captcha_sign:"Captcha sign"},timestamp:"Timestamp","timestamp-tips":"sign type is captcha_sign,this is required",use_video_url:"Use video url",user_agent:"User agent",username:"Username","username-tips":"login type is user,this is required"},te={AUSHELLPORTAL:"AUSHELLPORTAL",apikey:"Apikey",root_folder_id:"Root folder id"},se={cookie:"Cookie",order_by:"Order by",order_bys:{file_name:"File name",file_type:"File type",none:"None",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id"},ie={anti_theft_chain_token:"Anti theft chain token",bucket:"Bucket",endpoint:"Endpoint",operator_name:"Operator name",operator_password:"Operator password",root_folder_path:"Root folder path",sign_url_expire:"Sign url expire"},re={head_size:"Head size","head_size-tips":"Use head method to get file size, but it may be failed.",url_structure:"Url structure","url_structure-tips":`structure:FolderName:
  [FileName:][FileSize:][Modified:]Url`},ae={cookie:"Cookie",order_by:"Order by",order_bys:{CreatTime:"CreatTime",Name:"Name",Size:"Size",UpdateTime:"UpdateTime"},order_direction:"Order direction",order_directions:{Asc:"Asc",Desc:"Desc"},root_folder_id:"Root folder id",tf_uid:"Tf uid"},ne={max_file_size:"Max file size",min_file_size:"Min file size",num_file:"Num file",num_folder:"Num folder",root_folder_path:"Root folder path"},de={address:"Address",password:"Password",root_folder_path:"Root folder path",tls_insecure_skip_verify:"Tls insecure skip verify",username:"Username",vendor:"Vendor",vendors:{other:"Other",sharepoint:"Sharepoint"}},le={cookies:"Cookies",order_by:"Order by",order_bys:{name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id",upload_thread:"Upload thread","upload_thread-tips":"4<=thread<=32"},ce={access_token:"Access token",family_id:"Family id","family_id-tips":"Keep it empty if you want to use your personal drive",refresh_token:"Refresh token",root_folder_id:"Root folder id",sort_rule:"Sort rule",sort_rules:{name_asc:"Name asc",name_desc:"Name desc",size_asc:"Size asc",size_desc:"Size desc",time_asc:"Time asc",time_desc:"Time desc"}},_e={client_id:"Client id",client_secret:"Client secret",order_by:"Order by",order_bys:{created:"Created",modified:"Modified",name:"Name",path:"Path",size:"Size"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path"},pe={"115 Cloud":{},"115 Share":{},"123Pan":{},"123PanLink":{},"123PanShare":{},"139Yun":{},"189Cloud":{alert:"You can try to use 189PC driver if this driver does not work."},"189CloudPC":{},"AList V2":{},"AList V3":{},Alias:{},Aliyundrive:{alert:`There may be an infinite loop bug in this driver.
Deprecated, no longer maintained and will be removed in a future version.
We recommend using the official driver AliyundriveOpen.`},AliyundriveOpen:{},AliyundriveShare:{},BaiduNetdisk:{},BaiduPhoto:{},BaiduShare:{},ChaoXingGroupDrive:{},Cloudreve:{},Crypt:{},Doge:{},Dropbox:{},FTP:{},FeijiPan:{},GoogleDrive:{},GooglePhoto:{},ILanZou:{},"IPFS API":{},Lanzou:{},Local:{},MediaTrack:{},Mega_nz:{},MoPan:{alert:"This network disk may store your password in clear text. Please set your password carefully"},Onedrive:{},OnedriveAPP:{},PikPak:{},PikPakShare:{},Quark:{},Quqi:{},S3:{},SFTP:{},SMB:{},Seafile:{},Teambition:{},Terabox:{},Thunder:{},ThunderExpert:{},Trainbit:{},UC:{},USS:{},UrlTree:{},VTencent:{},Virtual:{},WebDav:{},WeiYun:{},WoPan:{},YandexDisk:{}},ue={"115 Cloud":"115 Cloud","115 Share":"115 Share","123Pan":"123Pan","123PanLink":"123PanLink","123PanShare":"123PanShare","139Yun":"139Yun","189Cloud":"189Cloud","189CloudPC":"189CloudPC","AList V2":"AList V2","AList V3":"AList V3",Alias:"Alias",Aliyundrive:"Aliyundrive",AliyundriveOpen:"AliyundriveOpen",AliyundriveShare:"AliyundriveShare",BaiduNetdisk:"BaiduNetdisk",BaiduPhoto:"BaiduPhoto",BaiduShare:"BaiduShare",ChaoXingGroupDrive:"ChaoXingGroupDrive",Cloudreve:"Cloudreve",Crypt:"Crypt",Doge:"Doge",Dropbox:"Dropbox",FTP:"FTP",FeijiPan:"FeijiPan",GoogleDrive:"GoogleDrive",GooglePhoto:"GooglePhoto",ILanZou:"ILanZou","IPFS API":"IPFS API",Lanzou:"Lanzou",Local:"Local",MediaTrack:"MediaTrack",Mega_nz:"Mega nz",MoPan:"MoPan",Onedrive:"Onedrive",OnedriveAPP:"OnedriveAPP",PikPak:"PikPak",PikPakShare:"PikPakShare",Quark:"Quark",Quqi:"Quqi",S3:"S3",SFTP:"SFTP",SMB:"SMB",Seafile:"Seafile",Teambition:"Teambition",Terabox:"Terabox",Thunder:"Thunder",ThunderExpert:"ThunderExpert",Trainbit:"Trainbit",UC:"UC",USS:"USS",UrlTree:"UrlTree",VTencent:"VTencent",Virtual:"Virtual",WebDav:"WebDav",WeiYun:"WeiYun",WoPan:"WoPan",YandexDisk:"YandexDisk"},he={"115 Cloud":{cookie:"Cookie","cookie-tips":"one of QR code token and cookie required",limit_rate:"Limit rate","limit_rate-tips":"limit all api request rate (1r/[limit_rate]s)",page_size:"Page size","page_size-tips":"list api per page size of 115 driver",qrcode_source:"Qrcode source","qrcode_source-tips":"select the QR code device, default linux",qrcode_sources:{android:"Android",ios:"Ios",linux:"Linux",mac:"Mac",tv:"Tv",web:"Web",windows:"Windows"},qrcode_token:"Qrcode token","qrcode_token-tips":"one of QR code token and cookie required",root_folder_id:"Root folder id"},"115 Share":{cookie:"Cookie","cookie-tips":"one of QR code token and cookie required",limit_rate:"Limit rate","limit_rate-tips":"limit all api request rate (1r/[limit_rate]s)",page_size:"Page size","page_size-tips":"list api per page size of 115 driver",qrcode_source:"Qrcode source","qrcode_source-tips":"select the QR code device, default linux",qrcode_sources:{android:"Android",ios:"Ios",linux:"Linux",mac:"Mac",tv:"Tv",web:"Web",windows:"Windows"},qrcode_token:"Qrcode token","qrcode_token-tips":"one of QR code token and cookie required",receive_code:"Receive code","receive_code-tips":"receive code of 115 share link",root_folder_id:"Root folder id",share_code:"Share code","share_code-tips":"share code of 115 share link"},"123Pan":{order_by:"Order by",order_bys:{file_name:"File name",size:"Size",update_at:"Update at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",root_folder_id:"Root folder id",username:"Username"},"123PanLink":{origin_urls:"Origin urls","origin_urls-tips":`structure:FolderName:
  [FileSize:][Modified:]Url`,private_key:"Private key",uid:"Uid",valid_duration:"Valid duration","valid_duration-tips":"minutes"},"123PanShare":{order_by:"Order by",order_bys:{file_name:"File name",size:"Size",update_at:"Update at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id",sharekey:"Sharekey",sharepassword:"Sharepassword"},"139Yun":{authorization:"Authorization",cloud_id:"Cloud id",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal",personal_new:"Personal new"}},"189Cloud":{cookie:"Cookie","cookie-tips":"Fill in the cookie if need captcha",password:"Password",root_folder_id:"Root folder id",username:"Username"},"189CloudPC":{family_id:"Family id",family_transfer:"Family transfer",no_use_ocr:"No use ocr",order_by:"Order by",order_bys:{filename:"Filename",filesize:"Filesize",lastOpTime:"LastOpTime"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",rapid_upload:"Rapid upload",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"},upload_method:"Upload method",upload_methods:{old:"Old",rapid:"Rapid",stream:"Stream"},upload_thread:"Upload thread","upload_thread-tips":"1<=thread<=32",username:"Username",validate_code:"Validate code"},"AList V2":{access_token:"Access token",password:"Password",root_folder_path:"Root folder path",url:"Url"},"AList V3":{meta_password:"Meta password",password:"Password",root_folder_path:"Root folder path",token:"Token",url:"Url",username:"Username"},Alias:w,Aliyundrive:k,AliyundriveOpen:v,AliyundriveShare:S,BaiduNetdisk:P,BaiduPhoto:C,BaiduShare:R,ChaoXingGroupDrive:x,Cloudreve:A,Crypt:D,Doge:T,Dropbox:U,FTP:O,FeijiPan:z,GoogleDrive:L,GooglePhoto:F,ILanZou:B,"IPFS API":{endpoint:"Endpoint",gateway:"Gateway",root_folder_path:"Root folder path"},Lanzou:M,Local:I,MediaTrack:q,Mega_nz:N,MoPan:j,Onedrive:E,OnedriveAPP:V,PikPak:W,PikPakShare:G,Quark:Q,Quqi:Y,S3:H,SFTP:K,SMB:$,Seafile:X,Teambition:Z,Terabox:J,Thunder:ee,ThunderExpert:oe,Trainbit:te,UC:se,USS:ie,UrlTree:re,VTencent:ae,Virtual:ne,WebDav:de,WeiYun:le,WoPan:ce,YandexDisk:_e,config:pe,drivers:ue},me="Refresh",fe="Add",ge="Edit",ye="Save",be="Update",we="Copied",ke="Deleted successfully",ve="Saved successfully",Se="Updated successfully",Pe="Choose",Ce="Confirm",Re="Cancel",xe="Are you sure you want to delete [{{name}}]?",Ae="Operations",De="Yes",Te="No",Ue="Clear",Oe="Select folder",ze="Select folder or input path",Le="Disable",Fe="Enable",Be="OK",Me="Back",Ie="Have an account?",qe="Go to login",Ne="Close",je="Not currently supported",Ee="Please enter",Ve="Name",We={refresh:me,add:fe,edit:ge,delete:"Delete",save:ye,update:be,copied:we,delete_success:ke,save_success:ve,update_success:Se,choose:Pe,confirm:Ce,cancel:Re,delete_confirm:xe,operations:Ae,yes:De,no:Te,clear:Ue,choose_folder:Oe,choose_or_input_path:ze,disable:Le,enable:Fe,ok:Be,back:Me,have_account:Ie,go_login:qe,close:Ne,no_support_now:je,empty_input:Ee,name:Ve},Ge={name:"Name",size:"Size",modified:"Modified"},Qe={download:"Download",failed_load_img:"Failed to load image",open_with:"Open with ...",play_with:"Play with ...",install:"Install",installing:"Installing","tr-install":"TrollStore","tr-installing":"TrollStore Installing",open_in_new_window:"Open in new window",auto_next:"Auto next"},Ye={list:"List View",grid:"Grid View",image:"Image View"},He="No images in the current folder",Ke="Load more",$e="No more",Xe="Please input password",Ze={more:"More",refresh:"Refresh",toggle_theme:"Toggle Theme",switch_lang:"Switch Language",toggle_markdown_toc:"Toggle Outline",toggle_checkbox:"Toggle Checkbox",rename:"Rename",input_new_name:"Input new name","only_one-tips":"Only one object can be selected to rename",move:"Move",copy:"Copy",choose_dst_folder:"Select destination folder",delete:"Delete","delete-tips":"Are you sure to delete the selected object?",copy_link:"Copy link",preview_page:"Preview page",down_link:"Download link",encode_down_link:"Encode download link",mkdir:"New Folder",input_dir_name:"Input folder name",new_file:"New File",input_filename:"Input filename",cancel_select:"Cancel Select",offline_download:"Offline download","offline_download-tips":"One URL per line",delete_policy:{delete_on_upload_succeed:"Delete on upload succeed",delete_on_upload_failed:"Delete on upload failed",delete_never:"Never delete",delete_always:"Always delete"},download:"Download",batch_download:"Batch Download",package_download:"Package Download",package_download_disabled:"Package download is disabled",send_aria2:"Send to Aria2",aria2_not_set:"Please set aria2 rpc url",send_aria2_success:"Send to aria2 successfully","pre_package_download-tips":"Using streamsaver in the browser instead of the server for package download requires the corresponding storage to support cors, and the unsupported storage will fail.","package_download-tips":"Downloading, please wait don't close the page",upload:"Upload",local_settings:"Local Settings",recursive_move:"Recursive Move","recursive_move_directory-tips":"Are you sure you want to move all files in the current folder and its subfolders to the specified folder?",remove_empty_directory:"Remove Empty Folder","remove_empty_directory-tips":"Are you sure to delete all its empty subfolders?",batch_rename:"Batch Rename",regex_rename:"Regex Rename",sequential_renaming:"Sequential Rename",regex_rename_preview:"Changed Files",regex_rename_preview_old_name:"Old Name",regex_rename_preview_new_name:"New Name",regular_rename:"Regular expression file renaming. Input the source file name regular expression on the first line, and input the new file name regular expression on the second line.",sequential_renaming_desc:"The new file name will have a numerical starting value appended to it, and it will be displayed sequentially by adding 1 to the starting value. Enter the new file name on the first line and the starting value on the second line."},Je={add_as_task:"Add as task","upload-tips":"Drag files here to upload, or click:",release:"Release to upload",no_files_drag:"No files were dragged in.",upload_files:"Choose Files",upload_folder:"Choose Folder",pending:"Pending",uploading:"Uploading",backending:"Uploading in the backend",success:"Success",error:"Error",back:"Back to Upload",clear_done:"Clear Done"},eo={aria2_rpc_url:"Aria2 RPC URL",aria2_rpc_secret:"Aria2 RPC secret",aria2_dir:"Aria2 download directory",show_folder_in_image_view:"Show folder in image view",show_folder_in_image_view_options:{top:"Top",bottom:"Bottom",none:"None"},global_default_layout:"Global default layout",global_default_layout_options:{list:"List View",grid:"Grid View",image:"Image View"},position_of_header_navbar:"Position of header & nav bar",position_of_header_navbar_options:{static:"Normal",sticky:"Stick to top of page",only_navbar_sticky:"Only nav bar sticky"},show_sidebar:"Show sidebar",show_sidebar_options:{none:"None",visible:"Visible"},list_item_filename_overflow:"List item filename overflow",list_item_filename_overflow_options:{ellipsis:"Ellipsis",scrollable:"Scrollable",multi_line:"Multi-line"},open_item_on_checkbox:"Open item on Checkbox",open_item_on_checkbox_options:{direct:"Direct",disable_while_checked:"Disable while checked",with_ctrl:"With Ctrl/Command hold",with_alt:"With Alt/Option hold"},select_with_mouse:"Select item with mouse while checkbox closed",select_with_mouse_options:{disabled:"Disabled",open_item_with_dblclick:"Open item with double click"}},oo={current_status:"Current Status",initializing:"Initializing",fetching_struct:"Fetching folder structure",fetching_struct_failed:"Failed to fetch folder structure",downloading:"Downloading files, don't close or refresh the page",failed:"Failed to package download",success:"Download completed"},to={powered_by:"Powered by AList",manage:"Manage"},so={search:"Search",no_result:"No result yet",scopes:{all:"All",folder:"Folder",file:"File"}},io="Failed fetching settings: ",ro="Failed get current user: ",ao={obj:Ge,preview:Qe,layouts:Ye,no_images:He,load_more:Ke,no_more:$e,input_password:Xe,toolbar:Ze,upload:Je,local_settings:eo,package_download:oo,footer:to,search:so,fetching_settings_failed:io,get_current_user_failed:ro,"Loading storage, please wait":"Loading storage, please wait"},no="Search index",lo="Current indexes",co="Build indexes",_o="Rebuild indexes",po="Paths to update",uo="Max depth",ho="Update indexes",mo="Object count",fo="Last done time",go="Unknown",yo="Stop",bo="Clear",wo="Error",ko={search_index:no,current:lo,build:co,rebuild:_o,paths_to_update:po,max_depth:uo,update:ho,obj_count:mo,last_done_time:fo,unknown:go,stop:yo,clear:bo,error:wo},vo="Login to the",So="Remember me",Po="Forget password?",Co="https://alist.nn.ci/faq/howto.html#how-to-get-password-if-i-forget-it",Ro="Clear",xo="Login",Ao="Browse as a guest",Do="Login successfully",To={login_to:vo,"username-tips":"Input your username","password-tips":"Input your password","otp-tips":"Input your OTP Code",remember:So,forget:Po,forget_url:Co,clear:Ro,login:xo,use_guest:Ao,success:Do},Uo={dashboard:"Dashboard",settings:"Settings",site:"Site",style:"Style",preview:"Preview",global:"Global",other:"Other",users:"Users",storages:"Storages",metas:"Metas",profile:"Profile",about:"About",tasks:"Tasks",upload:"Upload",copy:"Copy","backup-restore":"Backup & Restore",home:"Home",indexes:"Indexes",sso:"Single Sign-on",docs:"Documentation",offline_download:"Offline Download",ldap:"LDAP",s3:"S3"},Oo="Manage",zo="You are not admin user, please login with admin account.",Lo="Logout successfully",Fo="Send",Bo="Receive",Mo="Received messages",Io={sidemenu:Uo,title:Oo,not_admin:zo,logout_success:Lo,send:Fo,receive:Bo,received_msgs:Mo,"add_storage-tips":"You may need to fill in some information in the newly opened tab.","messenger-tips":"You may need to fill in some information on this tab as prompted."},qo="Path",No="Password",jo="Write",Eo="Hide",Vo="Readme",Wo="Render a markdown at the bottom, support content or link",Go="Header",Qo="Render a markdown at the top, support content or link",Yo="Apply to sub folder",Ho="One regular expression per line",Ko={path:qo,password:No,write:jo,hide:Eo,readme:Vo,readme_help:Wo,header:Go,header_help:Qo,apply_sub:Yo,hide_help:Ho},$o="Allow indexed",Xo="Allow mounted",Zo="Announcement",Jo="Aria2 secret",et="Aria2 uri",ot="Audio autoplay",tt="Audio cover",st="Audio types",it="Auto update index",rt="Customize body",at="Customize head",nt="Default page size",dt="External previews",lt="Favicon",ct="Filename char mapping",_t="Forward direct link params",pt="Hide files",ut="Home container",ht={hope_container:"Hope container",max_980px:"Max 980px"},mt="Home icon",ft="Iframe previews",gt="Ignore direct link params",yt="Ignore paths",bt="Image types",wt="Index progress",kt="Ldap default dir",vt="Ldap default permission",St="Ldap login enabled",Pt="Ldap login tips",Ct="Ldap manager dn",Rt="Ldap manager password",xt="Ldap server",At="Ldap user search base",Dt="Ldap user search filter",Tt="Link expiration",Ut="Logo",Ot="Main color",zt="Max index depth",Lt="Ocr api",Ft="Package download",Bt="Pagination type",Mt={all:"All",auto_load_more:"Auto load more",load_more:"Load more",pagination:"Pagination"},It="Privacy regs",qt="Proxy ignore headers",Nt="Proxy types",jt="Qbittorrent seedtime",Et="Qbittorrent url",Vt="Robots txt",Wt="Bucket name or Path empty",Gt="Bucket name duplicated",Qt="Generate access key and id",Yt="S3 access key id",Ht="S3 buckets",Kt="Restart Alist to apply the settings above",$t="S3 secret access key",Xt="Search index",Zt={bleve:"Bleve",database:"Database",database_non_full_text:"Database non full text",meilisearch:"Meilisearch",none:"None"},Jt="Settings layout",es={list:"List",responsive:"Responsive"},os="Sign all",ts="Site title",ss="Sso application name",is="Sso auto register",rs="Sso client id",as="Sso client secret",ns="Sso compatibility mode",ds="Sso default dir",ls="Sso default permission",cs="Sso endpoint name",_s="Sso jwt public key",ps="Sso login enabled",us="Sso login platform",hs={Casdoor:"Casdoor",Dingtalk:"Dingtalk",Github:"Github",Google:"Google",Microsoft:"Microsoft",OIDC:"OIDC"},ms="Sso oidc username key",fs="Sso organization name",gs="Text types",ys="Token",bs="Version",ws="Video autoplay",ks="Video types",vs="Webauthn login enabled",Ss="Logo text",Ps="Beian",Cs="Customize About page content",Rs={allow_indexed:$o,allow_mounted:Xo,announcement:Zo,aria2_secret:Jo,aria2_uri:et,audio_autoplay:ot,audio_cover:tt,audio_types:st,auto_update_index:it,customize_body:rt,customize_head:at,default_page_size:nt,external_previews:dt,favicon:lt,filename_char_mapping:ct,forward_direct_link_params:_t,hide_files:pt,home_container:ut,home_containers:ht,home_icon:mt,iframe_previews:ft,ignore_direct_link_params:gt,ignore_paths:yt,"ignore_paths-tips":"one path per line",image_types:bt,index_progress:wt,ldap_default_dir:kt,ldap_default_permission:vt,ldap_login_enabled:St,ldap_login_tips:Pt,ldap_manager_dn:Ct,ldap_manager_password:Rt,ldap_server:xt,ldap_user_search_base:At,ldap_user_search_filter:Dt,link_expiration:Tt,logo:Ut,main_color:Ot,max_index_depth:zt,"max_index_depth-tips":"max depth of index",ocr_api:Lt,package_download:Ft,pagination_type:Bt,pagination_types:Mt,privacy_regs:It,proxy_ignore_headers:qt,proxy_types:Nt,qbittorrent_seedtime:jt,qbittorrent_url:Et,robots_txt:Vt,s3_buckets_empty:Wt,s3_buckets_duplicate_name:Gt,s3_generate:Qt,s3_access_key_id:Yt,s3_buckets:Ht,s3_restart_to_apply:Kt,s3_secret_access_key:$t,search_index:Xt,search_indexs:Zt,settings_layout:Jt,settings_layouts:es,sign_all:os,site_title:ts,sso_application_name:ss,sso_auto_register:is,sso_client_id:rs,sso_client_secret:as,sso_compatibility_mode:ns,sso_default_dir:ds,sso_default_permission:ls,sso_endpoint_name:cs,sso_jwt_public_key:_s,sso_login_enabled:ps,sso_login_platform:us,sso_login_platforms:hs,sso_oidc_username_key:ms,sso_organization_name:fs,text_types:gs,token:ys,version:bs,video_autoplay:ws,video_types:ks,webauthn_login_enabled:vs,logo_text:Ss,site_beian:Ps,contact_us:Cs},xs="Aria2",As="Aria2 Version:",Ds="Set aria2",Ts="Copy Token",Us="Reset Token",Os="Reset Token Successfully",zs="Unknown type",Ls="Set qBittorrent",Fs="qBittorrent",Bs={aria2:xs,aria2_version:As,set_aria2:Ds,copy_token:Ts,reset_token:Us,reset_token_success:Os,unknown_type:zs,set_qbit:Ls,qbittorrent:Fs},Ms={mount_path:"Mount Path","mount_path-tips":"The path you want to mount to, it is unique and cannot be repeated",driver:"Driver",order:"Order","order-tips":"Use to sort",status:"Status",remark:"Remark",cache_expiration:"Cache Expiration","cache_expiration-tips":"The cache expiration time for this storage(minutes)",down_proxy_url:"Download proxy URL",web_proxy:"Web proxy",webdav_policy:"WebDAV policy",webdav_policys:{"302_redirect":"302 redirect",use_proxy_url:"use proxy URL",native_proxy:"native proxy"},order_by:"Order by",order_bys:{name:"Name",size:"Size",modified:"Modified"},order_direction:"Order direction",order_directions:{asc:"Ascending",desc:"Descending"},extract_folder:"Extract folder",extract_folders:{front:"Extract to front",back:"Extract to back"},enable_sign:"Enable sign"},Is={start_load_success:"Start loading",load_all:"Reload All",filter_by_driver:"Filter by driver",table_layout:"Table layout"},qs={common:Ms,other:Is},Ns="Download file to local machine",js="Transfer downloaded file to corresponding storage",Es="Upload file to corresponding storage",Vs="Copy file from a storage to another storage",Ws="Completed",Gs="Running",Qs="Clear Succeeded",Ys="Retry",Hs="Retry Failed",Ks={0:"Pending",1:"Running",2:"Succeeded",3:"Canceling",4:"Canceled",5:"Errored",6:"Failing",7:"Failed",8:"WaitingRetry",9:"BeforeRetry"},$s={offline_download:Ns,offline_download_transfer:js,upload:Es,copy:Vs,done:Ws,undone:Gs,clear_succeeded:Qs,retry:Ys,retry_failed:Hs,state:Ks},Xs={see_hides:"Can see hides",access_without_password:"Access without password",offline_download:"Add offline download tasks",write:"Make dir or upload",rename:"Rename",move:"Move",copy:"Copy",delete:"Delete",webdav_read:"Webdav read",webdav_manage:"Webdav manage"},Zs="Username",Js="Password",ei="Base path",oi="Role",ti="Permission",si="Disabled",ii="Available",ri="Update Profile",ai="Update profile successfully, please re-login.",ni="Change Username",di="Change Password",li="Confirm Password",ci="The password you input twice is not the same",_i="Enable 2FA",pi="Cancel 2FA",ui="Cancel 2FA successfully",hi="Scan the QR code to save the secret key",mi="Or input the secret key manually",fi="Input the code of your 2FA app",gi="Verify",yi="So you cannot modify anything in the manage page.",bi="Single sign-on Login",wi="Connect Single sign-on Platform",ki="Disconnect Single sign-on Platform",vi="WebAuthn",Si="Add a Webauthn credential",Pi="Webauthn credential successfully added!",Ci="Webauthn is not supported in your browser or you are in an unsafe origin",Ri={permissions:Xs,username:Zs,password:Js,base_path:ei,role:oi,permission:ti,disabled:si,available:ii,update_profile:ri,update_profile_success:ai,change_username:ni,change_password:di,"change_password-tips":"Keep the password empty if you don't want to change it",confirm_password:li,"confirm_password-tips":"Repeat the password that you just input",confirm_password_not_same:ci,enable_2fa:_i,cancel_2fa:pi,cancel_2fa_success:ui,"2fa_already_enabled":"2FA is already enabled",scan_qr:hi,or_manual:mi,input_code:fi,verify:gi,"guest-tips":"You are currently visiting as a guest.",modify_nothing:yi,sso_login:bi,connect_sso:wi,disconnect_sso:ki,webauthn:vi,add_webauthn:Si,add_webauthn_success:Pi,webauthn_not_supported:Ci},o=Object.assign({"./br.json":b,"./drivers.json":he,"./global.json":We,"./home.json":ao,"./index.json":s,"./indexes.json":ko,"./login.json":To,"./manage.json":Io,"./metas.json":Ko,"./settings.json":Rs,"./settings_other.json":Bs,"./storages.json":qs,"./tasks.json":$s,"./users.json":Ri}),xi={};for(const e in o){const t=e.split("/")[1].split(".")[0];xi[t]=o[e]}export{xi as default};
