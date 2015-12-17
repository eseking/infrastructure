/*
 * @(#)GenaBean.java        1.0 2013-03-26
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

/**
 * 
 * 属性对象
 *
 * @version 	1.0 2013-3-26
 * @author		caie
 * @history	
 *
 */
public class GenaBean {
	
	/**序号*/
	private Integer serialNo;	
	
	/**列名称*/
	private String columnName;	
	
	/**主键*/
	private String prikey;		
	
	/**类别*/
	private String typeName;	
	
	/**长度*/
	private String len;			
	
	/**中文名称*/
	private String labelName;	

	public Integer getSerialNo() {
		return serialNo;
	}

	public void setSerialNo(Integer serialNo) {
		this.serialNo = serialNo;
	}

	public String getColumnName() {
		return columnName;
	}

	public void setColumnName(String columnName) {
		this.columnName = columnName;
	}

	public String getPrikey() {
		return prikey;
	}

	public void setPrikey(String prikey) {
		this.prikey = prikey;
	}

	public String getTypeName() {
		return typeName;
	}

	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}

	public String getLen() {
		return len;
	}

	public void setLen(String len) {
		this.len = len;
	}

	public String getLabelName() {
		return labelName;
	}

	public void setLabelName(String labelName) {
		this.labelName = labelName;
	}
	
}
