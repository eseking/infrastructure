package com.bsoft.baseframe.service.permission.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import net.sf.ehcache.Cache;
import net.sf.ehcache.Element;

import org.apache.commons.lang.StringUtils;
import org.json.JSONArray;
import org.json.JSONObject;

import com.bsoft.baseframe.baseframe_service.BaseFrameServiceImpl;
import com.bsoft.baseframe.baseframe_utils.seq.Seq;
import com.bsoft.baseframe.entity.base.CommonTrees;
import com.bsoft.baseframe.entity.base.Menu;
import com.bsoft.baseframe.entity.base.MenuPermission;
import com.bsoft.baseframe.entity.base.PermissionInfo;
import com.bsoft.baseframe.entity.base.UsersRoles;
import com.bsoft.baseframe.exception.BusinessException;
import com.bsoft.baseframe.exception.DBException;
import com.bsoft.baseframe.permission.util.PermissionConstantUtil;
import com.bsoft.baseframe.service.permission.PermissionService;
import com.bsoft.baseframe.utils.ApiResponse;



public class PermissionServiceImpl extends BaseFrameServiceImpl implements PermissionService{
	
	@Resource
	private Cache ehCache; 
	
	@Override
	public ApiResponse getPagePermission(String userId, String pageId)
			throws BusinessException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ApiResponse getRoles(String userId) throws BusinessException {
		// TODO Auto-generated method stub
		return null;
	}
	/**
	 * 获取可访问菜单的权限
	 * @param userId	用户ID
	 * @param pid		菜单父节点ID
	 */
	@Override
	public List getAccessMenu(String userId,String pid) throws BusinessException {
	
		List resultList=new ArrayList();
		//根据用户ID 获取角色ID
		try {
			Object o = getUserRole(userId);
			if(o==null){
				//无权限
				return resultList;
			}else{
			//根据角色ID 获取用户的菜单权限
			UsersRoles ur =(UsersRoles)o;
			String roleId = ur.getRoleId();
			@SuppressWarnings("rawtypes")
			Map map = new HashMap();
			//主体标识  角色ID
			map.put("principalSn", roleId);
			//菜单权限
			map.put("permissionType", PermissionConstantUtil.permission_menu);
			
			Object temp = this.getBaseDao().getOneEntity("MENUPERMISSION.getAccessMenu", map);
			if(temp!=null){
				MenuPermission mp =(MenuPermission)temp;			
				List list = getAllMenu(pid);
				//System.out.println(list);
				//获取权限字符串
				if(StringUtils.isEmpty(mp.getMenuList())){
					return list;
				}
				JSONObject jo = new JSONObject(mp.getMenuList());
				String accessMenu = jo.getString("accessMenu");
				JSONObject access = new JSONObject(accessMenu);
				//递归去掉多余的节点
				filterTree(list, access, resultList, null);
			}
		
			//api=	this.getOneEntity("MENUPERMISSION.getAccessMenu", map);
			}
		} catch (DBException e) {
			e.printStackTrace();
			throw new BusinessException(e.getMessage(),e);
		}catch (Exception e) {
			e.printStackTrace();
			throw new BusinessException(e.getMessage(),e);
		}
		
		return resultList;
	}
	/**
	 * 前台界面获取树状菜单
	 */
	@Override
	public List getAllMenu(String pid) throws Exception {
		//获取根目录
				List<Menu> roots =null;
				if(pid==null || "0".equals(pid)){
					
					//如果有缓存 从缓存获取所有的树
					if(ehCache.get(PermissionConstantUtil.menu_list)!=null){
						Element e=(Element)ehCache.get(PermissionConstantUtil.menu_list);
						roots = (List)e.getValue();
						return roots;
					}else{
						//包含根节点
						roots =this.getBaseDao().listEntity("MENU.listAllMenu");
						//roots =this.getBaseDao().listEntity("MENU.listRootMenu");
						for(Menu ct:roots){
							//if(ct.getId()=="0") continue;
							listChildren(ct);
						}
						Element element = new Element(PermissionConstantUtil.menu_list,roots);
						ehCache.put(element);
						return roots;
					}
					
				}else{
						
					/*	if(ehCache.get(PermissionConstantUtil.menu_list+pid)!=null){
							Element e=(Element)ehCache.get(PermissionConstantUtil.menu_list+pid);
							roots = (List)e.getValue();
							return roots;
						}*/
					
					roots=this.getBaseDao().listEntity("MENU.listMenu",pid);
				}
				for(Menu ct:roots){
					//if(ct.getId()=="0") continue;
					listChildren(ct);
				}

				return roots;
	}
	
	
	
	
	
