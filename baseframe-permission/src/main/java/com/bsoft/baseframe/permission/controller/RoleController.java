/*
 * @(#)RoleController.java        1.0 2013-9-27
 *
 * Copyright (c) 2007-2013 Shanghai BSOFT IT, Co., Ltd.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of 
 * Shanghai BSFOT IT Co., Ltd. ("Confidential Information").  
 * You shall not disclose such Confidential Information and shall use 
 * it only in accordance with the terms of the license agreement you 
 * entered into with BSOFT.
 */

package com.bsoft.baseframe.permission.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bsoft.baseframe.baseframe_service.BaseFrameService;
import com.bsoft.baseframe.baseframe_utils.seq.Seq;
import com.bsoft.baseframe.entity.base.BaseRole;
import com.bsoft.baseframe.utils.ApiResponse;
import com.google.gson.Gson;

/**
 * Class description goes here.
 *
 * @version 	1.0 2013-9-27
 * @author		niu
 * @history	
 *		
 */
@Controller
@RequestMapping(value="role") 
public class RoleController {
	
	@Resource
	private BaseFrameService baseFrameService;
	
	
	//增加角色
	@RequestMapping(value="addRole.do") 
	@ResponseBody
	public ApiResponse addRole(HttpServletRequest request){
		ApiResponse api = new ApiResponse();
		try {
		String roleName =request.getParameter("roleName");
		BaseRole role = new BaseRole();
		role.setId(Seq.createUUID());
		role.setRoleName(roleName);		
		return baseFrameService.addEntity("BASEROLE.addBaseRole", role);		
		}catch (Exception e) {
			api.setApi_code(1);
			e.printStackTrace();
		}
		return api;
	}
	
	
	//修改角色
	@RequestMapping(value="updateRole.do") 
	@ResponseBody
	public ApiResponse updateRole(HttpServletRequest request){
		ApiResponse api = new ApiResponse();
		try {
		Gson gson = new Gson();
		String formDatas =request.getParameter("formDatas");
		JSONObject jo = new JSONObject(formDatas);
		String id =jo.getString("id");
		String roleName =jo.getString("roleName");
		BaseRole role =new BaseRole();
		role.setId(id);
		role.setRoleName(roleName);
		//通过反射生成role
		//BaseRole role =(BaseRole)gson.fromJson(formDatas, BaseRole.class);
		return baseFrameService.updateEntity("BASEROLE.updateBaseRole", role);
		
		}catch (Exception e) {
			api.setApi_code(1);
			e.printStackTrace();
		}
		return api;
	}
	
	
	//删除角色
	@RequestMapping(value="deleteRole.do") 
	@ResponseBody
	public ApiResponse deleteRole(HttpServletRequest request){
		ApiResponse api = new ApiResponse();
		try {
		String id =request.getParameter("id");
		System.out.println(id.toString());
		return baseFrameService.delEntity("BASEROLE.removeBaseRole", id);		
		}catch (Exception e) {
			api.setApi_code(1);
			e.printStackTrace();
		}
		return api;
	}
	
	//获取角色
	@RequestMapping(value="getRole.do") 
	@ResponseBody
	public ApiResponse getRole(HttpServletRequest request){
		ApiResponse api = new ApiResponse();
		try {
			String id =request.getParameter("id");
			return baseFrameService.getOneEntity("BASEROLE.getOneBaseRole", id);
		}catch (Exception e) {
			api.setApi_code(1);
			e.printStackTrace();
		}
		return api;
	}
	

}
