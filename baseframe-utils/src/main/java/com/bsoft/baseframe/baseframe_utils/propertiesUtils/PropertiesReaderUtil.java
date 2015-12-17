package com.bsoft.baseframe.baseframe_utils.propertiesUtils;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Properties;
import java.util.Set;

/**
 * 
 * 读取配置文件 单例工具类
 *
 * @version 	1.0 Mar 11, 2013
 * @author		caol
 * @history	
 *
 */
public class PropertiesReaderUtil {
	/**
	 * 
	 * 静态内部类
	 *
	 * @version 	1.0 Mar 11, 2013
	 * @author		caol
	 * @history	
	 *
	 */
	private static class PropertiesReaderHolder{
		 private static final PropertiesReaderUtil INSTANCE = new PropertiesReaderUtil();  
    } 
	/**
	 * 构造函数
	 */	
	private PropertiesReaderUtil (){
		this.propMap= new HashMap<String, String>();
	}  
	/**
	 * 获取实例
	 * @return
	 */
	public static final PropertiesReaderUtil getInstance() {  
	    return PropertiesReaderHolder.INSTANCE;  
	}  
	/**
	 * 存放key value 的MAP
	 */
	private static HashMap<String, String> propMap;
	/**
	 * 从配置文件获取Value 值
	 * @param config_file
	 * @param key
	 * @return
	 */
	private String loadProperties(String config_file, String key) {
        String result = null;
        InputStream is = null;
        try {
            Properties prop = new Properties();
            is = PropertiesReaderUtil.class.getClassLoader().getResourceAsStream(config_file);
            if(is == null){
             is = new FileInputStream(config_file);
            }
            prop.load(is);
            result = prop.getProperty(key);
            propMap.put(key,result); 
        } catch (Exception e) {
        	e.printStackTrace();
        }finally{
          if(is!=null){
           try
                    {
                        is.close();
                    }
                    catch (IOException e)
                    {
                        e.printStackTrace();
                    }
          }    
        }
        return result;
    }
	
	/**
	 * 第一次加载时 把所有配置项加载到MAP中
	 * 在系统启动时加载需要的配置文件
	 * @param config_file
	 */
	public void loadAllProperties(String config_file) {
        String result = null;
        InputStream is = null;
     // 替换空格产生的%20
        config_file = config_file.replace("%20", " ");
        try {
            Properties prop = new Properties();
            is = PropertiesReaderUtil.class.getClassLoader().getResourceAsStream(config_file);
            if(is == null){
             is = new FileInputStream(config_file);
            }
            prop.load(is);
            //放入MAP中
            Set keyset = prop.keySet(); 
            for (Object object : keyset) { 
            String propValue= prop.getProperty(object.toString()).toString(); 
            propMap.put(object.toString(), prop.getProperty(object.toString()).toString()); 
            } 
        } catch (Exception e) {
        	e.printStackTrace();
        }finally{
          if(is!=null){
           try
                    {
                        is.close();
                    }
                    catch (IOException e)
                    {
                        e.printStackTrace();
                    }
          }    
        }
    }
	/**
	 * 从配置文件获取key 值
	 * @param config_file
	 * @param key
	 * @return
	 */
	 public String getProperties(String config_file, String key) {
		 	// 替换空格产生的%20
	        config_file = config_file.replace("%20", " ");
	        if (propMap.containsKey(key) == false) {
	        	loadProperties(config_file, key);
	        }
	        return (String) propMap.get(key);
	    }
	

}
