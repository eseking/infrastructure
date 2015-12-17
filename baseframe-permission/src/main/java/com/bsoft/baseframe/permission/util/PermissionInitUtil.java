package com.bsoft.baseframe.permission.util;

import java.util.Iterator;
import java.util.List;

import javax.annotation.Resource;

import net.sf.ehcache.Cache;
import net.sf.ehcache.Element;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.bsoft.baseframe.entity.base.Menu;
import com.bsoft.baseframe.service.permission.PermissionService;

public class PermissionInitUtil {
	
	private Logger logger =LoggerFactory.getLogger(PermissionInitUtil.class);
	
	 @Resource
	 private PermissionService permissionService;
	 
	 @Resource
	 private Cache ehCache; 
	
	public void initCache(){
		try {
		List<Menu> list =	permissionService.getAllMenu(null);
		if(list.size()>0){
			Element element = new Element(PermissionConstantUtil.menu_list,list);
			ehCache.put(element);
			logger.info("菜单信息放入缓存中");
			//缓存其他节点
			/*for (Iterator iterator = list.iterator(); iterator.hasNext();) {
				Menu menu = (Menu) iterator.next();
				Element e = new Element(PermissionConstantUtil.menu_list+menu.getId(),menu.getChildren());
				ehCache.put(e);
			}*/
		}
		} catch (Exception e) {
				e.printStackTrace();
		}
	}
	public void initMenu(){
		
	}

}
