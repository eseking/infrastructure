package com.bsoft.baseframe.permission.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.bsoft.baseframe.baseframe_utils.seq.Seq;
import com.bsoft.baseframe.entity.base.BaseFrameUser;
import com.bsoft.baseframe.entity.base.Dmzd;
import com.bsoft.baseframe.entity.base.DmzdMx;
import com.bsoft.baseframe.entity.base.Menu;
import com.bsoft.baseframe.entity.base.UsersRoles;
import com.bsoft.baseframe.service.permission.BaseFrameUserService;
import com.bsoft.baseframe.service.permission.MenuService;
import com.bsoft.baseframe.service.permission.PermissionService;
import com.bsoft.baseframe.service.permission.ZdglService;
import com.bsoft.baseframe.utils.ApiResponse;
import com.bsoft.baseframe.utils.PageModel;
import com.google.gson.Gson;


@Controller
public class PermissionController {
	@Resource
	private PermissionService permissionService;
	
	@Resource
	private MenuService menuService;
	 
	@Resource
	private BaseFrameUserService baseFrameUserService;
	
	@Resource
	private ZdglService zdglService;
	//跳转
	//forward.do?view=jgzhpj-index&pid=90
	@RequestMapping(value="forward.do") 
	public ModelAndView login(HttpServletRequest request){
		ApiResponse api = new ApiResponse();
		ModelAndView modelAndView = new ModelAndView();
		try {
			String view =request.getParameter("view");
			String pid = request.getParameter("pid");
			//String name = request.getParameter("");
			//List list =baseFrameService.getBaseDao().listEntity("CELLTEMPLATE.listAllTemplate");
			//modelAndView.addObject("list",list);
			BaseFrameUser user =(BaseFrameUser)request.getSession().getAttribute("user");
			List list = permissionService.getAccessMenu(user.getId(),pid);
			modelAndView.addObject("menuList",list);
			String []views=view.split("-");
			modelAndView.setViewName("/"+views[0]+"/"+views[1]);
		}catch (Exception e) {
			api.setApi_code(1);
			e.printStackTrace();
		}
		return modelAndView;
	}
	
	@RequestMapping(value="per.do") 
	public ModelAndView per(HttpServletRequest request){
		ModelAndView modelAndView = new ModelAndView();
		try {
			
			modelAndView.setViewName("/permission");
		}catch (Exception e) {
			e.printStackTrace();
		}
		return modelAndView;
	//	return "redirect:permission.jsp";
	}
	
	//后台目录树
		@RequestMapping(value="getViewTree.do") 
		@ResponseBody
		public ApiResponse getViewTree(HttpServletRequest request){
			ApiResponse api = new ApiResponse();
			try {
			String pid =request.getParameter("pid");
			List list =	permissionService.getAllTree(pid);
			api.setPageModel(new PageModel(list,list.size()));
			}catch (Exception e) {
				api.setApi_code(1);
				e.printStackTrace();
			}
			return api;
		}
		
		
		//增加菜单
		@RequestMapping(value="addMenu.do") 
		@ResponseBody
		public ApiResponse addMenu(HttpServletRequest request){
			ApiResponse api = new ApiResponse();
			try {
			String pid =request.getParameter("pid");
			String name =request.getParameter("name");
			String url =request.getParameter("url");
			String orderIndex =request.getParameter("orderIndex");
			Menu m = new Menu();
			m.setId(Seq.createUUID());
			m.setPid(pid);
			m.setName(name);
			m.setExt1(url);
			if(StringUtils.isNotEmpty(orderIndex)){
				Integer index =Integer.parseInt(orderIndex);
				m.setOrderIndex(index);
			}
			return menuService.addMenu(m);	
			}catch (Exception e) {
				api.setApi_code(1);
				e.printStackTrace();
			}
			return api;
		}
		
