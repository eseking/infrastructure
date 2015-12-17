package com.bsoft.baseframe.permission.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;



public class SessionInterceptor implements HandlerInterceptor {

    private Logger logger = Logger.getLogger(SessionInterceptor.class.getName());

    @Override
    public boolean preHandle(HttpServletRequest hsr, HttpServletResponse hsr1, Object o) throws Exception {
        Object user= hsr.getSession().getAttribute("user");
        if(user==null){
        	logger.info("未登录");
        	
            hsr1.sendRedirect("loginPage.do");
            return false;
        }
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest hsr, HttpServletResponse hsr1, Object o, ModelAndView mav) throws Exception {
    }

    @Override
    public void afterCompletion(HttpServletRequest hsr, HttpServletResponse hsr1, Object o, Exception excptn) throws Exception {
    }
}
