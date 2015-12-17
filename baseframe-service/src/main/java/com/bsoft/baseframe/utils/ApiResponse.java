package com.bsoft.baseframe.utils;

import java.io.Serializable;

public class ApiResponse implements Serializable{
	//api 状态  0  无异常  1 错误  2 session过期
	private int api_code = 0;
	//识别ID  SYS001	 系统异常，未知错误		SYS002 api 异常			
	private String msg_code ;
	//自定义错误提示信息
	private String error_msg;
	//堆栈异常信息
	private String stack_trace;
	//返回对象
	private Object result = new Integer(0);
	//成功标记
	private boolean success =true;
	//分页信息
	private PageModel pageModel = new PageModel();
	
	

	public PageModel getPageModel() {
		return pageModel;
	}
	
	public void setPageModel(PageModel pageModel) {
		this.pageModel = pageModel;
	}

	public ApiResponse() {
		super();
	}
	public ApiResponse(int api_code, String msg_code, String error_msg,
			String stack_trace) {
		super();
		this.api_code = api_code;
		this.msg_code = msg_code;
		this.error_msg = error_msg;
		this.stack_trace = stack_trace;
	}
	public String getStack_trace() {
		return stack_trace;
	}
	public void setStack_trace(String stack_trace) {
		this.stack_trace = stack_trace;
	}
	public int getApi_code() {
		return api_code;
	}
	public void setApi_code(int api_code) {
		this.api_code = api_code;
	}
	public String getMsg_code() {
		return msg_code;
	}
	public void setMsg_code(String msg_code) {
		this.msg_code = msg_code;
	}
	public String getError_msg() {
		return error_msg;
	}
	public void setError_msg(String error_msg) {
		this.error_msg = error_msg;
	}
	public Object getResult() {
		return result;
	}
	public void setResult(Object result) {
		this.result = result;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}


	
	
}
