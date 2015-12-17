package com.bsoft.baseframe.service.permission;

import java.util.List;

import com.bsoft.baseframe.entity.base.OperPermission;

public interface OperPermissionService {
	public abstract List<OperPermission> getOperPermissionList() throws Exception; 
	public abstract OperPermission selectByRoleId(String roleId) throws Exception;
	public abstract OperPermission selectByUid(String uid) throws Exception;
}
