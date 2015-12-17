/*
 * @(#)CreateXMLFile.java        1.0 2013-4-7
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

import java.io.File;
import java.util.List;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;




/**
 * XML文件生成器
 *
 * @version 	1.0 2013-4-7
 * @author		caie
 * @history	
 *		
 */
public class CreateXMLFile {
	private String tbName;
	
	private String path;
	
	private String beanPkg;
	
	public CreateXMLFile(){}
	
	/**
	 * 构造器
	 * @param tbName 表结构名
	 * @param beanPkg 实体包名
	 */
	public CreateXMLFile(String tbName, String beanPkg){
		this.tbName=tbName;
		this.beanPkg = beanPkg;
	}
	
	/**
	 * 构造器
	 * @param tbName 表结构名
	 * @param beanPkg 实体包名
	 * @param path xml生成路径
	 */
	public CreateXMLFile(String tbName, String beanPkg, String path){
		this(tbName,beanPkg);
		this.path = path;
	}
	
	/**
	 * xml生成器，并创建成文件
	 * @return 返回是否成功
	 */
	public boolean createXMLFile(){
		String clsName = FileUtils.getClassName(tbName);
		String fileName = path+clsName+".xml";
		String beanName = beanPkg +"."+clsName;
		
		List<GenaBean> list= GenaBeanDBUtils.getFields(tbName);
		if(list.size() == 0){
			return false;
		}
		StringBuffer fields = new StringBuffer();
		StringBuffer values = new StringBuffer();
		GenaBean gb = null;
		String fn = null;
		for(int i=0; i<list.size(); i++){
			gb = list.get(i);
			fn = gb.getColumnName();
			fields.append(fn);
			if("delflag".equals(fn)){
				values.append("'0'");
			}else if("ctb1".equals(fn)){
				values.append("getdate()");
			}else{
				values.append("#").append(fn).append("#");
			}
			if(i != list.size()-1){
				fields.append(", ");
				values.append(", ");
			}
		}
		System.out.println(fields.toString());
		System.out.println(values.toString());
		
		//创建Document对象
		Document document = DocumentHelper.createDocument();
		
		//添加文档类型
		document.addDocType("sqlMap", "-//ibatis.apache.org//DTD SQL Map 2.0//EN", "http://ibatis.apache.org/dtd/sql-map-2.dtd");
		
		//添加根节点 到document
		Element rootElement = document.addElement("sqlMap");
		
		//添加命名空间
		rootElement.addAttribute("namespace", clsName.toUpperCase()); 
		
		//insert节点
		Element insertNode = rootElement.addElement("insert");
		insertNode.addAttribute("id", "add"+clsName);
		insertNode.addAttribute("parameterClass", beanName);
		insertNode.setText("insert into " + tbName+ "("+fields+") values ("+values+")");
		
		//物理删除节点
		Element removeNode = rootElement.addElement("delete");
		removeNode.addAttribute("id", "remove"+clsName);
		removeNode.addAttribute("parameterClass", beanName);
		removeNode.setText("delete from " + tbName + " where id = #id#");
		
		//逻辑删除节点
		Element deleteNode = rootElement.addElement("update");
		deleteNode.addAttribute("id", "del"+clsName);
		deleteNode.addAttribute("parameterClass", beanName);
		deleteNode.setText("update " + tbName + " set delflag=#delflag# where id = #id#");
		
		//selectOne节点
		Element selectOneNode = rootElement.addElement("select");
		selectOneNode.addAttribute("id", "getOne"+clsName);
		selectOneNode.addAttribute("parameterClass", beanName);
		selectOneNode.addAttribute("resultClass", beanName);
		selectOneNode.setText("select *  from " +tbName+ " where id = #id# ");
		
		//select节点
		Element selectNode = rootElement.addElement("select");
		selectNode.addAttribute("id", "queryCount");
		selectNode.addAttribute("resultClass", "int");
		selectNode.setText("select count(*) as countnum from " + tbName +" where 1=1");
		
		//select节点
		Element selectNode2 = rootElement.addElement("select");
		selectNode2.addAttribute("id", "list" + clsName);
		selectNode2.addAttribute("resultClass", beanName);
		selectNode2.addAttribute("parameterClass", "java.util.Map");
		selectNode2.setText("select * from (select top  $endNum$ row_number()over(order by TT.id) as RN,* from" +
				"(SELECT * FROM "+ tbName +" where 1=1) as TT)as H where RN > #startNum#");
		
		
		
		//update节点
		Element updateNode = rootElement.addElement("update");
		updateNode.addAttribute("id", "upSap"+clsName);
		updateNode.addAttribute("parameterClass", beanName);
		updateNode.setText("UPDATE "+ tbName +" ");
		Element erElement = updateNode.addElement("dynamic");
		erElement.addAttribute("prepend", "set");
		for(int i=0; i<list.size(); i++){
			gb = list.get(i);
			fn = gb.getColumnName();
			if(!"id".equals(fn)){
				Element saElement = erElement.addElement("isNotNull");
				saElement.addAttribute("property", fn);
				saElement.addAttribute("removeFirstPrepend", "true");
				saElement.addAttribute("prepend", ",");
				saElement.setText(fn+"=#"+fn+"#");
			}
		}
		updateNode.addText(" where ");
		Element terElement = updateNode.addElement("isNotNull");
		terElement.addAttribute("property", "id");
		terElement.setText(" id = #id# ");
		
		//update节点
		Element updateSimpleNode = rootElement.addElement("update");
		updateSimpleNode.addAttribute("id", "update"+clsName);
		updateSimpleNode.addAttribute("parameterClass", beanName);
		
		StringBuffer sb = new StringBuffer();
		sb.append("update ").append(tbName).append(" set ");
		
		for(int i=0; i<list.size(); i++){
			gb = list.get(i);
			fn = gb.getColumnName();
			if(!"id".equals(fn)){
				if("ctb3".equals(fn)){
					sb.append(fn).append("=").append("getdate()");
				}else{
					sb.append(fn).append("=#").append(fn).append("#");
				}
				if(i != list.size()-1){
					sb.append(", ");
				}
				
			}
		}
		sb.append(" where id = #id# ");
		updateSimpleNode.setText(sb.toString());
		return FileUtils.wrieteXML2Doc(document, new File(fileName));
	}
}
