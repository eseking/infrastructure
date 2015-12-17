package com.bsoft.baseframe.service.permission;

import java.util.Map;

import com.bsoft.baseframe.baseframe_service.BaseFrameService;
import com.bsoft.baseframe.entity.base.BaseFrameUser;
import com.bsoft.baseframe.exception.BusinessException;
import com.bsoft.baseframe.utils.ApiResponse;
/**
 * 
 * 用户管理Service
 *
 * @version 	1.0 2013-6-19
 * @author		caol
 * @history	
 *
 */
public interface BaseFrameUserService extends BaseFrameService{
	/**
	 * 增加用户
	 * @param user	BaseFrameUser实体类
	 * @return	ApiResponse 影响行数
	 * @throws BusinessException
	 */
	public ApiResponse addUser(BaseFrameUser user) throws BusinessException;
	/**
	 * 更新用户
	 * @param user	BaseFrameUser实体类
	 * @return	ApiResponse 影响行数
	 * @throws BusinessException
	 */
	public ApiResponse updateUser(BaseFrameUser user) throws BusinessException;
	/**
	 * 删除用户
	 * @param user	BaseFrameUser实体类
	 * @return	ApiResponse 影响行数
	 * @throws BusinessException
	 */
	public ApiResponse delUser(BaseFrameUser user) throws BusinessException;
	/**
	 * 查询用户
	 * @param map 查询条件
	 * @return	ApiResponse 包含List<BaseFrameUser>
	 * @throws BusinessException
	 */
	public ApiResponse ListUser(Map map) throws BusinessException;

}
