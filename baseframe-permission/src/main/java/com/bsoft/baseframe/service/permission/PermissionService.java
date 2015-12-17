package com.bsoft.baseframe.service.permission;

import java.util.List;

import com.bsoft.baseframe.baseframe_service.BaseFrameService;
import com.bsoft.baseframe.exception.BusinessException;
import com.bsoft.baseframe.exception.DBException;
import com.bsoft.baseframe.utils.ApiResponse;

/**
 * 
 * 权限管理service
 *
 * @version 	1.0 2013-6-19
 * @author		caol
 * @history	
 *
 */
public interface PermissionService extends BaseFrameService{
	/**
	 * 根据用户ID获取页面权限
	 * @param userId 用户ID
	 * @param pageId 页面ID
	 * @return ApiResponse	包含权限信息{"baseEvent":["add","update","delete","export"],"customEvent":["13a6c6e3a","13a6c7e427"]}
	 * @throws BusinessException
	 */
	public ApiResponse getPagePermission(String userId,String pageId) throws BusinessException;
	
	/**
	 * 根据用户ID获取用户角色列表
	 * @param userId 用户ID
	 * @return ApiResponse
	 * @throws BusinessException
	 */
	public ApiResponse getRoles(String userId) throws BusinessException;
	
	/**
	 * 根据用户ID获取可访问菜单列表
	 * @param userId
	 * @return ApiResponse		包含菜单列表：[{1:[2,4]},{2:[11,5]}]
	 * @throws BusinessException
	 */
	public List getAccessMenu(String userId,String pid) throws BusinessException;
	
	/**
	 * 获取菜单列表
	 * @param pid 上级菜单ID
	 * @return ApiResponse		包含菜单列表：[{1:[2,4]},{2:[11,5]}]
	 * @throws BusinessException
	 */
	public List getAllMenu(String pid) throws Exception;
	/**
	 * 根据用户ID获取数据权限
	 * @param userId
	 * @return
	 * @throws BusinessException
	 */
	public ApiResponse getOperPermission(String userId) throws BusinessException;
	
	/**
	 * 增加数据权限
	 * @param id	主体ID
	 * @param type	主体类型  1 user 2 role
	 * @param per	数据权限 ：[{hospital:[12051]},{school:[1,2]}]
	 * @return
	 * @throws BusinessException
	 */
	public ApiResponse addOperPermission(String id,String type,String per) throws BusinessException;
	/**
	 * 增加页面权限
	 * @param id		主体ID   
	 * @param type		主体类型  1 user 2 role
	 * @param per		页面权限：{"baseEvent":["add","update","delete","export"],"customEvent":["13a6c6e3a","13a6c7e427"]}
	 * @param pageId	页面ID
	 * @return
	 * @throws BusinessException
	 */
	public ApiResponse addPagePermission(String id,String type,String per,String pageId) throws BusinessException;
	
	/**
	 * 增加菜单权限
	 * @param id			主体ID   
	 * @param type			主体类型  1 user 2 role
	 * @param per			菜单权限：[{1:[2,4]},{2:[11,5]}]
	 * 
	 * @return
	 * @throws BusinessException
	 */
	public ApiResponse addMenuPermission(String id,String type,String per) throws Exception;
	
	/**
	 * 获取菜单权限
	 * @param id			主体ID   
	 * 
	 * @return
	 * @throws BusinessException
	 */
	public ApiResponse getMenuPermission(String id) throws Exception;
	/**
	 * 
	 * @param pid
	 * @return
	 * @throws Exception
	 */
	public List getAllTree(String pid) throws Exception;
	/**
	 * 获取用户对应的角色
	 * @param userId
	 * @return
	 * @throws DBException
	 */
	public Object getUserRole(String userId) throws DBException;
	
/*	public ApiResponse addPermission(Object o) throws Exception;
	
	public ApiResponse addPagePermission(Object o) throws Exception;
	
	public ApiResponse addUserRole(Object o) throws Exception;
	
	public ApiResponse delPermission(String id) throws Exception;
	
	public ApiResponse getPermission(BaseFrameUser user) throws Exception;
	
	public ApiResponse getPagePermission(BaseFrameUser user) throws Exception;*/
	
	


}