	/**
	 * 后台权限配置界面显示菜单
	 */
	@Override
	public List getAllTree(String pid) throws Exception {
		//获取根目录
				List<CommonTrees> roots =null;
				if(pid==null || "0".equals(pid)){
					
					//如果有缓存 从缓存获取所有的树
				/*	if(ehCache.get(PermissionConstantUtil.menu_list)!=null){
						Element e=(Element)ehCache.get(PermissionConstantUtil.menu_list);
						roots = (List)e.getValue();
						return roots;
					}*/
					roots =this.getBaseDao().listEntity("CommonTree.listRootTree");
				}else{
					
					/*	if(ehCache.get(PermissionConstantUtil.menu_list+pid)!=null){
							Element e=(Element)ehCache.get(PermissionConstantUtil.menu_list+pid);
							roots = (List)e.getValue();
							return roots;
						}*/
					
					roots=this.getBaseDao().listEntity("CommonTree.listTreeByPid",pid);
				}
				for(CommonTrees ct:roots){
					//if(ct.getId()=="0") continue;
					listTreeChildren(ct);
				}

				return roots;
	}
	
	/**
	 * 过滤节点
	 * @param list		 源list
	 * @param jo		 权限字符串	
	 * @param resultList 结果list
	 * @param parent     保留的节点
	 */
	private void filterTree(List<Menu> list,JSONObject jo,List<Menu> resultList,Menu parent){
	//	System.out.println(jo.toString());
		if(null!=list&&list.size()>0){
			for(int j=0;j<list.size();j++){
				Menu ct =list.get(j);
				//获取层级  
				String level =ct.getExt2();
				JSONArray ja =new JSONArray();
				if(jo.has(level)){
					ja = jo.getJSONArray(level);
				}
				for (int i = 0; i < ja.length(); i++) {
					String id =ja.getString(i);
					//过滤ID相同的
					if(ct.getId().equals(id)){
					//使用clone 防止树结构缓存时  改变缓存的值
					Menu temp =(Menu)ct.clone();
					temp.setChildren(new ArrayList());
					resultList.add(temp);
					if(parent!=null){
					parent.setChildren(resultList);
					}
					if(ct.getChildren()!= null){
					List<Menu> ls =new ArrayList<Menu>();
					filterTree(ct.getChildren(),jo,ls,temp);
					}else{
					continue;
					}
					}else{
					}
					}
					}
		}
		}
	
	
	
	/**
	 * 获取用户对应的角色
	 * @param userId
	 * @return
	 */
	@Override
	public Object getUserRole(String userId) throws DBException{
		
		Object o = this.getBaseDao().getOneEntity("USERSROLES.getUserRole", userId);
		return o;
	}

	@Override
	public ApiResponse getOperPermission(String userId)
			throws BusinessException {
		Map map= new HashMap();
		map.put("userid", userId);
		return listEntityByEntity("PERMISSIONINFO.getOperPermission", map);
	}

	@Override
	public ApiResponse addOperPermission(String id, String type, String per)
			throws BusinessException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ApiResponse addPagePermission(String id, String type, String per,
			String pageId) throws BusinessException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ApiResponse addMenuPermission(String roleId, String type, String per)
			throws Exception {
		//判断是否有授权 有则删除
		Map map = new HashMap();
		//页面权限
		map.put("type", PermissionConstantUtil.permission_menu);
		map.put("principalSn", roleId);
		
		
		this.getBaseDao().delEntity("MENUPERMISSION.delMenuPermission", map);
		this.getBaseDao().delEntity("MENUPERMISSION.delPermission", map);
		
		
		MenuPermission mp = new MenuPermission();
		mp.setId(Seq.getNextID(10));
		mp.setMenuList(per);
		
		//mp.setPermissionSn(id);
		this.addEntity("MENUPERMISSION.addMenuPermission", mp);
		PermissionInfo pi = new PermissionInfo();
		pi.setId(Seq.getNextID(10));
		pi.setPermissionSn(mp.getId());
		pi.setPermissionType(PermissionConstantUtil.permission_menu);
		pi.setPrincipalSn(roleId);
		pi.setPrincipalType(type);
		
		
		
		return this.addEntity("PERMISSIONINFO.addPermissionInfo", pi);
	}

	
	
	/**
	 * 获取子节点
	 * @param ct
	 * @throws Exception
	 */
	private void listChildren(Menu ct) throws Exception{
	    List<Menu> children = this.getBaseDao().listEntity("MENU.listMenu",ct.getId());
	    if(children.size()>0){
	    	ct.setLeaf(false);
	    	ct.setChildren(children);
	    }else{
	    	ct.setLeaf(true);
	    }
	   
	    for(Menu c:children){
	    	listChildren( c);
	    }
	}
	
	/**
	 * 获取子节点
	 * @param ct
	 * @throws Exception
	 */
	private void listTreeChildren(CommonTrees ct) throws Exception{
	    List<CommonTrees> children = this.getBaseDao().listEntity("CommonTree.listTreeByPid",ct.getId());
	    if(children.size()>0){
	    	ct.setLeaf(false);
	    	ct.setChildren(children);
	    }else{
	    	ct.setLeaf(true);
	    }
	   
	    for(CommonTrees c:children){
	    	listTreeChildren( c);
	    }
	}

	@Override
	public ApiResponse getMenuPermission(String id) throws Exception {
		Map map = new HashMap();
		//主体标识  角色ID
		map.put("principalSn", id);
		//菜单权限
		map.put("permissionType", PermissionConstantUtil.permission_menu);
		
		return this.getOneEntity("MENUPERMISSION.getAccessMenu", map);
	}

	

}
