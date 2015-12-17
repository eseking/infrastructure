package com.bsoft.baseframe.baseframe_utils.seq;

import java.util.StringTokenizer;

/**
 * <p>
 * 各种转换方法
 * </p>
 * <b>JMGS - Java Manager Game Server</b>
 * <p>
 * &nbsp;&nbsp;&nbsp;&nbsp;Www.1SHome.Cn
 * </p>
 * 
 * @author 梦界家园（ISHome.FCY)
 * @version 0.0.1
 */

@SuppressWarnings("unchecked")
public class Utility {

    /**
     * 补完
     * 
     * @param oldString
     *            原始内容
     * @param fillString
     *            填充内容
     * @param length
     *            保持长度
     * @param after
     * @return
     */
    public static String complement(String oldString, String fillString, int length, boolean after) {
        if (oldString.length() >= length) {
            return oldString.substring(0, length);
        }
        StringBuffer ret = new StringBuffer();
        if (after == false) {
            ret.append(oldString);
            while (ret.length() < length) {
                ret.append(fillString);
            }
        }
        else {
            while ((ret.length() + oldString.length()) < length) {
                ret.append(fillString);
            }
            ret.append(oldString);
        }
        return "" + ret;
    }


    public static String setconvIPAddress(String ip) {
        try {
            StringBuffer fixlenip = new StringBuffer();
            StringBuffer zero = new StringBuffer("000");
            StringTokenizer st = new StringTokenizer(ip, ".");
            for (int i = 0; st.hasMoreTokens();) {
                zero.delete(0, zero.length());
                zero.append("000");
                String dec = st.nextToken();
                zero.replace(zero.length() - dec.length(), zero.length(), dec);
                fixlenip.append(zero.toString());
                fixlenip.append(".");
                i++;
            }
            fixlenip.deleteCharAt(fixlenip.length() - 1);
            return fixlenip.toString();
        }
        catch (Exception ex) {
            return "000.000.000.000";
        }
    }

}
