/*
 * @(#)CreateServiceFile.java        1.0 2013-4-7
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





/**
 * 服务接口与实现类生成
 *
 * @version 	1.0 2013-4-7
 * @author		caie
 * @history	
 *		
 */
public class CreateServiceFile {
	
	public static final String INTERFACE_PACK = "import com.bsoft.icp.gp.baseService.BaseResService;\r\n";
	public static final String IMPL_PACK = "import com.bsoft.icp.gp.baseService.BaseResServiceImpl;\r\n";
	public static final String CACHE_PACK = "import net.sf.ehcache.Cache;\r\n";
	public static final String ELEMENT_PACK = "import net.sf.ehcache.Element;\r\n";
	public static final String SERIALVERSIONUID = "private static final long serialVersionUID = 1L;";
	
	private String pkg;
	
	private String implPkg;
	
	private String tbName;
	
	public CreateServiceFile(){}
	
	/**
	 * 构造器
	 * @param pkg service包名
	 * @param tbName 表结构名
	 */
	public CreateServiceFile(String pkg, String tbName){
		this.pkg = pkg;
		this.tbName = tbName;
		this.implPkg = pkg+".impl";
	}
	
	/**
	 * 构造器
	 * @param pkg service包名
	 * @param tbName 表结构名
	 * @param implPkg service实现类包名
	 */
	public CreateServiceFile(String pkg, String tbName, String implPkg){
		this(pkg, tbName);
		this.implPkg = implPkg;
	}
	
	/**
	 * 生成Service文件内容
	 * @return 返回是否成功标志
	 */
	public boolean createService(){
		String clsName = FileUtils.getClassName(tbName);
		
		StringBuffer sb=new StringBuffer();
		
		//生成时添加文件注释
		sb.append("/*\n");
		sb.append(" * @(#)").append(clsName).append("Service.java    1.0 ").append(new SimpleDateFormat("yyyy-MM-dd").format(new Date())).append("\n");
		sb.append(" *\n");
		sb.append(" * Copyright (c) 2007-2013 Shanghai BSOFT IT, Co., Ltd.\n");
		sb.append(" * All rights reserved.\n");
		sb.append(" *\n");
		sb.append(" * This software is the confidential and proprietary information of\n");
		sb.append(" * Shanghai BSFOT IT Co., Ltd. (\"Confidential Information\").\n");
		sb.append(" * You shall not disclose such Confidential Information and shall use \n");
		sb.append(" * it only in accordance with the terms of the license agreement you\n");
		sb.append(" * entered into with BSOFT.\n");
		sb.append(" */\n");
		
		sb.append("package ").append(pkg).append(";\r\n");
		sb.append(INTERFACE_PACK).append("\n\n");
		
		//生成时添加类说明注释
		sb.append("/**\n");
		sb.append(" * [Class description goes here.]\n");
		sb.append(" * \n");
		sb.append(" *  @version 	1.0  ").append(new SimpleDateFormat("yyyy-MM-dd").format(new Date())).append("\n");
		sb.append(" * @author		[admin]\n");
		sb.append(" * @history	\n");
		sb.append(" *       [date]	[version]	[name]	[content]\n");
		sb.append(" */ \n");
		
		sb.append("public interface ")
			.append(clsName).append("Service extends BaseResService {")
			.append("\n");
		
		sb.append("\n\n");
		sb.append("}");
		System.out.println(sb.toString());
		
		
		String filePath = FileUtils.getFilePath("src", pkg)+clsName+"Service.java";
		return FileUtils.writerJavaFile( sb.toString(), filePath, false);
	}
	
	/**
	 * 生成ServiceImpl文件内容
	 * @return 是否成功
	 */
	public boolean createServiceImpl(){
		String clsName = FileUtils.getClassName(tbName);
		StringBuffer sb=new StringBuffer();
		
		//生成时添加文件注释
		sb.append("/*\n");
		sb.append(" * @(#)").append(clsName).append("ServiceImpl.java     1.0 ").append(new SimpleDateFormat("yyyy-MM-dd").format(new Date())).append("\n");
		sb.append(" *\n");
		sb.append(" * Copyright (c) 2007-2013 Shanghai BSOFT IT, Co., Ltd.\n");
		sb.append(" * All rights reserved.\n");
		sb.append(" *\n");
		sb.append(" * This software is the confidential and proprietary information of\n");
		sb.append(" * Shanghai BSFOT IT Co., Ltd. (\"Confidential Information\").\n");
		sb.append(" * You shall not disclose such Confidential Information and shall use \n");
		sb.append(" * it only in accordance with the terms of the license agreement you\n");
		sb.append(" * entered into with BSOFT.\n");
		sb.append(" */\n");
		
		sb.append("package ").append(implPkg).append("; \r\n\n");
		sb.append(IMPL_PACK);//
		sb.append(CACHE_PACK);
		sb.append(ELEMENT_PACK);
		sb.append("import ").append(pkg).append(".").append(clsName).append("Service;").append("\n\n");
		
		//生成时添加类注释
		sb.append("/**\n");
		sb.append(" * [Class description goes here.]\n");
		sb.append(" * \n");
		sb.append(" *  @version 	1.0  ").append(new SimpleDateFormat("yyyy-MM-dd").format(new Date())).append("\n");
		sb.append(" * @author		[admin]\n");
		sb.append(" * @history	\n");
		sb.append(" *       [date]	[version]	[name]	[content]\n");
		sb.append(" */ \n");
		
		sb.append("public class ").append(clsName)
			.append("ServiceImpl extends BaseResServiceImpl implements ")
			.append(clsName).append("Service {\n");
		
		sb.append("\n\t").append(SERIALVERSIONUID).append("\n\n");
		
		sb.append("\t");
		
		sb.append("private Cache cache;").append("\n\n");
		
		sb.append("\t");
		
		sb.append("public void setCache(Cache cache) {")
			.append("\n")
			.append("\t\t")
			.append("this.cache = cache;")
			.append("\n\t").append("}");
		
		sb.append("\n\n").append("}");
		System.out.println(sb.toString());
		
		String filePath =  FileUtils.getFilePath("src", implPkg)+ clsName+ "ServiceImpl.java";
		return FileUtils.writerJavaFile(sb.toString(),filePath,false);
	}
}
