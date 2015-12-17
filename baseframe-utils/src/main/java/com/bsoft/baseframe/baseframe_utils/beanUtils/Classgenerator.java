/*
 * @(#)Classgenerator.java        1.0 2013-4-7
 *
 * Copyright (c) 2007-2013 Shanghai BSOFT IT, Co., Ltd.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of 
 * Shanghai BSFOT IT Co., Ltd. ("Confidential Information").  
 * You shall not disclose such Confidential Information and shall use 
 * it only in accordance with the terms of the license agreement you 
 * entered into with BSOFT.
 */

package com.bsoft.baseframe.baseframe_utils.beanUtils;

import java.awt.BorderLayout;
import java.awt.EventQueue;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextField;

import org.apache.commons.lang.StringUtils;

/**
 * 类生成器
 *
 * @version 	1.0 2013-4-7
 * @author		caie
 * @history	
 *		
 */
public class Classgenerator extends JFrame{
	
	private static final long serialVersionUID = 8101820900910920111L;
	/**宽*/
	private static final int WIDTH=400;
	/**高*/
	private static final int HEIGHT = 300;
	/**验证消息显示*/
	private static String msg = "";
	/**表结构名*/
	private JTextField _tb = null;
	/**实体包名*/
	private JTextField _stb = null;
	/**ibatis包名*/
	private JTextField _ibatis = null;
	/**service包名*/
	private JTextField _sv = null;
//	private JTextField _zwmc=null;	//中文名称，留待以后扩展用
	
	/**
	 * 初始化面板
	 */
	public Classgenerator(){
		setTitle("生成器");
		setSize(WIDTH, HEIGHT);
		setLocationRelativeTo(null);
		
		JPanel panel =new JPanel();
		panel.setLayout(new GridLayout(2, 1));
		
		JPanel _beanPanel = new JPanel();
		_beanPanel.setBorder(BorderFactory.createTitledBorder("实体生成"));
		
		JPanel _otherPanel = new JPanel();
		_otherPanel.setBorder(BorderFactory.createTitledBorder("其他文件生成"));
		
		JLabel _tbLabel = new JLabel("表结构名*：");
		_tb = new JTextField(25);
		_beanPanel.add(_tbLabel);
		_beanPanel.add(_tb);
		
		JLabel _stbbLabel = new JLabel("实体包名*：");
		_stb = new JTextField(25);
		_beanPanel.add(_stbbLabel);
		_beanPanel.add(_stb);
		
		JLabel _ibatisLabel = new JLabel("IBTS路径*：");
		_ibatis = new JTextField(25);
		_beanPanel.add(_ibatisLabel);
		_beanPanel.add(_ibatis);
		
		JLabel _svLabel = new JLabel("SERVICE路径：");
		_sv = new JTextField(23);
		_otherPanel.add(_svLabel);
		_otherPanel.add(_sv);
		
//		JLabel _sviLabel = new JLabel("中文名称*：");
//		_zwmc = new JTextField("未启用",25);
//		_zwmc.setEditable(false);
//		_otherPanel.add(_sviLabel);
//		_otherPanel.add(_zwmc);
		
		JLabel _detail = new JLabel("(注意：相应实体的Service和Service实现类所在包，可不填写,");
		JLabel _detail2 = new JLabel("实现类报名会自动在Service包名后加.impl。)");
		_detail.setFont(new Font("", Font.ITALIC, 12));
		_detail2.setFont(new Font("", Font.ITALIC, 12));
		_otherPanel.add(_detail);
		_otherPanel.add(_detail2);
		panel.add(_beanPanel);
		panel.add(_otherPanel);
		
		add(panel, BorderLayout.CENTER);
		
		JPanel btnPanel = new JPanel();
		JButton _saveBtn = new JButton("保存");
		
		_saveBtn.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				int msg_code = clickSaveBtn(e);
				showMsg(msg_code);
			}
		});
		
		JButton _restBtn = new JButton("重置");
		
		//添加重置事件
		_restBtn.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				_tb.setText(null);
				_stb.setText(null);
				_ibatis.setText(null);
				_sv.setText(null);
