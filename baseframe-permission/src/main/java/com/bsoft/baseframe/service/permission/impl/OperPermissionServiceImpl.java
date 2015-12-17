package com.bsoft.baseframe.service.permission.impl;

import java.util.List;

import com.bsoft.baseframe.baseframe_dao.BaseFrameDao;
import com.bsoft.baseframe.entity.base.OperPermission;
import com.bsoft.baseframe.service.permission.OperPermissionService;

public class OperPermissionServiceImpl implements OperPermissionService{
	private BaseFrameDao baseDao;
	public BaseFrameDao getBaseDao() {
		return baseDao;
	}

	public void setBaseDao(BaseFrameDao baseDao) {
		this.baseDao = baseDao;
	}

	@Override
	public List<OperPermission> getOperPermissionList() throws Exception {
		return baseDao.listEntity("OperPermission.selectPOperPermission");
	}
    //根据roleid查询
	@Override
	public OperPermission selectByRoleId(String roleId) throws Exception {
		/*Map<String,Object> map=new HashMap<String,Object>();
		map.put("roleId",roleId);*/
		return (OperPermission)baseDao.getOneEntity("OperPermission.selectOperPermissionByRoleid", roleId);
	}
	//根据uid查询权限
	@Override
	public OperPermission selectByUid(String uid) throws Exception {
		return (OperPermission)baseDao.getOneEntity("OperPermission.selectOperPermissionByUid", uid);
	}
}
