/*
 * @(#)Menu.java              1.0 2013-07-30
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
package com.bsoft.baseframe.entity.base;


import java.io.Serializable;
import java.util.List;

/**
 * [Class description goes here.]
 * 
 *  @version 	1.0  2013-07-30
 * @author		[admin]
 * @history	
 *       [date]	[version]	[name]	[content]
 */ 
public class Menu implements Serializable ,Cloneable{ 

//	private static final long serialVersionUID = 1L;


	/** id doc 序号 */
	private String id;

	@Override
	public String toString() {
		return "id:"+id+"\tname:"+name+"\tpid:"+pid+"\text1:"+ext1+"\tchildren:"+children;
	}

	public void setId(String id){
		this.id = id; 
	}

	public String getId(){
		return id;
	}

	/** leaf doc  */
	private Boolean leaf;

	

	public Boolean getLeaf() {
		return leaf;
	}

	public void setLeaf(Boolean leaf) {
		this.leaf = leaf;
	}

	/** orderIndex doc  */
	private Integer orderIndex;

	public void setOrderIndex(Integer orderIndex){
		this.orderIndex = orderIndex; 
	}

	public Integer getOrderIndex(){
		return orderIndex;
	}

	/** name doc 名称 */
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

	/** pid doc 备注 */
	private String pid;

	public void setPid(String pid){
		this.pid = pid; 
	}

	public String getPid(){
		return pid;
	}

	/** delflg doc 删除标记 */
	private String delflag;

	public void setDelflag(String delflag){
		this.delflag = delflag; 
	}

	public String getDelflag(){
		return delflag;
	}

	/** ctb1 doc 创建时间 */
	private String ctb1;

	public void setCtb1(String ctb1){
		this.ctb1 = ctb1; 
	}

	public String getCtb1(){
		return ctb1;
	}

	/** ctb2 doc 创建者 */
	private String ctb2;

	public void setCtb2(String ctb2){
		this.ctb2 = ctb2; 
	}

	public String getCtb2(){
		return ctb2;
	}

	/** ctb3 doc 更新时间 */
	private String ctb3;

	public void setCtb3(String ctb3){
		this.ctb3 = ctb3; 
	}

	public String getCtb3(){
		return ctb3;
	}

	/** ctb4 doc 更新者 */
	private String ctb4;

	public void setCtb4(String ctb4){
		this.ctb4 = ctb4; 
	}

	public String getCtb4(){
		return ctb4;
	}

	/** ext1 doc 扩展一 */
	private String ext1;

	public void setExt1(String ext1){
		this.ext1 = ext1; 
	}

	public String getExt1(){
		return ext1;
	}

	/** ext2 doc 扩展二 */
	private String ext2;

	public void setExt2(String ext2){
		this.ext2 = ext2; 
	}

	public String getExt2(){
		return ext2;
	}

	/** ext3 doc 扩展三 */
	private String ext3;

	public void setExt3(String ext3){
		this.ext3 = ext3; 
	}

	public String getExt3(){
		return ext3;
	}
	
	private List<Menu> children;

	public List<Menu> getChildren() {
		return children;
	}

	public void setChildren(List<Menu> children) {
		this.children = children;
	}
	
	public Object clone(){

		Menu o = null;

        try{

        o = (Menu)super.clone();

        }catch(CloneNotSupportedException e){

        e.printStackTrace();

        }

        return o;

        }
}