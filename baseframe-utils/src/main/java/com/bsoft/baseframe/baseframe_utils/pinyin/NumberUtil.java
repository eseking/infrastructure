package com.bsoft.baseframe.baseframe_utils.pinyin;

import java.math.BigDecimal;
import java.text.DecimalFormat;

public class NumberUtil {

	private static DecimalFormat numformat = new DecimalFormat("0");
	
	public static String formatNumber(BigDecimal num, int precision){
		StringBuffer style = new StringBuffer("0");
		if(precision > 0){
			style.append(".");
			for(int i=0; i<precision; i++){
				style.append("0");
			}
		}
		numformat.applyPattern(style.toString());
		return numformat.format(num.doubleValue());
	}
	
	public static String formatNumber(double num, int precision){
		StringBuffer style = new StringBuffer("0");
		if(precision > 0){
			style.append(".");
			for(int i=0; i<precision; i++){
				style.append("0");
			}
		}
		numformat.applyPattern(style.toString());
		return numformat.format(num);
	}
}
