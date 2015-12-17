/*
 * @(#)CreateBeanFile.java        1.0 2013-4-7
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

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;







/**
 * 创建实体bean类
 *
 * @version 	1.0 2013-4-7
 * @author		caie
 * @history	
 *		2013-05-03 修改正了大写属性出现乱码问题 Character.toUpperCase(prop.charAt(0)) caie
 */
public class CreateBeanFile {
	private static StringBuffer beanCode;
	
	/**实体包名*/
	private String pkg;
	
	/**表结构名*/
	private String tbName;
	
	private String zwmc;
	
	public CreateBeanFile(){
		
	}
	
	/**
	 * 构造器
	 * @param pkg 实体包名称
	 * @param tbName 表结构名
	 */
	public CreateBeanFile(String pkg, String tbName){
		this.pkg = pkg;
		this.tbName = tbName;
	}
	
	public CreateBeanFile(String pkg, String tbName, String zwmc){
		this(pkg, tbName);
		this.zwmc = zwmc;
	}
	
	/**
	 * 查询数据库，封装实体bean
	 * @return bean字符串
	 */
	public String createBeanCode(){
		beanCode = new StringBuffer();
		String clsName = FileUtils.getClassName(tbName);
		List<GenaBean> list= GenaBeanDBUtils.getFields(tbName);
		if(list.size()==0){
			return beanCode.toString();
		}
		beanCode.append("/*\n");
		beanCode.append(" * @(#)").append(clsName).append(".java              1.0 ").append(new SimpleDateFormat("yyyy-MM-dd").format(new Date())).append("\n");	//        1.0 2013-3-12\n");
		beanCode.append(" *\n");
		beanCode.append(" * Copyright (c) 2007-2013 Shanghai BSOFT IT, Co., Ltd.\n");
		beanCode.append(" * All rights reserved.\n");
		beanCode.append(" *\n");
		beanCode.append(" * This software is the confidential and proprietary information of\n");
		beanCode.append(" * Shanghai BSFOT IT Co., Ltd. (\"Confidential Information\").\n");
		beanCode.append(" * You shall not disclose such Confidential Information and shall use \n");
		beanCode.append(" * it only in accordance with the terms of the license agreement you\n");
		beanCode.append(" * entered into with BSOFT.\n");
		beanCode.append(" */\n");
		
		beanCode.append("package ").append(pkg).append(";\n\n\n");
		beanCode.append("import java.io.Serializable;\n\n");
		
		beanCode.append("/**\n");
		beanCode.append(" * [Class description goes here.]\n");
		beanCode.append(" * \n");
		beanCode.append(" *  @version 	1.0  ").append(new SimpleDateFormat("yyyy-MM-dd").format(new Date())).append("\n");
		beanCode.append(" * @author		[admin]\n");
		beanCode.append(" * @history	\n");
		beanCode.append(" *       [date]	[version]	[name]	[content]\n");
		beanCode.append(" */ \n");
		beanCode.append("public class ").append(clsName).append(" implements Serializable { \n");
		beanCode.append("\n//\tprivate static final long serialVersionUID = 1L;\n\n");
		this.getFieldsCode(clsName, list);
		beanCode.append("}");
		return beanCode.toString();
	}
	
	
	/**
	 * 从数据库中获取表中个属性对象
	 * @author caie  2013-02-26
	 */
	private void  getFieldsCode(String clsName, List<GenaBean> list){
		 
		 if(null != list && list.size()>0){
			 JSONArray ja = new JSONArray();
			 for(Iterator<GenaBean> it=list.iterator(); it.hasNext();){
				 GenaBean gb = it.next();
				 this.assemblyMethod(gb);
				 ja.put(bean2JO(gb));
			 }
			 if(ja != null && ja.length()>0){
//				 GenaBeanDBUtils.saveComConfig(clsName, ja.toString());
//				 GenaBeanDBUtils.saveBackTree(clsName, pkg+"."+clsName, zwmc);
			 }
		 }
	}
	
	/**
	 * 将属性对象封装成JSONObject对象
	 * @author caie 2013-02-26
	 * @param gb 属性对象
	 * @return
	 */
	private JSONObject bean2JO(GenaBean gb){
		JSONObject obj = new JSONObject();
		try {
			obj.accumulate("sort", gb.getSerialNo());
			obj.accumulate("fieldLabel", gb.getLabelName());
			obj.accumulate("name", gb.getColumnName());
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return obj;
	}
	
	
	/**
	 * 组装 setter与getter
	 * @author caie 2013-03-26
	 * @param gb 属性对象
	 * @return 
	 */
	private void assemblyMethod(GenaBean gb){
		String prop = gb.getColumnName();
		String typeName = gb.getTypeName();
		String type = "String";
		if("int".equals(typeName)){
			type = "Integer";
		}
		if("numeric".equals(typeName)){
			type = "Double";
		}
		beanCode.append("\n\t/** ").append(prop).append(" doc ").append(gb.getLabelName()).append(" */\n")
			.append("\tprivate ").append(type).append(" ").append(prop).append(";\n\n");
		
		beanCode.append("\tpublic void set"+Character.toUpperCase(prop.charAt(0))+prop.substring(1)).append("(").append(type).append(" ").append(prop).append("){\n");
		beanCode.append("\t\tthis.").append(prop).append(" = ").append(prop).append("; \n\t}\n");
		
		beanCode.append("\n\tpublic ").append(type).append(" get"+Character.toUpperCase(prop.charAt(0))+prop.substring(1)).append("(){\n");
		beanCode.append("\t\treturn ").append(prop).append(";\n\t}\n");
	}
	
	
}
