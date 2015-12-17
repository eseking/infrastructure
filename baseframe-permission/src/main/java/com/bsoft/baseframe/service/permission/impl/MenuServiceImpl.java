/*
 * @(#)MenuServiceImpl.java        1.0 2013-9-11
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

package com.bsoft.baseframe.service.permission.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import net.sf.ehcache.Cache;
import net.sf.ehcache.Element;

import org.apache.commons.lang.StringUtils;

import com.bsoft.baseframe.baseframe_service.BaseFrameServiceImpl;
import com.bsoft.baseframe.entity.base.Menu;
import com.bsoft.baseframe.exception.BusinessException;
import com.bsoft.baseframe.permission.util.PermissionConstantUtil;
import com.bsoft.baseframe.service.permission.MenuService;
import com.bsoft.baseframe.utils.ApiResponse;

/**
 * Class description goes here.
 *
 * @version 	1.0 2013-9-11
 * @author		caolei
 * @history	
 *		
 */
public class MenuServiceImpl extends BaseFrameServiceImpl implements MenuService{
	@Resource
	private Cache ehCache; 
	/* (non-Javadoc)
	 * @see com.bsoft.baseframe.service.permission.MenuService#addMenu(com.bsoft.baseframe.entity.base.Menu)
	 */
	@Override
	public ApiResponse addMenu(Menu menu) throws Exception {		
		String pid = menu.getPid();
		//增加根节点
		if(StringUtils.isEmpty(pid)){
			//层级  level
			menu.setExt2("1");
			menu.setPid(null);
			//menu.setDelflag("0");
			this.addEntity("MENU.addMenu", menu);
			//重新加载缓存
			refreshCache();
			return new ApiResponse();
		}
		Object o =this.getBaseDao().getOneEntity("MENU.getMenuById", pid);
		if(o!=null){
			Menu parent =(Menu)o;
			//设置层级
			int level =Integer.parseInt(parent.getExt2());
			level+=1;
			menu.setExt2(level+"");
			this.addEntity("MENU.addMenu", menu);
			//重新加载缓存
			refreshCache();
		}			
		return new ApiResponse();
	}
	/* (non-Javadoc)
	 * @see com.bsoft.baseframe.service.permission.MenuService#updateMenu(com.bsoft.baseframe.entity.base.Menu)
	 */
	@Override
	public ApiResponse updateMenu(Menu menu) throws Exception{
		
		    
					this.getBaseDao().updateEntity("MENU.upSapMenu", menu);
					//重新加载缓存
					refreshCache();
		 	
				return new ApiResponse();
	}
	/* (non-Javadoc)
	 * @see com.bsoft.baseframe.service.permission.MenuService#delMenu(com.bsoft.baseframe.entity.base.Menu)
	 */
	@Override
	public ApiResponse delMenu(String id) throws Exception {
		Object o =this.getBaseDao().getOneEntity("MENU.getMenuById", id);
		if(o!=null){
			Menu parent =(Menu)o;		
			//判断是否有子节点
			Object temp =this.getBaseDao().getOneEntity("MENU.countMenuByPid",id);
			if("0".equals(temp.toString())){
				
				this.getBaseDao().delEntity("MENU.removeMenu", id);
				//重新加载缓存
				refreshCache();
			}
		}
		return new ApiResponse();
	}
	//刷新缓存
	private void refreshCache() throws Exception{
		//重新加载缓存
		List<Menu> roots =this.getBaseDao().listEntity("MENU.listAllMenu");
		for(Menu ct:roots){
			//if(ct.getId()=="0") continue;
			listChildren(ct);
		}
		Element element = new Element(PermissionConstantUtil.menu_list,roots);
		ehCache.put(element);
	}
	
	/**
	 * 获取子节点
	 * @param ct
	 * @throws Exception
	 */
	private void listChildren(Menu ct) throws Exception{
	    List<Menu> children = this.getBaseDao().listEntity("MENU.listMenu",ct.getId());
	    if(children.size()>0){
	    	ct.setLeaf(false);
	    	ct.setChildren(children);
	    }else{
	    	ct.setLeaf(true);
	    }
	   
	    for(Menu c:children){
	    	listChildren( c);
	    }
	}
	/* (non-Javadoc)
	 * @see com.bsoft.baseframe.service.permission.MenuService#ListMenu(java.util.Map)
	 */
	@Override
	public ApiResponse ListMenu(Map map) throws BusinessException {
		// TODO Auto-generated method stub
		//重新加载缓存
		try {
			refreshCache();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	/* (non-Javadoc)
	 * @see com.bsoft.baseframe.service.permission.MenuService#ListMenu(java.lang.String)
	 */
	@Override
	public ApiResponse ListMenu(String pid) throws BusinessException {
		// TODO Auto-generated method stub
		//重新加载缓存
		try {
			refreshCache();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

}
