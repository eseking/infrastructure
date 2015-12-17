/**
 * 
 */
package com.bsoft.baseframe.service.permission.impl;

import java.util.Map;

import com.bsoft.baseframe.baseframe_service.BaseFrameServiceImpl;
import com.bsoft.baseframe.entity.base.BaseFrameUser;
import com.bsoft.baseframe.exception.BusinessException;
import com.bsoft.baseframe.service.permission.BaseFrameUserService;
import com.bsoft.baseframe.utils.ApiResponse;

/**
 * @author dell
 *
 */
public class BaseFrameUserServiceImpl extends BaseFrameServiceImpl implements BaseFrameUserService{

	@Override
	public ApiResponse addUser(BaseFrameUser user) throws BusinessException {
		
		return this.addEntity("BASEFRAMEUSER.addBaseFrameUser", user);
	}

	@Override
	public ApiResponse updateUser(BaseFrameUser user) throws BusinessException {
		
		return this.updateEntity("BASEFRAMEUSER.updateBaseFrameUser", user);
	}

	@Override
	public ApiResponse delUser(BaseFrameUser user) throws BusinessException {
		
		return this.delEntity("BASEFRAMEUSER.delBaseFrameUser",user);
	}

	@Override
	public ApiResponse ListUser(Map map) throws BusinessException {
		
		return this.listEntityByPage("BASEFRAMEUSER.listBaseFrameUser", "BASEFRAMEUSER.queryCount", map);
	}

}
