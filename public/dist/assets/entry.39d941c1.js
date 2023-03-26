import{bA as s}from"./index.5a0397ca.js";const r="Backup",i="Restore",n="Start backup",a="Finish backup",d="[ {{item}} ] Backup was successful",c="[ {{item}} ] Backup failed",l="No file selected",_="Start restore",p="Finish restore",u="[ {{item}} ] Restore was successful",h="[ {{item}} ] Restore failed",f={backup:r,restore:i,start_backup:n,finish_backup:a,success_backup_item:d,failed_backup_item:c,no_file:l,start_restore:_,finish_restore:p,success_restore_item:u,failed_restore_item:h},g={paths:"Paths"},m={internal_upload:"Internal upload",order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},rapid_upload:"Rapid upload",refresh_token:"Refresh token",root_folder_id:"Root folder id"},y={client_id:"Client id","client_id-tips":"Keep it empty if you don't have one",client_secret:"Client secret","client_secret-tips":"Keep it empty if you don't have one",internal_upload:"Internal upload","internal_upload-tips":"If you are using Aliyun ECS in Beijing, you can turn it on to boost the upload speed",oauth_token_url:"Oauth token url",order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},refresh_token:"Refresh token",remove_way:"Remove way",remove_ways:{delete:"Delete",trash:"Trash"},root_folder_id:"Root folder id"},b={order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},refresh_token:"Refresh token",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd"},k={client_id:"Client id",client_secret:"Client secret",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path"},w={album_id:"Album id",client_id:"Client id",client_secret:"Client secret",refresh_token:"Refresh token",show_type:"Show type",show_types:{root:"Root",root_only_album:"Root only album",root_only_file:"Root only file"}},v={BDUSS:"BDUSS",pwd:"Pwd",root_folder_path:"Root folder path",surl:"Surl"},S={address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username"},C={address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username"},P={chunk_size:"Chunk size","chunk_size-tips":"chunk size while uploading (unit: MB)",client_id:"Client id",client_secret:"Client secret",order_by:"Order by","order_by-tips":"such as: folder,name,modifiedTime",order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_id:"Root folder id"},A={client_id:"Client id",client_secret:"Client secret",refresh_token:"Refresh token",root_folder_id:"Root folder id",show_archive:"Show archive"},x={baseUrl:"BaseUrl","baseUrl-tips":"basic URL for file operation",cookie:"Cookie","cookie-tips":"about 15 days valid, ignore if shareUrl is used",repair_file_info:"Repair file info","repair_file_info-tips":"To use webdav, you need to enable it",root_folder_id:"Root folder id",shareUrl:"ShareUrl","shareUrl-tips":"used to get the sharing page",share_password:"Share password",type:"Type",types:{cookie:"Cookie",url:"Url"}},R={mkdir_perm:"Mkdir perm",root_folder_path:"Root folder path",show_hidden:"Show hidden","show_hidden-tips":"show hidden directories and files",thumbnail:"Thumbnail","thumbnail-tips":"enable thumbnail"},T={access_token:"Access token",order_by:"Order by",order_bys:{size:"Size",title:"Title",updated_at:"Updated at"},order_desc:"Order desc",project_id:"Project id",root_folder_id:"Root folder id"},U={email:"Email",password:"Password"},D={chunk_size:"Chunk size",client_id:"Client id",client_secret:"Client secret",is_sharepoint:"Is sharepoint",redirect_uri:"Redirect uri",refresh_token:"Refresh token",region:"Region",regions:{cn:"Cn",de:"De",global:"Global",us:"Us"},root_folder_path:"Root folder path",site_id:"Site id"},z={chunk_size:"Chunk size",client_id:"Client id",client_secret:"Client secret",email:"Email",region:"Region",regions:{cn:"Cn",de:"De",global:"Global",us:"Us"},root_folder_path:"Root folder path",tenant_id:"Tenant id"},O={password:"Password",root_folder_id:"Root folder id",username:"Username"},L={password:"Password",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd",username:"Username"},F={cookie:"Cookie",order_by:"Order by",order_bys:{file_name:"File name",file_type:"File type",none:"None",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id"},B={access_key_id:"Access key id",bucket:"Bucket",custom_host:"Custom host",endpoint:"Endpoint",force_path_style:"Force path style",list_object_version:"List object version",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"Placeholder",region:"Region",root_folder_path:"Root folder path",secret_access_key:"Secret access key",sign_url_expire:"Sign url expire"},M={address:"Address",password:"Password",private_key:"Private key",root_folder_path:"Root folder path",username:"Username"},j={address:"Address",password:"Password",root_folder_path:"Root folder path",share_name:"Share name",username:"Username"},E={address:"Address",password:"Password",repoId:"RepoId",root_folder_path:"Root folder path",username:"Username"},N={cookie:"Cookie",order_by:"Order by",order_bys:{created:"Created",fileName:"FileName",fileSize:"FileSize",updated:"Updated"},order_direction:"Order direction",order_directions:{Asc:"Asc",Desc:"Desc"},project_id:"Project id",region:"Region",regions:{china:"China",international:"International"},root_folder_id:"Root folder id"},q={cookie:"Cookie",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_path:"Root folder path"},V={captcha_token:"Captcha token",password:"Password",root_folder_id:"Root folder id",username:"Username"},I={algorithms:"Algorithms","algorithms-tips":"sign type is algorithms,this is required",captcha_sign:"Captcha sign","captcha_sign-tips":"sign type is captcha_sign,this is required",captcha_token:"Captcha token",client_id:"Client id",client_secret:"Client secret",client_version:"Client version",device_id:"Device id",download_user_agent:"Download user agent",login_type:"Login type",login_types:{refresh_token:"Refresh token",user:"User"},package_name:"Package name",password:"Password","password-tips":"login type is user,this is required",refresh_token:"Refresh token","refresh_token-tips":"login type is refresh_token,this is required",root_folder_id:"Root folder id",sign_type:"Sign type",sign_types:{algorithms:"Algorithms",captcha_sign:"Captcha sign"},timestamp:"Timestamp","timestamp-tips":"sign type is captcha_sign,this is required",use_video_url:"Use video url",user_agent:"User agent",username:"Username","username-tips":"login type is user,this is required"},G={AUSHELLPORTAL:"AUSHELLPORTAL",apikey:"Apikey",root_folder_id:"Root folder id"},Y={bucket:"Bucket",endpoint:"Endpoint",operator_name:"Operator name",operator_password:"Operator password",root_folder_path:"Root folder path",sign_url_expire:"Sign url expire"},Q={head_size:"Head size","head_size-tips":"Use head method to get file size, but it may be failed.",url_structure:"Url structure","url_structure-tips":`structure:FolderName:
  [FileName:][FileSize:][Modified:]Url`},W={max_file_size:"Max file size",min_file_size:"Min file size",num_file:"Num file",num_folder:"Num folder",root_folder_path:"Root folder path"},H={address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username",vendor:"Vendor",vendors:{other:"Other",sharepoint:"Sharepoint"}},$={client_id:"Client id",client_secret:"Client secret",order_by:"Order by",order_bys:{created:"Created",modified:"Modified",name:"Name",path:"Path",size:"Size"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path"},K={"115 Cloud":{},"123Pan":{},"139Yun":{},"189Cloud":{},"189CloudPC":{},"AList V2":{},"AList V3":{},Alias:{},Aliyundrive:{alert:`There may be an infinite loop bug in this driver.
Deprecated, no longer maintained and will be removed in a future version.
We recommend using the official driver AliyundriveOpen.`},AliyundriveOpen:{},AliyundriveShare:{},BaiduNetdisk:{},BaiduPhoto:{},BaiduShare:{},Cloudreve:{},FTP:{},GoogleDrive:{},GooglePhoto:{},Lanzou:{},Local:{},MediaTrack:{},Mega_nz:{},Onedrive:{},OnedriveAPP:{},PikPak:{},PikPakShare:{},Quark:{},S3:{},SFTP:{},SMB:{},Seafile:{},Teambition:{},Terabox:{},Thunder:{},ThunderExpert:{},Trainbit:{},USS:{},UrlTree:{},Virtual:{},WebDav:{},YandexDisk:{}},J={"115 Cloud":"115 Cloud","123Pan":"123Pan","139Yun":"139Yun","189Cloud":"189Cloud","189CloudPC":"189CloudPC","AList V2":"AList V2","AList V3":"AList V3",Alias:"Alias",Aliyundrive:"Aliyundrive",AliyundriveOpen:"AliyundriveOpen",AliyundriveShare:"AliyundriveShare",BaiduNetdisk:"BaiduNetdisk",BaiduPhoto:"BaiduPhoto",BaiduShare:"BaiduShare",Cloudreve:"Cloudreve",FTP:"FTP",GoogleDrive:"GoogleDrive",GooglePhoto:"GooglePhoto",Lanzou:"Lanzou",Local:"Local",MediaTrack:"MediaTrack",Mega_nz:"Mega nz",Onedrive:"Onedrive",OnedriveAPP:"OnedriveAPP",PikPak:"PikPak",PikPakShare:"PikPakShare",Quark:"Quark",S3:"S3",SFTP:"SFTP",SMB:"SMB",Seafile:"Seafile",Teambition:"Teambition",Terabox:"Terabox",Thunder:"Thunder",ThunderExpert:"ThunderExpert",Trainbit:"Trainbit",USS:"USS",UrlTree:"UrlTree",Virtual:"Virtual",WebDav:"WebDav",YandexDisk:"YandexDisk"},X={"115 Cloud":{cookie:"Cookie","cookie-tips":"one of QR code token and cookie required",page_size:"Page size","page_size-tips":"list api per page size of 115 driver",qrcode_token:"Qrcode token","qrcode_token-tips":"one of QR code token and cookie required",root_folder_id:"Root folder id"},"123Pan":{order_by:"Order by",order_bys:{file_name:"File name",size:"Size",update_at:"Update at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",root_folder_id:"Root folder id",stream_upload:"Stream upload",username:"Username"},"139Yun":{account:"Account",cloud_id:"Cloud id",cookie:"Cookie",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"}},"189Cloud":{password:"Password",root_folder_id:"Root folder id",username:"Username"},"189CloudPC":{family_id:"Family id",no_use_ocr:"No use ocr",order_by:"Order by",order_bys:{filename:"Filename",filesize:"Filesize",lastOpTime:"LastOpTime"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",rapid_upload:"Rapid upload",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"},username:"Username",validate_code:"Validate code"},"AList V2":{access_token:"Access token",password:"Password",root_folder_path:"Root folder path",url:"Url"},"AList V3":{access_token:"Access token",password:"Password",root_folder_path:"Root folder path",url:"Url"},Alias:g,Aliyundrive:m,AliyundriveOpen:y,AliyundriveShare:b,BaiduNetdisk:k,BaiduPhoto:w,BaiduShare:v,Cloudreve:S,FTP:C,GoogleDrive:P,GooglePhoto:A,Lanzou:x,Local:R,MediaTrack:T,Mega_nz:U,Onedrive:D,OnedriveAPP:z,PikPak:O,PikPakShare:L,Quark:F,S3:B,SFTP:M,SMB:j,Seafile:E,Teambition:N,Terabox:q,Thunder:V,ThunderExpert:I,Trainbit:G,USS:Y,UrlTree:Q,Virtual:W,WebDav:H,YandexDisk:$,config:K,drivers:J},Z="Refresh",ee="Add",oe="Edit",te="Save",se="Update",re="Copied",ie="Deleted successfully",ne="Saved successfully",ae="Updated successfully",de="Choose",ce="Confirm",le="Cancel",_e="Are you sure you want to delete [{{name}}]?",pe="Operations",ue="Yes",he="No",fe="Clear",ge="Select folder",me="Select folder or input path",ye="Disable",be="Enable",ke="OK",we="Back",ve="Have an account?",Se="Go to login",Ce="Close",Pe="Not currently supported",Ae="Please enter",xe={refresh:Z,add:ee,edit:oe,delete:"Delete",save:te,update:se,copied:re,delete_success:ie,save_success:ne,update_success:ae,choose:de,confirm:ce,cancel:le,delete_confirm:_e,operations:pe,yes:ue,no:he,clear:fe,choose_folder:ge,choose_or_input_path:me,disable:ye,enable:be,ok:ke,back:we,have_account:ve,go_login:Se,close:Ce,no_support_now:Pe,empty_input:Ae},Re={name:"Name",size:"Size",modified:"Modified"},Te={download:"Download",failed_load_img:"Failed to load image",open_with:"Open with ...",install:"Install",installing:"Installing","tr-install":"TrollStore","tr-installing":"TrollStore Installing"},Ue={list:"List View",grid:"Grid View",image:"Image View"},De="No images in the current folder",ze="Load more",Oe="No more",Le="Please input password",Fe={more:"More",refresh:"Refresh",toggle_theme:"Toggle Theme",switch_lang:"Switch Language",toggle_checkbox:"Toggle Checkbox",rename:"Rename",input_new_name:"Input new name","only_one-tips":"Only one object can be selected to rename",move:"Move",copy:"Copy",choose_dst_folder:"Select destination folder",delete:"Delete","delete-tips":"Are you sure to delete the selected object?",copy_link:"Copy link",preview_page:"Preview page",down_link:"Download link",encode_down_link:"Encode download link",mkdir:"New Folder",input_dir_name:"Input folder name",new_file:"New File",input_filename:"Input filename",cancel_select:"Cancel Select",offline_download:"Offline download","offline_download-tips":"One URL per line",download:"Download",batch_download:"Batch Download",package_download:"Package Download",package_download_disabled:"Package download is disabled",send_aria2:"Send to Aria2",aria2_not_set:"Please set aria2 rpc url",send_aria2_success:"Send to aria2 successfully","pre_package_download-tips":"Using streamsaver in the browser instead of the server for package download requires the corresponding storage to support cors, and the unsupported storage will fail.","package_download-tips":"Downloading, please wait don't close the page",upload:"Upload",local_settings:"Local Settings"},Be={add_as_task:"Add as task","upload-tips":"Drag files here to upload, or click:",release:"Release to upload",no_files_drag:"No files were dragged in.",upload_files:"Choose Files",upload_folder:"Choose Folder",pending:"Pending",uploading:"Uploading",backending:"Uploading in the backend",success:"Success",error:"Error",back:"Back to Upload",clear_done:"Clear Done"},Me={aria2_rpc_url:"Aria2 RPC URL",aria2_rpc_secret:"Aria2 RPC secret",aria2_dir:"Aria2 download directory"},je={current_status:"Current Status",initializing:"Initializing",fetching_struct:"Fetching folder structure",fetching_struct_failed:"Failed to fetch folder structure",downloading:"Downloading files, don't close or refresh the page",failed:"Failed to package download",success:"Download completed"},Ee={powered_by:"Powered by AList",manage:"Manage"},Ne={search:"Search",no_result:"No result yet"},qe="Failed fetching settings: ",Ve="Failed get current user: ",Ie={obj:Re,preview:Te,layouts:Ue,no_images:De,load_more:ze,no_more:Oe,input_password:Le,toolbar:Fe,upload:Be,local_settings:Me,package_download:je,footer:Ee,search:Ne,fetching_settings_failed:qe,get_current_user_failed:Ve,"Loading storage, please wait":"Loading storage, please wait"},Ge="Search index",Ye="Current indexes",Qe="Build indexes",We="Rebuild indexes",He="Paths to update",$e="Max depth",Ke="Update indexes",Je="Object count",Xe="Last done time",Ze="Unknown",eo="Stop",oo="Clear",to="Error",so={search_index:Ge,current:Ye,build:Qe,rebuild:We,paths_to_update:He,max_depth:$e,update:Ke,obj_count:Je,last_done_time:Xe,unknown:Ze,stop:eo,clear:oo,error:to},ro="Login to the",io="Remember me",no="Forget password?",ao="https://alist.nn.ci/faq/howto.html#how-to-get-password-if-i-forget-it",co="Clear",lo="Login",_o="Browse as a guest",po="Login successfully",uo={login_to:ro,"username-tips":"Input your username","password-tips":"Input your password","otp-tips":"Input your OTP Code",remember:io,forget:no,forget_url:ao,clear:co,login:lo,use_guest:_o,success:po},ho={dashboard:"Dashboard",settings:"Settings",site:"Site",style:"Style",preview:"Preview",global:"Global",other:"Other",users:"Users",storages:"Storages",metas:"Metas",profile:"Profile",about:"About",tasks:"Tasks",aria2:"Aria2",upload:"Upload",copy:"Copy","backup-restore":"Backup & Restore",home:"Home",indexes:"Indexes",sso:"Single Sign-on",qbit:"qBittorrent",docs:"Documentation"},fo="Manage",go="You are not admin user, please login with admin account.",mo="Logout successfully",yo="Send",bo="Receive",ko="Received messages",wo={sidemenu:ho,title:fo,not_admin:go,logout_success:mo,send:yo,receive:bo,received_msgs:ko,"add_storage-tips":"You may need to fill in some information in the newly opened tab.","messenger-tips":"You may need to fill in some information on this tab as prompted."},vo="Path",So="Password",Co="Write",Po="Hide",Ao="Readme",xo="Apply to sub folder",Ro="One regular expression per line",To="Support markdown content or markdown link",Uo={path:vo,password:So,write:Co,hide:Po,readme:Ao,apply_sub:xo,hide_help:Ro,readme_help:To},Do="Allow indexed",zo="Announcement",Oo="Aria2 secret",Lo="Aria2 uri",Fo="Audio autoplay",Bo="Audio cover",Mo="Audio types",jo="Auto update index",Eo="Customize body",No="Customize head",qo="Default page size",Vo="External previews",Io="Favicon",Go="Filename char mapping",Yo="Forward direct link params",Qo="Hide files",Wo="Home container",Ho={hope_container:"Hope container",max_980px:"Max 980px"},$o="Home icon",Ko="Iframe previews",Jo="Ignore paths",Xo="Image types",Zo="Index progress",et="Link expiration",ot="Logo",tt="Main color",st="Max index depth",rt="Ocr api",it="Package download",nt="Pagination type",at={all:"All",auto_load_more:"Auto load more",load_more:"Load more",pagination:"Pagination"},dt="Privacy regs",ct="Proxy ignore headers",lt="Proxy types",_t="Qbittorrent seedtime",pt="Qbittorrent url",ut="Search index",ht={bleve:"Bleve",database:"Database",database_non_full_text:"Database non full text",none:"None"},ft="Settings layout",gt={list:"List",responsive:"Responsive"},mt="Sign all",yt="Site title",bt="Sso client id",kt="Sso client secret",wt="Sso login enabled",vt="Sso login platform",St={Dingtalk:"Dingtalk",Github:"Github",Google:"Google",Microsoft:"Microsoft"},Ct="Text types",Pt="Token",At="Version",xt="Video autoplay",Rt="Video types",Tt="Logo text",Ut="Beian",Dt="Contact us",zt={allow_indexed:Do,announcement:zo,aria2_secret:Oo,aria2_uri:Lo,audio_autoplay:Fo,audio_cover:Bo,audio_types:Mo,auto_update_index:jo,customize_body:Eo,customize_head:No,default_page_size:qo,external_previews:Vo,favicon:Io,filename_char_mapping:Go,forward_direct_link_params:Yo,hide_files:Qo,home_container:Wo,home_containers:Ho,home_icon:$o,iframe_previews:Ko,ignore_paths:Jo,"ignore_paths-tips":"one path per line",image_types:Xo,index_progress:Zo,link_expiration:et,logo:ot,main_color:tt,max_index_depth:st,"max_index_depth-tips":"max depth of index",ocr_api:rt,package_download:it,pagination_type:nt,pagination_types:at,privacy_regs:dt,proxy_ignore_headers:ct,proxy_types:lt,qbittorrent_seedtime:_t,qbittorrent_url:pt,search_index:ut,search_indexs:ht,settings_layout:ft,settings_layouts:gt,sign_all:mt,site_title:yt,sso_client_id:bt,sso_client_secret:kt,sso_login_enabled:wt,sso_login_platform:vt,sso_login_platforms:St,text_types:Ct,token:Pt,version:At,video_autoplay:xt,video_types:Rt,logo_text:Tt,site_beian:Ut,contact_us:Dt},Ot="Aria2",Lt="Aria2 Version:",Ft="Set aria2",Bt="Copy Token",Mt="Reset Token",jt="Reset Token Successfully",Et="Unknown type",Nt="Set qBittorrent",qt="qBittorrent",Vt={aria2:Ot,aria2_version:Lt,set_aria2:Ft,copy_token:Bt,reset_token:Mt,reset_token_success:jt,unknown_type:Et,set_qbit:Nt,qbittorrent:qt},It={mount_path:"Mount Path",driver:"Driver",order:"Order","order-tips":"Use to sort",status:"Status",remark:"Remark",cache_expiration:"Cache Expiration","cache_expiration-tips":"The cache expiration time for this storage(minutes)",down_proxy_url:"Download proxy URL",web_proxy:"Web proxy",webdav_policy:"WebDAV policy",webdav_policys:{"302_redirect":"302 redirect",use_proxy_url:"use proxy URL",native_proxy:"native proxy"},order_by:"Order by",order_bys:{name:"Name",size:"Size",modified:"Modified"},order_direction:"Order direction",order_directions:{asc:"Ascending",desc:"Descending"},extract_folder:"Extract folder",extract_folders:{front:"Extract to front",back:"Extract to back"},enable_sign:"Enable sign"},Gt={start_load_success:"Start loading",load_all:"Reload All",filter_by_driver:"Filter by driver"},Yt={common:It,other:Gt},Qt="Download file to local machine",Wt="Transfer downloaded file to corresponding storage",Ht="Download file to local machine",$t="Transfer downloaded file to corresponding storage",Kt="Upload file to corresponding storage",Jt="Copy file from a storage to another storage",Xt="Completed",Zt="Running",es="Pending",os="Running",ts="Canceling",ss="Succeeded",rs="Canceled",is="Errored",ns="Clear Succeeded",as="Retry",ds={aria2_down:Qt,aria2_transfer:Wt,qbit_down:Ht,qbit_transfer:$t,upload:Kt,copy:Jt,done:Xt,undone:Zt,pending:es,running:os,canceling:ts,succeeded:ss,canceled:rs,errored:is,clear_succeeded:ns,retry:as},cs={see_hides:"Can see hides",access_without_password:"Access without password",offline_download:"Add offline download tasks",write:"Make dir or upload",rename:"Rename",move:"Move",copy:"Copy",delete:"Delete",webdav_read:"Webdav read",webdav_manage:"Webdav manage"},ls="Username",_s="Password",ps="Base path",us="Role",hs="Permission",fs="Disabled",gs="Available",ms="Update Profile",ys="Update profile successfully, please re-login.",bs="Change Username",ks="Change Password",ws="Enable 2FA",vs="Cancel 2FA",Ss="Cancel 2FA successfully",Cs="Scan the QR code to save the secret key",Ps="Input the code of your 2FA app",As="Verify",xs="So you cannot modify anything in the manage page.",Rs="Single sign-on Login",Ts="Connect Single sign-on Platform",Us="Disconnect Single sign-on Platform",Ds={permissions:cs,username:ls,password:_s,base_path:ps,role:us,permission:hs,disabled:fs,available:gs,update_profile:ms,update_profile_success:ys,change_username:bs,change_password:ks,"change_password-tips":"Keep the password empty if you don't want to change it",enable_2fa:ws,cancel_2fa:vs,cancel_2fa_success:Ss,"2fa_already_enabled":"2FA is already enabled",scan_qr:Cs,input_code:Ps,verify:As,"guest-tips":"You are currently visiting as a guest.",modify_nothing:xs,sso_login:Rs,connect_sso:Ts,disconnect_sso:Us},o=Object.assign({"./br.json":f,"./drivers.json":X,"./global.json":xe,"./home.json":Ie,"./index.json":s,"./indexes.json":so,"./login.json":uo,"./manage.json":wo,"./metas.json":Uo,"./settings.json":zt,"./settings_other.json":Vt,"./storages.json":Yt,"./tasks.json":ds,"./users.json":Ds}),zs={};for(const e in o){const t=e.split("/")[1].split(".")[0];zs[t]=o[e]}export{zs as default};
