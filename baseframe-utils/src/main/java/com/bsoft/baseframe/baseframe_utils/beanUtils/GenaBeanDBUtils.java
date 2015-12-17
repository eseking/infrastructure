/*
 * @(#)GenaBeanDBUtils.java  1.0 2013-03-26
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

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * 
 * 对数据库crud操作
 *
 * @version 	1.0 2013-3-26
 * @author		caie
 * @history	
 *
 */
public class GenaBeanDBUtils {

	/**
	 * 获取表中的属性对象
	 * @param tableName 表名称
	 * @return 属性对象集合
	 */
	public static List<GenaBean> getFields(String tableName){
		List<GenaBean> list = new ArrayList<GenaBean>();
		StringBuffer buffer = new StringBuffer();
		buffer.append(" SELECT serialNo = A.COLORDER, columnName = A.NAME, ")
			.append(" prikey = CASE WHEN EXISTS(SELECT 1 FROM SYSOBJECTS WHERE XTYPE= 'PK' AND PARENT_OBJ=A.ID AND NAME IN ( ")
			.append(" SELECT NAME FROM SYSINDEXES WHERE INDID IN( ")
			.append(" SELECT INDID FROM SYSINDEXKEYS WHERE ID = A.ID AND COLID=A.COLID))) THEN '√' ELSE '' END, ")
			.append(" typeName = B.NAME, len = A.LENGTH, labelName = cast(ISNULL(G.[VALUE], '') as varchar(100)) FROM SYSCOLUMNS A LEFT JOIN SYSTYPES B ON ")
			.append(" A.XUSERTYPE = B.XUSERTYPE INNER JOIN SYSOBJECTS D ON A.ID=D.ID AND D.XTYPE = 'U' AND D.NAME <> 'DTPROPERTIES' ")
			.append(" LEFT JOIN SYSCOMMENTS E ON A.CDEFAULT = E.ID LEFT JOIN sys.extended_properties G ON A.ID=G.major_id AND A.COLID=G.minor_id ")
			.append(" LEFT JOIN sys.extended_properties F ON D.ID = F.major_id AND F.minor_id=0 where D.NAME=? ORDER BY A.ID, A.COLORDER ");
		PreparedStatement stmt = null;
		ResultSet rs = null;
		GenaBean gb = null;
		try {
			stmt = DBSingle.getInstance().prepareStatement(buffer.toString());
			stmt.setString(1, tableName);
			rs = stmt.executeQuery();
			
			while(rs.next()){
				gb = new GenaBean();
				gb.setSerialNo(Integer.parseInt(rs.getString("serialNo")));
				gb.setColumnName(rs.getString("columnName"));
				gb.setPrikey(rs.getString("prikey"));
				gb.setTypeName(rs.getString("typeName"));
				gb.setLen(rs.getString("len"));
				gb.setLabelName(rs.getString("labelName"));
				list.add(gb);
			}
			
			rs.close();
			stmt.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return list;
	}
	
	/**
	 * 测试
	 * @param args
	 * @author caie 2013-03-26
	 */
	public static void main(String[] args) {
		List<GenaBean> list = new GenaBeanDBUtils().getFields("t_user");
		for(Iterator<GenaBean> it = list.iterator(); it.hasNext();){
			GenaBean gb = it.next();
			System.out.println(gb.getColumnName() + gb.getLabelName());
			
		}
	}
	
	
}
