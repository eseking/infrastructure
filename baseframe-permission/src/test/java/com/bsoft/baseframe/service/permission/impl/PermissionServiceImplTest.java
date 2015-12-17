package com.bsoft.baseframe.service.permission.impl;

import static org.junit.Assert.*;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.bsoft.baseframe.entity.base.MenuPermission;
import com.bsoft.baseframe.service.permission.PermissionService;
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:spring/*applicationContext.xml")
public class PermissionServiceImplTest {
	Logger logger = Logger.getLogger(PermissionServiceImplTest.class);
	@Resource
	private PermissionService permissionService;
	@Test
	public void testGetMenuPermission() {
		try {
			MenuPermission mp =(MenuPermission)permissionService.getMenuPermission("1").getResult();
			logger.info(mp.getMenuList());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
