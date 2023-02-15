import{bx as s}from"./index.790c8f59.js";const r="Backup",n="Restore",a="Start backup",i="Finish backup",d="[ {{item}} ] Backup was successful",c="[ {{item}} ] Backup failed",l="No file selected",_="Start restore",p="Finish restore",u="[ {{item}} ] Restore was successful",h="[ {{item}} ] Restore failed",g={backup:r,restore:n,start_backup:a,finish_backup:i,success_backup_item:d,failed_backup_item:c,no_file:l,start_restore:_,finish_restore:p,success_restore_item:u,failed_restore_item:h},f={internal_upload:"Internal upload",order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},rapid_upload:"Rapid upload",refresh_token:"Refresh token",root_folder_id:"Root folder id"},m={order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},refresh_token:"Refresh token",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd"},b={client_id:"Client id",client_secret:"Client secret",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path"},y={album_id:"Album id",client_id:"Client id",client_secret:"Client secret",refresh_token:"Refresh token",show_type:"Show type",show_types:{root:"Root",root_only_album:"Root only album",root_only_file:"Root only file"}},k={address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username"},w={address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username"},v={chunk_size:"Chunk size","chunk_size-tips":"chunk size while uploading (unit: MB)",client_id:"Client id",client_secret:"Client secret",order_by:"Order by","order_by-tips":"such as: folder,name,modifiedTime",order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_id:"Root folder id"},x={client_id:"Client id",client_secret:"Client secret",refresh_token:"Refresh token",root_folder_id:"Root folder id",show_archive:"Show archive"},S={baseUrl:"BaseUrl","baseUrl-tips":"basic URL for file operation",cookie:"Cookie","cookie-tips":"about 15 days valid, ignore if shareUrl is used",repair_file_info:"Repair file info","repair_file_info-tips":"To use webdav, you need to enable it",root_folder_id:"Root folder id",shareUrl:"ShareUrl","shareUrl-tips":"used to get the sharing page",share_password:"Share password",type:"Type",types:{cookie:"Cookie",url:"Url"}},C={root_folder_path:"Root folder path",show_hidden:"Show hidden","show_hidden-tips":"show hidden directories and files",thumbnail:"Thumbnail","thumbnail-tips":"enable thumbnail"},P={access_token:"Access token",order_by:"Order by",order_bys:{size:"Size",title:"Title",updated_at:"Updated at"},order_desc:"Order desc",project_id:"Project id",root_folder_id:"Root folder id"},R={email:"Email",password:"Password"},A={chunk_size:"Chunk size",client_id:"Client id",client_secret:"Client secret",is_sharepoint:"Is sharepoint",redirect_uri:"Redirect uri",refresh_token:"Refresh token",region:"Region",regions:{cn:"Cn",de:"De",global:"Global",us:"Us"},root_folder_path:"Root folder path",site_id:"Site id"},U={password:"Password",root_folder_id:"Root folder id",username:"Username"},D={password:"Password",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd",username:"Username"},T={cookie:"Cookie",order_by:"Order by",order_bys:{file_name:"File name",file_type:"File type",none:"None",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id"},z={access_key_id:"Access key id",bucket:"Bucket",custom_host:"Custom host",endpoint:"Endpoint",force_path_style:"Force path style",list_object_version:"List object version",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"Placeholder",region:"Region",root_folder_path:"Root folder path",secret_access_key:"Secret access key",sign_url_expire:"Sign url expire"},O={address:"Address",password:"Password",private_key:"Private key",root_folder_path:"Root folder path",username:"Username"},L={address:"Address",password:"Password",root_folder_path:"Root folder path",share_name:"Share name",username:"Username"},F={address:"Address",password:"Password",repoId:"RepoId",root_folder_path:"Root folder path",username:"Username"},j={cookie:"Cookie",order_by:"Order by",order_bys:{created:"Created",fileName:"FileName",fileSize:"FileSize",updated:"Updated"},order_direction:"Order direction",order_directions:{Asc:"Asc",Desc:"Desc"},project_id:"Project id",region:"Region",regions:{china:"China",international:"International"},root_folder_id:"Root folder id"},M={cookie:"Cookie",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_path:"Root folder path"},B={captcha_token:"Captcha token",password:"Password",root_folder_id:"Root folder id",username:"Username"},N={algorithms:"Algorithms","algorithms-tips":"sign type is algorithms,this is required",captcha_sign:"Captcha sign","captcha_sign-tips":"sign type is captcha_sign,this is required",captcha_token:"Captcha token",client_id:"Client id",client_secret:"Client secret",client_version:"Client version",device_id:"Device id",download_user_agent:"Download user agent",login_type:"Login type",login_types:{refresh_token:"Refresh token",user:"User"},package_name:"Package name",password:"Password","password-tips":"login type is user,this is required",refresh_token:"Refresh token","refresh_token-tips":"login type is refresh_token,this is required",root_folder_id:"Root folder id",sign_type:"Sign type",sign_types:{algorithms:"Algorithms",captcha_sign:"Captcha sign"},timestamp:"Timestamp","timestamp-tips":"sign type is captcha_sign,this is required",use_video_url:"Use video url",user_agent:"User agent",username:"Username","username-tips":"login type is user,this is required"},E={bucket:"Bucket",endpoint:"Endpoint",operator_name:"Operator name",operator_password:"Operator password",root_folder_path:"Root folder path",sign_url_expire:"Sign url expire"},V={max_file_size:"Max file size",min_file_size:"Min file size",num_file:"Num file",num_folder:"Num folder",root_folder_path:"Root folder path"},I={address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username",vendor:"Vendor",vendors:{other:"Other",sharepoint:"Sharepoint"}},q={client_id:"Client id",client_secret:"Client secret",order_by:"Order by",order_bys:{created:"Created",modified:"Modified",name:"Name",path:"Path",size:"Size"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path"},G={"115 Cloud":"115 Cloud","123Pan":"123Pan","139Yun":"139Yun","189Cloud":"189Cloud","189CloudPC":"189CloudPC","AList V2":"AList V2","AList V3":"AList V3",Aliyundrive:"Aliyundrive",AliyundriveShare:"AliyundriveShare",BaiduNetdisk:"BaiduNetdisk",BaiduPhoto:"BaiduPhoto",Cloudreve:"Cloudreve",FTP:"FTP",GoogleDrive:"GoogleDrive",GooglePhoto:"GooglePhoto",Lanzou:"Lanzou",Local:"Local",MediaTrack:"MediaTrack",Mega_nz:"Mega nz",Onedrive:"Onedrive",PikPak:"PikPak",PikPakShare:"PikPakShare",Quark:"Quark",S3:"S3",SFTP:"SFTP",SMB:"SMB",Seafile:"Seafile",Teambition:"Teambition",Terabox:"Terabox",Thunder:"Thunder",ThunderExpert:"ThunderExpert",USS:"USS",Virtual:"Virtual",WebDav:"WebDav",YandexDisk:"YandexDisk"},Y={"115 Cloud":{cookie:"Cookie",qrcode_token:"Qrcode token",root_folder_id:"Root folder id"},"123Pan":{order_by:"Order by",order_bys:{file_name:"File name",size:"Size",update_at:"Update at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",root_folder_id:"Root folder id",stream_upload:"Stream upload",username:"Username"},"139Yun":{account:"Account",cloud_id:"Cloud id",cookie:"Cookie",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"}},"189Cloud":{password:"Password",root_folder_id:"Root folder id",username:"Username"},"189CloudPC":{family_id:"Family id",no_use_ocr:"No use ocr",order_by:"Order by",order_bys:{filename:"Filename",filesize:"Filesize",lastOpTime:"LastOpTime"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",rapid_upload:"Rapid upload",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"},username:"Username",validate_code:"Validate code"},"AList V2":{access_token:"Access token",password:"Password",root_folder_path:"Root folder path",url:"Url"},"AList V3":{access_token:"Access token",password:"Password",root_folder_path:"Root folder path",url:"Url"},Aliyundrive:f,AliyundriveShare:m,BaiduNetdisk:b,BaiduPhoto:y,Cloudreve:k,FTP:w,GoogleDrive:v,GooglePhoto:x,Lanzou:S,Local:C,MediaTrack:P,Mega_nz:R,Onedrive:A,PikPak:U,PikPakShare:D,Quark:T,S3:z,SFTP:O,SMB:L,Seafile:F,Teambition:j,Terabox:M,Thunder:B,ThunderExpert:N,USS:E,Virtual:V,WebDav:I,YandexDisk:q,drivers:G},W="Refresh",H="Add",Q="Edit",$="Save",K="Update",J="Copied",X="Deleted successfully",Z="Saved successfully",ee="Updated successfully",oe="Choose",te="Confirm",se="Cancel",re="Are you sure you want to delete [{{name}}]?",ne="Operations",ae="Yes",ie="No",de="Clear",ce="Select folder",le="Select folder or input path",_e="Disable",pe="Enable",ue="OK",he="Back",ge="Have an account?",fe="Go to login",me="Close",be="Not currently supported",ye="Please enter",ke={refresh:W,add:H,edit:Q,delete:"Delete",save:$,update:K,copied:J,delete_success:X,save_success:Z,update_success:ee,choose:oe,confirm:te,cancel:se,delete_confirm:re,operations:ne,yes:ae,no:ie,clear:de,choose_folder:ce,choose_or_input_path:le,disable:_e,enable:pe,ok:ue,back:he,have_account:ge,go_login:fe,close:me,no_support_now:be,empty_input:ye},we={name:"Name",size:"Size",modified:"Modified"},ve={download:"Download",failed_load_img:"Failed to load image",open_with:"Open with ...",install:"Install",installing:"Installing"},xe={list:"List View",grid:"Grid View",image:"Image View"},Se="No images in the current folder",Ce="Load more",Pe="No more",Re="Please input password",Ae={more:"More",refresh:"Refresh",toggle_theme:"Toggle Theme",switch_lang:"Switch Language",toggle_checkbox:"Toggle Checkbox",rename:"Rename",input_new_name:"Input new name","only_one-tips":"Only one object can be selected to rename",move:"Move",copy:"Copy",choose_dst_folder:"Select destination folder",delete:"Delete","delete-tips":"Are you sure to delete the selected object?",copy_link:"Copy link",preview_page:"Preview page",down_link:"Download link",encode_down_link:"Encode download link",mkdir:"New Folder",input_dir_name:"Input folder name",new_file:"New File",input_filename:"Input filename",cancel_select:"Cancel Select",offline_download:"Offline download","offline_download-tips":"One URL per line",download:"Download",batch_download:"Batch Download",package_download:"Package Download",package_download_disabled:"Package download is disabled",send_aria2:"Send to Aria2",aria2_not_set:"Please set aria2 rpc url",send_aria2_success:"Send to aria2 successfully","pre_package_download-tips":"Using streamsaver in the browser instead of the server for package download requires the corresponding storage to support cors, and the unsupported storage will fail.","package_download-tips":"Downloading, please wait don't close the page",upload:"Upload",local_settings:"Local Settings"},Ue={add_as_task:"Add as task","upload-tips":"Drag files here to upload, or click:",release:"Release to upload",no_files_drag:"No files were dragged in.",only_files_or_one_folder:"Only files or one folder can be dragged at a time.",upload_files:"Choose Files",upload_folder:"Choose Folder",pending:"Pending",uploading:"Uploading",backending:"Uploading in the backend",success:"Success",error:"Error",back:"Back to Upload",clear_done:"Clear Done"},De={aria2_rpc_url:"Aria2 RPC URL",aria2_rpc_secret:"Aria2 RPC secret",aria2_dir:"Aria2 download directory"},Te={current_status:"Current Status",initializing:"Initializing",fetching_struct:"Fetching folder structure",fetching_struct_failed:"Failed to fetch folder structure",downloading:"Downloading files, don't close or refresh the page",failed:"Failed to package download",success:"Download completed"},ze={powered_by:"Powered by AList",manage:"Manage"},Oe={search:"Search",no_result:"No result yet"},Le="Failed fetching settings: ",Fe="Failed get current user: ",je={obj:we,preview:ve,layouts:xe,no_images:Se,load_more:Ce,no_more:Pe,input_password:Re,toolbar:Ae,upload:Ue,local_settings:De,package_download:Te,footer:ze,search:Oe,fetching_settings_failed:Le,get_current_user_failed:Fe,"Loading storage, please wait":"Loading storage, please wait"},Me="Search index",Be="Current indexes",Ne="Build indexes",Ee="Rebuild indexes",Ve="Paths to update",Ie="Max depth",qe="Update indexes",Ge="Object count",Ye="Last done time",We="Unknown",He="Stop",Qe="Clear",$e="Error",Ke={search_index:Me,current:Be,build:Ne,rebuild:Ee,paths_to_update:Ve,max_depth:Ie,update:qe,obj_count:Ge,last_done_time:Ye,unknown:We,stop:He,clear:Qe,error:$e},Je="Login to the",Xe="Remember me",Ze="Forget password?",eo="https://alist.nn.ci/faq/howto.html#how-to-get-password-if-i-forget-it",oo="Clear",to="Login",so="Browse as a guest",ro="Login successfully",no={login_to:Je,"username-tips":"Input your username","password-tips":"Input your password","otp-tips":"Input your OTP Code",remember:Xe,forget:Ze,forget_url:eo,clear:oo,login:to,use_guest:so,success:ro},ao={dashboard:"Dashboard",settings:"Settings",site:"Site",style:"Style",preview:"Preview",global:"Global",other:"Other",users:"Users",storages:"Storages",metas:"Metas",profile:"Profile",about:"About",tasks:"Tasks",aria2:"Aria2",upload:"Upload",copy:"Copy","backup-restore":"Backup & Restore",home:"Home",indexes:"Indexes",github:"Github",qbit:"qBittorrent"},io="Manage",co="You are not admin user, please login with admin account.",lo="Logout successfully",_o="Send",po="Receive",uo="Received messages",ho={sidemenu:ao,title:io,not_admin:co,logout_success:lo,send:_o,receive:po,received_msgs:uo,"add_storage-tips":"You may need to fill in some information in the newly opened tab.","messenger-tips":"You may need to fill in some information on this tab as prompted."},go="Path",fo="Password",mo="Write",bo="Hide",yo="Readme",ko="Apply to sub folder",wo="One regular expression per line",vo="Support markdown content or markdown link",xo={path:go,password:fo,write:mo,hide:bo,readme:yo,apply_sub:ko,hide_help:wo,readme_help:vo},So="Allow indexed",Co="Announcement",Po="Aria2 secret",Ro="Aria2 uri",Ao="Audio autoplay",Uo="Audio cover",Do="Audio types",To="Auto update index",zo="Customize body",Oo="Customize head",Lo="Default page size",Fo="External previews",jo="Favicon",Mo="Filename char mapping",Bo="Forward direct link params",No="Github client id",Eo="Github client secrets",Vo="Github login enabled",Io="Hide files",qo="Home container",Go={hope_container:"Hope container",max_980px:"Max 980px"},Yo="Home icon",Wo="Iframe previews",Ho="Ignore paths",Qo="Image types",$o="Index progress",Ko="Link expiration",Jo="Logo",Xo="Main color",Zo="Max index depth",et="Ocr api",ot="Package download",tt="Pagination type",st={all:"All",auto_load_more:"Auto load more",load_more:"Load more",pagination:"Pagination"},rt="Privacy regs",nt="Proxy ignore headers",at="Proxy types",it="Qbittorrent url",dt="Search index",ct={bleve:"Bleve",database:"Database",database_non_full_text:"Database non full text",none:"None"},lt="Settings layout",_t={list:"List",responsive:"Responsive"},pt="Sign all",ut="Site title",ht="Text types",gt="Token",ft="Version",mt="Video autoplay",bt="Video types",yt="Logo text",kt="Beian",wt="Contact us",vt={allow_indexed:So,announcement:Co,aria2_secret:Po,aria2_uri:Ro,audio_autoplay:Ao,audio_cover:Uo,audio_types:Do,auto_update_index:To,customize_body:zo,customize_head:Oo,default_page_size:Lo,external_previews:Fo,favicon:jo,filename_char_mapping:Mo,forward_direct_link_params:Bo,github_client_id:No,github_client_secrets:Eo,github_login_enabled:Vo,hide_files:Io,home_container:qo,home_containers:Go,home_icon:Yo,iframe_previews:Wo,ignore_paths:Ho,"ignore_paths-tips":"one path per line",image_types:Qo,index_progress:$o,link_expiration:Ko,logo:Jo,main_color:Xo,max_index_depth:Zo,"max_index_depth-tips":"max depth of index",ocr_api:et,package_download:ot,pagination_type:tt,pagination_types:st,privacy_regs:rt,proxy_ignore_headers:nt,proxy_types:at,qbittorrent_url:it,search_index:dt,search_indexs:ct,settings_layout:lt,settings_layouts:_t,sign_all:pt,site_title:ut,text_types:ht,token:gt,version:ft,video_autoplay:mt,video_types:bt,logo_text:yt,site_beian:kt,contact_us:wt},xt="Aria2",St="Aria2 Version:",Ct="Set aria2",Pt="Copy Token",Rt="Reset Token",At="Reset Token Successfully",Ut="Unknown type",Dt={aria2:xt,aria2_version:St,set_aria2:Ct,copy_token:Pt,reset_token:Rt,reset_token_success:At,unknown_type:Ut},Tt={start_load_success:"Start loading",load_all:"Reload All",mount_path:"Mount Path",driver:"Driver",order:"Order","order-tips":"Use to sort",status:"Status",remark:"Remark",cache_expiration:"Cache Expiration","cache_expiration-tips":"The cache expiration time for this storage(minutes)",down_proxy_url:"Download proxy URL",web_proxy:"Web proxy",webdav_policy:"WebDAV policy",webdav_policys:{"302_redirect":"302 redirect",use_proxy_url:"use proxy URL",native_proxy:"native proxy"},order_by:"Order by",order_bys:{name:"Name",size:"Size",modified:"Modified"},order_direction:"Order direction",order_directions:{asc:"Ascending",desc:"Descending"},extract_folder:"Extract folder",extract_folders:{front:"Extract to front",back:"Extract to back"}},zt={common:Tt},Ot="Download file to local machine",Lt="Transfer downloaded file to corresponding storage",Ft="Download file to local machine",jt="Transfer downloaded file to corresponding storage",Mt="Upload file to corresponding storage",Bt="Copy file from a storage to another storage",Nt="Completed",Et="Running",Vt="Pending",It="Running",qt="Canceling",Gt="Succeeded",Yt="Canceled",Wt="Errored",Ht={aria2_down:Ot,aria2_transfer:Lt,qbit_down:Ft,qbit_transfer:jt,upload:Mt,copy:Bt,done:Nt,undone:Et,pending:Vt,running:It,canceling:qt,succeeded:Gt,canceled:Yt,errored:Wt},Qt={see_hides:"Can see hides",access_without_password:"Access without password",offline_download:"Add offline download tasks",write:"Make dir or upload",rename:"Rename",move:"Move",copy:"Copy",delete:"Delete",webdav_read:"Webdav read",webdav_manage:"Webdav manage"},$t="Username",Kt="Password",Jt="Base path",Xt="Role",Zt="Permission",es="Disabled",os="Available",ts="Update Profile",ss="Update profile successfully, please re-login.",rs="Change Username",ns="Change Password",as="Enable 2FA",is="Scan the QR code to save the secret key",ds="Input the code of your 2FA app",cs="Verify",ls="So you cannot modify anything in the manage page.",_s="Github Login",ps="Connect Github",us="Disconnect Github",hs={permissions:Qt,username:$t,password:Kt,base_path:Jt,role:Xt,permission:Zt,disabled:es,available:os,update_profile:ts,update_profile_success:ss,change_username:rs,change_password:ns,"change_password-tips":"Keep the password empty if you don't want to change it",enable_2fa:as,"2fa_already_enabled":"2FA is already enabled",scan_qr:is,input_code:ds,verify:cs,"guest-tips":"You are currently visiting as a guest.",modify_nothing:ls,github_login:_s,connect_github:ps,disconnect_github:us},o=Object.assign({"./br.json":g,"./drivers.json":Y,"./global.json":ke,"./home.json":je,"./index.json":s,"./indexes.json":Ke,"./login.json":no,"./manage.json":ho,"./metas.json":xo,"./settings.json":vt,"./settings_other.json":Dt,"./storages.json":zt,"./tasks.json":Ht,"./users.json":hs}),gs={};for(const e in o){const t=e.split("/")[1].split(".")[0];gs[t]=o[e]}export{gs as default};
