package com.bsoft.baseframe.service.permission;


import java.util.LinkedHashMap;
import java.util.Map;
import com.bsoft.baseframe.baseframe_service.BaseFrameService;
import com.bsoft.baseframe.exception.BusinessException;
import com.bsoft.baseframe.utils.ApiResponse;

public interface ZdglService extends BaseFrameService {
	
	public ApiResponse getDmzdmx(String typecode1) throws BusinessException;
	//增加
	public ApiResponse addDmzdmx(String json,String sqCode,String sqNmae,String sqCid) throws Exception;
	//修改
	public ApiResponse updateDmzdmx(String json,String sqCode,String sqNmae,String sqCid) throws Exception;
	//控制字典编码的大小
	public ApiResponse generateTypecode1() throws Exception;
	//删除
	public ApiResponse deleteDmzd(Map map) throws Exception;
	//查询
	public ApiResponse getNameZdgl(String querystr,String countstr,Map map) throws Exception;
	
	 //查询社区下拉列表框
	public LinkedHashMap<String,Object> getDmzdmxSqTypecode1(String typecode1) throws Exception;
	
	//查询银行下拉列表框
	public LinkedHashMap<String,Object> getDmzdmxYhTypecode1(String typecode1) throws Exception;
	
	//往用户权限表中添加一条数据
	public ApiResponse addOperPermission(String roleId,String permissionType) throws Exception;
	
	//根据roleId查询到permissionType,根据typecode1来区分开数组
	public ApiResponse getCheckOperPermission(String roleId) throws Exception;
}
