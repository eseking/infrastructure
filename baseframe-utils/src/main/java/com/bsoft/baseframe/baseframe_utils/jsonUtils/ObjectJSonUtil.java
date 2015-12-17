package com.bsoft.baseframe.baseframe_utils.jsonUtils;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * 处理对象与json的转换
 * @author Administrator
 *
 */
public class ObjectJSonUtil {
     /**
      * 根据Object转换成json(单个对象)
      */
	public static String objectJson(Object obj)
	{
		if(obj==null)
		{
			return "{}";
		}else
		{
			Gson gson = new Gson();
			return gson.toJson(obj);
		}
	}
	/**
	 * 根据json转换成Object(单个对象)
	 */
	public static Object jsonObject(String json,Object obj)
	{
		if(json==null||json.trim().length()<1)
		{
			return obj;
		}else
		{
			 Gson gson = new Gson();
			 obj = gson.fromJson(json, obj.getClass());
			 return obj;
		}
	}
	public static Object jsonObjectFormatDate(String json,Object obj){
		if(json==null||json.trim().length()<1)
		{
			return obj;
		}else
		{
			 Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
			 obj = gson.fromJson(json, obj.getClass());
			 return obj;
		}
	}
	/**
	 * 
	 */
	public static void main(String []args)
	{
/*		EventBean bean = new EventBean();
		bean.setBeanclassname(null);
		String str = objectJson(bean);
		System.out.println(str);*/
		
//		HospitalServletBean hospitalServletBean =  new HospitalServletBean();
//		hospitalServletBean.setGnbh("H2014677");
//		hospitalServletBean.setUsername("111");
//		String str = ObjectJSonUtil.objectJson(hospitalServletBean);
//		System.out.println(str);
//		//str = "{'gnbh':'H2014675','username':'111'}";
//		Gson gson = new Gson();
//		//HospitalServletBean t = gson.fromJson(str,hospitalServletBean);
//		hospitalServletBean = (HospitalServletBean)ObjectJSonUtil.jsonObject(str, hospitalServletBean);
//		System.out.println("222::"+hospitalServletBean.getGnbh());
	}
}
