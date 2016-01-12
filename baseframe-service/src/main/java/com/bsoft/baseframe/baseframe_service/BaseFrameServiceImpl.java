package com.bsoft.baseframe.baseframe_service;

import java.util.Map;

import com.bsoft.baseframe.utils.ApiResponse;
import com.soft.baseframe.baseframe_dao.BaseFrameDao;
import com.soft.baseframe.exception.BusinessException;
import com.soft.baseframe.exception.DBException;



public class BaseFrameServiceImpl  implements BaseFrameService {
	private BaseFrameDao baseDao;
	
	public void setBaseDao(BaseFrameDao baseDao) {
		this.baseDao = baseDao;
	}
	
	public ApiResponse addEntity(String statementName,Object obj) throws BusinessException {
		
		ApiResponse api = new ApiResponse();
		try {
			api.setResult(baseDao.addEntity(statementName,obj));
		} catch (DBException e) {
			throw new BusinessException("addError",e.getMessage(),e);
		} catch (Exception e) {
			throw new BusinessException("addError",e.getMessage(),e);
		}
		return api;
	}

	public ApiResponse delEntity(String statementName,Object obj) throws BusinessException {
		ApiResponse api = new ApiResponse();
		try {
			api.setResult(baseDao.delEntity(statementName,obj));
		} catch (DBException e) {
			throw new BusinessException("delError",e.getMessage(),e);
		} catch (Exception e) {
			throw new BusinessException("delError",e.getMessage(),e);
		}
		return api;
	}

	public ApiResponse getOneEntity(String statementName, Object param)
			throws BusinessException {
		ApiResponse api = new ApiResponse();
		try {
			api.setResult(baseDao.getOneEntity(statementName, param));
		} catch (DBException e) {
			throw new BusinessException("queryError",e.getMessage(),e);
		} catch (Exception e) {
			throw new BusinessException("queryError",e.getMessage(),e);
		}
		return api;
	}

	public ApiResponse listEntity(String statementName) throws BusinessException {
		ApiResponse api = new ApiResponse();
		try {
			api.getPageModel().setDatas(baseDao.listEntity(statementName));
		} catch (DBException e) {
			throw new BusinessException("queryError",e.getMessage(),e);
		} catch (Exception e) {
			throw new BusinessException("queryError",e.getMessage(),e);
		}
		return api;
	}

	public ApiResponse listEntityByMap(String statementName, Map map) throws BusinessException {
		ApiResponse api = new ApiResponse();
		try {
			api.getPageModel().setDatas(baseDao.listEntity(statementName,map));
		} catch (DBException e) {
			throw new BusinessException("queryError",e.getMessage(),e);
		} catch (Exception e) {
			throw new BusinessException("queryError",e.getMessage(),e);
		}
		return api;
	}
	


	public ApiResponse listEntityByPage(String statementName,
			String countStatementName, Map map)
			throws BusinessException {
		ApiResponse api = new ApiResponse();
		try {
			api.setPageModel(baseDao.listEntityByPage(statementName, countStatementName, map));
		} catch (DBException e) {
			throw new BusinessException("queryError",e.getMessage(),e);
		} catch (Exception e) {
			throw new BusinessException("queryError",e.getMessage(),e);
		}
		return api;
	}

	public ApiResponse updateEntity(String statementName,Object obj) throws BusinessException {
		ApiResponse api = new ApiResponse();
		try {
			api.setResult(baseDao.updateEntity(statementName,obj));
		} catch (DBException e) {
			throw new BusinessException("updateError",e.getMessage(),e);
		} catch (Exception e) {
			throw new BusinessException("updateError",e.getMessage(),e);
		}
		return api;
	}

	public ApiResponse listEntityByString(String statementName, String value) throws BusinessException {
		ApiResponse api = new ApiResponse();
		try {
			api.getPageModel().setDatas(baseDao.listEntity(statementName,value));
		} catch (DBException e) {
			throw new BusinessException("queryError",e.getMessage(),e);
		} catch (Exception e) {
			throw new BusinessException("queryError",e.getMessage(),e);
		}
		return api;
	}
	@Override
	public ApiResponse listEntityByEntity(String statementName, Object obj)
			throws BusinessException {
		ApiResponse api = new ApiResponse();
		try {
			api.getPageModel().setDatas(baseDao.listEntityByEntity(statementName,obj));
		} catch (DBException e) {
			throw new BusinessException("queryError",e.getMessage(),e);
		} catch (Exception e) {
			throw new BusinessException("queryError",e.getMessage(),e);
		}
		return api;
	}

	public Map mapEntity(String statementName, Map map, String keyProperty,
			String valueProperty) throws BusinessException {
		Map m=null;
		try {
			m= baseDao.mapEntity(statementName, map, keyProperty, valueProperty);
		} catch (DBException e) {
			throw new BusinessException("queryError",e.getMessage(),e);
		} catch (Exception e) {
			throw new BusinessException("queryError",e.getMessage(),e);
		}
		return m;
	}

	/**
	 * 获取底层到接口
	 * @return 返回底层到接口
	 */
	public BaseFrameDao getBaseDao() {
		return baseDao;
	}

	@Override
	public ApiResponse getOneEntityByString(String statementName, String param)
			throws BusinessException {
		ApiResponse api = new ApiResponse();
		try {
			api.setResult(baseDao.getOneEntity(statementName, param));
		} catch (DBException e) {
			throw new BusinessException("queryError",e.getMessage(),e);
		} catch (Exception e) {
			throw new BusinessException("queryError",e.getMessage(),e);
		}
		return api;
	}

}
