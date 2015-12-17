package com.bsoft.baseframe.permission.controller;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * 判断用户是否登录过滤器
 * <P>
 * 
 * </P>
 * <P>
 * www.bsoft.com.cn
 * </P>
 * 
 * @author BSoft.Caol
 * @version 0.0.1 2011-6-27 新建
 */
public class LoginFilter implements Filter {
	/**
	 * 上下文环境变量
	 */
	public FilterConfig config;

     public void setFilterConfig(FilterConfig config) {
           this.config = config;
     }

     public FilterConfig getFilterConfig() {
           return config;
     }
     private Logger logger =LoggerFactory.getLogger(LoginFilter.class);
     public void doFilter(ServletRequest request, ServletResponse response,
                 FilterChain chain) throws IOException, ServletException {

           HttpServletRequest httpreq = (HttpServletRequest) request;
           String redirectPath = httpreq.getContextPath()
                   + config.getInitParameter("redirectPath");
           String uri = httpreq.getRequestURI();
          // logger.info(" uri is "+uri);
           //不拦截login
           if(uri.endsWith("login.do")|| uri.endsWith("image.do") || uri.endsWith("per.do")  ){
        	   chain.doFilter(request, response);
        	   return;
           }
           
           HttpServletResponseWrapper wrapper = new HttpServletResponseWrapper(
                       (HttpServletResponse) response);
           Object user= httpreq.getSession().getAttribute("user");
           if(user==null){
           	logger.info("未登录");
           	wrapper.sendRedirect(redirectPath);
           } else {
        	     //用户信息放入ThreadLocal
        	     //ThreadLocalUtil.setUserLocal((Baseuser)user);
                 chain.doFilter(request, response);
           }
     }

     public void destroy() {
           this.config = null;
     }

     public void init(FilterConfig filterConfig) throws ServletException {
           this.config = filterConfig;
     }
}
