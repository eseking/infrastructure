package com.bsoft.baseframe.service.permission.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import net.sf.ehcache.Cache;
import net.sf.ehcache.Element;

import org.json.JSONArray;
import org.json.JSONObject;

import com.bsoft.baseframe.baseframe_service.BaseFrameServiceImpl;
import com.bsoft.baseframe.baseframe_utils.jsonUtils.ObjectJSonUtil;
import com.bsoft.baseframe.baseframe_utils.pinyin.format.HanyuPinyinOutputFormat;
import com.bsoft.baseframe.baseframe_utils.seq.Seq;
import com.bsoft.baseframe.entity.base.ConstantUtil;
import com.bsoft.baseframe.entity.base.Dmzd;
import com.bsoft.baseframe.entity.base.DmzdMx;
import com.bsoft.baseframe.entity.base.OperPermission;
import com.bsoft.baseframe.exception.BusinessException;
import com.bsoft.baseframe.exception.DBException;
import com.bsoft.baseframe.service.permission.BaseFrameUserService;
import com.bsoft.baseframe.service.permission.ZdglService;
import com.bsoft.baseframe.utils.ApiResponse;


/**
 * 字典管理实现类  对所有数据字典进行增删改查的操作
 * @author 
 *
 */
public class ZdglServiceImpl extends BaseFrameServiceImpl implements ZdglService {
	private Cache cache;
	public Cache getCache() {
		return cache;
	}
	public void setCache(Cache cache) {
		this.cache = cache;
	}

	@Resource
	private BaseFrameUserService baseFrameUserService;
	
	@Resource
	private ZdglService zdglService;
	
