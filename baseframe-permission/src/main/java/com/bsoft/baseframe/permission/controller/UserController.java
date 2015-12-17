package com.bsoft.baseframe.permission.controller;

import java.util.Iterator;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bsoft.baseframe.baseframe_utils.seq.Seq;
import com.bsoft.baseframe.entity.base.BaseFrameUser;
import com.bsoft.baseframe.entity.base.UsersRoles;
import com.bsoft.baseframe.service.permission.BaseFrameUserService;
import com.bsoft.baseframe.utils.ApiResponse;
import com.google.gson.Gson;

@Controller
@RequestMapping(value="user")
public class UserController {
	@Resource
	private BaseFrameUserService baseFrameUserService; 
	//增加用户
	@RequestMapping(value="addUser.do")
	@ResponseBody
	public ApiResponse addUser(HttpServletRequest resquest){
		 ApiResponse api=new ApiResponse(); 
		  try {  
			  String userName=resquest.getParameter("userName");
			  String userId=resquest.getParameter("userId");
			  String roleName=resquest.getParameter("roleName");
			  BaseFrameUser user=new BaseFrameUser();
			  String uid =Seq.createUUID();
			  user.setUserId(userId);
			  user.setId(uid);
			  user.setPasswd("1");
			  user.setUserName(userName);
			  
			  UsersRoles ur = new UsersRoles();
			  ur.setUid(uid);
			  ur.setRoleId(roleName);
			  ur.setId(Seq.createUUID());
			  baseFrameUserService.addEntity("BASEFRAMEUSER.addBaseFrameUser", user);
			  
			  
			  return baseFrameUserService.addEntity("USERSROLES.addUsersRoles", ur); 
		} catch (Exception e) {
			   api.setApi_code(1);
			  // TODO Auto-generated catch block
			   e.printStackTrace();
		}
		  return api;
	}
	//修改用户
	@RequestMapping(value="updateUser.do")
	@ResponseBody
	public ApiResponse updateUser(HttpServletRequest request){
		ApiResponse api=new ApiResponse();
		try {
				Gson gson=new Gson();
				String formDatas=request.getParameter("formDatas");
				System.out.println(formDatas+"------------------------------");
				
				String roleId=null;
				JSONObject jo = new JSONObject(formDatas);
				String id=jo.getString("id");
				String userName=jo.getString("userName");
				if(jo.has("roleId")){
				roleId=jo.getString("roleId");
				}
				String passwd =jo.getString("passwd");
				BaseFrameUser user=new BaseFrameUser();
				user.setId(id);
				user.setUserName(userName);
				user.setPasswd(passwd);
				
				baseFrameUserService.updateEntity("BASEFRAMEUSER.upSapBaseFrameUser", user);
				
				//更新用户对应的角色
				if(StringUtils.isNotEmpty(roleId)){
				List list = baseFrameUserService.getBaseDao().listEntity("USERSROLES.getUserRole",id);
				for (Iterator iterator = list.iterator(); iterator.hasNext();) {
					UsersRoles object = (UsersRoles) iterator.next();
					baseFrameUserService.getBaseDao().delEntity("USERSROLES.removeUsersRoles", object);
				}
				
				UsersRoles ur = new UsersRoles();
				ur.setUid(id);
				ur.setRoleId(roleId);
				ur.setId(Seq.createUUID());
				baseFrameUserService.addEntity("USERSROLES.addUsersRoles", ur);
				}
				return new ApiResponse();	
			} catch (Exception e) {
				api.setApi_code(1);
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		    return api;
	}
	//删除用户
	@RequestMapping(value="deleteUser.do")
	@ResponseBody
	public ApiResponse deleteUser(HttpServletRequest request){
		ApiResponse api=new ApiResponse();		
		try {
			String id=request.getParameter("id");
			return baseFrameUserService.delEntity("BASEFRAMEUSER.removeBaseFrameUser", id);
		} catch (Exception e) {
			api.setApi_code(1);
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return api;
	}
	//获得用户信息
	@RequestMapping(value="getUser.do")
	@ResponseBody
	public ApiResponse getUser(HttpServletRequest request){
		ApiResponse api=new ApiResponse();
		try {
			String id=request.getParameter("id");
			return baseFrameUserService.getOneEntity("BASEFRAMEUSER.getOneBaseFrameUser", id);
		} catch (Exception e) {
			api.setApi_code(1);
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return api;
	}
}
