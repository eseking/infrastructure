package com.bsoft.baseframe.baseframe_utils.threadlocal;




/**
 * ThreadLocal  线程安全类
 * 以当前线程实例 为KEY值  存入自定义对象
 * @author Administrator
 *
 */
public class ThreadLocalUtil {

	private static ThreadLocal<Object> userLocal = new ThreadLocal<Object>();
	
	private static ThreadLocal<Object> customLocal = new ThreadLocal<Object>();
	
	private static ThreadLocal<Object> myLocal = new ThreadLocal<Object>();
	
	public static Object getMyLocal() {
		return myLocal.get();
	}
	public static void setMyLocal(Object value) {
		myLocal.set(value);
	}
	/**
	 * 获取当前用户
	 * @return
	 */
	public static Object getUserLocal() {
		  return userLocal.get();
	}
	/**
	 * 放入当前用户
	 * @param user
	 */
	public static void setUserLocal(Object user) {
		userLocal.set(user);
	}
	/**
	 * 获取ThreadLocal中的对象
	 * @return
	 */
	public static Object getCustomLocal() {
		return customLocal.get();
	}
	/**
	 * 把对象放入ThreadLocal中
	 * @param value
	 */
	public static void setCustomLocal(Object value) {
		customLocal.set(value);
	}
	
}

