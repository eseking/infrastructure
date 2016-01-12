package com.soft.baseframe.utils;

import java.io.Serializable;
import java.util.List;


public class PageModel implements Serializable{
	
	private List datas;
	
	private Integer count;
	
	public List getDatas() {
		return datas;
	}
	
	public void setDatas(List datas) {
		this.datas = datas;
	}
	
	public Integer getCount() {
		return count;
	}
	
	public void setCount(Integer count) {
		this.count = count;
	}

	public PageModel(List datas, Integer count) {
		super();
		this.datas = datas;
		this.count = count;
	}

	public PageModel() {
		super();
	}
	
}
