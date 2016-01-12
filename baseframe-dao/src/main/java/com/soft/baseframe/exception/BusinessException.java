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
 * 封装业务异常
 *
 * @version 	1.0 Mar 11, 2013
 * @author		caol
 * @history		
 *		
 */
public class BusinessException extends Exception{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	private String errorCode;
	
	
	
	public String getErrorCodes() {
		return errorCode;
	}

	/**
	 * 构造函数
	 * @param reason
	 * @param cause
	 */
	public BusinessException(String errorCode,String reason, Throwable cause) {
		super(reason,cause);
		this.errorCode=errorCode;
		
	}
	
	/**
	 * 构造函数
	 * @param reason
	 * @param cause
	 */
	public BusinessException(String reason, Throwable cause) {
		super(reason,cause);
		this.errorCode="sysError";
	}
	
	
	

}
