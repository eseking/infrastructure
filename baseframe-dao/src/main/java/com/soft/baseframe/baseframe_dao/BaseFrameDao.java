package com.soft.baseframe.baseframe_dao;

import java.sql.Connection;
import java.util.List;
import java.util.Map;

import com.soft.baseframe.exception.DBException;
import com.soft.baseframe.utils.PageModel;



public interface BaseFrameDao {
	/**
	 * 使用Object添加信息的对象信息，并返回对象主键
	 * @param obj <br/>
	 * @param statementName   <br/>
	 * @return Object rows <br/>
	 */
	public Object addEntity(String statementName,Object obj )throws DBException;
	
	/**
	 * 删除对象信息，并返回影响的行数
	 * @param statementName <br/>
	 * @return Object rows <br/>
	 */
	
	
	
	public Object delEntity(String statementName,Object obj)throws DBException;
	
	
	/**
	 * 修改对象信息，并返回影响的行数
	 * @param statementName <br/>
	 * @return Object rows <br/>
	 */
	public Object updateEntity(String statementName,Object obj)throws DBException;
	
	
	/**
	 * 查询对象信息，并返回对象数组
	 * @param statementName <br/>
	 * @return List<Object> <br/>
	 */
	public List listEntity(String statementName)throws DBException;
	
	/**
	 * 查询对象信息，并返回对象数组
	 * @param statementName
	 * @param map 查询条件 无条件时传入NULL 
	 * @return List
	 * @throws DBException
	 */
	public List listEntity(String statementName,Map map)throws DBException;
	
	
	/**
	 * 查询对象信息，并返回Map
	 * @param statementName
	 * @param map 查询条件 无条件时传入NULL 
	 * @return Map
	 * @throws DBException
	 */
	public Map mapEntity(String statementName, Map map,String keyProperty ,String valueProperty) throws DBException ;
	
	/**
	 * 查询对象信息，并返回对象数组
	 * @param statementName
	 * @param value 查询条件 无条件时传入NULL 
	 * @return List
	 * @throws DBException
	 */
	public List listEntity(String statementName,String value)throws DBException;
	
	
	/**
	 * 查询一个对象信息，并返回对象
	 * @param statementName <br/>
	 * @param param 查询条件<br/>
	 * @return Object <br/>
	 */
	public Object getOneEntity(String statementName,Object param)throws DBException;
	
	/**
	 * 分页查询数据
	 * @param statementName    映射SQL
	 * @param countStatementName    映射统计分页总数SQL
	 * @param map		查询参数  默认存放 偏移量和页面大小
	 * @return
	 */
	public  PageModel listEntityByPage(String statementName,String countStatementName,Map map) throws DBException;
	/**
	 *从ibitas里 得到数据库连接<BR>	
	 */
	public Connection getConnection()throws DBException;
	
	/**
	 * 根据对象查询数据
	 * @param statementName
	 * @param obj
	 * @return
	 * @throws DBException
	 */
	public List listEntityByEntity(String statementName, Object obj)
	throws DBException;
	
}
