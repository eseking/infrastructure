<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  
    
    <title>权限管理</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/extjs/resources/css/ext-all.css"  />
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/extjs/shared/example.css" />
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/per_css/extcss.css" />
	
	<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/jquery-1.6.4.min.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/urlUtil.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath() %>/extjs/ext-all.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath() %>/extjs/shared/examples.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath() %>/extjs/ext-lang-zh_CN.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath() %>/scripts/PageComboResizer.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath() %>/scripts/commonFunction.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/permissionInfo/common/ModelFactory.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/permissionInfo/app.js"></script>
	<script type="text/javascript">
	
	//请求地址
	urlUtil.requrl ='<%=path%>';
	
	//请求地址
    var serviceDispatchUrl=urlUtil.requrl+'/serviceDispatch/dispatch.action';
		
	var controllerList=new Ext.util.MixedCollection();
	
	</script>
	<script type="text/JavaScript">

		
		
		function mouseover(img){
		
			img.src =img.getAttribute("overSrc");
		}
		
		function mouseout(img){
		//选中
		if(img.getAttribute("clickStatus")=="1"){
			img.src =img.getAttribute("overSrc");
		}else{
		 img.src =img.getAttribute("outSrc");
		 }
		}
		
		function imgclick(img){
			var images = Ext.query("img[clickStatus]");
			for(var i in images){
				images[i].setAttribute("clickStatus","0");
				images[i].setAttribute("src",images[i].getAttribute("outSrc"));
				Ext.getCmp("westAcc").expand(false);
			}
			
			img.setAttribute("clickStatus","1");
			img.src =img.getAttribute("overSrc");
			
			
		}
		
		function openNewWindowsReports(url){
		   window.open(url);
		}
		
  </script>
	
</head>
<body>
		<div id="tb"></div>
   <div id="north">

  <table width=100% border="0" align="center" cellpadding="0" cellspacing="0" id="__01">
	<tr>
		<td class="top"><table width="600" border="0" align="right" cellpadding="0" cellspacing="0">
          <tr id="frame_menu_controller_tr" align="right">
        
          </tr>
        </table></td>
	</tr>
	<tr>
	<td valign="middle" class="td"  align="right"><img style="margin: 3 0 0 0" src ="<%=request.getContextPath() %>/images/theme/group.png"/>&nbsp;<font style="margin: 2 0 0 0" color="#0000ff" size="2">
	 </font>&nbsp;&nbsp;
   <img   border="0" align="bottom" src="<%=request.getContextPath() %>/images/system.png"  style="margin: 3 0 0 0" ><a href="javascript:void(0)" style="cursor:hand; margin: 2 0 0 0" id="mianSettings">&nbsp;设置</a>&nbsp;&nbsp;&nbsp;
   </td>
	</tr>
</table>
  
  
  
   </div>
   <table>
   	<tr><td ></td></tr>
   	<tr><td></td><td></td></tr>
   </table>
</body>
</html>
