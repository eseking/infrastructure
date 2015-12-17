/*
 * @(#)ConnectionDB.java        1.0 2013-03-26
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
package com.bsoft.baseframe.baseframe_utils.beanUtils;

import java.sql.Connection;
import java.sql.DriverManager;

import com.bsoft.baseframe.baseframe_utils.propertiesUtils.PropertiesReaderUtil;



/**
 * 
 * 数据库连接配置
 *
 * @version 	1.0 2013-3-26
 * @author		caie
 * @history	
 *
 */
public class ConnectionDB {
	private static final String DRIVER_NAME ;//= "com.microsoft.sqlserver.jdbc.SQLServerDriver"; // 数据库包名
	
	private static final String DRIVER_URL;// = "jdbc:sqlserver://10.96.36.154:1433;DatabaseName=extkj"; // 路径名
	private static final String SQL_USER;// = "sa";	//用户名
	private static final String SQL_PWD;// = "server@12345678"; // 密码
	
	private Connection conn = null; // 保存链接路径
	static{
		String path ="ibatis/db.properties";
		PropertiesReaderUtil.getInstance().loadAllProperties("ibatis/db.properties");
		//FilePropertiesUtls.reader("ibatis/db.properties");
		DRIVER_NAME =PropertiesReaderUtil.getInstance().getProperties(path,"JDBC.Driver"); 	//JDBC.Driver
		DRIVER_URL = PropertiesReaderUtil.getInstance().getProperties(path,"JDBC.ConnectionURL"); 	//JDBC.ConnectionURL
		SQL_USER = PropertiesReaderUtil.getInstance().getProperties(path,"JDBC.Username");		//JDBC.Username
		SQL_PWD = PropertiesReaderUtil.getInstance().getProperties(path,"JDBC.Password");		//JDBC.Password
	}
	
	public ConnectionDB(){
		init();
	}
	
	//初始化
	private void init(){
		try {
			Class.forName(DRIVER_NAME);
			conn = DriverManager.getConnection(DRIVER_URL, SQL_USER, SQL_PWD);
			System.out.println("db is conection success!");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * 获取连接
	 * @return
	 */
	public Connection getConn() {
		return conn;
	}
	
	/**
	 * 测试连接
	 * @param args
	 */
	public static void main(String[] args) {
		new ConnectionDB();
	}
}