		//删除菜单
		@RequestMapping(value="delMenu.do") 
		@ResponseBody
		public ApiResponse delMenu(HttpServletRequest request){
			ApiResponse api = new ApiResponse();
			try {
			String id =request.getParameter("id");
			return menuService.delMenu(id);
			
			}catch (Exception e) {
				api.setApi_code(1);
				e.printStackTrace();
			}
			return api;
		}
		//修改菜单
		@RequestMapping(value="updateMenu.do")
		@ResponseBody
		public ApiResponse updateUser(HttpServletRequest request){
			ApiResponse api=new ApiResponse();
			try {
					Gson gson=new Gson();
					String formDatas=request.getParameter("formDatas");
					JSONObject jo = new JSONObject(formDatas);
					String id=jo.getString("id");
					String pid=jo.getString("pid");
					String name=jo.getString("name");
					String ext1=jo.getString("ext1");
					String orderIndex=jo.getString("orderIndex");
					Menu m = new Menu();
					m.setId(id);
					m.setPid(pid);
					m.setName(name);
					m.setExt1(ext1);
					if(StringUtils.isNotEmpty(orderIndex)){
						Integer index =Integer.parseInt(orderIndex);
						m.setOrderIndex(index);
					}
					return menuService.updateMenu(m);
					//return menuService.updateEntity("MENU.updateMenu", m);
				} catch (Exception e) {
					api.setApi_code(1);
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			    return api;
		}
		//保存菜单权限
		@RequestMapping(value="addMenuPermission.do") 
		@ResponseBody
		public ApiResponse addMenuPermission(HttpServletRequest request){
			ApiResponse api = new ApiResponse();
			try {
			String formDatas =request.getParameter("formDatas");
			
			JSONObject jo=new JSONObject(formDatas);
			String id = jo.getString("roleId");
			
			String accessMenu = jo.getString("accessMenu");
			//主体类型 1 用户 2 角色
			String type = jo.getString("type");
			api = permissionService.addMenuPermission(id,type, accessMenu);
			}catch (Exception e) {
				api.setApi_code(1);
				e.printStackTrace();
			}
			return api;
		}
		
		
		//获取菜单权限
		@RequestMapping(value="getMenuPermission.do") 
		@ResponseBody
		public ApiResponse getMenuPermission(HttpServletRequest request){
			ApiResponse api = new ApiResponse();
			try {
			String roleId =request.getParameter("roleId");
			api = permissionService.getMenuPermission(roleId);
			}catch (Exception e) {
				api.setApi_code(1);
				e.printStackTrace();
			}
			return api;
		}
		
		
		//获取菜单权限
		@RequestMapping(value="getIndexPermission.do") 
		@ResponseBody
		public ApiResponse getIndexPermission(HttpServletRequest request){
			ApiResponse api = new ApiResponse();
			try {
			BaseFrameUser user =(BaseFrameUser)request.getSession().getAttribute("user");
			//获取用户对应的角色
			Object o =permissionService.getUserRole(user.getId());
			if(o!=null){
				UsersRoles ur =(UsersRoles)o;
				String roleId =ur.getRoleId();
				api = permissionService.getMenuPermission(roleId);
			}else{
				return api;
			}
			}catch (Exception e) {
				api.setApi_code(1);
				e.printStackTrace();
			}
			return api;
		}
		
		@RequestMapping(value="getALLMenu.do") 
		@ResponseBody
		public ApiResponse getALLMenu(HttpServletRequest request){
			ApiResponse api = new ApiResponse();
			try {
			//String pid =request.getParameter("pid");
			List list =	permissionService.getAllMenu(null);
			api.setPageModel(new PageModel(list,list.size()));
			}catch (Exception e) {
				api.setApi_code(1);
				e.printStackTrace();
			}
			return api;
		}
	 
		
		@RequestMapping(value="listRole.do") 
		@ResponseBody
		public ApiResponse listRole(HttpServletRequest request){
			ApiResponse api = new ApiResponse();
			try {
				Map map = new HashMap();
				String page =request.getParameter("page");
				String start =request.getParameter("start");
				String limit =request.getParameter("limit");
				String condition = request.getParameter("condition");
				if(StringUtils.isNotEmpty(condition)){
					JSONObject searchCondition=new JSONObject(condition);
					map.put("name", searchCondition.getString("name"));
				}
				//组装分页参数
				if(StringUtils.isNotEmpty(page)&&StringUtils.isNotEmpty(limit)&&StringUtils.isNotEmpty(start)){
					map.put("startNum", new Integer(start));
					map.put("endNum", new Integer(page)*new Integer(limit));
				}
				api =permissionService.listEntityByPage("BASEROLE.listBaseRole", "BASEROLE.queryCount", map);
			}catch (Exception e) {
				api.setApi_code(1);
				e.printStackTrace();
			}
			return api;
		}
		//查询菜单
				@RequestMapping(value="getMenu.do") 
				@ResponseBody
				public ApiResponse getMenu(HttpServletRequest request){
					ApiResponse api = new ApiResponse();
					try {
					String id =request.getParameter("id");
					return menuService.getOneEntity("MENU.getOneMenu", id);
					}catch (Exception e) {
						api.setApi_code(1);
						e.printStackTrace();
					}
					return api;
				}
		//查询所有
				@RequestMapping(value="listUser.do") 
				@ResponseBody
				public ApiResponse listUser(HttpServletRequest request){
					ApiResponse api = new ApiResponse();
					try {
						Map map = new HashMap();
						String page =request.getParameter("page");
						String start =request.getParameter("start");
						String limit =request.getParameter("limit");
						String condition = request.getParameter("condition");
						if(StringUtils.isNotEmpty(condition)){
							JSONObject searchCondition=new JSONObject(condition);
							map.put("name", searchCondition.getString("name"));
						}
						//组装分页参数
						if(StringUtils.isNotEmpty(page)&&StringUtils.isNotEmpty(limit)&&StringUtils.isNotEmpty(start)){
							map.put("startNum", new Integer(start));
							map.put("endNum", new Integer(page)*new Integer(limit));
						}
						api =baseFrameUserService.listEntityByPage("BASEFRAMEUSER.listBaseFrameUser", "BASEFRAMEUSER.queryCount", map);
					}catch (Exception e) {
						api.setApi_code(1);
						e.printStackTrace();
					}
					return api;
				}
				//查询字典所有
				@RequestMapping(value="listZdgl.do") 
				@ResponseBody
				public ApiResponse listZdgl(HttpServletRequest request){
					ApiResponse api = new ApiResponse();
					try {
						Map map = new HashMap();
						String page =request.getParameter("page");
						String start =request.getParameter("start");
						String limit =request.getParameter("limit");
						String condition = request.getParameter("condition");
						if(StringUtils.isNotEmpty(condition)){
							JSONObject searchCondition=new JSONObject(condition);
							map.put("name", searchCondition.getString("name"));
						}
						//组装分页参数
						if(StringUtils.isNotEmpty(page)&&StringUtils.isNotEmpty(limit)&&StringUtils.isNotEmpty(start)){
							map.put("startNum", new Integer(start));
							map.put("endNum", new Integer(page)*new Integer(limit));
						}
						 api=zdglService.listEntityByPage("ZDGL.queryDmzd", "ZDGL.countDmzd", map);
					}catch (Exception e) {
						api.setApi_code(1);
						e.printStackTrace();
					}
					return api;
				}
				//查询出社区与银行
				@RequestMapping(value="listLimits.do") 
				@ResponseBody
				public ApiResponse listLimits(String ext1) throws Exception {
					ApiResponse api = new ApiResponse();
					List<Dmzd> list = null;
					Map map = new HashMap();
					map.put("ext1", ext1);
					try {
						list=baseFrameUserService.getBaseDao().listEntity("ZDGL.getDmzdLimits", map);
					} catch (Exception e) {
						e.printStackTrace();
					}
					api.setResult(list);
					return api;
				}
				//根据typecode1查询出社区以及编码
				@RequestMapping(value="getTypecode1Limits.do") 
				@ResponseBody
				public ApiResponse getTypecode1Limits(String typecode1) throws Exception{
					ApiResponse api = new ApiResponse();
					List<DmzdMx> list = null;
					Map map = new HashMap();
					map.put("typecode1", typecode1);
					try {
					list=baseFrameUserService.getBaseDao().listEntity("ZDGL.getTypecode1Limit",map);
					}catch (Exception e) {
						e.printStackTrace();
					}
					api.setResult(list);
					return api;
				}
}
