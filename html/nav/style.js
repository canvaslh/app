 	function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
function setCookie(name, value, iDay) 
{
    var oDate=new Date();
     
    oDate.setDate(oDate.getDate()+iDay);
     
    document.cookie=name+'='+encodeURIComponent(value)+';expires='+oDate+';path=/;domain=iniubb.cn';;
}

if(isNaN(GetQueryString('userid')){
	setCookie('kkkkkmluserid',GetQueryString('userid'));
	setCookie('kkkkkmlusername',GetQueryString('username'));
	setCookie('kkkkkmlrnd',GetQueryString('rnd'));
	setCookie('kkkkkmlgroupid',GetQueryString('groupid'));
}