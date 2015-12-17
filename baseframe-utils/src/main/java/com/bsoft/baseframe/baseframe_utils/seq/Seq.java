package com.bsoft.baseframe.baseframe_utils.seq;

import java.util.UUID;

/**
 * 获得系统唯一识别码
 * <P>
 * Information Cooperation Platform
 * </P>
 * <P>
 * www.bsoft.com.cn
 * </P>
 * 
 * @author BSoft.Fcy
 * @version 0.0.1 2010-11-16 新建
 */
public class Seq {
    /**
     * 采番初期值
     */
    private final static int START_NUM = 1;
    /**
     * 最后更新时间
     */
    private static long    SeqUpdateTime;
    /**
     * 当前数值
     */
    private static long      curNum    = 0;

    /**
     * 获得数据（全系统内）唯一编码
     * <p>
     * 总长度是13+补充数据定长
     * </p>
     * <p>
     * 基于系统时间
     * </p>
     * 
     * @param length
     *            补充数据定长
     * @return 数据（全系统内）唯一编码
     * @throws Exception
     */
    public static synchronized String getNextID(int length) throws Exception {
    	long nowDateTime = System.currentTimeMillis();
        long oldDateTime = SeqUpdateTime;
        long nowNum = curNum;
        if (nowDateTime!=oldDateTime) {
            nowNum = START_NUM;
            SeqUpdateTime = nowDateTime;
        }
        else {
            nowNum++;
        }
        curNum = nowNum;
        StringBuilder curNumSB = new StringBuilder(23);
        curNumSB.append(nowDateTime);
        curNumSB.append(Utility.complement("" + nowNum, "0", length, true));
        return curNumSB.toString();
    }
    
    /**
     * 生成uuid<BR>
     * @return
     */
	   public static String createUUID()
	   {
		   String s = UUID.randomUUID().toString();
		   String value = s.substring(0,8) + s.substring(9, 13) + s.substring(14, 18) + s.substring(19, 23);//拆分字符串,重新拼成一个新字符串.
		   return value;
	   }

    /**
     * 获得数据（全系统内）唯一编码
     * <p>
     * 总长度是13+补充数据定长
     * </p>
     * <p>
     * 基于系统时间
     * </p>
     * 
     * @param type
     *            前置标识
     * @param length
     *            补充数据定长
     * @return 数据（全系统内）唯一编码
     * @throws Exception
     */
    public static synchronized String getNextID(String type, int length) throws Exception {
        long nowDateTime = System.currentTimeMillis();
        long oldDateTime = SeqUpdateTime;
        long nowNum = curNum;
        if (nowDateTime!=oldDateTime) {
            nowNum = START_NUM;
            SeqUpdateTime = nowDateTime;
        }
        else {
            nowNum++;
        }
        curNum = nowNum;
        StringBuilder curNumSB = new StringBuilder(23);
        curNumSB.append(type);
        curNumSB.append(nowDateTime);
        curNumSB.append(Utility.complement("" + nowNum, "0", length, true));
        return curNumSB.toString();
    }

    /**
     * @param args
     */
    public static void main(String[] args) {

        try {
            for (int i = 0; i < 10; i++) {
            	System.out.println(Seq.getNextID(2));
                System.out.println(Seq.getNextID("",2));
            }
        }
        catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}
