/*
 * @(#)Menu.java              1.0 2014-04-21
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
package com.bsoft.baseframe.model;


import java.io.Serializable;

/**
 * [Class description goes here.]
 * 
 *  @version 	1.0  2014-04-21
 * @author		[admin]
 * @history	
 *       [date]	[version]	[name]	[content]
 */ 
public class Menu implements Serializable { 

//	private static final long serialVersionUID = 1L;


	/** id doc  */
	private String id;

	public void setId(String id){
		this.id = id; 
	}

	public String getId(){
		return id;
	}

	/** leaf doc  */
	private String leaf;

	public void setLeaf(String leaf){
		this.leaf = leaf; 
	}

	public String getLeaf(){
		return leaf;
	}

	/** orderIndex doc  */
	private Integer orderIndex;

	public void setOrderIndex(Integer orderIndex){
		this.orderIndex = orderIndex; 
	}

	public Integer getOrderIndex(){
		return orderIndex;
	}

	/** name doc  */
	private String name;

	public void setName(String name){
		this.name = name; 
	}

	public String getName(){
		return name;
	}

	/** info doc  */
	private String info;

	public void setInfo(String info){
		this.info = info; 
	}

	public String getInfo(){
		return info;
	}

	/** pid doc  */
	private String pid;

	public void setPid(String pid){
		this.pid = pid; 
	}

	public String getPid(){
		return pid;
	}

	/** delflag doc  */
	private String delflag;

	public void setDelflag(String delflag){
		this.delflag = delflag; 
	}

	public String getDelflag(){
		return delflag;
	}

	/** ctb1 doc  */
	private String ctb1;

	public void setCtb1(String ctb1){
		this.ctb1 = ctb1; 
	}

	public String getCtb1(){
		return ctb1;
	}

	/** ctb2 doc  */
	private String ctb2;

	public void setCtb2(String ctb2){
		this.ctb2 = ctb2; 
	}

	public String getCtb2(){
		return ctb2;
	}

	/** ctb3 doc  */
	private String ctb3;

	public void setCtb3(String ctb3){
		this.ctb3 = ctb3; 
	}

	public String getCtb3(){
		return ctb3;
	}

	/** ctb4 doc  */
	private String ctb4;

	public void setCtb4(String ctb4){
		this.ctb4 = ctb4; 
	}

	public String getCtb4(){
		return ctb4;
	}

	/** ext1 doc  */
	private String ext1;

	public void setExt1(String ext1){
		this.ext1 = ext1; 
	}

	public String getExt1(){
		return ext1;
	}

	/** ext2 doc  */
	private String ext2;

	public void setExt2(String ext2){
		this.ext2 = ext2; 
	}

	public String getExt2(){
		return ext2;
	}

	/** ext3 doc  */
	private String ext3;

	public void setExt3(String ext3){
		this.ext3 = ext3; 
	}

	public String getExt3(){
		return ext3;
	}
}