	/*
	 * 根据typecode1获取全部信息
	 * @see com.bsoft.baseframe.service.permission.ZdglService#getDmzdmx(java.lang.String)
	 */
	@Override
	public ApiResponse getDmzdmx(String typecode1) throws BusinessException {
		ApiResponse api = new ApiResponse();
		List<DmzdMx> list = null;
		Map map = new HashMap();
		map.put("typecode1", typecode1);
		try {
			list=baseFrameUserService.getBaseDao().listEntity("ZDGL.getDmzdMx", map);
		} catch (DBException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		// 把list转化成json格式
//		sqListJson = .objectJson(list);
		api.setResult(list);
		return api;
	}
    /*
     * 新增
     * @see com.bsoft.baseframe.service.permission.ZdglService#addDmzdmx(java.lang.String, java.lang.String, java.lang.String, java.lang.String)
     */
	@Override
	public ApiResponse addDmzdmx(String json, String sqCode, String sqName,String sqCid) throws Exception {
		ApiResponse api = new ApiResponse();
		DmzdMx dmzdMx = null;
		Dmzd dmzd = new Dmzd();
		Map map = new HashMap();
		dmzd.setTypecode1(sqCode);
		dmzd.setTypename(sqName);
		dmzd.setCid(sqCid);
		List<DmzdMx> listMx = new ArrayList();
		JSONArray jo;
		jo = new JSONArray(json);
		//拼音码
		
		HanyuPinyinOutputFormat format = new HanyuPinyinOutputFormat();
		
		for (int i = 0; i < jo.length(); i++) {
			JSONObject o = jo.getJSONObject(i);
			dmzdMx = (DmzdMx) new ObjectJSonUtil().jsonObject(o.toString(),new DmzdMx());
			dmzdMx.setTypecode1(sqCode);// 必须的
			if(dmzdMx.getTypename() != null && !"".equals(dmzdMx.getTypename()))
				//dmzdMx.setPym(PinyinHelper.toHanyuPinyinString(dmzdMx.getTypename(), format, ""));
			listMx.add(dmzdMx);
		}
		map.put("typecode1", sqCode);
		if(sqName != null && !"".equals(sqName))
			//dmzd.setPym(PinyinHelper.toHanyuPinyinString(sqName, format, ""));
			baseFrameUserService.getBaseDao().addEntity("ZDGL.addDmzd",dmzd);
		for (int j = 0; j < listMx.size(); j++) {
			baseFrameUserService.getBaseDao().addEntity("ZDGL.addDmzdMX",listMx.get(j));
		}
		//更新缓存
		//更新数据字典类别
		updateDicType();
		//更新字典明细
		updateDicByType(sqCode);
		return api;
	}

	/*
	 * 更新字典类别
	 */
	private  void updateDicType() throws Exception {
		List listAlldic=baseFrameUserService.getBaseDao().listEntity("ZDGL.listAlldic");
		if(listAlldic.size()>0){
			Element element = new Element(ConstantUtil.SJZD_AllDicType,listAlldic);
			cache.put(element);
		}
	}
	/**
	 * 更新字典明细
	 * @throws Exception
	 */
	private  void updateDicByType(String type) throws Exception {
		if(cache.get(ConstantUtil.SJZD_AllDicDetail)!=null){
			Element e=(Element)cache.get(ConstantUtil.SJZD_AllDicDetail);
			Map mxCombobox = (Map)e.getValue();
			List list=baseFrameUserService.getBaseDao().listEntity("ZDGL.listMxByType", type);
			mxCombobox.put(type, list);
		}
	
	}
	/*
	 * 修改
	 * @see com.bsoft.baseframe.service.permission.ZdglService#updateDmzdmx(java.lang.String, java.lang.String, java.lang.String, java.lang.String)
	 */
	@Override
	public ApiResponse updateDmzdmx(String json, String sqCode, String sqNmae,String sqCid) throws Exception {
		ApiResponse api = new ApiResponse();
		DmzdMx dmzdMx = null;
		Map map = new HashMap();
		List<DmzdMx> listMx = new ArrayList();
		JSONArray jo;
		jo = new JSONArray(json);
		//拼音码
		HanyuPinyinOutputFormat format = new HanyuPinyinOutputFormat();
		
		for (int i = 0; i < jo.length(); i++) {
			JSONObject o = jo.getJSONObject(i);
			dmzdMx = (DmzdMx) new ObjectJSonUtil().jsonObject(o.toString(),new DmzdMx());
			dmzdMx.setTypecode1(sqCode);
			if(dmzdMx.getTypename() != null && !"".equals(dmzdMx.getTypename()))
				//dmzdMx.setPym(PinyinHelper.toHanyuPinyinString(dmzdMx.getTypename(), format, ""));
			listMx.add(dmzdMx);
		}
		map.put("typecode1", sqCode);
		baseFrameUserService.getBaseDao().delEntity("ZDGL.deleteDmzdMX", map);// 先删除
		for (int j = 0; j < listMx.size(); j++) {// 再插入
			baseFrameUserService.getBaseDao().addEntity("ZDGL.addDmzdMX", listMx.get(j));
		}
		//更新缓存
		//更新字典明细
		updateDicByType(sqCode);
		return api;
	}
	/*
	 * 控制字典编码的大小
	 * @see com.bsoft.baseframe.service.permission.ZdglService#generateTypecode1()
	 */
	@Override
	public ApiResponse generateTypecode1() throws Exception {
		ApiResponse api = new ApiResponse();
		String countString=(String)baseFrameUserService.getBaseDao().getOneEntity("ZDGL.generateTypecode1", null);
		int i = Integer.parseInt(countString);
		i++;
		countString = String.valueOf(i);
		api.setMsg_code(countString);
		return api;
	}
	/*
	 * 删除字典表以及字典明细表
	 * @see com.bsoft.baseframe.service.permission.ZdglService#deleteDmzd(java.util.Map)
	 */
	@Override
	public ApiResponse deleteDmzd(Map map) throws Exception {
		ApiResponse api = new ApiResponse();
		//删除字典明细
		baseFrameUserService.getBaseDao().delEntity("ZDGL.deleteDmzdMX", map);
		//删除字典类别
		baseFrameUserService.getBaseDao().delEntity("ZDGL.deleteDmzdType", map);
		//更新缓存
		//更新数据字典类别
		updateDicType();
		//更新字典明细
		updateDicByType(map.get("typecode1").toString());
		return new ApiResponse();
	}
	//根据typename来查询所有详细信息
	public ApiResponse getNameZdgl(String querystr,String countstr,Map map)throws Exception{
		ApiResponse api = new ApiResponse();
		try {
			api=zdglService.listEntityByPage("ZDGL.queryDmzd", "ZDGL.countDmzd", map);
		} catch (Exception e) {
			api.setApi_code(1);
			e.printStackTrace();
		}
		return api;
	}
	 //查询社区下拉列表框
	@Override
	public LinkedHashMap<String, Object> getDmzdmxSqTypecode1(String typecode1)throws Exception {
		Map<String,Object> map=new HashMap<String,Object>();
		map.put("typecode1",typecode1);
		List<DmzdMx > list = baseFrameUserService.getBaseDao().listEntity("ZDGL.getDmzdMXBySQ", map);
		LinkedHashMap<String,Object> m = new LinkedHashMap<String,Object>();
		for(DmzdMx  p:list){	
			m.put(p.getTypecode2(), p.getTypename());
		}
		return  m;
	}
	//查询银行下拉列表框
	@Override
	public LinkedHashMap<String, Object> getDmzdmxYhTypecode1(String typecode1)throws Exception {
		Map<String,Object> map=new HashMap<String,Object>();
		map.put("typecode1",typecode1);
		List<DmzdMx> list=baseFrameUserService.getBaseDao().listEntity("ZDGL.getDmzdMXByYH", map);
		LinkedHashMap<String,Object> m=new LinkedHashMap<String,Object>();
		for(DmzdMx p:list){
			m.put(p.getTypecode2(), p.getTypename());
		}
		return m;
	}
	//当点击保存按钮时会先根据穿过来的roleId去数据库里面查询一下看是否能查到对应的permissionType,如果能够查出来代表数据本身是存在的就进行更新操作，否则就进行新增操作
	@Override
	public ApiResponse addOperPermission(String roleId,String permissionType) throws Exception{
		ApiResponse api = new ApiResponse();
		try {
			OperPermission oper=new OperPermission();
			oper.setId(Seq.createUUID());
			oper.setRoleId(roleId);
			oper.setPermissionType(permissionType);
			OperPermission operPermission=null;
			Map map=new HashMap();
			map.put("roleId", roleId);
			map.put("permissionType", permissionType);
			operPermission=(OperPermission) baseFrameUserService.getBaseDao().getOneEntity("OperPermission.getCheckOperPermission",map);
			if(operPermission!=null){
				String perss=operPermission.getPermissionType();
				baseFrameUserService.updateEntity("OperPermission.updateOperPermission", oper);
			}else{
				baseFrameUserService.addEntity("OperPermission.addOperPermission",oper);
			}
		} catch (BusinessException e) {
			api.setApi_code(1);
			e.printStackTrace();
		}
		return api;
	}
	//查询出permissionType并拆分
	@Override
	public ApiResponse getCheckOperPermission(String roleId) throws Exception {
		ApiResponse api = new ApiResponse();
		OperPermission operPermission=null;
		Map map = new HashMap();
		map.put("roleId", roleId);
			try {
				operPermission=(OperPermission) baseFrameUserService.getBaseDao().getOneEntity("OperPermission.getCheckOperPermission",map);
				String permissionType=operPermission.getPermissionType();
				api.setResult(permissionType);
			} catch (DBException e) {
				e.printStackTrace();
			}
		return api;
		
	}
	/*@Override
	public ApiResponse addOperPermission(String roleId,String permissionType) throws Exception{
		ApiResponse api = new ApiResponse();
		try {
			OperPermission oper=new OperPermission();
			oper.setId(Seq.createUUID());
			oper.setRoleId(roleId);
			oper.setPermissionType(permissionType);
			baseFrameUserService.addEntity("OperPermission.addOperPermission",oper);
		} catch (BusinessException e) {
			api.setApi_code(1);
			e.printStackTrace();
		}
		return api;
	}*/
}
