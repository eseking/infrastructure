<%@ page language="java" import="java.util.*,com.google.code.kaptcha.Constants" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>login</title>
<link href="<%=request.getContextPath()%>/per_css/login.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/jquery-1.6.4.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/scripts/json2.js"></script>
	
<script type="text/javascript">
	$(function(){
		
		$("#loginBtn").click(function(){
			
			var username = $("#username").val();
			var password = $("#password").val();
			var yzm = $("#yzm").val();
			
		
			if(username!="" && password!="" && yzm!=""){
				$("#loginForm").submit();
			}else{
				alert("请填写登录信息!");
			}
			
		})
		
		
	    document.onkeydown = function(e){
	         if(!e) e = window.event;//火狐中是 window.event
	         if((e.keyCode || e.which) == 13){
	        	
	             document.getElementById("loginBtn").click();
	         }
		}
		
	})
	

</script>	

</head>

<body style="background:#66abd4;">
<div class="login_bg">
   <div class="loginBox-MH">
   		<form action="<%=path %>/login/login.do" method="post" id="loginForm">
	      <table cellpadding="0" cellspacing="0" border="0" class="login">
	       <tr>
	       <td></td>
	           <td  ><c:if test="${msg!=null}">${msg}</c:if> </td>
	        </tr>
	        <tr>
	           <td width="20%" align="right">用户名：</td>
	           <td><label><input type="text" name="username" class="inputs" id="username"/></label></td>
	        </tr>
	         <tr>
	           <td align="right">密&nbsp;&nbsp;&nbsp;&nbsp;码：</td>
	           <td><label><input type="password" name="password" class="inputs" id="password" /></label></td>
	        </tr>
	        
	         <tr>
	           <td align="right">验证码：</td>
	           <td><label><input type="text" name="yzm" maxlength="5" class="inputs width90" id="yzm"/></label> <img src="<%=path %>/captcha-image.do" width="110" height="40" id="kaptchaImage" style="margin-bottom: -10px"/></td>
	        </tr>
	        <tr>
	           <td>&nbsp;</td>
	           <td><label><a href="javascript:;" class="loginBtn" id="loginBtn"></a></label><label><a href="#" class="cancle"></a></label></td>
	        </tr>
	      </table>
      </form>
      <p class="bosft">版权所有 创业软件股份有限公司</p>
   </div>
   
</div>
</body>
<script type="text/javascript">    
         $(function(){         
             $('#kaptchaImage').click(function () {//生成验证码
            	 $(this).hide().attr('src', '<%=path %>/captcha-image.do?' + Math.floor(Math.random()*100) ).fadeIn(); })    
                   }); 
       
        </script> 
</html>
