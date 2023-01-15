import{bz as t}from"./index.891b17f7.js";const n="\u5099\u4EFD",r="\u9084\u539F",i="\u958B\u59CB\u5099\u4EFD",a="\u5099\u4EFD\u5B8C\u6210",_="[ {{item}} ] \u5099\u4EFD\u6210\u529F",c="[ {{item}} ] \u5099\u4EFD\u5931\u6557",d="\u6C92\u6709\u9078\u64C7\u6A94\u6848",l="\u958B\u59CB\u9084\u539F",p="\u9084\u539F\u5B8C\u6210",u="[ {{item}} ] \u9084\u539F\u6210\u529F",h="[ {{item}} ] \u9084\u539F\u5931\u6557",g={backup:n,restore:r,start_backup:i,finish_backup:a,success_backup_item:_,failed_backup_item:c,no_file:d,start_restore:l,finish_restore:p,success_restore_item:u,failed_restore_item:h},m={order_by:"\u6392\u5E8F",order_bys:{created_at:"\u5275\u5EFA\u6642\u9593",name:"\u540D\u7A31",size:"\u5927\u5C0F",updated_at:"\u4FEE\u6539\u6642\u9593"},order_direction:"\u6392\u5E8F\u65B9\u5F0F",order_directions:{ASC:"\u5347\u5E8F",DESC:"\u964D\u5E8F"},rapid_upload:"\u79D2\u50B3",refresh_token:"\u5237\u65B0\u4EE4\u724C",root_folder_id:"\u6839\u8CC7\u6599\u593EID"},f={order_by:"\u6392\u5E8F",order_bys:{created_at:"\u5275\u5EFA\u6642\u9593",name:"\u540D\u7A31",size:"\u5927\u5C0F",updated_at:"\u4FEE\u6539\u6642\u9593"},order_direction:"\u6392\u5E8F\u65B9\u5F0F",order_directions:{ASC:"\u5347\u5E8F",DESC:"\u964D\u5E8F"},refresh_token:"\u5237\u65B0\u4EE4\u724C",root_folder_id:"\u6839\u8CC7\u6599\u593EID",share_id:"\u5206\u4EABID",share_pwd:"\u5206\u4EAB\u5BC6\u78BC"},b={client_id:"\u5BA2\u6237\u7AEFID",client_secret:"\u5BA2\u6237\u7AEF\u5BC6\u94A5",download_api:"\u4E0B\u8F09\u4ECB\u9762",download_apis:{crack:"\u975E\u5B98\u65B9",official:"\u5B98\u65B9"},order_by:"\u6392\u5E8F",order_bys:{name:"\u540D\u7A31",size:"\u5927\u5C0F",time:"\u6642\u9593"},order_direction:"\u6392\u5E8F\u65B9\u5F0F",order_directions:{asc:"\u5347\u5E8F",desc:"\u964D\u5E8F"},refresh_token:"\u5237\u65B0\u4EE4\u724C",root_folder_path:"\u6839\u8CC7\u6599\u593E\u8DEF\u5F91"},k={album_id:"\u76F8\u7C3FID",client_id:"\u5BA2\u6237\u7AEFID",client_secret:"\u5BA2\u6237\u7AEF\u5BC6\u94A5",refresh_token:"\u5237\u65B0\u4EE4\u724C",show_type:"\u5C55\u793A\u985E\u578B",show_types:{root:"\u6839",root_only_album:"\u50C5\u6839\u76EE\u9304\u4E0B\u76F8\u7C3F",root_only_file:"\u50C5\u6839\u76EE\u9304\u4E0B\u6A94\u6848"}},y={address:"\u5730\u5740",password:"\u5BC6\u78BC",root_folder_path:"\u6839\u8CC7\u6599\u593E\u8DEF\u5F91",username:"\u7528\u6236\u540D"},w={address:"\u5730\u5740",password:"\u5BC6\u78BC",root_folder_path:"\u6839\u8CC7\u6599\u593E\u8DEF\u5F91",username:"\u7528\u6236\u540D"},v={chunk_size:"\u5206\u7247\u5927\u5C0F","chunk_size-tips":"\u4E0A\u50B3\u5206\u584A\u5927\u5C0F (\u55AE\u4F4D\uFF1A MB)",client_id:"\u5BA2\u6237\u7AEFID",client_secret:"\u5BA2\u6237\u7AEF\u5BC6\u94A5",order_by:"\u6392\u5E8F","order_by-tips":"\u4F8B\u5982:folder,name,modifiedTime",order_direction:"\u6392\u5E8F\u65B9\u5F0F",order_directions:{asc:"\u5347\u5E8F",desc:"\u964D\u5E8F"},refresh_token:"\u5237\u65B0\u4EE4\u724C",root_folder_id:"\u6839\u8CC7\u6599\u593EID"},x={client_id:"\u5BA2\u6237\u7AEFID",client_secret:"\u5BA2\u6237\u7AEF\u5BC6\u94A5",refresh_token:"\u5237\u65B0\u4EE4\u724C",root_folder_id:"\u6839\u8CC7\u6599\u593EID",show_archive:"\u986F\u793A\u6B78\u6A94"},D={baseUrl:"\u57FA\u672CURL","baseUrl-tips":"\u6A94\u6848\u64CD\u4F5C\u7684\u57FA\u672CURL",cookie:"Cookie","cookie-tips":"\u5927\u7D0415\u5929\u6709\u6548\uFF0C\u5982\u4F7F\u7528shareUrl\u5247\u5FFD\u7565",repair_file_info:"\u4FEE\u5FA9\u6A94\u6848\u4FE1\u606F","repair_file_info-tips":"\u555F\u7528WebDAV\u624D\u53EF\u4F7F\u7528\u6B64\u529F\u80FD",root_folder_id:"\u6839\u8CC7\u6599\u593EID",shareUrl:"\u5206\u4EAB\u94FE\u63A5","shareUrl-tips":"\u7528\u65BC\u7372\u53D6\u5206\u4EAB\u9801\u9762",share_password:"\u5206\u4EAB\u5BC6\u78BC",type:"\u985E\u578B",types:{cookie:"Cookie",url:"\u94FE\u63A5"}},P={root_folder_path:"\u6839\u8CC7\u6599\u593E\u8DEF\u5F91",show_hidden:"\u986F\u793A\u96B1\u85CF","show_hidden-tips":"\u986F\u793A\u96B1\u85CF\u76EE\u9304\u4EE5\u53CA\u6A94",thumbnail:"\u7E2E\u7565\u5716","thumbnail-tips":"\u555F\u7528\u7E2E\u7565\u5716"},I={access_token:"\u8A2A\u554F\u6B0A\u6756",order_by:"\u6392\u5E8F",order_bys:{size:"\u5927\u5C0F",title:"\u540D\u7A31",updated_at:"\u4FEE\u6539\u6642\u9593"},order_desc:"\u964D\u5E8F\u6392\u5217",project_id:"\u9805\u76EEID",root_folder_id:"\u6839\u8CC7\u6599\u593EID"},S={email:"\u90F5\u7BB1",password:"\u5BC6\u78BC"},z={chunk_size:"\u5206\u7247\u5927\u5C0F","chunk_size-tips":"\u4E0A\u50B3\u5206\u584A\u5927\u5C0F (\u55AE\u4F4D\uFF1A MB)",client_id:"\u5BA2\u6237\u7AEFID",client_secret:"\u5BA2\u6237\u7AEF\u5BC6\u94A5",is_sharepoint:"\u662F\u5426Sharepoint",redirect_uri:"\u91CD\u5B9A\u5411Uri",refresh_token:"\u5237\u65B0\u4EE4\u724C",region:"\u5730\u5340",regions:{cn:"\u4E16\u7D00\u4E92\u806F",de:"\u5FB7\u570B\u7248",global:"\u5168\u57DF\u8A2D\u5B9A",us:"\u7F8E\u570B\u7248"},root_folder_path:"\u6839\u8CC7\u6599\u593E\u8DEF\u5F91",site_id:"\u7DB2\u7AD9ID"},T={password:"\u5BC6\u78BC",root_folder_id:"\u6839\u8CC7\u6599\u593EID",username:"\u7528\u6236\u540D"},C={password:"\u5BC6\u78BC",root_folder_id:"\u6839\u8CC7\u6599\u593EID",share_id:"\u5206\u4EABID",share_pwd:"\u5206\u4EAB\u5BC6\u78BC",username:"\u7528\u6236\u540D"},A={cookie:"Cookie",order_by:"\u6392\u5E8F",order_bys:{file_name:"\u6A94\u6848\u540D\u7A31",file_type:"\u6A94\u6848\u985E\u578B",none:"\u7121",updated_at:"\u4FEE\u6539\u6642\u9593"},order_direction:"\u6392\u5E8F\u65B9\u5F0F",order_directions:{asc:"\u5347\u5E8F",desc:"\u964D\u5E8F"},root_folder_id:"\u6839\u8CC7\u6599\u593EID"},j={access_key_id:"\u8A2A\u554F\u5BC6\u94A5 Id",bucket:"\u5B58\u5132\u6876",custom_host:"\u81EA\u5B9A\u7FA9HOST",endpoint:"Endpoint",force_path_style:"\u5F37\u5236\u8DEF\u5F91\u6A23\u5F0F",list_object_version:"\u5217\u51FA\u5C0D\u8C61\u7248\u672C",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"\u5360\u4F4D\u6A94\u540D",region:"\u5730\u5340",root_folder_path:"\u6839\u8CC7\u6599\u593E\u8DEF\u5F91",secret_access_key:"\u5B89\u5168\u8A2A\u554F\u5BC6\u94A5",sign_url_expire:"\u7C3D\u540D\u94FE\u63A5\u6709\u6548\u671F"},L={address:"\u5730\u5740",password:"\u5BC6\u78BC",private_key:"\u79C1\u5BC6\u91D1\u9470",root_folder_path:"\u6839\u8CC7\u6599\u593E\u8DEF\u5F91",username:"\u7528\u6236\u540D"},G={address:"\u5730\u5740",password:"\u5BC6\u78BC",root_folder_path:"\u6839\u8CC7\u6599\u593E\u8DEF\u5F91",share_name:"\u5206\u4EAB\u540D\u7A31",username:"\u7528\u6236\u540D"},M={address:"\u5730\u5740",password:"\u5BC6\u78BC",repoId:"RepoId",root_folder_path:"\u6839\u8CC7\u6599\u593E\u8DEF\u5F91",username:"\u7528\u6236\u540D"},B={cookie:"Cookie",order_by:"\u6392\u5E8F",order_bys:{created:"\u5275\u5EFA\u6642\u9593",fileName:"\u6A94\u540D",fileSize:"\u6587\u4EF6\u5927\u5C0F",updated:"\u4FEE\u6539\u6642\u9593"},order_direction:"\u6392\u5E8F\u65B9\u5F0F",order_directions:{Asc:"\u5347\u5E8F",Desc:"\u964D\u5E8F"},project_id:"\u9805\u76EEID",region:"\u5730\u5340",regions:{china:"\u4E2D\u570B",international:"\u570B\u969B\u7248"},root_folder_id:"\u6839\u8CC7\u6599\u593EID"},V={cookie:"Cookie",download_api:"\u4E0B\u8F09\u4ECB\u9762",download_apis:{crack:"\u975E\u5B98\u65B9",official:"\u5B98\u65B9"},order_by:"\u6392\u5E8F",order_bys:{name:"\u540D\u7A31",size:"\u5927\u5C0F",time:"\u6642\u9593"},order_direction:"\u6392\u5E8F\u65B9\u5F0F",order_directions:{asc:"\u5347\u5E8F",desc:"\u964D\u5E8F"},root_folder_path:"\u6839\u8CC7\u6599\u593E\u8DEF\u5F91"},O={captcha_token:"\u9A57\u8B49\u78BC",password:"\u5BC6\u78BC",root_folder_id:"\u6839\u8CC7\u6599\u593EID",username:"\u7528\u6236\u540D"},U={algorithms:"\u7B97\u6CD5","algorithms-tips":"\u7C3D\u540D\u985E\u578B\u662F\u7528\u6236\u540D,\u6B64\u70BA\u5FC5\u586B\u9805",captcha_sign:"\u9A57\u8B49\u78BC\u7C3D\u540D","captcha_sign-tips":"\u7C3D\u540D\u985E\u578B\u662F\u9A57\u8B49\u78BC\u7C3D\u540D,\u6B64\u70BA\u5FC5\u586B\u9805",captcha_token:"\u9A57\u8B49\u78BC",client_id:"\u5BA2\u6237\u7AEFID",client_secret:"\u5BA2\u6237\u7AEF\u5BC6\u94A5",client_version:"\u5BA2\u6237\u7AEF\u7248\u672C",device_id:"\u8A2D\u5099id",download_user_agent:"\u4E0B\u8F09\u7528\u6236\u4EE3\u7406",login_type:"\u767B\u5165\u985E\u578B",login_types:{refresh_token:"\u5237\u65B0\u4EE4\u724C",user:"\u7528\u6236\u540D"},package_name:"\u5305\u540D",password:"\u5BC6\u78BC","password-tips":"\u767B\u5165\u985E\u578B\u662F\u7528\u6236\u540D,\u6B64\u70BA\u5FC5\u586B\u9805",refresh_token:"\u5237\u65B0\u4EE4\u724C","refresh_token-tips":"\u767B\u5165\u985E\u578B\u662F\u5237\u65B0\u4EE4\u724C,\u6B64\u70BA\u5FC5\u586B\u9805",root_folder_id:"\u6839\u8CC7\u6599\u593EID",sign_type:"\u7C3D\u540D\u985E\u578B",sign_types:{algorithms:"\u7B97\u6CD5",captcha_sign:"\u9A57\u8B49\u78BC\u7C3D\u540D"},timestamp:"\u6642\u9593\u6233","timestamp-tips":"\u7C3D\u540D\u985E\u578B\u662F\u9A57\u8B49\u78BC\u7C3D\u540D,\u6B64\u70BA\u5FC5\u586B\u9805",use_video_url:"\u4F7F\u7528\u8996\u983Burl",user_agent:"\u7528\u6236\u4EE3\u7406",username:"\u7528\u6236\u540D","username-tips":"\u767B\u5165\u985E\u578B\u662F\u7528\u6236\u540D,\u6B64\u70BA\u5FC5\u586B\u9805"},F={bucket:"\u5B58\u5132\u6876",endpoint:"Endpoint",operator_name:"\u64CD\u4F5C\u54E1\u540D\u7A31",operator_password:"\u64CD\u4F5C\u54E1\u5BC6\u78BC",root_folder_path:"\u6839\u8CC7\u6599\u593E\u8DEF\u5F91",sign_url_expire:"\u7C3D\u540D\u94FE\u63A5\u6709\u6548\u671F"},W={max_file_size:"\u6700\u5927\u6587\u4EF6\u5927\u5C0F",min_file_size:"\u6700\u5C0F\u6587\u4EF6\u5927\u5C0F",num_file:"\u6A94\u6848\u6578\u91CF",num_folder:"\u8CC7\u6599\u593E\u6578\u91CF",root_folder_path:"\u6839\u8CC7\u6599\u593E\u8DEF\u5F91"},E={address:"\u5730\u5740",password:"\u5BC6\u78BC",root_folder_path:"\u6839\u8CC7\u6599\u593E\u8DEF\u5F91",username:"\u7528\u6236\u540D",vendor:"\u4F9B\u61C9\u5546",vendors:{other:"\u5176\u4ED6",sharepoint:"Sharepoint"}},R={client_id:"\u5BA2\u6237\u7AEFID",client_secret:"\u5BA2\u6237\u7AEF\u5BC6\u94A5",order_by:"\u6392\u5E8F",order_bys:{created:"\u5275\u5EFA\u6642\u9593",modified:"\u4FEE\u6539\u6642\u9593",name:"\u540D\u7A31",path:"\u8DEF\u5F91",size:"\u5927\u5C0F"},order_direction:"\u6392\u5E8F\u65B9\u5F0F",order_directions:{asc:"\u5347\u5E8F",desc:"\u964D\u5E8F"},refresh_token:"\u5237\u65B0\u4EE4\u724C",root_folder_path:"\u6839\u8CC7\u6599\u593E\u8DEF\u5F91"},$={"115 Cloud":"115 \u7DB2\u76E4","123Pan":"123\u96F2\u76E4","139Yun":"\u4E2D\u570B\u79FB\u52D5\u96F2\u76E4","189Cloud":"\u5929\u7FFC\u96F2\u76E4","189CloudPC":"\u5929\u7FFC\u96F2\u76E4\u7528\u6236\u7AEF","AList V2":"AList V2","AList V3":"AList V3",Aliyundrive:"\u963F\u88E1\u96F2\u76E4",AliyundriveShare:"\u963F\u88E1\u96F2\u76E4\u5206\u4EAB",BaiduNetdisk:"\u767E\u5EA6\u7DB2\u76E4",BaiduPhoto:"\u4E00\u523B\u76F8\u518C",Cloudreve:"Cloudreve",FTP:"FTP",GoogleDrive:"Google\u96F2\u76E4",GooglePhoto:"Google\u76F8\u518C",Lanzou:"\u85CD\u594F\u96F2",Local:"\u672C\u6A5F\u5B58\u5132",MediaTrack:"\u5206\u79D2\u5E40",Mega_nz:"Mega \u7DB2\u76E4",Onedrive:"Onedrive",PikPak:"PikPak",PikPakShare:"PikPak\u5206\u4EAB",Quark:"\u8A87\u514B",S3:"\u5C0D\u8C61\u5B58\u5132",SFTP:"SFTP",SMB:"SMB",Seafile:"Seafile",Teambition:"Teambition\u7DB2\u76E4",Terabox:"Terabox",Thunder:"\u8FC5\u96F7",ThunderExpert:"\u8FC5\u96F7\u5C08\u5BB6\u7248",USS:"\u53C8\u62CD\u96F2\u5B58\u5132",Virtual:"\u865B\u64EC\u5B58\u5132",WebDav:"WebDav",YandexDisk:"Yandex\u7DB2\u76E4"},Y={"115 Cloud":{cookie:"Cookie",qrcode_token:"\u4E8C\u7DAD\u78BC\u4EE4\u724C",root_folder_id:"\u6839\u8CC7\u6599\u593EID"},"123Pan":{order_by:"\u6392\u5E8F",order_bys:{file_name:"\u6A94\u6848\u540D\u7A31",size:"\u5927\u5C0F",update_at:"\u4FEE\u6539\u6642\u9593"},order_direction:"\u6392\u5E8F\u65B9\u5F0F",order_directions:{asc:"\u5347\u5E8F",desc:"\u964D\u5E8F"},password:"\u5BC6\u78BC",root_folder_id:"\u6839\u8CC7\u6599\u593EID",stream_upload:"\u6D41\u5F0F\u4E0A\u50B3",username:"\u7528\u6236\u540D"},"139Yun":{account:"\u5E33\u865F",cloud_id:"Cloud id",cookie:"Cookie",root_folder_id:"\u6839\u8CC7\u6599\u593EID",type:"\u985E\u578B",types:{family:"\u5BB6\u5EAD\u96F2",personal:"\u500B\u4EBA\u96F2"}},"189Cloud":{password:"\u5BC6\u78BC",root_folder_id:"\u6839\u8CC7\u6599\u593EID",username:"\u7528\u6236\u540D"},"189CloudPC":{family_id:"Family id",no_use_ocr:"\u4E0D\u4F7F\u7528OCR",order_by:"\u6392\u5E8F",order_bys:{filename:"\u6A94\u540D",filesize:"\u6587\u4EF6\u5927\u5C0F",lastOpTime:"\u4FEE\u6539\u6642\u9593"},order_direction:"\u6392\u5E8F\u65B9\u5F0F",order_directions:{asc:"\u5347\u5E8F",desc:"\u964D\u5E8F"},password:"\u5BC6\u78BC",rapid_upload:"\u79D2\u50B3",root_folder_id:"\u6839\u8CC7\u6599\u593EID",type:"\u985E\u578B",types:{family:"\u5BB6\u5EAD\u96F2",personal:"\u500B\u4EBA\u96F2"},username:"\u7528\u6236\u540D",validate_code:"\u9A57\u8B49\u78BC"},"AList V2":{access_token:"\u8A2A\u554F\u6B0A\u6756",password:"\u5BC6\u78BC",root_folder_path:"\u6839\u8CC7\u6599\u593E\u8DEF\u5F91",url:"\u94FE\u63A5"},"AList V3":{access_token:"\u8A2A\u554F\u6B0A\u6756",password:"\u5BC6\u78BC",root_folder_path:"\u6839\u8CC7\u6599\u593E\u8DEF\u5F91",url:"\u94FE\u63A5"},Aliyundrive:m,AliyundriveShare:f,BaiduNetdisk:b,BaiduPhoto:k,Cloudreve:y,FTP:w,GoogleDrive:v,GooglePhoto:x,Lanzou:D,Local:P,MediaTrack:I,Mega_nz:S,Onedrive:z,PikPak:T,PikPakShare:C,Quark:A,S3:j,SFTP:L,SMB:G,Seafile:M,Teambition:B,Terabox:V,Thunder:O,ThunderExpert:U,USS:F,Virtual:W,WebDav:E,YandexDisk:R,drivers:$},q="\u5237\u65B0",N="\u6DFB\u52A0",Q="\u7DE8\u8F2F",H="\u4FDD\u5B58",J="\u66F4\u65B0",K="\u5DF2\u5FA9\u88FD",X="\u522A\u9664\u6210\u529F",Z="\u4FDD\u5B58\u6210\u529F",ee="\u66F4\u65B0\u6210\u529F",oe="\u9078\u64C7",se="\u78BA\u8A8D",te="\u53D6\u6D88",ne="\u4F60\u78BA\u8A8D\u8981\u522A\u9664[{{name}}]?",re="\u64CD\u4F5C",ie="\u662F",ae="\u5426",_e="\u6E05\u9664",ce="\u9078\u64C7\u8CC7\u6599\u593E",de="\u9078\u64C7\u6587\u4EF6\u593E\u6216\u8F38\u5165\u8DEF\u5F91",le="\u7981\u7528",pe="\u555F\u7528",ue="\u78BA\u5B9A",he="\u8FD4\u56DE",ge="\u5DF2\u6709\u8CEC\u865F\uFF1F",me="\u8F49\u5230\u767B\u9304",fe="\u95DC\u9589",be="\u66AB\u4E0D\u652F\u6301",ke="Please enter",ye={refresh:q,add:N,edit:Q,delete:"\u522A\u9664",save:H,update:J,copied:K,delete_success:X,save_success:Z,update_success:ee,choose:oe,confirm:se,cancel:te,delete_confirm:ne,operations:re,yes:ie,no:ae,clear:_e,choose_folder:ce,choose_or_input_path:de,disable:le,enable:pe,ok:ue,back:he,have_account:ge,go_login:me,close:fe,no_support_now:be,empty_input:ke},we={name:"\u540D\u7A31",size:"\u5927\u5C0F",modified:"\u4FEE\u6539\u6642\u9593"},ve={download:"\u4E0B\u8F09",failed_load_img:"\u8F09\u5165\u5716\u50CF\u5931\u6557",open_with:"\u4F7F\u7528... \u6253\u958B",install:"\u5B89\u88DD",installing:"\u6B63\u5728\u5B89\u88DD"},xe={list:"\u6E05\u55AE\u8996\u5716",grid:"\u7DB2\u683C\u8996\u5716",image:"\u5716\u7247\u8996\u5716"},De="\u7576\u524D\u8CC7\u6599\u593E\u4E2D\u7121\u5716\u50CF",Pe="\u52A0\u8F09\u66F4\u591A",Ie="\u6C92\u6709\u66F4\u591A\u4E86",Se="\u8ACB\u8F38\u5165\u5BC6\u78BC",ze={more:"\u66F4\u591A",refresh:"\u5237\u65B0",toggle_theme:"\u5207\u63DB\u4E3B\u984C",switch_lang:"\u5207\u63DB\u8A9E\u8A00",toggle_checkbox:"\u958B\u95DC\u5FA9\u9078\u6846",rename:"\u91CD\u547D\u540D",input_new_name:"\u8F38\u5165\u4E00\u500B\u65B0\u540D\u7A31","only_one-tips":"\u53EA\u80FD\u9078\u64C7\u4E00\u500B\u5C0D\u8C61\u91CD\u547D\u540D",move:"\u79FB\u52D5",copy:"\u8907\u88FD",choose_dst_folder:"\u9078\u64C7\u76EE\u6A19\u6587\u4EF6\u593E",delete:"\u522A\u9664","delete-tips":"\u78BA\u5B9A\u8981\u522A\u9664\u6240\u9078\u5C0D\u8C61\u55CE?",copy_link:"\u5FA9\u88FD\u93C8\u63A5",preview_page:"\u9810\u89BD\u9801\u9762",down_link:"\u4E0B\u8F09\u93C8\u63A5",encode_down_link:"\u7DE8\u78BC\u4E0B\u8F09\u93C8\u63A5",mkdir:"\u65B0\u5EFA\u6587\u4EF6\u593E",input_dir_name:"\u8F38\u5165\u6587\u4EF6\u593E\u540D\u7A31",new_file:"\u65B0\u5EFA\u6587\u4EF6",input_filename:"\u8F38\u5165\u6587\u4EF6\u540D",cancel_select:"\u53D6\u6D88\u9078\u64C7",offline_download:"\u96E2\u7DDA\u4E0B\u8F09","offline_download-tips":"\u6BCF\u884C\u4E00\u689D\u9023\u7D50",download:"\u4E0B\u8F09",batch_download:"\u6279\u91CF\u4E0B\u8F7D",package_download:"\u6253\u5305\u4E0B\u8F7D",package_download_disabled:"\u6253\u5305\u4E0B\u8F09\u5DF2\u7981\u7528",send_aria2:"\u767C\u9001\u5230aria2",aria2_not_set:"\u8BF7\u8BBE\u7F6E aria2 rpc url",send_aria2_success:"\u6210\u529F\u767C\u9001\u5230aria2","pre_package_download-tips":"\u5728\u700F\u89BD\u5668\u4E2D\u4F7F\u7528streamsaver\u800C\u4E0D\u662F\u670D\u52D9\u5668\u4F86\u9032\u884C\u5305\u4E0B\u8F09\u9700\u8981\u76F8\u61C9\u7684\u5B58\u5132\u652F\u6301cors\uFF0C\u800C\u4E0D\u652F\u6301\u7684\u5B58\u5132\u5C07\u5931\u6557\u3002","package_download-tips":"\u6B63\u5728\u4E0B\u8F09\uFF0C\u8ACB\u7A0D\u5019\u4E0D\u8981\u95DC\u9589\u9801\u9762",upload:"\u4E0A\u50B3",local_settings:"\u672C\u5730\u8A2D\u7F6E"},Te={add_as_task:"\u6DFB\u52A0\u70BA\u4EFB\u52D9","upload-tips":"\u62D6\u52D5\u6587\u4EF6\u5230\u6B64\u8655\u4EE5\u4E0A\u50B3\uFF0C\u6216\u9EDE\u64CA\uFF1A",release:"\u677E\u958B\u4EE5\u4E0A\u50B3",no_files_drag:"\u6C92\u6709\u6A94\u6848\u88AB\u62D6\u5165\u3002",only_files_or_one_folder:"\u6BCF\u6B21\u53EA\u80FD\u62D6\u52D5\u6A94\u6216\u4E00\u500B\u8CC7\u6599\u593E\u3002",upload_files:"\u9078\u64C7\u6587\u4EF6",upload_folder:"\u9078\u64C7\u6587\u4EF6\u593E",pending:"\u7B49\u5F85\u4E2D",uploading:"\u4E0A\u50B3\u4E2D",backending:"\u6B63\u5728\u5F8C\u81FA\u4E0A\u50B3",success:"\u6210\u529F",error:"\u932F\u8AA4",back:"\u8FD4\u56DE\u4E0A\u50B3",clear_done:"\u6E05\u7A7A\u5B8C\u6210"},Ce={aria2_rpc_url:"Aria2 RPC \u93C8\u63A5",aria2_rpc_secret:"Aria2 RPC \u5BC6\u9470",aria2_dir:"Aria2 \u4E0B\u8F09\u76EE\u9304"},Ae={current_status:"\u7576\u524D\u72C0\u614B",initializing:"\u6B63\u5728\u521D\u59CB\u5316",fetching_struct:"\u6B63\u5728\u7372\u53D6\u6587\u4EF6\u593E\u7D50\u69CB",fetching_struct_failed:"\u7372\u53D6\u6587\u4EF6\u593E\u7D50\u69CB\u5931\u6557",downloading:"\u4E0B\u8F09\u6587\u4EF6\u4E2D\uFF0C\u4E0D\u8981\u95DC\u9589\u6216\u5237\u65B0\u9801\u9762",failed:"\u6253\u5305\u4E0B\u8F09\u5931\u6557",success:"\u4E0B\u8F09\u5B8C\u6210"},je={powered_by:"Powered by AList",manage:"\u7BA1\u7406"},Le={search:"\u641C\u7D22",no_result:"\u66AB\u7121\u7D50\u679C"},Ge="\u7372\u53D6\u8A2D\u5B9A\u5931\u6557: ",Me="\u7372\u53D6\u7576\u524D\u7528\u6236\u5931\u6557: ",Be={obj:we,preview:ve,layouts:xe,no_images:De,load_more:Pe,no_more:Ie,input_password:Se,toolbar:ze,upload:Te,local_settings:Ce,package_download:Ae,footer:je,search:Le,fetching_settings_failed:Ge,get_current_user_failed:Me,"Loading storage, please wait":"\u8ACB\u7A0D\u5F8C\uFF0C\u6B63\u5728\u52A0\u8F09\u5132\u5B58"},Ve="\u641C\u7D22\u7D22\u5F15",Oe="\u7576\u524D\u7D22\u5F15",Ue="\u69CB\u5EFA\u7D22\u5F15",Fe="\u91CD\u5EFA\u7D22\u5F15",We="\u8981\u66F4\u65B0\u7D22\u5F15\u7684\u8DEF\u5F91",Ee="\u66F4\u65B0\u7D22\u5F15",Re="\u5C0D\u8C61\u8A08\u6578",$e="\u4E0A\u6B21\u5B8C\u6210\u6642\u9593",Ye="\u672A\u77E5",qe="\u505C\u6B62",Ne="\u6E05\u9664",Qe="\u932F\u8AA4",He={search_index:Ve,current:Oe,build:Ue,rebuild:Fe,paths_to_update:We,update:Ee,obj_count:Re,last_done_time:$e,unknown:Ye,stop:qe,clear:Ne,error:Qe},Je="\u767B\u9304\u5230",Ke="\u8A18\u4F4F\u6211\u7684\u767B\u9304\u8CC7\u6599",Xe="\u5FD8\u8A18\u5BC6\u78BC\uFF1F",Ze="https://alist.nn.ci/faq/howto.html#how-to-get-password-if-i-forget-it",eo="\u6E05\u9664",oo="\u767B\u9304",so="\u4EE5\u904A\u5BA2\u8EAB\u4EFD\u700F\u89BD",to="\u767B\u9304\u6210\u529F",no={login_to:Je,"username-tips":"\u8F38\u5165\u60A8\u7684\u7528\u6236\u540D","password-tips":"\u8F38\u5165\u60A8\u7684\u5BC6\u78BC","otp-tips":"\u8F38\u5165\u60A8\u7684 OTP \u4EE3\u78BC",remember:Ke,forget:Xe,forget_url:Ze,clear:eo,login:oo,use_guest:so,success:to},ro={dashboard:"\u63A7\u5236\u9762\u677F",settings:"\u8A2D\u7F6E",site:"\u7AD9\u9EDE",style:"\u6A23\u5F0F",preview:"\u9810\u89BD",global:"\u5168\u57DF\u8A2D\u5B9A",other:"\u5176\u4ED6",users:"\u7528\u6236",storages:"\u5B58\u50A8",metas:"\u5143\u4FE1\u606F",profile:"\u914D\u7F6E\u6587\u4EF6",about:"\u95DC\u65BC",tasks:"\u4EFB\u52D9",aria2:"Aria2",upload:"\u4E0A\u50B3",copy:"\u8907\u88FD","backup-restore":"\u5099\u4EFD & \u9084\u539F",home:"\u4E3B\u9801",indexes:"\u7D22\u5F15",github:"Github"},io="\u5F8C\u81FA\u7BA1\u7406",ao="\u4F60\u4E0D\u662F\u7BA1\u7406\u54E1\uFF0C\u8ACB\u4F7F\u7528\u7BA1\u7406\u54E1\u8CEC\u6236\u767B\u9304\u3002",_o="\u767B\u9304\u6210\u529F",co="\u767C\u9001",lo="\u63A5\u6536",po="\u6536\u5230\u7684\u6D88\u606F",uo={sidemenu:ro,title:io,not_admin:ao,logout_success:_o,send:co,receive:lo,received_msgs:po,"add_storage-tips":"\u60A8\u53EF\u80FD\u9700\u8981\u5728\u65B0\u6253\u958B\u7684\u9078\u9805\u5361\u4E2D\u586B\u5BEB\u4E00\u4E9B\u4FE1\u606F\u3002","messenger-tips":"\u60A8\u53EF\u80FD\u9700\u8981\u5728\u9019\u500B\u6A19\u7C3D\u9801\u4E2D\u6309\u63D0\u793A\u586B\u5BEB\u4E00\u4E9B\u4FE1\u606F\u3002"},ho="\u8DEF\u5F91",go="\u5BC6\u78BC",mo="\u5BEB\u5165",fo="\u96B1\u85CF",bo="\u8AAA\u660E",ko="\u61C9\u7528\u5230\u5B50\u6587\u4EF6\u593E",yo="\u6BCF\u884C\u4E00\u500B\u6B63\u5247\u8868\u9054\u5F0F",wo="\u652F\u6301Markdown\u5185\u5BB9\u6216Markdown\u94FE\u63A5",vo={path:ho,password:go,write:mo,hide:fo,readme:bo,apply_sub:ko,hide_help:yo,readme_help:wo},xo="\u5141\u8A31\u7D22\u5F15",Do="\u7AD9\u9EDE\u516C\u544A",Po="Aria2 \u5BC6\u9470",Io="Aria2\u5730\u5740",So="\u81EA\u52D5\u64AD\u653E\u97F3\u983B",zo="\u97F3\u983B\u5C01\u9762",To="\u97F3\u983B\u985E\u578B",Co="\u81EA\u52D5\u66F4\u65B0\u7D22\u5F15",Ao="\u81EA\u5B9A\u7FA9\u5167\u5BB9",jo="\u81EA\u5B9A\u7FA9\u982D\u90E8",Lo="\u9ED8\u8A8D\u6BCF\u9801\u6578\u91CF",Go="\u5916\u90E8\u9810\u89BD",Mo="\u7DB2\u7AD9\u5716\u6A19",Bo="\u6587\u4EF6\u540D\u5B57\u7B26\u6620\u5C04",Vo="Github Oauth\u61C9\u7528\u7528\u6236\u7AEFID",Oo="Github Oauth\u61C9\u7528\u7528\u6236\u7AEF\u6A5F\u5BC6",Uo="\u555F\u7528Github\u767B\u5165",Fo="\u96B1\u85CF\u6587\u4EF6",Wo="\u4E3B\u5BB9\u5668",Eo={hope_container:"Hope \u5BB9\u5668",max_980px:"\u6700\u5927 980px"},Ro="\u9996\u9801\u5716\u6A19",$o="Iframe \u9810\u89BD",Yo="\u5FFD\u7565\u8DEF\u5F91",qo="\u5716\u7247\u985E\u578B",No="\u7D22\u5F15\u9032\u5EA6",Qo="\u76F4\u93C8\u6709\u6548\u671F",Ho="Logo",Jo="\u4E3B\u984F\u8272",Ko="Ocr\u63A5\u53E3",Xo="\u6253\u5305\u4E0B\u8F09",Zo="\u5206\u9801\u985E\u578B",es={all:"\u5168\u90E8",auto_load_more:"\u81EA\u52D5\u52A0\u8F09\u66F4\u591A",load_more:"\u52A0\u8F09\u66F4\u591A",pagination:"\u5206\u9801"},os="\u96B1\u79C1\u5167\u5BB9\u6B63\u5247\u8868\u9054\u5F0F",ss="\u4EE3\u7406\u5FFD\u7565\u982D\u90E8",ts="\u4EE3\u7406\u985E\u578B",ns="\u641C\u7D22\u7D22\u5F15",rs={bleve:"Bleve",database:"\u6578\u64DA\u5EAB",database_non_full_text:"\u6578\u64DA\u5EAB\u975E\u5168\u6587",none:"\u7121"},is="\u8A2D\u5B9A\u4F48\u5C40",as={list:"\u6E05\u55AE",responsive:"\u97FF\u61C9\u5F0F"},_s="\u7C3D\u540D\u6240\u6709",cs="\u7DB2\u7AD9\u6A19\u984C",ds="\u6587\u672C\u985E\u578B",ls="\u4EE4\u724C",ps="\u7248\u672C",us="\u81EA\u52D5\u64AD\u653E\u8996\u983B",hs="\u8996\u983B\u985E\u578B",gs="\u6587\u5B57Logo",ms="\u5099\u6848\u865F",fs="\u806F\u7E6B\u6211\u5011",bs={allow_indexed:xo,announcement:Do,aria2_secret:Po,aria2_uri:Io,audio_autoplay:So,audio_cover:zo,audio_types:To,auto_update_index:Co,customize_body:Ao,customize_head:jo,default_page_size:Lo,external_previews:Go,favicon:Mo,filename_char_mapping:Bo,github_client_id:Vo,github_client_secrets:Oo,github_login_enabled:Uo,hide_files:Fo,home_container:Wo,home_containers:Eo,home_icon:Ro,iframe_previews:$o,ignore_paths:Yo,"ignore_paths-tips":"\u6BCF\u884C\u4E00\u689D\u8DEF\u5F91",image_types:qo,index_progress:No,link_expiration:Qo,logo:Ho,main_color:Jo,ocr_api:Ko,package_download:Xo,pagination_type:Zo,pagination_types:es,privacy_regs:os,proxy_ignore_headers:ss,proxy_types:ts,search_index:ns,search_indexs:rs,settings_layout:is,settings_layouts:as,sign_all:_s,site_title:cs,text_types:ds,token:ls,version:ps,video_autoplay:us,video_types:hs,logo_text:gs,site_beian:ms,contact_us:fs},ks="Aria2",ys="Aria2 \u7248\u672C\uFF1A",ws="\u8A2D\u7F6Earia2",vs="\u5FA9\u88FD\u4EE4\u724C",xs="\u91CD\u7F6E\u4EE4\u724C",Ds="\u91CD\u7F6E\u4EE4\u724C\u6210\u529F",Ps="\u672A\u77E5\u985E\u578B",Is={aria2:ks,aria2_version:ys,set_aria2:ws,copy_token:vs,reset_token:xs,reset_token_success:Ds,unknown_type:Ps},Ss={start_load_success:"\u958B\u59CB\u52A0\u8F09",load_all:"\u91CD\u65B0\u52A0\u8F09\u5168\u90E8",mount_path:"\u639B\u8F09\u8DEF\u5F91",driver:"\u9A45\u52D5",order:"\u6392\u5E8F","order-tips":"\u7528\u65BC\u6392\u5E8F",status:"\u72C0\u614B",remark:"\u5099\u8A3B",cache_expiration:"\u7DE9\u5B58\u904E\u671F\u6642\u9593","cache_expiration-tips":"\u6B64\u5B58\u5132\u7684\u7DE9\u5B58\u904E\u671F\u6642\u9593(\u5206\u9418)",down_proxy_url:"\u4E0B\u8F09\u4EE3\u7406URL",web_proxy:"Web\u4EE3\u7406",webdav_policy:"WebDAV \u7B56\u7565",webdav_policys:{"302_redirect":"302\u91CD\u5B9A\u5411",use_proxy_url:"\u4F7F\u7528\u4EE3\u7406\u5730\u5740",native_proxy:"\u672C\u5730\u4EE3\u7406"},order_by:"\u6392\u5E8F",order_bys:{name:"\u540D\u7A31",size:"\u5927\u5C0F",modified:"\u4FEE\u6539\u6642\u9593"},order_direction:"\u6392\u5E8F\u65B9\u5F0F",order_directions:{asc:"\u5347\u5E8F",desc:"\u964D\u5E8F"},extract_folder:"\u9078\u53D6\u8CC7\u6599\u593E",extract_folders:{front:"\u9078\u53D6\u5230\u6700\u524D",back:"\u9078\u53D6\u5230\u6700\u5F8C"}},zs={common:Ss},Ts="\u4E0B\u8F09\u6587\u4EF6\u5230\u672C\u5730\u6A5F\u5668",Cs="\u5C07\u4E0B\u8F09\u7684\u6587\u4EF6\u50B3\u8F38\u5230\u76F8\u61C9\u7684\u5B58\u5132",As="\u4E0A\u50B3\u6587\u4EF6\u5230\u5C0D\u61C9\u7684\u5B58\u5132",js="\u5C07\u6587\u4EF6\u5F9E\u5B58\u5132\u8907\u88FD\u5230\u53E6\u4E00\u500B\u5B58\u5132",Ls="\u5DF2\u5B8C\u6210",Gs="\u57F7\u884C\u4E2D",Ms="\u7B49\u5F85\u4E2D",Bs="\u57F7\u884C\u4E2D",Vs="\u6B63\u5728\u53D6\u6D88...",Os="\u6210\u529F",Us="\u53D6\u6D88",Fs="\u932F\u8AA4",Ws={down:Ts,transfer:Cs,upload:As,copy:js,done:Ls,undone:Gs,pending:Ms,running:Bs,canceling:Vs,succeeded:Os,canceled:Us,errored:Fs},Es={see_hides:"\u53EF\u4EE5\u770B\u5230\u96B1\u85CF",access_without_password:"\u7121\u5BC6\u78BC\u8A2A\u554F",offline_download:"\u6DFB\u52A0\u96E2\u7DDA\u4E0B\u8F09\u4EFB\u52D9",write:"\u5275\u5EFA\u76EE\u9304\u6216\u4E0A\u50B3",rename:"\u91CD\u547D\u540D",move:"\u79FB\u52D5",copy:"\u8907\u88FD",delete:"\u522A\u9664",webdav_read:"Webdav \u8BFB\u53D6",webdav_manage:"Webdav \u7BA1\u7406\u6587\u4EF6"},Rs="\u7528\u6236\u540D",$s="\u5BC6\u78BC",Ys="\u57FA\u672C\u8DEF\u5F91",qs="\u89D2\u8272",Ns="\u6B0A\u9650",Qs="\u66F4\u65B0\u914D\u7F6E\u6587\u4EF6",Hs="\u66F4\u65B0\u500B\u4EBA\u8CC7\u6599\u6210\u529F\uFF0C\u8ACB\u91CD\u65B0\u767B\u9304\u3002",Js="\u4FEE\u6539\u7528\u6236\u540D\u7A31",Ks="\u8B8A\u66F4\u5BC6\u78BC",Xs="\u555F\u7528\u96D9\u91CD\u9A57\u8B49",Zs="\u6383\u63CF\u4E8C\u7DAD\u78BC\u4FDD\u5B58\u79D8\u9470",et="\u8ACB\u8F38\u5165\u60A8\u7684\u96D9\u91CD\u9A57\u8B49\u61C9\u7528\u7A0B\u5F0F\u4E2D\u7684\u9A57\u8B49\u78BC",ot="\u9A57\u8B49",st="\u6240\u4EE5\u60A8\u4E0D\u80FD\u5728\u7BA1\u7406\u9801\u9762\u4E2D\u4FEE\u6539\u4EFB\u4F55\u5167\u5BB9\u3002",tt="Github\u767B\u5165",nt="\u7D81\u5B9AGithub",rt="\u89E3\u7D81Github",it={permissions:Es,username:Rs,password:$s,base_path:Ys,role:qs,permission:Ns,update_profile:Qs,update_profile_success:Hs,change_username:Js,change_password:Ks,"change_password-tips":"\u5982\u679C\u60A8\u4E0D\u60F3\u66F4\u6539\u5BC6\u78BC\uFF0C\u8ACB\u4FDD\u6301\u70BA\u7A7A",enable_2fa:Xs,"2fa_already_enabled":"\u96D9\u91CD\u9A57\u8B49\u5DF2\u542F\u7528",scan_qr:Zs,input_code:et,verify:ot,"guest-tips":"\u60A8\u6B63\u5728\u4F5C\u70BA\u8A2A\u5BA2\u8A2A\u554F\u3002",modify_nothing:st,github_login:tt,connect_github:nt,disconnect_github:rt},o=Object.assign({"./br.json":g,"./drivers.json":Y,"./global.json":ye,"./home.json":Be,"./index.json":t,"./indexes.json":He,"./login.json":no,"./manage.json":uo,"./metas.json":vo,"./settings.json":bs,"./settings_other.json":Is,"./storages.json":zs,"./tasks.json":Ws,"./users.json":it}),at={};for(const e in o){const s=e.split("/")[1].split(".")[0];at[s]=o[e]}export{at as default};
