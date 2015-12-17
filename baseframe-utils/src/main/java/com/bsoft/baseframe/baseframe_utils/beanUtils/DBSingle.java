/*
 * @(#)DBSingle.java        1.0 2013-03-26
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

/**
 * 
 * 数据库单列，只生成一次
 *
 * @version 	1.0 2013-3-26
 * @author		caie
 * @history	
 *
 */
public class DBSingle{
	private static final Connection  dbconn = new ConnectionDB().getConn();
	
	private DBSingle(){}
	
	/**
	 * 获取单列
	 * @return 连接接口
	 */
	public static Connection getInstance(){
		return dbconn;
	}
}
