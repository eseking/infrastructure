/**
 * 保存项目URL前缀
 */

function urlUtil(){
	//机构综合评价
	
	urlUtil.prototype.jxgl_pre="http://10.98.26.107:8881/pms/interface.jshtml?ref=";
	urlUtil.prototype.jxgl_pre_log="http://10.98.26.107:8881/pms/";
	urlUtil.prototype.jxgl_login=urlUtil.prototype.jxgl_pre_log+"loginRedirect?uid=system&pwd=123";
	
	//政府财政补偿
	urlUtil.prototype.zfcz_pre="http://10.98.26.5:8080/";
	//urlUtil.prototype.zfcz_pre="http://10.98.26.103:8090/";
	urlUtil.prototype.zfcz_login=urlUtil.prototype.zfcz_pre+"QMYS/logon.action?logonName=admin&password=111111";
	
	
	//医疗卫生监督
	urlUtil.prototype.yljd_pre="http://10.98.26.5:8899/";
	urlUtil.prototype.yljd_login=urlUtil.prototype.yljd_pre+"/Hais/login?uid=system&pwd=123&rid=system";
	
	
	//医疗卫生监督
	urlUtil.prototype.ggws_pre="http://10.98.26.5:8899/";
	urlUtil.prototype.ggws_login=urlUtil.prototype.ggws_pre+"/Hais/login?uid=system&pwd=123&rid=system";
	
	 
	
	//工资核定
	urlUtil.prototype.gzhd_pre="http://10.98.26.5:8080/QMYS/";
	//urlUtil.prototype.zfcz_pre="http://10.98.26.103:8090/";
	urlUtil.prototype.gzhd_login=urlUtil.prototype.gzhd_pre+"logon.action?logonName=admin&password=111111";
	
	
	
	//全面预算
	urlUtil.prototype.qmys_pre="http://10.98.26.5:8080/QMYS/";
	urlUtil.prototype.qmys_login=urlUtil.prototype.qmys_pre+"logon.action?logonName=admin&password=111111";
	
	//药品监管
	urlUtil.prototype.ypjg_pre="http://10.96.36.103:8899/Bsoft_PT/";
	urlUtil.prototype.ypjg_login=urlUtil.prototype.ypjg_pre+"login.ered?reqCode=autologin&dwsOutUserId=ypjg&dwsOutPsw=c4ca4238a0b923820dcc509a6f75849b&dwsOutLoginType=2";
	
	
	
	
}

var urlUtil = new urlUtil();


urlUtil["91"] = urlUtil.zfcz_login;

//urlUtil["91"] = "http://10.98.26.51:8080/QMYS/logon.action?logonName=admin&password=111111";
urlUtil["90"] = urlUtil.jxgl_login;

urlUtil["92"] = urlUtil.yljd_login;

urlUtil["95"] = urlUtil.gzhd_login;

urlUtil["94"] = urlUtil.ggws_login;

urlUtil["96"] = urlUtil.ypjg_login;


//urlUtil["90"] = "http://10.98.26.35:8080/pms/loginRedirect?uid=system&pwd=123";