//				_svi.setText(null);
			}
		});
		btnPanel.add(_saveBtn);
		btnPanel.add(_restBtn);
		add(btnPanel, BorderLayout.SOUTH);
	} 
	
	/**
	 * 验证表单
	 * @return 是否成功标志
	 */
	private boolean validateText(){
		String tbName = _tb.getText().trim(),
			stPath = _stb.getText().trim(),
			ibtsPath = _ibatis.getText().trim();
		if(StringUtils.isBlank(tbName)){
			msg = "表结构名不能为空";
			_tb.requestFocus();
			return false;
		}
		
		if(StringUtils.isBlank(stPath)){
			msg = "实体路径不能为空";
			_stb.requestFocus();
			return false;
		}
		
		if(StringUtils.isBlank(ibtsPath)){
			msg = "ibatis包路径不能为空";
			_ibatis.requestFocus();
			return false;
		}
		
		return true;
	}
	
	/**
	 * 保存相应时间
	 * @param e 时间
	 * @return 返回int
	 */
	private int clickSaveBtn(ActionEvent e){
		
		int msg_code = 0;
		//验证
		if(!validateText()){
			JOptionPane.showMessageDialog(this, msg, "警告", JOptionPane.WARNING_MESSAGE);
			return msg_code;
		}
		
		String tbName = _tb.getText().trim(),
			stPath = _stb.getText().trim(),
			ibtsPath = _ibatis.getText().trim(),
			svcPath = _sv.getText().trim();
		
		//生成实体bean
		String filePath = FileUtils.getFilePathName(tbName, stPath);
		CreateBeanFile createFile = new CreateBeanFile(stPath, tbName);
		String fileCode = createFile.createBeanCode();
		if(StringUtils.isBlank(fileCode)){
			msg_code = 1;
			return msg_code;
		}
		if(!FileUtils.writeData(fileCode, filePath)){
			msg_code = 2;
			return msg_code;
		}
 		
		//生成XML
 		String xmlPath = FileUtils.getXMLFilePath("src/main/resources", ibtsPath);
 		CreateXMLFile xmlFile = new CreateXMLFile(tbName, stPath, xmlPath);
 		if(!xmlFile.createXMLFile()){
 			msg_code =3;
 			return msg_code;
 		}
 		
 		
 		//生成Service&ServiceImpl
 		if(StringUtils.isNotBlank(svcPath)){
 			CreateServiceFile csf = new CreateServiceFile(svcPath, tbName);
 			if(!csf.createService()){
 				msg_code=4;
 				return msg_code;
 			}
 			if(!csf.createServiceImpl()){
 				msg_code=5;
 				return msg_code;
 			}
 		}
 		return msg_code;
	}
	
	/**
	 * 消息显示
	 * @param msg_code 传入int
	 */
	private void showMsg(int msg_code){
		String message="";
		boolean flag = false;
		switch (msg_code) {
		case 0:
			flag = true;
			message = "生成成功！";
			break;
		case 1:
			message = "表结构名在数据库中不存在！";
			break;
		case 2:
			message = "实体生成失败！";
			break;
		case 3:
			message = "XML生成失败！";
			break;
		case 4:
			message = "服务类接口生成失败！";
			break;
		case 5:
			message = "服务实现类生成失败！";
			break;
		}
		JOptionPane.showMessageDialog(this, message, "警告", JOptionPane.WARNING_MESSAGE);
		if(flag){
			int closable = JOptionPane.showConfirmDialog(null, "相关配置文件生成成功\n是否关闭窗口？","提示", 
					JOptionPane.YES_NO_OPTION, JOptionPane.INFORMATION_MESSAGE);  
            if(JOptionPane.YES_OPTION == closable){  
                System.exit(0);  
            }
            return;
		}
	}
	/**
	 * 运行程序
	 * @param args
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			@Override
			public void run() {
				JFrame frame = new Classgenerator();
				frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
				frame.setVisible(true);
				frame.setResizable(false);
			}
		});
	}
	
	public static void init(){
		EventQueue.invokeLater(new Runnable() {
			@Override
			public void run() {
				JFrame frame = new Classgenerator();
				frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
				frame.setVisible(true);
				frame.setResizable(false);
			}
		});
	}
}
