package com.bsoft.baseframe.permission.controller;


import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.bsoft.baseframe.entity.base.BaseFrameUser;
import com.bsoft.baseframe.service.permission.PermissionService;
import com.bsoft.baseframe.utils.ApiResponse;
import com.google.code.kaptcha.Constants;

@Controller
@RequestMapping(value="login")
public class LoginController {
	@Resource
	 private PermissionService permissionService;
	 
	//登录
	@RequestMapping(value="login.do") 
	public ModelAndView login(HttpServletRequest request){
		ApiResponse api = new ApiResponse();
		ModelAndView modelAndView = new ModelAndView();
		try {
			//String name = request.getParameter("");
			//List list =baseFrameService.getBaseDao().listEntity("CELLTEMPLATE.listAllTemplate");
			//modelAndView.addObject("list",list);
			//List list = permissionService.getAccessMenu("1");
			//modelAndView.addObject("menuList",list);
			HttpSession session = request.getSession();  
			String code = (String)session.getAttribute(Constants.KAPTCHA_SESSION_KEY);  
			//System.out.println("******************登录判断验证码是: " + code + "******************"); 
			String message;
			
			String username =request.getParameter("username");
			String password =request.getParameter("password");
			String yzm =request.getParameter("yzm");
		//	System.out.println("ysm is "+yzm);
			
			if(  StringUtils.isNotEmpty(yzm) && yzm.equals(code)){
				
				
			}else{
				 message ="验证码错误";
				modelAndView.setViewName("/login");
				modelAndView.addObject("msg", message);
				return modelAndView;
			}
			
			Map map = new HashMap();
			map.put("userId", username);
			map.put("passwd", password);
			
			Object o =	permissionService.getBaseDao().getOneEntity("BASEFRAMEUSER.exist", map);
			
			if(o!=null){
				BaseFrameUser user =(BaseFrameUser)o;
				request.getSession().setAttribute("user", user);
			}else{
				 message ="用户名或密码错误";
				modelAndView.setViewName("/login");
				modelAndView.addObject("msg", message);
				return modelAndView;
			}
			
			modelAndView.setViewName("/index");
		}catch (Exception e) {
			api.setApi_code(1);
			e.printStackTrace();
		}
		return modelAndView;
	}
	
	@RequestMapping(value="loginPage.do")
	public ModelAndView loginPage(){
		
		ModelAndView modelAndView = new ModelAndView();
		
		modelAndView.setViewName("login");
		
		return modelAndView;
	}
	
	@RequestMapping(value="logOut.do")
	public ModelAndView logOut(HttpServletRequest request){
		HttpSession session = request.getSession();
		session.removeAttribute("user");
		ModelAndView modelAndView = new ModelAndView();
		
		modelAndView.setViewName("/login");
		
		return modelAndView;
	}
}
