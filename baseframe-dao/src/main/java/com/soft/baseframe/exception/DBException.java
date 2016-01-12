/*
 * @(#)DBException.java        1.0 Mar 11, 2013
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

package com.soft.baseframe.exception;

import java.sql.SQLException;

/**
 * 封装数据库异常
 *
 * @version 	1.0 Mar 11, 2013
 * @author		caol
 * @history		
 *		
 */
public class DBException extends SQLException{
	/**
	 * 覆盖父类构造函数
	 * @param reason
	 * @param cause
	 */
	public DBException(String reason, Throwable cause) {
		super(reason, cause);
		
	}
	/**
	 * 覆盖父类构造函数
	 * @param reason
	 */
	public DBException(String reason) {
		super(reason);
	}
	/**
	 * 覆盖父类构造函数
	 * @param cause
	 */
	public DBException(Throwable cause) {
		super(cause);
	}
	
	

}
