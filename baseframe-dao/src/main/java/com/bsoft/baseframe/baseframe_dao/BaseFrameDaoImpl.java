package com.bsoft.baseframe.baseframe_dao;


import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.orm.ibatis.SqlMapClientTemplate;

import com.bsoft.baseframe.exception.DBException;
import com.bsoft.baseframe.utils.PageModel;
import com.google.gson.Gson;



public class BaseFrameDaoImpl implements BaseFrameDao {
	
	private SqlMapClientTemplate sqlMapClientTemplate;
	
	private Gson gson = new Gson();
	/**
	 * 注入sqlMapClientTemplate
	 */
	public void setSqlMapClientTemplate(SqlMapClientTemplate sqlMapClientTemplate) {
		this.sqlMapClientTemplate = sqlMapClientTemplate;
	}
	/**
	 * 使用Object添加信息的对象信息，并返回对象主键
	 * @param obj <br/>
	 * @param statementName   <br/>
	 * @return Object rows <br/>
	 */
	@SuppressWarnings("finally")
	public Object addEntity(String statementName,Object obj ) throws DBException {
		
			return sqlMapClientTemplate.insert(statementName,obj);
		
	}
	
	
	/**
	 * 删除对象信息，并返回影响的行数
	 * @param statementName <br/>
	 * @return Object rows <br/>
	 */
	public Object delEntity(String statementName,Object obj) throws DBException {
		// TODO Auto-generated method stub
		return sqlMapClientTemplate.delete(statementName, obj);
	}
	/**
	 * 查询一个对象信息，并返回对象
	 * @param statementName <br/>
	 * @param param 查询条件<br/>
	 * @return Object <br/>
	 */
	public Object getOneEntity(String statementName,Object parameterObject) throws DBException {
		// TODO Auto-generated method stub
		return sqlMapClientTemplate.queryForObject(statementName, parameterObject);
	}
	/**
	 * 查询对象信息，并返回对象数组
	 * @param statementName <br/>
	 * @return List<Object> <br/>
	 */
	public List listEntity(String statementName) throws DBException {
		// TODO Auto-generated method stub
		return sqlMapClientTemplate.queryForList(statementName);
	}
	@Override
	public List listEntityByEntity(String statementName, Object obj)
			throws DBException {
		return sqlMapClientTemplate.queryForList(statementName,obj);
	}
	/**
	 * 查询对象信息，并返回对象数组
	 * @param statementName
	 * @param map 查询条件 无条件时传入NULL 
	 * @return List
	 * @throws DBException
	 */
	public List listEntity(String statementName, Map map) throws DBException {
		// TODO Auto-generated method stub
		
		return sqlMapClientTemplate.queryForList(statementName,map);
	}
	/**
	 * 修改对象信息，并返回影响的行数
	 * @param statementName <br/>
	 * @return Object rows <br/>
	 */
	public Object updateEntity(String statementName,Object obj) throws DBException {
		
			return sqlMapClientTemplate.update(statementName,obj);
		
	}
	/**
	 * 分页查询数据
	 * @param statementName    映射SQL
	 * @param countStatementName    映射统计分页总数SQL
	 * @param offset    偏移量
	 * @param pagesize  页面大小
	 * @param map		查询参数  无参数时传入NULL
	 * @return
	 */
	public PageModel listEntityByPage(String statementName,String countStatementName, Map map) throws DBException{
		if(map == null) map =new HashMap();
        List list = sqlMapClientTemplate.queryForList(statementName,map);
        int count = (Integer)sqlMapClientTemplate.queryForObject(countStatementName,map);
        PageModel pm = new PageModel();
        pm.setCount(count);
        pm.setDatas(list);
        return pm; 
	}
	public List listEntity(String statementName, String value) throws DBException {
		// TODO Auto-generated method stub
		return sqlMapClientTemplate.queryForList(statementName,value);
	}
	public Map mapEntity(String statementName, Map map,String keyProperty ,String valueProperty) throws DBException {
		// TODO Auto-generated method stub
		return sqlMapClientTemplate.queryForMap(statementName, map, keyProperty, valueProperty);
	}

	/**
	 *从ibatis里 得到数据库连接<BR>	
	 */
	public Connection getConnection()throws DBException
	{
		try {
			return sqlMapClientTemplate.getDataSource().getConnection();
		} catch (SQLException e) {
			throw new DBException(e.getMessage());
		}
	}
}
