package com.bsoft.baseframe.service.permission;

import java.util.Map;

import com.bsoft.baseframe.baseframe_service.BaseFrameService;
import com.bsoft.baseframe.entity.base.Menu;
import com.bsoft.baseframe.exception.BusinessException;
import com.bsoft.baseframe.utils.ApiResponse;
/**
 * 
 * 菜单管理Service
 *
 * @version 	1.0 2013-6-19
 * @author		caol
 * @history	
 *
 */
public interface MenuService extends BaseFrameService{
	/**
	 * 增加菜单
	 * @param menu	Menu实体类
	 * @return	ApiResponse 影响行数
	 * @throws BusinessException
	 */
	public ApiResponse addMenu(Menu menu) throws Exception;
	/**
	 * 更新菜单
	 * @param menu	Menu实体类
	 * @return	ApiResponse 影响行数
	 * @throws BusinessException
	 */
	public ApiResponse updateMenu(Menu menu) throws Exception;
	/**
	 * 删除菜单
	 * @param Menu	Menu实体类
	 * @return	ApiResponse 影响行数
	 * @throws BusinessException
	 */
	public ApiResponse delMenu(String id) throws Exception;
	/**
	 * 查询菜单
	 * @param map 查询条件
	 * @return	ApiResponse 包含List<Menu>
	 * @throws BusinessException
	 */
	public ApiResponse ListMenu(Map map) throws BusinessException;
	
	/**
	 * 查询菜单
	 * @param pid 根据父级菜单ID查询所有子菜单
	 * @return	ApiResponse 包含List<Menu>
	 * @throws BusinessException
	 */
	public ApiResponse ListMenu(String pid) throws BusinessException;

}
