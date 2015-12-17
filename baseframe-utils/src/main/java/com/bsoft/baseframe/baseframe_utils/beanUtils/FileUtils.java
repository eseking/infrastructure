/*
 * @(#)FileUtils.java        1.0 2013-03-26
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

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.OutputStreamWriter;

import org.dom4j.Document;
import org.dom4j.io.OutputFormat;
import org.dom4j.io.XMLWriter;

/**
 * 
 * 文件处理工具类
 *
 * @version 	1.0 2013-3-26
 * @author		caie
 * @history	 
 * 		2013-4-7  caie 修改writeData方法，返回值boolean 
 * 						修改了getFilePath方法，去掉了参数tablename
 *
 */
public class FileUtils {

	/**
	 * 获取生成bean绝对路径
	 * @param tableName 表名称
	 * @param pack  路径
	 * @return 绝对路径
	 */
	public static String getFilePath(String pack){
		String proPath = System.getProperty("user.dir").replaceAll("\\\\", "/");
		String spack = pack.replaceAll("\\.", "/");
		return proPath+"/src/main/java/"+spack +"/";
	} 
	
	/**
	 * 获取绝对路径
	 * 2013-04-07 caie
	 * @param src 目录
	 * @param pack 包名
	 * @return 
	 */
	public static String getFilePath(String src, String pack){
		String proPath = System.getProperty("user.dir").replaceAll("\\\\", "/");
		String spack = pack.replaceAll("\\.", "/");
		return proPath+"/"+src+"/main/java"+spack +"/";
	} 
	
	/**
	 * 获取XMLPath
	 * 2013-04-07 caie
	 * @param src 目录
	 * @param pack 包名
	 * @return 
	 */
	public static String getXMLFilePath(String src, String pack){
		String proPath = System.getProperty("user.dir").replaceAll("\\\\", "/");
		String spack = pack.replaceAll("\\.", "/");
		return proPath+"/"+src+"/"+spack +"/";
	} 
	
	/**
	 * 全路径包括文件名称
	 * @param tableName 表名称
	 * @param pack  包
	 * @return 全路径
	 */
	public static String getFilePathName(String tableName, String pack){
		return getFilePath(pack) + suffixClassName(tableName);
	}
	
	/**
	 * 获取实体名称带.java
	 * @param tableName 表名称
	 * @return 返回带.java的实体名称
	 */
	public static String suffixClassName(String tableName){
		String suffixClassName = getClassName(tableName);
		return suffixClassName + ".java";
	}
	
	/**
	 * 获取bean名
	 * @param tableName
	 * @deprecated 已作废
	 * @return
	 */
	public static String getBeanName(String tableName){
		int index =  tableName.indexOf("_");
		String className = tableName;
		if(index >= 0){
			className = tableName.substring(index+1);
		}
		className = className.substring(0,1).toUpperCase() + className.substring(1);
		return className;
	}
	
	/**
	 * 实体简称
	 * @param tn 表名称
	 * @return 返回类名称
	 */
	public static String getClassName(String tn){
		int index = tn.indexOf("_");
		String temp ="";
		if(index<0){
			return tn.substring(0,1).toUpperCase()+tn.substring(1);
		}else{
			temp = tn.substring(0,index)+tn.substring(index+1, index+2).toUpperCase()+tn.substring(index+2);
			return getClassName(temp);
		}
	}
	
	
	/**
	 * 创建包目录和bean文件
	 * @param filePath 文件路径
	 * @return 创建成功返回true，失败返回false 
	 */
	private static boolean createFile(String filePath){
		File f = new File(filePath);
		int index = filePath.indexOf(".");
		if(index >= 0){
			String dirPath = filePath.substring(0, filePath.lastIndexOf("/"));
			File dirFile = new File(dirPath);
			if(!dirFile.exists()){
				dirFile.mkdirs();
			}
			if(f.exists()){
				f.delete();
			}
			try {
				f.createNewFile();
			} catch (IOException e) {
				e.printStackTrace();
				return false;
			}
		}else{
			if(!f.exists()){
				f.mkdirs();
			}
		}
		return true;
	}
	
	/**
	 * 创建实体，并创建文件
	 * @param beanCode 实体组装字符串
	 * @param filePath 路径
	 */
	public static boolean writeData(String beanCode, String filePath){
		OutputStreamWriter osw = null;
		BufferedWriter bw = null;
		FileOutputStream fos = null;
		createFile(filePath);
		File f = new File(filePath);
		try {
			fos = new FileOutputStream(f);
			osw = new OutputStreamWriter(fos,"UTF-8");
			bw = new BufferedWriter(osw);
			bw.write(beanCode);
			bw.flush();
			fos.close();
			osw.close();
			bw.close();
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}
	
	/**
	 * 验证字符串是否为空
	 * @param str 字符串
	 * @return 是返回true， 不是返回false
	 */
	public static boolean isEmpty(String str){
		if("".equals(str)){
			return true;
		}
		return false;
	}
	
	/**
	 * 生成XML格式的文件
	 * @param document 
	 * @param file
	 * @throws IOException
	 */
	public static boolean wrieteXML2Doc(Document document,File file) {
		boolean isCreate = false;
		try {
			if (!file.getParentFile().exists()) {
				file.getParentFile().mkdirs();// 创建文件夹
			}
			if (!file.exists()) {
				isCreate = true;
				file.createNewFile();// 创建java文件 如：testData.java文件
			} else {
				isCreate = false;
			}
			//格式化XML格式，换行缩进
			if(isCreate){
				OutputFormat format = OutputFormat.createPrettyPrint();
				format.setEncoding("UTF-8");	//设置字符集
				//将document中的内容写入到文件中
				XMLWriter writer = new XMLWriter(new FileWriter(file),format);
				writer.write(document);
				writer.close();
			}
			return true;
		} catch (Exception e) {
			return false;
		}
	}
	
	/**
	 * 生成Service和ServiceImpl文件
	 * @param path 文件存放路径
	 * @param isNextWriter方法
	 */
	public static boolean writerJavaFile(String contentStr, String path, boolean isNextWriter) {
		boolean isCreate = false;
		try {
			File file = new File(path);
			if (!file.getParentFile().exists()) {
				file.getParentFile().mkdirs();// 创建文件夹
			}
			if (!file.exists()) {
				isCreate = true;
				file.createNewFile();// 创建java文件 如：testData.java文件
			} else {
				isCreate = false;
			}
			
			if(isCreate) {
				// 写入Java文件  
				FileWriter fileWriter = new FileWriter(path, isNextWriter);
				BufferedWriter bw = new BufferedWriter(fileWriter);
				bw.newLine();
				bw.write(contentStr);
				fileWriter.flush();
				bw.close();
				fileWriter.close();
			}
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	/**
	 * 测试
	 * @param args
	 */
	public static void main(String[] args) {
		String path = "E:/java/es/Test.java";
		FileUtils.createFile(path);
	}
}
