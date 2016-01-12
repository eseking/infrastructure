package com.bsoft.baseframe.baseframe_service;

import java.util.Map;

import com.bsoft.baseframe.utils.ApiResponse;
import com.soft.baseframe.baseframe_dao.BaseFrameDao;
import com.soft.baseframe.exception.BusinessException;


/**
 * 
 * 封装增删改查的基本操作
 *
 * @version 	1.0 Mar 11, 2013
 * @author		caol
 * @history	
 *
 */
public interface BaseFrameService {
	/**
	 * 使用Object添加信息的对象信息，并返回对象主键
	 * @param statementName ibatis映射SQL
	 * @param obj 对象信息
	 * @return ApiResponse对象 返回影响行数
	 * @throws Exception
	 */
	public ApiResponse addEntity(String statementName,Object obj )throws BusinessException;
	
	/**
	 * 删除对象信息，并返回影响的行数
	 * @param statementName <br/>
	 * @return Object rows <br/>
	 */
	public ApiResponse delEntity(String statementName,Object obj)throws BusinessException;
	
	
	/**
	 * 修改对象信息，并返回影响的行数
	 * @param statementName <br/>
	 * @return Object rows <br/>
	 */
	public ApiResponse updateEntity(String statementName,Object obj)throws BusinessException;
	
	
	/**
	 * 查询对象信息，并返回对象数组
	 * @param statementName <br/>
	 * @return List<Object> <br/>
	 */
	public ApiResponse listEntity(String statementName)throws BusinessException;
	public ApiResponse listEntityByEntity(String statementName,Object obj)throws BusinessException;
	
	/**
	 * 查询对象信息，并返回对象数组
	 * @param statementName
	 * @param map 查询条件 无条件时传入NULL 
	 * @return List
	 * @throws BusinessException
	 */
	public ApiResponse listEntityByMap(String statementName,Map map)throws BusinessException;
	
	/**
	 * 查询对象信息，并返回对象数组
	 * @param statementName
	 * @param value 查询条件 无条件时传入NULL 
	 * @return List
	 * @throws BusinessException
	 */
	public ApiResponse listEntityByString(String statementName,String value)throws BusinessException;
	
	
	/**
	 * 查询一个对象信息，并返回对象
	 * @param statementName <br/>
	 * @param param 查询条件<br/>
	 * @return Object <br/>
	 */
	public ApiResponse getOneEntity(String statementName,Object param)throws BusinessException;
	
	/**
	 * 查询一个对象信息，并返回对象
	 * @param statementName <br/>
	 * @param param 查询条件<br/>
	 * @return String <br/>
	 */
	public ApiResponse getOneEntityByString(String statementName,String param)throws BusinessException;
	
	/**
	 * 分页查询数据
	 * @param statementName    映射SQL
	 * @param countStatementName    映射统计分页总数SQL
	 * @param map		查询参数  默認存放 页面大小和偏移量
	 * @return
	 */
	public  ApiResponse listEntityByPage(String statementName,String countStatementName,Map map) throws BusinessException;
		
	/**
	 * 返回数据类型为map
	 * @param statementName  映射SQL
	 * @param map            查询条件
	 * @param keyProperty	   返回的key值
	 * @param valueProperty  返回的value值
	 * @return
	 * @throws BusinessException
	 */
	public Map mapEntity(String statementName, Map map,String keyProperty ,String valueProperty) throws BusinessException ;
	/**
	 * 获取BASEDAO
	 * @return
	 */
	public BaseFrameDao getBaseDao();
}
