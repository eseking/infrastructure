Ext.define(
				"BSOFT.templateZBWinUtil",
				{
					getZBWin : function() {
						// ����model
						Ext.define("orgModel", {
							extend : "Ext.data.Model",
							fields : [ {
								name : 'id',
								type : 'string',
								sortable : true
							}, {
								name : 'jgsx',
								type : 'string',
								sortable : true
							}, {
								name : 'jgbm',
								type : 'string',
								sortable : true
							}, {
								name : 'jgqc',
								type : 'string',
								sortable : true
							}, {
								name : 'jgjc',
								type : 'string',
								sortable : true
							} ]
						});
						// ָ��model
						Ext.define("zbModel", {
							extend : "Ext.data.Model",
							fields : [ {
								name : 'id',
								type : 'string',
								sortable : true
							}, {
								name : 'zbmc',
								type : 'string',
								sortable : true
							} ]
						});
						// ��������model
						Ext.define("bbztModel", {
							extend : "Ext.data.Model",
							fields : [ {
								name : 'id',
								type : 'string',
								sortable : true
							}, {
								name : 'bbqc',
								type : 'string',
								sortable : true
							}, {
								name : 'bbjc',
								type : 'string',
								sortable : true
							}, {
								name : 'ssysnd',
								type : 'string',
								sortable : true
							} ]
						});
						// ����ʱ��model
						Ext.define("bbtimeModel", {
							extend : "Ext.data.Model",
							fields : [ {
								name : 'id',
								type : 'string',
								sortable : true
							}, {
								name : 'ysnd',
								type : 'string',
								sortable : true
							}, {
								name : 'qsrq',
								type : 'string',
								sortable : true
							}, {
								name : 'jzrq',
								type : 'string',
								sortable : true
							} ]
						});
						var bbztStore = Ext.create('Ext.data.Store', {
							pageSize : indicator.pagesize,
							// autoLoad:true,
							model : 'bbztModel',
							proxy : {
								type : 'ajax',
								url : indicator.requrl + '/listBFBCBbzt.do',
								actionMethods : {
									read : 'POST'
								},
								reader : {
									type : 'json',
									root : function(o) {
										if (o.api_code == 1
												&& o.success == false) {
											// commonFunction.showMessage('����ʧ��',o.error_msg);
										} else {
											return o.pageModel.datas;
										}
									},
									totalProperty : 'pageModel.count'
								}
							}
						});
						// Ȩ��store
						var perStore = Ext.create('Ext.data.Store', {
							pageSize : indicator.pagesize,
							// autoLoad:true,
							model : 'orgModel',
							proxy : {
								type : 'ajax',
								url : indicator.requrl + '/listOrg.do',
								actionMethods : {
									read : 'POST'
								},
								reader : {
									type : 'json',
									root : function(o) {
										if (o.api_code == 1
												&& o.success == false) {
											// commonFunction.showMessage('����ʧ��',o.error_msg);
										} else {
											return o.pageModel.datas;
										}
									},
									totalProperty : 'pageModel.count'
								}
							}
						});
						var bbtimeStore = Ext.create('Ext.data.Store', {
							pageSize : indicator.pagesize,
							// autoLoad:true,
							model : 'bbtimeModel',
							proxy : {
								type : 'ajax',
								url : indicator.requrl + '/listBCBFBbtime.do',
								actionMethods : {
									read : 'POST'
								},
								reader : {
									type : 'json',
									root : function(o) {
										if (o.api_code == 1
												&& o.success == false) {
											// commonFunction.showMessage('����ʧ��',o.error_msg);
										} else {
											return o.pageModel.datas;
										}
									},
									totalProperty : 'pageModel.count'
								}
							}
						});
						var orgStore = Ext.create('Ext.data.Store', {
							pageSize : indicator.pagesize,
							// autoLoad:true,
							model : 'orgModel',
							proxy : {
								type : 'ajax',
								url : indicator.requrl + '/listOrg.do',
								actionMethods : {
									read : 'POST'
								},
								reader : {
									type : 'json',
									root : function(o) {
										if (o.api_code == 1
												&& o.success == false) {
											// commonFunction.showMessage('����ʧ��',o.error_msg);
										} else {
											return o.pageModel.datas;
										}
									},
									totalProperty : 'pageModel.count'
								}
							}
						});
						
						var orgComboStore = Ext.create('Ext.data.Store', {
							pageSize : indicator.pagesize,
							// autoLoad:true,
							model : 'orgModel',
							proxy : {
								type : 'ajax',
								url : indicator.requrl + '/listOrg.do',
								actionMethods : {
									read : 'POST'
								},
								reader : {
									type : 'json',
									root : function(o) {
										if (o.api_code == 1
												&& o.success == false) {
											// commonFunction.showMessage('����ʧ��',o.error_msg);
										} else {
											return o.pageModel.datas;
										}
									},
									totalProperty : 'pageModel.count'
								}
							}
						});
						
						
						var zbStore = Ext.create('Ext.data.Store', {
							pageSize : indicator.pagesize,
							// autoLoad:true,
							model : 'zbModel',
							proxy : {
								type : 'ajax',
								url : indicator.requrl + '/listZB.do',
								actionMethods : {
									read : 'POST'
								},
								reader : {
									type : 'json',
									root : function(o) {
										if (o.api_code == 1
												&& o.success == false) {
											// commonFunction.showMessage('����ʧ��',o.error_msg);
										} else {
											return o.pageModel.datas;
										}
									},
									totalProperty : 'pageModel.count'
								}
							}
						});
						Ext.define("orgGrid", {// ����grid
							extend : 'Ext.grid.Panel',
							alias : 'widget.orgGrid',
							title : '��ѡ�����',
							layout : 'fit',
							columns : [ // ��ģʽ
							{
								xtype : 'rownumberer',
								header : "���",
								width : 40
							}, {
								text : "��������",
								dataIndex : 'jgqc',
								width : 150
							} ],
							store : orgStore,
							dockedItems : [
							// searchBar,
							{
								dock : 'bottom',
								xtype : 'pagingtoolbar',
								store : orgStore,
								plugins : [ {
									ptype : 'resizer'
								} ],
								pageSize : indicator.pagesize,
								displayInfo : true,
								displayMsg : '��ʾ {0} - {1} �������� {2} ��',
								emptyMsg : 'û������'
							}
							]
						});
						var perReadData = {};
						var perHiddenData = {};
						var perSetValBatchData = {};	
						Ext.define(
										"perGrid",
										{// ����grid
											extend : 'Ext.grid.Panel',
											alias : 'widget.perGrid',
											title : 'Ȩ������',
											layout : 'fit',
											columns : [ // ��ģʽ
											{
												xtype : 'rownumberer',
												header : "���",
												width : 40
											}, {
												text : "��������",
												dataIndex : 'jgqc',
												width : 150
											} ],
											selType : 'checkboxmodel',// �趨ѡ��ģʽ
											store : perStore,
											dockedItems : [
													{
														xtype : 'toolbar',
														dock : 'top',
														items : [
																{
																	xtype : 'button',
																	text : 'ֻ��',
																	icon : 'cell/images/eye.png',
																	handler : function(
																			btn) {
																		var data = btn.up('grid').getSelectionModel().getSelection();
																		if (data.length == 0) {
																			Ext.Msg.alert("��ʾ","��ѡ�����!!!");
																			return;
																		} else {
																			var selectData = data[0].data;
																			var jgbm = selectData.jgbm;
																			// alert(jgbm);
																			/*
																			 * var
																			 * row =
																			 * cell.GetCurrentRow();
																			 * var
																			 * col =
																			 * cell.GetCurrentCol();
																			 *
																			 * alert(row);
																			 * alert(col);
																			 */
																			// ��ʼ��
																			var startRow = cell.GetSelectRangeJ(1);
																			// ��ʼ��
																			var startCol = cell.GetSelectRangeJ(0);
																			var endRow = cell.GetSelectRangeJ(3);
																			var endCol = cell.GetSelectRangeJ(2);
																			var count = (endRow- startRow + 1)* (endCol- startCol + 1);
																			// alert(count);
																			var rowList = [];
																			var colList = [];
																			for ( var i = startRow; i <= endRow; i++) {
																				rowList.push(i);
																			}
																			for ( var i = startCol; i <= endCol; i++) {
																				colList.push(i);
																			}
																			// ����ֻ����ID��
																			for ( var i in rowList) {
																				for ( var j in colList) {
																					var key = rowList[i]
																							+ "-"
																							+ colList[j];
																					var temp = {
																						row : rowList[i],
																						col : colList[j]
																					}
																					perReadData[key] = temp;
																					// ����ֻ��
																					cell.SetCellInput(
																									colList[j],
																									rowList[i],
																									0,
																									5);
																					cell.SetCellBackColor(
																									colList[j],
																									rowList[i],
																									0,
																									2);
																				}
																			}
																			// alert(rowList
																			// +"
																			// "+colList);
																			// alert("��ʼ
																			// ��:
																			// "+cell.GetSelectRangeJ(0)
																			// +"
																			// ��:
																			// "+cell.GetSelectRangeJ(1));
																			// alert("����
																			// ��:
																			// "+cell.GetSelectRangeJ(2)
																			// +"
																			// ��:
																			// "+cell.GetSelectRangeJ(3));
																		}
																	}
																},
																{
																	xtype : 'button',
																	text : '����',
																	icon : 'cell/images/shading.png',
																	handler : function(
																			btn) {
																		var data = btn.up('grid').getSelectionModel().getSelection();
																		if (data.length == 0) {
																			Ext.Msg.alert("��ʾ","��ѡ�����!!!");
																			return;
																		} else {
																			var selectData = data[0].data;
																			var jgbm = selectData.jgbm;
																			// alert(jgbm);
																			/*
																			 * var
																			 * row =
																			 * cell.GetCurrentRow();
																			 * var
																			 * col =
																			 * cell.GetCurrentCol();
																			 *
																			 * alert(row);
																			 * alert(col);
																			 */
																			// ��ʼ��
																			var startRow = cell.GetSelectRangeJ(1);
																			// ��ʼ��
																			var startCol = cell.GetSelectRangeJ(0);
																			var endRow = cell.GetSelectRangeJ(3);
																			var endCol = cell.GetSelectRangeJ(2);
																			var count = (endRow- startRow + 1)* (endCol- startCol + 1);
																			// alert(count);
																			var rowList = [];
																			var colList = [];
																			for ( var i = startRow; i <= endRow; i++) {
																				rowList.push(i);
																			}
																			for ( var i = startCol; i <= endCol; i++) {
																				colList.push(i);
																			}
																			// �������ص�ID��
																			for ( var i in rowList) {
																				for ( var j in colList) {
																					var key = rowList[i]
																							+ "-"
																							+ colList[j];
																					var temp = {
																						row : rowList[i],
																						col : colList[j]
																					}
																					perHiddenData[key] = temp;
																					// ��������
																					// cell.SetCellShowHide
																					// (colList[j],
																					// rowList[i],
																					// 0,
																					// true);
																					cell.SetCellBackColor(
																									colList[j],
																									rowList[i],
																									0,
																									3);
																				}
																			}
																			// alert(rowList
																			// +"
																			// "+colList);
																			// alert("��ʼ
																			// ��:
																			// "+cell.GetSelectRangeJ(0)
																			// +"
																			// ��:
																			// "+cell.GetSelectRangeJ(1));
																			// alert("����
																			// ��:
																			// "+cell.GetSelectRangeJ(2)
																			// +"
																			// ��:
																			// "+cell.GetSelectRangeJ(3));
																		}
																	}
																},
																{
																	xtype : 'button',
																	text : 'ȡ��ֻ��',
																	icon : 'cell/images/grid_delete.png',
																	handler : function(
																			btn) {
																		var data = btn.up('grid').getSelectionModel().getSelection();
																		if (data.length == 0) {
																			Ext.Msg.alert("��ʾ","��ѡ�����!!!");
																			return;
																		} else {
																			var selectData = data[0].data;
																			var jgbm = selectData.jgbm;
																			// alert(jgbm);
																			/*
																			 * var
																			 * row =
																			 * cell.GetCurrentRow();
																			 * var
																			 * col =
																			 * cell.GetCurrentCol();
																			 *
																			 * alert(row);
																			 * alert(col);
																			 */
																			// ��ʼ��
																			var startRow = cell.GetSelectRangeJ(1);
																			// ��ʼ��
																			var startCol = cell.GetSelectRangeJ(0);
																			var endRow = cell.GetSelectRangeJ(3);
																			var endCol = cell.GetSelectRangeJ(2);
																			var count = (endRow- startRow + 1)* (endCol- startCol + 1);
																			// alert(count);
																			var rowList = [];
																			var colList = [];
																			for ( var i = startRow; i <= endRow; i++) {
																				rowList.push(i);
																			}
																			for ( var i = startCol; i <= endCol; i++) {
																				colList.push(i);
																			}
																			// ����ֻ����ID��
																			for ( var i in rowList) {
																				for ( var j in colList) {
																					var key = rowList[i]
																							+ "-"
																							+ colList[j];
																					if (perReadData[key]) {
																						delete perReadData[key];
																					}
																					// ȡ��ֻ��
																					cell.SetCellInput(
																									colList[j],
																									rowList[i],
																									0,
																									0);
																					cell.SetCellBackColor(
																									colList[j],
																									rowList[i],
																									0,
																									-1);
																				}
																			}
																			// alert(rowList
																			// +"
																			// "+colList);
																			// alert("��ʼ
																			// ��:
																			// "+cell.GetSelectRangeJ(0)
																			// +"
																			// ��:
																			// "+cell.GetSelectRangeJ(1));
																			// alert("����
																			// ��:
																			// "+cell.GetSelectRangeJ(2)
																			// +"
																			// ��:
																			// "+cell.GetSelectRangeJ(3));
																		}
																	}
																},
																{
																	xtype : 'button',
																	text : 'ȡ������',
																	icon : 'cell/images/grid_delete.png',
																	handler : function(
																			btn) {
																		var data = btn.up('grid').getSelectionModel().getSelection();
																		if (data.length == 0) {
																			Ext.Msg.alert("��ʾ","��ѡ�����!!!");
																			return;
																		} else {
																			var selectData = data[0].data;
																			var jgbm = selectData.jgbm;
																			// alert(jgbm);
																			/*
																			 * var
																			 * row =
																			 * cell.GetCurrentRow();
																			 * var
																			 * col =
																			 * cell.GetCurrentCol();
																			 *
																			 * alert(row);
																			 * alert(col);
																			 */
																			// ��ʼ��
																			var startRow = cell.GetSelectRangeJ(1);
																			// ��ʼ��
																			var startCol = cell.GetSelectRangeJ(0);
																			var endRow = cell.GetSelectRangeJ(3);
																			var endCol = cell.GetSelectRangeJ(2);
																			var count = (endRow- startRow + 1)* (endCol- startCol + 1);
																			// alert(count);
																			var rowList = [];
																			var colList = [];
																			for ( var i = startRow; i <= endRow; i++) {
																				rowList.push(i);
																			}
																			for ( var i = startCol; i <= endCol; i++) {
																				colList.push(i);
																			}
																			// ����ֻ����ID��
																			for ( var i in rowList) {
																				for ( var j in colList) {
																					var key = rowList[i]
																							+ "-"
																							+ colList[j];
																					if (perHiddenData[key]) {
																						delete perHiddenData[key];
																					}
																					cell.SetCellBackColor(
																						colList[j],
																						rowList[i],
																						0,
																						-1);
																				}
																			}
																		}
																	}
																},{
																	xtype : 'button',
																	text : '����',
																	icon : 'images/grid_add.png',
																	handler : function(
																			btn) {
																		var data = btn.up('grid').getSelectionModel().getSelection();
																		if (data.length == 0) {
																			Ext.Msg.alert("��ʾ","��ѡ�����!!!");
																			return;
																		} else {
																			var selectData = data[0].data;
																			var jgbm = selectData.jgbm;
																			Ext.Ajax.request({
																						url : indicator.requrl
																								+ '/addCellPer.do',
																						method : 'POST',
																						timeout : 3000,
																						async : false,
																						params : {
																							orgId : jgbm,
																							tempId : indicator.tempId,
																							readPer : Ext.encode(perReadData),
																							showPer : Ext.encode(perHiddenData),
																							setValPer:Ext.encode(perSetValBatchData)
																						},
																						success : function(
																								resp,
																								opts) {
																							var obj = Ext.decode(resp.responseText);
																							if (obj.success == true) {
																								commonFunction.showMessage('�����ɹ�',"����Ȩ�޳ɹ�");
																							} else {
																								commonFunction.showMessage('����ʧ��',"����Ȩ��ʧ��");
																							}
																						}
																					})
																		}
																	}
																}]
													},
													{
														dock : 'bottom',
														xtype : 'pagingtoolbar',
														store : perStore,
														plugins : [ {
															ptype : 'resizer'
														} ],
														pageSize : indicator.pagesize,
														displayInfo : true,
														displayMsg : '��ʾ {0} - {1} �������� {2} ��',
														emptyMsg : 'û������'
													}
											]
										});
						// ����ָ��
						Ext.define(
										"addZBWin",
										{
											extend : 'Ext.window.Window',
											alias : 'widget.addZBWin',
											width : 350,
											height : 200,
											hidden : false,
											maximizable : true,
											modal : true,
											title : '����ָ��',
											layout : 'fit',
											autoShow : true,
											initComponent : function() {
												this.items = [ {
													xtype : 'form',
													bodyStyle : 'padding:15px 15px 15px',
													autoScroll : true,
													defaults : {
														labelAlign : 'left'
													},
													items : [ { // �Ƿ�Ϊ�գ��Լ���ʾ����
														xtype : 'fieldset',
														title : 'ָ��',
														collapsible : true,
														items : [
																{
																	xtype : 'textfield',
																	fieldLabel : 'ָ������',
																	allowBlank : false,
																	name : 'zbmc'
																},
																{
																	xtype : 'textfield',
																	fieldLabel : 'ָ����',
																	name : 'zbjc'
																},
																{
																	xtype : 'combo',
																	fieldLabel : 'ָ�����',
																	name : 'zbtype'
																} ]
													} ],
													buttons : [ {
														text : '����',
														disabled : true,
														formBind : true,
														handler : function(btn) {
															var value = Ext.encode(btn.up('form').getForm().getValues());
															Ext.Ajax.request({
																		url : indicator.requrl+ '/addZB.do',
																		method : 'POST',
																		timeout : 3000,
																		async : false,
																		params : {
																			formDatas : value																			
																		},
																		success : function(
																				resp,
																				opts) {
																			var obj = Ext.decode(resp.responseText);
																			if (obj.success == true) {
																				commonFunction.showMessage('�����ɹ�',"����ָ��ɹ�");
																			} else {
																				commonFunction.showMessage('����ʧ��',"����ָ��ʧ��");
																			}
																			var search = Ext.getCmp("gridSearchText").getValue();
																			// �޲�ѯ����
																			if (Ext.isEmpty(search)) {
																				zbStore.proxy.extraParams.condition = "";
																				zbStore.load();
																			} else {
																				zbStore.proxy.extraParams.condition = Ext.encode({
																							'name' : search
																						});
																				zbStore.load();
																			}
																			return obj;
																		}
																	})
															btn.up('window').close();
														}
													} ]
												} ]
												this.callParent(arguments);
											}
										});
								//����ȡ��ʱ��		
								Ext.define(
										"bsoft.setTimeWin",
										{
											extend : 'Ext.window.Window',
											alias : 'widget.setTimeWin',
											width : 420,
											height : 300,
											hidden : false,
											maximizable : true,
											modal : true,
											title : 'ʱ��ά��',
											layout : 'fit',
											autoShow : true,
											initComponent : function() {
												this.items = [ {
													xtype : 'form',
													bodyStyle : 'padding:15px 15px 15px',
													autoScroll : true,
													defaults : {
														labelAlign : 'left'
													},
													items : [ { // �Ƿ�Ϊ�գ��Լ���ʾ����
														xtype : 'fieldset',
														title : 'ָ��',
														collapsible : true,
														items : [
																{
																	xtype : 'textfield',
																	fieldLabel : 'ָ������',
																	name : 'zbname',
																	value:this.zbname
																},
																{
																	xtype : 'combo',
																	fieldLabel : '���',
																	name : 'zbnd',
																	displayField:   'typename',
													                valueField:     'typecode2',
													                queryMode: 'local',
													                store:         Ext.create('Ext.data.ArrayStore', {
													                              fields: ['typecode2', 'typename'],
													                              data : [
													                              		  ['2013','2013'],
													                                      ['2014','2014'],
														                                  ['2015','2015'],
														                                  ['2016','2016'],
														                                  ['2017','2017'],
														                                  ['2018','2018'],
														                                  ['2019','2019'],
														                                  ['2020','2020'],
														                                  ['2021','2021'],
														                                  ['2022','2022']
														                              ]// from states.js
																	})
																},
																{
																	xtype : 'combo',
																	fieldLabel : '����',
																	name : 'zbjd',
																	displayField:   'typename',
													                valueField:     'typecode2',
													                queryMode: 'local',
													                store:         Ext.create('Ext.data.ArrayStore', {
													                              fields: ['typecode2', 'typename'],
													                              data : [
													                              		  ['1','һ����'],
													                                      ['2','������'],
														                                  ['3','������'],
														                                  ['4','�ļ���']
														                              ]// from states.js
																	})
																},
																{
																	xtype : 'datefield',
																	fieldLabel : '��',
																	name : 'zbmonth',
																	format : 'Y-m-d'
																} ]
													},
													
													 { // �Ƿ�Ϊ�գ��Լ���ʾ����
														xtype : 'fieldset',
														title : '����ģ�����û���',
														collapsible : true,
														items : [
																{
																	xtype : 'combo',
																	fieldLabel : '����',
																	size:30,
																	name : 'zbjg',
																	displayField:   'jgqc',
													                valueField:     'id',
													                queryMode: 'remote',
													                store:  orgComboStore
																}
													
													]
													 }
													
													
													
													],
													buttons : [ {
														text : 'ȷ��',
														disabled : true,
														formBind : true,
														handler : function(btn) {
															
															btn.up('window').close();
														}
													} ]
												} ]
												this.callParent(arguments);
											}
										});		
										
										
										
						// ����ָ��
						Ext.define("addZBNoteWin", {
							extend : 'Ext.window.Window',
							alias : 'widget.addZBNoteWin',
							width : 450,
							height : 200,
							hidden : false,
							maximizable : true,
							modal : true,
							title : '����ָ�깫ʽ˵��',
							layout : 'fit',
							autoShow : true,
							initComponent : function() {
								this.items = [ {
									xtype : 'form',
									bodyStyle : 'padding:15px 15px 15px',
									autoScroll : true,
									defaults : {
										labelAlign : 'left'
									},
									items : [ { // �Ƿ�Ϊ�գ��Լ���ʾ����
										xtype : 'fieldset',
										title : '��ʽ˵��',
										collapsible : true,
										items : [ {
											xtype : 'textareafield',
											fieldLabel : '��ʽ˵��',
											allowBlank : false,
											width : 380,
											name : 'zbnote'
										} ]
									} ],
									buttons : [ {
										text : 'ȷ��',
										disabled : true,
										formBind : true,
										handler : function(btn) {
											var value = Ext.encode(btn.up('form').getForm().getValues());
											/*
											 * Ext.Ajax.request({ url :
											 * indicator.requrl+'/addZB.do',
											 * method : 'POST', timeout :3000,
											 * async:false, params: { formDatas:
											 * value }, success:
											 * function(resp,opts) { var
											 * obj=Ext.decode(resp.responseText);
											 *
											 * if( obj.success==true ){
											 * commonFunction.showMessage('�����ɹ�',"����ָ��ɹ�");
											 * }else{
											 * commonFunction.showMessage('����ʧ��',"����ָ��ʧ��"); }
											 *
											 * var search =
											 * Ext.getCmp("gridSearchText").getValue();
											 * //�޲�ѯ���� if(Ext.isEmpty(search)){
											 * zbStore.proxy.extraParams.condition="";
											 * zbStore.load(); }else{
											 *
											 * zbStore.proxy.extraParams.condition=
											 * Ext.encode({'name':search});
											 * zbStore.load(); }
											 *
											 * return obj; }
											 *  })
											 */
											var row = cell.GetCurrentRow();
											var col = cell.GetCurrentCol();
											// cell.SetShowCellTip(true);
											cell.SetCellTip(col, row, 0,"Your Tips");
											// alert(cell.GetCellTip(col, row,
											// 0));
											btn.up('window').close();
										}
									} ]
								} ]
								this.callParent(arguments);
							}
						})
						// ���������Ϣ
						Ext.define(
										"addBBTIMEWin",
										{
											extend : 'Ext.window.Window',
											alias : 'widget.addBBTIMEWin',
											width : 350,
											height : 200,
											hidden : false,
											maximizable : true,
											modal : true,
											title : '���������Ϣ',
											layout : 'fit',
											autoShow : true,
											// ztid:'11',
											initComponent : function() {
												this.items = [ {
													xtype : 'form',
													bodyStyle : 'padding:15px 15px 15px',
													autoScroll : true,
													defaults : {
														labelAlign : 'left'
													},
													items : [ { // �Ƿ�Ϊ�գ��Լ���ʾ����
														xtype : 'fieldset',
														title : '���������Ϣ',
														collapsible : true,
														items : [
																{
																	xtype : 'textfield',
																	fieldLabel : 'Ԥ�����',
																	allowBlank : false,
																	name : 'ysnd'
																},
																{
																	xtype : 'datefield',
																	fieldLabel : '��ʼ����',
																	name : 'qsrq',
																	allowBlank : false,
																	format : 'Y-m-d'
																},
																{
																	xtype : 'datefield',
																	fieldLabel : '��ֹ����',
																	format : 'Y-m-d',
																	allowBlank : false,
																	name : 'jzrq'
																} ]
													} ],
													buttons : [ {
														text : '����',
														disabled : true,
														formBind : true,
														handler : function(btn) {
															var ztid = btn.up('window').ztid;
															if (Ext.isEmpty(ztid)) {
																Ext.Msg.alert("��ʾ","��ѡ�񱨱�����!!!");
																return;
															}
															var value = Ext.encode(btn.up('form').getForm().getValues());
															Ext.Ajax.request({
																		url : indicator.requrl
																				+ '/addBCBFBbtime.do',
																		method : 'POST',
																		timeout : 3000,
																		async : false,
																		params : {
																			formDatas : value,
																			ztid : ztid
																		},
																		success : function(
																				resp,
																				opts) {
																			var obj = Ext.decode(resp.responseText);
																			if (obj.success == true) {
																				commonFunction.showMessage('�����ɹ�',"���������Ϣ�ɹ�");
																			} else {
																				commonFunction.showMessage('����ʧ��',"���������Ϣʧ��");
																			}
																			bbtimeStore.load();
																			return obj;
																		}
																	})
															btn.up('window').close();
														}
													} ]
												} ]
												this.callParent(arguments);
											}
										})
						// ���ӱ�������
						Ext.define(
										"addBBZTWin",
										{
											extend : 'Ext.window.Window',
											alias : 'widget.addBBZTWin',
											width : 350,
											height : 200,
											hidden : false,
											maximizable : true,
											modal : true,
											title : '���ӱ�������',
											layout : 'fit',
											autoShow : true,
											initComponent : function() {
												this.items = [ {
													xtype : 'form',
													bodyStyle : 'padding:15px 15px 15px',
													autoScroll : true,
													defaults : {
														labelAlign : 'left'
													},
													items : [ { // �Ƿ�Ϊ�գ��Լ���ʾ����
														xtype : 'fieldset',
														title : '���ӱ�������',
														collapsible : true,
														items : [
																{
																	xtype : 'textfield',
																	fieldLabel : '����ȫ��',
																	allowBlank : false,
																	name : 'bbqc'
																},
																{
																	xtype : 'textfield',
																	fieldLabel : '������',
																	name : 'bbjc'
																} ]
													} ],
													buttons : [ {
														text : '����',
														disabled : true,
														formBind : true,
														handler : function(btn) {
															var value = Ext.encode(btn.up('form').getForm().getValues());
															Ext.Ajax.request({
																		url : indicator.requrl
																				+ '/addBCYSBbzt.do',
																		method : 'POST',
																		timeout : 3000,
																		async : false,
																		params : {
																			formDatas : value
																		},
																		success : function(
																				resp,
																				opts) {
																			var obj = Ext.decode(resp.responseText);
																			if (obj.success == true) {
																				commonFunction.showMessage('�����ɹ�',"���ӱ�������ɹ�");
																			} else {
																				commonFunction.showMessage('����ʧ��',"���ӱ�������ʧ��");
																			}
																			bbztStore.load();
																			return obj;
																		}
																	})
															btn.up('window').close();
														}
													} ]
												} ]
												this.callParent(arguments);
											}
										})
						Ext.define(
										"ZBGrid",
										{// ����grid
											extend : 'Ext.grid.Panel',
											alias : 'widget.ZBGrid',
											title : '��ѡ��ָ��',
											layout : 'fit',
											columns : [ // ��ģʽ
											{
												xtype : 'rownumberer',
												header : "���",
												width : 40
											}, {
												text : "ָ������",
												dataIndex : 'zbmc',
												width : 150
											} ],
											store : zbStore,
											dockedItems : [
													{
														xtype : 'toolbar',
														dock : 'top',
														items : [
																{
																	xtype : 'button',
																	text : '����ָ��',
																	icon : 'cell/images/grid_add.png',
																	handler : function(btn) {
																		Ext.widget("addZBWin");
																	}
																},
																{
																	xtype : 'button',
																	text : '���ӹ�ʽ˵��',
																	icon : 'cell/images/grid_add.png',
																	handler : function(btn) {
																		Ext.widget("addZBNoteWin");
																	}
																},{
																	xtype : 'button',
																	text : 'ʱ��ά��',
																	icon : 'cell/images/grid_add.png',
																	handler : function(btn) {
																	var grid = btn.up("grid");
																	var data = grid.getSelectionModel().getSelection();	
																	if(data.length == 0){
																		Ext.Msg.alert("��ʾ","��ѡ��ָ��");
																		return;
																	}else{
																		// ָ��
																		var value = data[0].data["id"];
																		// ָ������
																		var zbname = data[0].data["zbmc"];
																	//����ָ������
																	var win = 	Ext.widget("setTimeWin",{zbname:zbname});
																	//��������
																	
																	//���水ť
																	win.on('beforeclose',function(item){
																		
																	//��ȡ���  ���� 
																	var form = item.down("form").getForm();	
																	//���
																	var zbnd = form.findField('zbnd').getValue();
																	//����
																	var zbjd = form.findField('zbjd').getValue();
																	//�·�
																	var zbmonth = form.findField('zbmonth').getValue();
																	
																	//����   ����ģ��
																	var zbjg = form.findField('zbjg').getValue();
																	
																	if(!Ext.isEmpty(zbnd)){
																		zbname=zbname+zbnd+"��";
																	}else{
																		zbnd="";
																	}
																	
																	if(!Ext.isEmpty(zbjd)){
																		zbname=zbname+"��"+zbjd+"����";
																	}else{
																		zbjd="";
																	}
																	
																	if(!Ext.isEmpty(zbmonth)){
																		zbname=zbname+zbmonth;
																	}else{
																		zbmonth="";
																	}
																	//alert(zbnd+"	"+zbjd+"	"+zbmonth);
																	
																	var row = cell.GetCurrentRow();
																	var col = cell.GetCurrentCol();
																	var type = "zb";
																	var key = row
																			+ "-"
																			+ col;
																			
																	var data ={};		
																			
																	if(!Ext.isEmpty(zbjg)){
																		data = {
																		zbid : value,	//ָ��ֵ
																		jgid: zbjg,		//����ֵ
																		text : zbname,	//����
																		row : row,		//��
																		col : col,		//��
																		key : key,		//��-��
																		zbnd : zbnd,	//ָ�����
																		zbjd : zbjd,	//ָ�꼾��
																		zbmonth : zbmonth	//ָ����
																		}
																	}else{
																	 data = {
																		value : value,	//ֵ
																		text : zbname,	//����
																		row : row,		//��
																		col : col,		//��
																		key : key,		//��-��
																		type : type,	//����  ��ָ�ꡢ��ָ��
																		zbnd : zbnd,	//ָ�����
																		zbjd : zbjd,	//ָ�꼾��
																		zbmonth : zbmonth	//ָ����
																		}
																	}
																	indicator.regData[key] = data;
																	// resultData.push(data);
																	var display = "["
																			+ zbname
																			+ "]";
																	cell.S(col,row,0,display);
																	cell.MoveToCell(col,row);
																		
																	});
																	
																	}
																	}
																},{
																	xtype : 'button',
																	text : '���ñ༭��Ԫ��',
																	icon : 'cell/images/grid_edit.png',
																	handler : function(btn) {
																		
																		// ��ʼ��
																		var startRow = cell.GetSelectRangeJ(1);
																		// ��ʼ��
																		var startCol = cell.GetSelectRangeJ(0);
																		var endRow = cell.GetSelectRangeJ(3);
																		var endCol = cell.GetSelectRangeJ(2);
																		var count = (endRow- startRow + 1)* (endCol- startCol + 1);
																		// alert(count);
																		var rowList = [];
																		var colList = [];
																		for ( var i = startRow; i <= endRow; i++) {
																			rowList.push(i);
																		}
																		for ( var i = startCol; i <= endCol; i++) {
																			colList.push(i);
																		}
																		// ����ѡ�������Id��
																		for ( var i in rowList) {
																			for ( var j in colList) {
																				var key = rowList[i]
																						+ "-"
																						+ colList[j];
																				var temp = {
																					row : rowList[i],
																					col : colList[j],
																					val : ''																					
																				}
																				
																				/*var type = cell.GetCellDataType(parseInt(colList[j]),parseInt(rowList[i]),0);
																				//alert(type);
																				var cellVal;
																				switch (type) {
																					case 0:	
																						cellVal = "";
																						break;
																					case 1:
																						cellVal = cell.GetCellString(parseInt(colList[j]),parseInt(rowList[i]),0,"");
																						break;
																					case 2:
																						cellVal = cell.GetCellDouble(parseInt(colList[j]),parseInt(rowList[i]),0,0);
																						break;
																				}*/
																			
																				perSetValBatchData[key] = temp;
																				
																				//��ȡ��Ԫ���ֵ
																				var cellVal = cell.S(colList[j],rowList[i],0,"");
																				// ���ñ���ɫ   ��Ǵ��赥Ԫ��
																				cell.SetCellBackColor(colList[j],rowList[i],0,6);
																			}
																		}
																	}
																},{
																	xtype : 'button',
																	text : 'ȡ���༭��Ԫ��',
																	icon : 'cell/images/grid_delete.png',
																	handler : function(btn) {
																		// ��ʼ��
																		var startRow = cell.GetSelectRangeJ(1);
																		// ��ʼ��
																		var startCol = cell.GetSelectRangeJ(0);
																		var endRow = cell.GetSelectRangeJ(3);
																		var endCol = cell.GetSelectRangeJ(2);
																		var count = (endRow- startRow + 1)* (endCol- startCol + 1);
																		// alert(count);
																		var rowList = [];
																		var colList = [];
																		for ( var i = startRow; i <= endRow; i++) {
																			rowList.push(i);
																		}
																		for ( var i = startCol; i <= endCol; i++) {
																			colList.push(i);
																		}
																		// ����ֻ����ID��
																		for ( var i in rowList) {
																			for ( var j in colList) {
																				var key = rowList[i]
																						+ "-"
																						+ colList[j];
																				if (perSetValBatchData[key]) {
																					delete perSetValBatchData[key];
																				}
																				// ȡ������ɫ   ȡ����ǵ�Ԫ��
																				cell.SetCellBackColor(colList[j],rowList[i],0,-1);
																			}
																		}
																	}
																}
													
														]
													},
													{
														dock : 'bottom',
														xtype : 'pagingtoolbar',
														store : zbStore,
														plugins : [ {
															ptype : 'resizer'
														} ],
														pageSize : indicator.pagesize,
														displayInfo : true,
														displayMsg : '��ʾ {0} - {1} �������� {2} ��',
														emptyMsg : 'û������'
													}
											]
										});
						// ��������
						Ext.define(
										"BbztGrid",
										{// ����grid
											extend : 'Ext.grid.Panel',
											alias : 'widget.Bbzt',
											region : 'west',
											width : 250,
											margin : '0 0 0 3',
											listeners : {
												itemclick : function(view,
														record, item, index, e,
														eOpts) {
													// ��������ID
													var ztid = record.get("id");
													// Ŀ���store
													var targetStore = bbtimeStore;
													targetStore.proxy.extraParams.condition = Ext.encode({
																'ztid' : ztid
															});
													targetStore.load();
												}
											},
											columns : [ // ��ģʽ
											{
												xtype : 'rownumberer',
												header : "���",
												width : 40
											}, {
												text : "��������",
												dataIndex : 'bbjc',
												width : 200
											} ],
											store : bbztStore,
											selType : 'checkboxmodel',// �趨ѡ��ģʽ
											dockedItems : [
													{
														xtype : 'toolbar',
														dock : 'top',
														items : [ {
															xtype : 'button',
															text : '���ӱ�������',
															icon : 'images/grid_add.png',
															handler : function(btn) {
																Ext.widget("addBBZTWin");
															}
														} ]
													},
													{
														dock : 'bottom',
														xtype : 'pagingtoolbar',
														store : bbztStore,
														plugins : [ {
															ptype : 'resizer'
														} ],
														pageSize : indicator.pagesize,
														displayInfo : true,
														displayMsg : '��ʾ {0} - {1} �������� {2} ��',
														emptyMsg : 'û������'
													}
											]
										});
						Ext.define(
										"BbtimeGrid",
										{// ����grid
											extend : 'Ext.grid.Panel',
											alias : 'widget.Bbtime',
											region : 'center',
											width : 350,
											margin : '0 0 0 3',
											columns : [ // ��ģʽ
											{
												xtype : 'rownumberer',
												header : "���",
												width : 40
											}, {
												text : "Ԥ�����",
												dataIndex : 'ysnd',
												width : 80
											}, {
												text : "��ʼ����",
												dataIndex : 'qsrq',
												width : 80
											}, {
												text : "��ֹ����",
												dataIndex : 'jzrq',
												width : 80
											} ],
											store : bbtimeStore,
											selType : 'checkboxmodel',// �趨ѡ��ģʽ
											dockedItems : [
													{
														xtype : 'toolbar',
														dock : 'top',
														items : [
																/*
																 * {
																 * xtype:'button',
																 * text: '�����'
																 * ,icon:'images/grid_add.png',
																 *
																 * handler:function(btn){
																 * var data =
																 * btn.up('grid').getSelectionModel().getSelection();
																 * if(data.length ==
																 * 0){
																 * Ext.Msg.alert("��ʾ","������Ҫѡ��һ������");
																 * return;
																 * }else{ var
																 * selectData =
																 * data[0].data;
																 *  } } },
																 */
																{
																	xtype : 'button',
																	text : '���������Ϣ',
																	icon : 'images/grid_add.png',
																	handler : function(btn) {
																		// ��ȡ��������ID
																		var condition = bbtimeStore.proxy.extraParams.condition;
																		if (condition) {
																			Ext.widget("addBBTIMEWin",Ext.decode(condition));
																		} else {
																			Ext.Msg.alert("��ʾ","��ѡ�񱨱�����!!!");
																		}
																	}
																},
																{
																	xtype : 'button',
																	text : 'Ԥ��',
																	action : 'preView',
																	icon : 'images/shape_group.png',
																	handler : function(btn) {
																		var data = btn.up('grid').getSelectionModel().getSelection();
																		if (data.length == 0) {
																			Ext.Msg.alert("��ʾ","��ѡ�񱨱��ʱ������!!!");
																			return;
																		} else {
																			var selectData = data[0].data;
																			var timeId = selectData.id;
																			if (indicator.tempId == "") {
																				return;
																			}
																			
																			
																			//�ж��Ƿ���ģ��
																			if(indicator.template =='1'){
																				//����ģ��  Ĭ����ΪORG
																			$.ajax({
																						type : "GET",
																						url : indicator.requrl
																								+ "/getDatas.do?timeId="
																								+ timeId
																								+ "&rowFlag=org"
																								+ "&rm="
																								+ Math.random(),
																						dataType : "json",
																						async : false,
																						success : function(data) {
																							if (data != null
																									&& data.api_code == 0) {
																								
																								regValue = data.result;
																								
																								for(var k in indicator.regData){
																										var  regTemp = indicator.regData[k];
																										//��ȡ��Ԫ���ֵ
																										var j =regTemp.col;
																										var i =regTemp.row;	
																										var key = regTemp.jgid+"-"+regTemp.zbid;
																										if(regTemp){
																										var year = regTemp.zbnd;
																										var quarter = regTemp.zbjd;
																										var month = regTemp.zbmonth;
																										key = key+"-"+year+"-"+quarter+"-"+month;
																										}
																										
																										var value = "";
																										if (regValue[key]) {
																											value = regValue[key];
																										} else {
																											value = "0";
																										}
																										cell.S(parseInt(j),parseInt(i),0,value);
																									
																								}
																								cell.CalculateAll();
																								cell.MoveToCell(4,4);
																							}
																						}
																					});
																				
																			
																				return;
																			}//����ģ��  add by caol
																			
																			//��ģ��
																			var resultData = [];
																			// ["23":data,"33":data]
																			var rowReg = {};
																			var colReg = {};
																			// {"reg":[{"value":"2","text":"����ҽԺ","row":3,"col":1,"key":"31","type":"org"},
																			// {"value":"3","text":"����ҽԺ","row":4,"col":1,"key":"41","type":"org"},
																			// {"value":"1","text":"�ż����˴���","row":2,"col":10,"key":"210","type":"zb"}],"rowReg":{"2":"1"},"colReg":{"1":"3"}}
																			var rowFlag = "";
																			var tempCol = "";
																			var tempCol2 = "";
																			// �ж��ĸ�����ָ��
																			// ����ͬ��Ϊ��ָ��
																			for ( var i in indicator.regData) {
																				if (indicator.regData[i].type == "zb") {
																					var col = indicator.regData[i].col;
																					if (tempCol == "") {
																						tempCol = col;
																					} else {
																						if (tempCol == col) {
																							rowFlag = "zb";
																						}
																					}
																				} else {
																					var col = indicator.regData[i].col;
																					if (tempCol2 == "") {
																						tempCol2 = col;
																					} else {
																						if (tempCol2 == col) {
																							rowFlag = "org";
																						}
																					}
																				}
																			}
																			// alert(rowFlag);
																			// ָ��ֻ��һ��һ��
																			if (rowFlag == "") {
																				rowFlag = "org";
																			}
																			for ( var i in indicator.regData) {
																				resultData
																						.push(indicator.regData[i]);
																				if (indicator.regData[i].type == rowFlag) {
																					// alert(JSON.stringify(regData[i]));
																					var row = indicator.regData[i].row;
																					// �к�Ϊkey
																					// ��ָ��Ϊvalue
																					rowReg[row] = indicator.regData[i].value;
																				} else {
																					var col = indicator.regData[i].col;
																					// �к�Ϊkey
																					// ��ָ��Ϊvalue
																					colReg[col] = indicator.regData[i].value;
																				}
																			}
																			// alert(Ext.encode(rowReg));
																			$.ajax({
																						type : "GET",
																						url : indicator.requrl
																								+ "/getDatas.do?timeId="
																								+ timeId
																								+ "&rowFlag="
																								+ rowFlag
																								+ "&rm="
																								+ Math.random(),
																						dataType : "json",
																						async : false,
																						success : function(data) {
																							if (data != null
																									&& data.api_code == 0) {
																								
																								
																								
																								
																								regValue = data.result;
																								
																								var regTemp={};
																	    	   					for(var i in indicator.loadData.reg){
																	    	   						
																	    	   							var 	temp = indicator.loadData.reg[i];
																	    	   							if(temp.type =='zb'){
																	    	   								var key =temp.col;
																	    	   								regTemp[key]=temp;
																	    	   							}
																	    	   					}
																								
																								// alert(JSON.stringify(regValue));
																								for ( var i in rowReg) {
																									for ( var j in colReg) {
																										var key = rowReg[i]+ "-" + colReg[j];
																										//��REG�л�ȡ  �� ���� �� ƴװKEYֵ
																										//��ʵ������ֵ  ������һƥ��KEYֵ  �� �����е�ֵ  ָ�������ڵڶ���
																										// add by caol
																										
																										var  temp;
																										 if(rowFlag=='org'){
																											 temp  = regTemp[j];
																										 }else{
																											 temp  = regTemp[i];
																										 }
																										
																									//	alert(Ext.encode(regTemp));
																										if(temp){
																										var year = temp.zbnd;
																										var quarter = temp.zbjd;
																										var month = temp.zbmonth;
																										key = key+"-"+year+"-"+quarter+"-"+month;
																										}
																									//	alert(key);
																										var value = "";
																										if (regValue[key]) {
																											value = regValue[key];
																										} else {
																											value = "0";
																										}
																										cell.S(parseInt(j),parseInt(i),0,value);
																									}
																								} 
																								cell.CalculateAll();
																								cell.MoveToCell(4,4);
																							}
																						}
																					});
																		}
																	}
																},
																{
																	xtype : 'button',
																	text : '��������',
																	action : 'import',
																	icon : 'images/computer_add.png',
																	handler : function(btn) {
																		Ext.MessageBox.confirm('��ʾ','�Ƿ�ȷ�����룿�����Ǳ�������!',
																						function(conbtn) {
																							if (conbtn == 'yes') {
																								if (!Ext.isEmpty(indicator.loadData)) {
																									var data = btn.up('grid').getSelectionModel().getSelection();
																									if (data.length == 0) {
																										Ext.Msg.alert("��ʾ","��ѡ�񱨱��ʱ������!!!");
																										return;
																									} else {
																										var importDatas = [];
																										var rowFlag ;
																										var selectData = data[0].data;
																										var timeId = selectData.id;
																										//�ж��Ƿ���ģ��
																										if(indicator.template =='1'){
																											//����ģ��  Ĭ����ΪORG
																											rowFlag ='org';
																											for(var k in indicator.regData){
																											var  regTemp = indicator.regData[k];
																											
																											//��ȡ��Ԫ���ֵ
																											var j =regTemp.col;
																											var i =regTemp.row;
																											
																											// ��������
																												var type = cell.GetCellDataType(
																																parseInt(j),
																																parseInt(i),
																																0);
																												var value;
																												switch (type) {
																												case 0:
																													value = "";
																													break;
																												case 1:
																													value = cell.GetCellString(
																																	parseInt(j),
																																	parseInt(i),
																																	0);
																													break;
																												case 2:
																													value = cell.GetCellDouble(
																																	parseInt(j),
																																	parseInt(i),
																																	0);
																													break;
																												}
																											
																											
																											var year ="";
																											var quarter ="";
																											var month ="";
																												
																											if(regTemp){
																											 year = regTemp.zbnd;
																											 quarter = regTemp.zbjd;
																											 month = regTemp.zbmonth;
																											}
																											var obj = {
																												row : regTemp.jgid,
																												col : regTemp.zbid,
																												value : value,
																												year:year,
																												quarter:quarter,
																												month:month
																											}
																											importDatas.push(obj);
																											}
																										
																										}else{
																										
																										var rowReg = indicator.loadData.rowReg;
																										var colReg = indicator.loadData.colReg;
																										// ��ָ��
																										 rowFlag = indicator.loadData.rowFlag;
																										 
																										 var regTemp={};
																			    	   					for(var i in indicator.loadData.reg){
																			    	   						
																			    	   							var 	temp = indicator.loadData.reg[i];
																			    	   							if(temp.type =='zb'){
																			    	   								var key =temp.col;
																			    	   								regTemp[key]=temp;
																			    	   							}
																			    	   					}
																										 
																										// alert(rowFlag);
																										
																										for ( var i in rowReg) {
																											for ( var j in colReg) {
																												// ��������
																												var type = cell.GetCellDataType(
																																parseInt(j),
																																parseInt(i),
																																0);
																												var value;
																												switch (type) {
																												case 0:
																													value = "";
																													break;
																												case 1:
																													value = cell.GetCellString(
																																	parseInt(j),
																																	parseInt(i),
																																	0);
																													break;
																												case 2:
																													value = cell.GetCellDouble(
																																	parseInt(j),
																																	parseInt(i),
																																	0);
																													break;
																												}
																												
																												var  temp;
																												 if(rowFlag=='org'){
																													 temp  = regTemp[j];
																												 }else{
																													 temp  = regTemp[i];
																												 }
																												//alert(Ext.encode(indicator.loadData.reg));
																												//���Ӽ�����Ϣ
																												var year ="";
																												var quarter ="";
																												var month ="";
																												
																												if(temp){
																												 year = temp.zbnd;
																												 quarter = temp.zbjd;
																												 month = temp.zbmonth;
																												}
																												var obj = {
																													row : rowReg[i],
																													col : colReg[j],
																													value : value,
																													year:year,
																													quarter:quarter,
																													month:month
																												}
																												importDatas.push(obj);
																											}
																										}
																										}
																										// ��������
																										Ext.Ajax.request({
																													url : indicator.requrl
																															+ '/addBCBF1Datas.do',
																													method : 'POST',
																													timeout : 3000,
																													async : false,
																													params : {
																														formDatas : Ext.encode(importDatas),
																														timeId : timeId,
																														rowFlag : rowFlag
																													},
																													success : function(resp,opts) {
																														var obj = Ext
																																.decode(resp.responseText);
																														if (obj.success == true) {
																															commonFunction.showMessage('�����ɹ�',"����ɹ�");
																														} else {
																															commonFunction.showMessage('����ʧ��',"����ʧ��");
																														}
																														return obj;
																													}
																												})
																									}
																								}
																							}
																						})// end
																							// confirm
																	}
																}
														]
													},
													{
														dock : 'bottom',
														xtype : 'pagingtoolbar',
														store : bbtimeStore,
														plugins : [ {
															ptype : 'resizer'
														} ],
														pageSize : indicator.pagesize,
														displayInfo : true,
														displayMsg : '��ʾ {0} - {1} �������� {2} ��',
														emptyMsg : 'û������'
													}
											]
										});
						// ָ�����崰��
						Ext.define("bsoft.bbztpanel", {
							extend : 'Ext.panel.Panel',
							alias : 'widget.bbztpanel',
							split : true,
							frame : true,
							width : 600,
							height : 350,
							// renderTo: document.body,
							layout : 'border',
							title : '��ѡ�񱨱�����',
							initComponent : function() {
								this.items = [ {
									xtype : 'Bbzt'
								}, {
									xtype : 'Bbtime'
								} ]
								this.callParent(arguments);
							}
						});
						// ��ǰgrid��store
						var currentStore;
						Ext.define(
										"zbPanel",
										{
											extend : "Ext.tab.Panel",
											alias : 'widget.zbPanel',
											// renderTo:"tabPanelDiv",
											// title:title,
											// bodyStyle:'padding:15px 15px
											// 15px',
											tbar : [
													{
														xtype : 'textfield',
														id : 'gridSearchText'
													},
													{
														xtype : 'button',
														text : '��ѯ',
														action : 'search',
														icon : 'cell/images/grid_find.png',
														handler : function(btn) {
															var search = Ext.getCmp("gridSearchText").getValue();
															// �޲�ѯ����
															if (Ext.isEmpty(search)) {
																currentStore.proxy.extraParams.condition = "";
																currentStore.load();
															} else {
																currentStore.proxy.extraParams.condition = Ext.encode({'name' : search});
																currentStore.load();
															}
														}
													},
													{
														xtype : 'button',
														text : '����',
														action : 'add',
														icon : 'cell/images/grid_add.png',
														id : 'addReg',
														handler : function(btn) {
															if (indicator.tempId == "") {
																return;
															}
															var resultData = [];
															// ["23":data,"33":data]
															var rowReg = {};
															var colReg = {};
															// {"reg":[{"value":"2","text":"����ҽԺ","row":3,"col":1,"key":"31","type":"org"},
															// {"value":"3","text":"����ҽԺ","row":4,"col":1,"key":"41","type":"org"},
															// {"value":"1","text":"�ż����˴���","row":2,"col":10,"key":"210","type":"zb"}],"rowReg":{"2":"1"},"colReg":{"1":"3"}}
															var rowFlag = "";
															var tempCol = "";
															var tempCol2 = "";
															var regData = indicator.regData;
															// alert(JSON.stringify(regData));
															// �ж��ĸ�����ָ�� ����ͬ��Ϊ��ָ��
															for ( var i in regData) {
																if(regData[i].zbnd){
																}else{
																	regData[i].zbnd="";
																}
																if(regData[i].zbjd){
																}else{
																	regData[i].zbjd="";
																}
																if(regData[i].zbmonth){
																}else{
																	regData[i].zbmonth="";
																}
																
																regData[i].key = regData[i].row
																		+ '-'
																		+ regData[i].col;
																if (regData[i].type == "zb") {
																	var col = regData[i].col;
																	if (tempCol == "") {
																		tempCol = col;
																	} else {
																		if (tempCol == col) {
																			rowFlag = "zb";
																		}
																	}
																} else {
																	var col = regData[i].col;
																	if (tempCol2 == "") {
																		tempCol2 = col;
																	} else {
																		if (tempCol2 == col) {
																			rowFlag = "org";
																		}
																	}
																}
															}
															// alert(rowFlag);
															// ָ��ֻ��һ��һ��
															if (rowFlag == "") {
																rowFlag = "org";
															}
															for ( var i in regData) {
																resultData
																		.push(regData[i]);
																if (regData[i].type == rowFlag) {
																	// alert(JSON.stringify(regData[i]));
																	var row = regData[i].row;
																	// �к�Ϊkey
																	// ��ָ��Ϊvalue
																	rowReg[row] = regData[i].value;
																} else {
																	var col = regData[i].col;
																	// �к�Ϊkey
																	// ��ָ��Ϊvalue
																	colReg[col] = regData[i].value;
																}
															}
															if (resultData.length == 0) {
																alert("������ȡ����ʽ");
																return;
															}
															// ��ȡ���еĹ�ʽ
															// var allRow
															// =cell.rows();
															// var allCol =
															// cell.cols();
															var allRow = 50;
															var allCol = 256;
															var formulaList = [];
															for ( var i = 0; i < allRow; i++) {
																for (j = 0; j < allCol; j++) {
																	var result = cell.IsFormulaCell(j,i,0);
																	// �ǹ�ʽ
																	if (result > 0) {
																		var formulaReg = cell.GetFormula(j,i,0);
																		var temp = {
																			row : i,
																			col : j,
																			formulaReg : formulaReg
																		}
																		formulaList.push(temp);
																	}
																}
															}
															// alert(Ext.encode(formulaList));
															var result = {
																reg : resultData,
																rowReg : rowReg,
																colReg : colReg,
																rowFlag : rowFlag,
																formulaList : formulaList
															};
															// alert(Ext.encode(result));
															// alert(Ext.encode(indicator.tempId));
															Ext.Ajax.request({
																		url : indicator.requrl
																				+ "/saveReg.do",
																		method : 'POST',
																		timeout : 3000,
																		async : false,
																		params : {
																			reg : Ext.encode(result),
																			id : indicator.tempId,
																			tempId : indicator.tempId,
																			setValPer:Ext.encode(perSetValBatchData)
																			
																		},
																		success : function(resp,opts) {
																			var obj = Ext.decode(resp.responseText);
																			if (obj.success == true) {
																				commonFunction.showMessage('�����ɹ�',"����ɹ�");
																			} else {
																				commonFunction.showMessage('����ʧ��',"����ʧ��");
																			}
																			return obj;
																		}
																	});
														}
													},
													{
														xtype : 'button',
														text : '���渴��ģ��',
														action : 'add',
														icon : 'cell/images/grid_add.png',
														id : 'addComplexReg',
														handler : function(btn) {
															if (indicator.tempId == "") {
																return;
															}
															var resultData = [];
															var regData = indicator.regData;
															
															for ( var i in regData) {
																resultData
																		.push(regData[i]);
															}
															
															var allRow = 50;
															var allCol = 256;
															var formulaList = [];
															for ( var i = 0; i < allRow; i++) {
																for (j = 0; j < allCol; j++) {
																	var result = cell.IsFormulaCell(j,i,0);
																	// �ǹ�ʽ
																	if (result > 0) {
																		var formulaReg = cell.GetFormula(j,i,0);
																		var temp = {
																			row : i,
																			col : j,
																			formulaReg : formulaReg
																		}
																		formulaList.push(temp);
																	}
																}
															}
															
															var result = {
																reg : resultData,
																formulaList : formulaList
															};
															
															Ext.Ajax.request({
																		url : indicator.requrl
																				+ "/saveReg.do",
																		method : 'POST',
																		timeout : 3000,
																		async : false,
																		params : {
																			reg : Ext.encode(result),
																			id : indicator.tempId,
																			tempId : indicator.tempId,
																			setValPer:Ext.encode(perSetValBatchData),
																			template:1
																		},
																		success : function(resp,opts) {
																			var obj = Ext.decode(resp.responseText);
																			if (obj.success == true) {
																				commonFunction.showMessage('�����ɹ�',"����ɹ�");
																			} else {
																				commonFunction.showMessage('����ʧ��',"����ʧ��");
																			}
																			return obj;
																		}
																	});
															
														}
													
													},
													{
														xtype : 'button',
														text : 'ȡ��',
														action : 'cancel',
														icon : 'cell/images/grid_delete.png',
														id : 'cancelReg',
														handler : function(btn) {
															var row = cell.GetCurrentRow();
															var col = cell.GetCurrentCol();
															var key = row + "-"+ col;
															// alert(Ext.encode(indicator.regData));
															if (indicator.regData[key]) {
																// alert(key);
																delete indicator.regData[key];
															}
															cell.S(col, row, 0,"");
															cell.MoveToCell(col, row);
														}
													}
											],
											items : [
													{
														xtype : 'orgGrid',
														listeners : {
															activate : function(component,opts) {
																// ��ʾ�����ȡ����ť
																Ext.getCmp('cancelReg').setVisible(true);
																Ext.getCmp('addReg').setVisible(true);
																Ext.getCmp('addComplexReg').setVisible(true);
																
																currentStore = component.store;
																currentStore.load();
															},
															itemdblclick : function(view,record,item,index, e,eOpts) {
																// ����ID
																var value = record.get("id");
																// �������
																var text = record.get("jgjc");
																var row = cell.GetCurrentRow();
																var col = cell.GetCurrentCol();
																var type = "org";
																var key = row
																		+ "-"
																		+ col;
																var data = {
																	value : value,
																	text : text,
																	row : row,
																	col : col,
																	key : key,
																	type : type
																}
																indicator.regData[key] = data;
																// resultData.push(data);
																var display = "["
																		+ text
																		+ "]";
																cell.S(col,row,0,display);
																cell.MoveToCell(col,row);
															}
														}
													},
													{
														xtype : 'ZBGrid',
														listeners : {
															activate : function(
																	component,
																	opts) {
																// ��ʾ�����ȡ����ť
																Ext.getCmp('cancelReg').setVisible(true);
																Ext.getCmp('addReg').setVisible(true);
																Ext.getCmp('addComplexReg').setVisible(true);
																currentStore = component.store;
																currentStore.load();
																
																//������ǰ�༭�ġ����ñ༭��Ԫ������
																Ext.Ajax.request({
																	url : indicator.requrl+ '/getSetValBatch.do',
																	method : 'POST',
																	timeout : 3000,
																	async : false,
																	params : {
																		//orgId : jgbm,
																		tempId : indicator.tempId
																	},
																	success : function(resp,opts) {
																		var obj = Ext.decode(resp.responseText);
																		if (obj.success == true) {
																			//����������
															   				if(obj.pageModel && obj.pageModel.datas){
															   					for(var j in obj.pageModel.datas){
															   						perSetValBatchData=Ext.decode(obj.pageModel.datas[j].reg);
															   						for(var i in perSetValBatchData){
															   							var temp = perSetValBatchData[i];
															   							
															   							
															   							/*var type = cell.GetCellDataType(parseInt(temp.col),parseInt(temp.row),0);
																						var cellVal;
																						switch (type) {
																						case 0:
																							cellVal = "";
																							break;
																						case 1:
																							cellVal = cell.GetCellString(parseInt(temp.col),parseInt(temp.row),0);
																							break;
																						case 2:
																							cellVal = cell.GetCellDouble(parseInt(temp.col),parseInt(temp.row),0);
																							break;
																						}*/
															   							
																   						cell.S(temp.col,temp.row,0,temp.val);
																   						cell.SetCellBackColor(temp.col,temp.row,0,6);
															   						}
															   					}
															   				}
																		} else {
																		}
																	}
																})
																
															},
															itemdblclick : function(view,record,item,index, e,eOpts) {
																// ָ��
																var value = record.get("id");
																// ָ������
																var text = record.get("zbmc");
																var row = cell.GetCurrentRow();
																var col = cell.GetCurrentCol();
																var type = "zb";
																var key = row
																		+ "-"
																		+ col;
																var data = {
																	value : value,
																	text : text,
																	row : row,
																	col : col,
																	key : key,
																	type : type,
																	zbnd : "",
																	zbjd : "",
																	zbmonth : ""
																}
																indicator.regData[key] = data;
																// resultData.push(data);
																var display = "["
																		+ text
																		+ "]";
																cell.S(col,row,0,display);
																cell.MoveToCell(col,row);
																
															}
														}
													},
													{
														xtype : 'bbztpanel',
														listeners : {
															activate : function(
																	component,
																	opts) {
																currentStore = bbztStore;
																currentStore.load();
																// ���ر����ȡ����ť
																Ext.getCmp('cancelReg').setVisible(false);
																				
																Ext.getCmp('addReg').setVisible(false);
																Ext.getCmp('addComplexReg').setVisible(false);
															}
														}
													},
													{
														xtype : 'perGrid',
														listeners : {
															activate : function(
																	component,
																	opts) {
																// ���ر����ȡ����ť
																Ext.getCmp('cancelReg').setVisible(false);
																Ext.getCmp('addReg').setVisible(false);
																Ext.getCmp('addComplexReg').setVisible(false);
																currentStore = component.store;
																currentStore.load();
																		
															},
															itemclick : function(view,record,item,index, e,eOpts) {
																// alert(11);
																// alert(Ext.encode(perReadData));
																// ȡ����һ�ε�ֻ��
																for ( var i in perReadData) {
																	var temp = perReadData[i];
																	// ȡ����һ�ε�ֻ��
																	cell.SetCellInput(temp.col,temp.row,0,0);
																	cell.SetCellBackColor(temp.col,temp.row,0,-1);
																}
																// ȡ����һ�ε�����
																for ( var i in perHiddenData) {
																	var temp = perHiddenData[i];
																	// ��������
																	// cell.SetCellShowHide
																	// (temp.col,
																	// temp.row,
																	// 0, true);
																	cell.SetCellBackColor(temp.col,temp.row,0,-1);
																}
																var jgbm = record.get("jgbm");
																Ext.Ajax.request({
																			url : indicator.requrl+ '/getCellPer.do',
																			method : 'POST',
																			timeout : 3000,
																			async : false,
																			params : {
																				orgId : jgbm,
																				tempId : indicator.tempId
																			},
																			success : function(resp,opts) {
																				var obj = Ext.decode(resp.responseText);
																				if (obj.success == true) {
																					// ֻ��
																					if (obj.result&& obj.result.readPer) {
																						perReadData = Ext.decode(obj.result.readPer);
																						for ( var i in perReadData) {
																							var temp = perReadData[i];
																							// ����ֻ��
																							cell.SetCellInput(temp.col,temp.row,0,5);
																							cell.SetCellBackColor(temp.col,temp.row,0,2);
																						}
																						// alert(perReadData);
																					}
																					// ����
																					if (obj.result&& obj.result.showPer) {
																						perHiddenData = Ext.decode(obj.result.showPer);
																						for ( var i in perHiddenData) {
																							var temp = perHiddenData[i];
																							// ��������
																							// cell.SetCellShowHide
																							// (temp.col,
																							// temp.row,
																							// 0,
																							// true);
																							cell.SetCellBackColor(temp.col,temp.row,0,3)
																						}
																					}
																				} else {
																				}
																			}
																		})
															}
														}
													} ]
										})
						// ָ�괰��
						Ext.define("bsoft.zbwin", {
							extend : 'Ext.window.Window',
							alias : 'widget.zbwin',
							width : 600,
							height : 400,
							hidden : false,
							maximizable : true,
							modal : false,
							layout : 'fit',
							autoShow : true,
							initComponent : function() {
								this.items = [
								{
									xtype : 'zbPanel'
								} ]
								this.callParent(arguments);
							}
						})
						return "zbwin";
					},
					// ��ʷ��¼
					getDataLogWin : function() {
						var cellXYZ = cell.GetSelectRangeJ(1) + "-"+ cell.GetSelectRangeJ(0);
						// model
						Ext.define('dataLogModel', {
							extend : 'Ext.data.Model',
							fields : [ {
								name : 'operator',
								type : 'string',
								sortable : true
							}, {
								name : 'operationtime',
								type : 'string',
								sortable : true
							}, {
								name : 'value',
								type : 'string',
								sortable : true
							} ]
						});
						// store
						var logsStore = Ext.create('Ext.data.Store', {
							pageSize : indicator.pagesize,
							model : 'dataLogModel',
							autoLoad : true,
							proxy : {
								type : 'ajax',
								url : indicator.requrl+'/listBFDataLogs.do?ystzdid='+indicator.ystzdId+'&cellXYZ='+cellXYZ+'&tempId='+indicator.tempId,
								actionMethods : {
									read : 'POST'
								},
								reader : {
									type : 'json',
									root : function(o) {
										if (o.api_code == 1&& o.success == false) {
											// commonFunction.showMessage('����ʧ��',o.error_msg);
										} else {
											return o.result;
										}
									},
									totalProperty : 'pageModel.count'
								}
							}
						});
						// ����grid
						Ext.define("logGrid", {
							extend : 'Ext.grid.Panel',
							alias : 'widget.logGrid',
							// title:'��ѡ�����',
							layout : 'fit',
							columns : [ // ��ģʽ
							{
								xtype : 'rownumberer',
								header : "���",
								width : 40
							}, {
								text : "������",
								dataIndex : 'operator',
								width : 110
							}, {
								text : "����ʱ��",
								dataIndex : 'operationtime',
								width : 120
							}, {
								text : "��¼ֵ",
								dataIndex : 'value',
								width : 80
							} ],
							store : logsStore,
							dockedItems : [ {
								dock : 'bottom',
								xtype : 'pagingtoolbar',
								store : logsStore,
								// plugins: [{ptype:'resizer'}],
								// pageSize: indicator.pagesize,
								displayInfo : true,
								displayMsg : '��ʾ {0} - {1} �������� {2} ��',
								emptyMsg : 'û������'
							} ]
						});
						Ext.define("bsoft.dataLogWin", {
							extend : 'Ext.window.Window',
							alias : 'widget.dataLogWin',
							title : '��ʷ��¼',
							width : 410,
							height : 200,
							hidden : false,
							maximizable : true,
							modal : false,
							layout : 'fit',
							autoShow : true,
							initComponent : function() {
								this.items = [ {
									xtype : 'logGrid'
								} ]
								this.callParent(arguments);
							}
						});
						return 'dataLogWin';
					},
					// ������¼
					getPerWin : function() {
						var row = cell.GetSelectRangeJ(1);
					 	var col = cell.GetSelectRangeJ(0);
						// ��������鿴model
						Ext.define('dataLogModel', {
							extend : 'Ext.data.Model',
							fields : [ {
								name : 'sprjg',
								type : 'string',
								sortable : true
							}, {
								name : 'spr',
								type : 'string',
								sortable : true
							}, {
								name : 'spsjstr',
								type : 'string',
								sortable : true
							}, {
								name : 'spyj',
								type : 'string',
								sortable : false
							} ]
						});
						// �������store
						var logsStore = Ext.create('Ext.data.Store', {
							pageSize : indicator.pagesize,
							model : 'dataLogModel',
							autoLoad : true,
							proxy : {type : 'ajax',
								url : indicator.requrl+ '/listCellbgspyjjl.do?templateid='+indicator.tempId+'&ystzdid='+indicator.ystzdid
								+'&timeid='+indicator.timeid+'&row='+row+'&col='+col,
								actionMethods : {read :'POST'},
								reader : {
									type : 'json',
									root : function(o) {
										if (o.api_code == 1&& o.success == false) {
										} else {
											return o.pageModel.datas;
										}
									},
									totalProperty : 'pageModel.count'
								}
							}
						});
						// �����������grid
						Ext.define("logGrid", {
							extend : 'Ext.grid.Panel',
							alias : 'widget.logGrid',
							region : 'center',
							// title:'��ѡ�����',
							layout : 'fit',
							columns : [ // ��ģʽ
							{
								xtype : 'rownumberer',
								header : "���",
								width : 20
							}, {
								text : "�����˻���",
								dataIndex : 'sprjg',
								width : 60
							}, {
								text : "������",
								dataIndex : 'spr',
								width : 60
							}, {
								text : "����ʱ��",
								dataIndex : 'spsjstr',
								width : 110
							} , {
								text : "�������",
								dataIndex : 'spyj',
								width : 120
							}],
							store : logsStore,
							dockedItems : [ {
								dock : 'bottom',
								xtype : 'pagingtoolbar',
								store : logsStore,
								// plugins: [{ptype:'resizer'}],
								// pageSize: indicator.pagesize,
								displayInfo : true,
								displayMsg : '��ʾ {0} - {1} �������� {2} ��',
								emptyMsg : 'û������'
							} ]
						});
						//���������
						Ext.define('perForm', {
							extend : 'Ext.form.Panel',
							alias : 'widget.perForm',
							region : 'north',
							initComponent : function() {
								this.items = [ { // �Ƿ�Ϊ�գ��Լ���ʾ����
									xtype : 'fieldset',
									title : '�������',
									collapsible : true,
									items : [ {
										xtype : 'textfield',
										fieldLabel : '�������',
										name : 'spyj'
									}]
								}],
								this.buttons=[{text: '����',
							            		 disabled: true,
							            		 formBind: true,
							            		 action:'formAdd',
							            		 handler : function(btn) {
							            			 var row = cell.GetSelectRangeJ(1);
							            			 var col = cell.GetSelectRangeJ(0);
							            			 var form = this.up('form').getForm();
							            			 var spyj = form.findField('spyj').getValue();
							            			 if( Ext.isEmpty(spyj)){
							            				 Ext.Msg.alert("��ʾ","����д���������");
							            				 return;
									                 }
							            			 var formDatas={templateid:indicator.tempId,
							            					 ystzdid:indicator.ystzdid,
							            					 timeid:indicator.timeid,
							            					 row:row,
							            					 col:col,
							            					 spyj:spyj};
							            			 Ext.Ajax.request({
															url : indicator.requrl+ '/addCellbgspyj.do',
															method : 'POST',
															timeout : 3000,
															async : true,
															params : formDatas,
															success:function(){
																Ext.MessageBox.alert('��Ϣ','��������ύ�ɹ�!');
																logsStore.load();
															}
														});
							            			 //btn.up('window').down('logGrid').store.load();
							            		 }
							            	   }
							            	]
							this.callParent(arguments);
							}
						});
						//�������������
						Ext.define("bsoft.dataLogWin", {
							extend : 'Ext.window.Window',
							alias : 'widget.dataLogWin',
							title : '�������',
							width : 410,
							height : 400,
							hidden : false,
							maximizable : true,
							modal : false,
							layout : 'border',
							autoShow : true,
							initComponent : function() {
								this.items = [ {
									xtype : 'perForm'
								}, {
									xtype : 'logGrid'
								}]
								this.callParent(arguments);
							}
						});
						return 'dataLogWin';
					},
					// ������¼
					getPerWin2 : function() {
						var row = cell.GetSelectRangeJ(1);
					 	var col = cell.GetSelectRangeJ(0);
						// ��������鿴model
						Ext.define('dataLogModel', {
							extend : 'Ext.data.Model',
							fields : [ {
								name : 'sprjg',
								type : 'string',
								sortable : true
							}, {
								name : 'spr',
								type : 'string',
								sortable : true
							}, {
								name : 'spsjstr',
								type : 'string',
								sortable : true
							}, {
								name : 'spyj',
								type : 'string',
								sortable : false
							} ]
						});
						// �������store
						var logsStore = Ext.create('Ext.data.Store', {
							pageSize : indicator.pagesize,
							model : 'dataLogModel',
							autoLoad : true,
							proxy : {type : 'ajax',
								url : indicator.requrl+ '/listCellbgspyjjl.do?templateid='+indicator.tempId+'&ystzdid='+indicator.ystzdid
								+'&timeid='+indicator.timeid+'&row='+row+'&col='+col,
								actionMethods : {read :'POST'},
								reader : {
									type : 'json',
									root : function(o) {
										if (o.api_code == 1&& o.success == false) {
										} else {
											return o.pageModel.datas;
										}
									},
									totalProperty : 'pageModel.count'
								}
							}
						});
						// �����������grid
						Ext.define("logGrid", {
							extend : 'Ext.grid.Panel',
							alias : 'widget.logGrid',
							region : 'center',
							// title:'��ѡ�����',
							layout : 'fit',
							columns : [ // ��ģʽ
							{
								xtype : 'rownumberer',
								header : "���",
								width : 20
							}, {
								text : "�����˻���",
								dataIndex : 'sprjg',
								width : 60
							}, {
								text : "������",
								dataIndex : 'spr',
								width : 60
							}, {
								text : "����ʱ��",
								dataIndex : 'spsjstr',
								width : 110
							} , {
								text : "�������",
								dataIndex : 'spyj',
								width : 120
							}],
							store : logsStore,
							dockedItems : [ {
								dock : 'bottom',
								xtype : 'pagingtoolbar',
								store : logsStore,
								// plugins: [{ptype:'resizer'}],
								// pageSize: indicator.pagesize,
								displayInfo : true,
								displayMsg : '��ʾ {0} - {1} �������� {2} ��',
								emptyMsg : 'û������'
							} ]
						});
						//�������������
						Ext.define("bsoft.dataLogWin", {
							extend : 'Ext.window.Window',
							alias : 'widget.dataLogWin',
							title : '�������',
							width : 410,
							height : 400,
							hidden : false,
							maximizable : true,
							modal : false,
							layout : 'border',
							autoShow : true,
							initComponent : function() {
								this.items = [ {
									xtype : 'logGrid'
								}]
								this.callParent(arguments);
							}
						});
						return 'dataLogWin';
					},
					// ����ֵ
					getPfzWin : function() {
						var row = cell.GetSelectRangeJ(1);
					 	var col = cell.GetSelectRangeJ(0);
						// ����ֵ�鿴model
						Ext.define('pfzModel', {
							extend : 'Ext.data.Model',
							fields : [ {
								name : 'pfrjg',
								type : 'string',
								sortable : true
							}, {
								name : 'pfr',
								type : 'string',
								sortable : true
							}, {
								name : 'pfsjstr',
								type : 'string',
								sortable : true
							}, {
								name : 'pfz',
								type : 'number',
								sortable : false
							} ]
						});
						// ����ֵstore
						var pfzsStore = Ext.create('Ext.data.Store', {
							pageSize : indicator.pagesize,
							model : 'pfzModel',
							autoLoad : true,
							proxy : {type : 'ajax',
								url : indicator.requrl+ '/listCellbgpfzjl.do?templateid='+indicator.tempId+'&ystzdid='+indicator.ystzdid
								+'&timeid='+indicator.timeid+'&row='+row+'&col='+col,
								actionMethods : {read :'POST'},
								reader : {
									type : 'json',
									root : function(o) {
										if (o.api_code == 1&& o.success == false) {
										} else {
											return o.pageModel.datas;
										}
									},
									totalProperty : 'pageModel.count'
								}
							}
						});
						// ��������ֵgrid
						Ext.define("pfzGrid", {
							extend : 'Ext.grid.Panel',
							alias : 'widget.pfzGrid',
							region : 'center',
							// title:'��ѡ�����',
							layout : 'fit',
							columns : [ // ��ģʽ
							{
								xtype : 'rownumberer',
								header : "���",
								width : 20
							}, {
								text : "�����˻���",
								dataIndex : 'pfrjg',
								width : 60
							}, {
								text : "������",
								dataIndex : 'pfr',
								width : 60
							}, {
								text : "����ʱ��",
								dataIndex : 'pfsjstr',
								width : 110
							} , {
								text : "����ֵ",
								dataIndex : 'pfz',
								width : 120
							}],
							store : pfzsStore,
							dockedItems : [ {
								dock : 'bottom',
								xtype : 'pagingtoolbar',
								store : pfzsStore,
								displayInfo : true,
								displayMsg : '��ʾ {0} - {1} �������� {2} ��',
								emptyMsg : 'û������'
							} ]
						});
						//����ֵ��
						Ext.define('pfzForm', {
							extend : 'Ext.form.Panel',
							alias : 'widget.pfzForm',
							region : 'north',
							initComponent : function() {
								this.items = [ { // �Ƿ�Ϊ�գ��Լ���ʾ����
									xtype : 'fieldset',
									title : '��������ֵ',
									collapsible : true,
									items : [ {
										xtype : 'textfield',
										fieldLabel : '����ֵ',
										name : 'pfz'
									}]
								}],
								this.buttons=[
							           	   {
							            		 text: '����',
							            		 disabled: true,
							            		 formBind: true,
							            		 action:'formAdd',
							            		 handler : function(btn) {
							            			 var row = cell.GetSelectRangeJ(1);
							            			 var col = cell.GetSelectRangeJ(0);
							            			 var form = this.up('form').getForm();
							            			 var pfz = form.findField('pfz').getValue();
							            			 if( Ext.isEmpty(pfz)){
							            				 Ext.Msg.alert("��ʾ","����д����ֵ��");
							            				 return;
									                 }
							            			 var formDatas={
							            					 templateid:indicator.tempId,
							            					 ystzdid:indicator.ystzdid,
							            					 timeid:indicator.timeid,
							            					 row:row,
							            					 col:col,
							            					 pfz:pfz
										                    };
							            			 Ext.Ajax.request({
															url : indicator.requrl+ '/addCellbgpfz.do',
															method : 'POST',
															timeout : 3000,
															async : true,
															params : formDatas,
															success:function(){
																Ext.MessageBox.alert('��Ϣ','��������ֵ�ɹ�!');
																pfzsStore.reload();
															}
														});
							            			 //btn.up('window').down('logGrid').store.load();
							            		 }
							            	   }
							            	]
							this.callParent(arguments);
							}
						});
						//����ֵ������
						Ext.define("bsoft.pfzWin", {
							extend : 'Ext.window.Window',
							alias : 'widget.pfzWin',
							title : '��������ֵ',
							width : 410,
							height : 400,
							hidden : false,
							maximizable : true,
							modal : false,
							layout : 'border',
							autoShow : true,
							initComponent : function() {
								this.items = [ {
									xtype : 'pfzForm'
								}, {
									xtype : 'pfzGrid'
								}]
								this.callParent(arguments);
							}
						});
						return 'pfzWin';
					},
					// ���ݷ�Χ
					getDataValidWin : function() {
						Ext.apply(Ext.form.field.VTypes, {
							doubleType : function(v) {
								var r = /^[-\+]?\d+(\.\d+)?$/;
								return r.test(v);
							},
							doubleTypeText : "ֻ����������"
						// myPassMask:/[123]/i //ֻ���������� ��������
						});
						// ָ�괰��
						Ext.define(
										"bsoft.dataValidWin",
										{
											extend : 'Ext.window.Window',
											alias : 'widget.dataValidWin',
											title : '������ע',
											width : 350,
											height : 280,
											hidden : false,
											maximizable : true,
											modal : false,
											layout : 'fit',
											autoShow : true,
											initComponent : function() {
												this.items = [ {
													xtype : 'form',
													bodyStyle : 'padding:15px 15px 15px',
													autoScroll : true,
													defaults : {
														labelAlign : 'left'
													},
													items : [
															{ // �Ƿ�Ϊ�գ��Լ���ʾ����
																xtype : 'fieldset',
																title : '���ݷ�Χ',
																collapsible : true,
																items : [
																		{
																			xtype : 'textfield',
																			fieldLabel : '����',
																			name : 'downLimit',
																			vtype : 'doubleType'
																		},
																		{
																			xtype : 'textfield',
																			fieldLabel : '����',
																			name : 'upLimit',
																			vtype : 'doubleType'
																		} ]
															},
															{ // �Ƿ�Ϊ�գ��Լ���ʾ����
																xtype : 'fieldset',
																title : '˵��',
																collapsible : true,
																items : [ {
																	xtype : 'textareafield',
																	fieldLabel : '˵��',
																	width : 280,
																	name : 'note'
																} ]
															} ],
													buttons : [
															{
																text : 'ȷ��',
																disabled : true,
																formBind : true,
																handler : function(
																		btn) {
																	var up = btn.up('form').getForm().findField('upLimit').getValue();
																	var down = btn.up('form').getForm().findField('downLimit').getValue();
																	var note = btn.up('form').getForm().findField('note').getValue();
																	var tips = "";
																	if (!Ext.isEmpty(up)) {
																		tips += "����: "+ up+ "    ";
																	}
																	if (!Ext.isEmpty(down)) {
																		tips += "����: "+ down+ "    ";
																	}
																	if (!Ext.isEmpty(note)) {
																		tips += "˵��: "+ note;
																	}
																	var startRow = cell.GetSelectRangeJ(1);
																	// ��ʼ��
																	var startCol = cell.GetSelectRangeJ(0);
																	var endRow = cell.GetSelectRangeJ(3);
																	var endCol = cell.GetSelectRangeJ(2);
																	var count = (endRow- startRow + 1)* (endCol- startCol + 1);
																	// alert(count);
																	var rowList = [];
																	var colList = [];
																	for ( var i = startRow; i <= endRow; i++) {
																		rowList.push(i);
																	}
																	for ( var i = startCol; i <= endCol; i++) {
																		colList.push(i);
																	}
																	// ����ֻ����ID��
																	for ( var i in rowList) {
																		for ( var j in colList) {
																			var key = rowList[i]+ "-"+ colList[j];
																			var temp = {
																				row : rowList[i],
																				col : colList[j],
																				up : up,
																				down : down,
																				note : tips,
																				tip :note
																			}
																			indicator.tipData[key] = temp;
																			// ����ֻ��
																			cell.SetCellTip(colList[j],rowList[i],0,tips);
																		}
																	}
																	cell.MoveToCell(endCol,endRow);
																					
																	Ext.Ajax.request({
																				url : indicator.requrl+ '/addDataValid.do',
																				method : 'POST',
																				timeout : 3000,
																				async : true,
																				params : {
																					tempId : indicator.tempId,
																					tipData : Ext.encode(indicator.tipData),
																					ystzdid : indicator.ystzdid,
																					spr : indicator.spr,
																					timeid : indicator.timeid,
																					orgid : indicator.orgid
																				},
																				success : function(resp,opts) {
																					var obj = Ext.decode(resp.responseText);
																					if (obj.success == true) {
																						commonFunction.showMessage('�����ɹ�',"������ֵ��Χ�ɹ�");
																					} else {
																						commonFunction.showMessage('����ʧ��',"������ֵ��Χʧ��");
																					}
																				}
																			});
																	btn.up('window').close();
																}
															},
															{
																text : 'ȡ��',
																disabled : true,
																formBind : true,
																handler : function(btn) {
																	var startRow = cell.GetSelectRangeJ(1);
																	// ��ʼ��
																	var startCol = cell.GetSelectRangeJ(0);
																	var endRow = cell.GetSelectRangeJ(3);
																	var endCol = cell.GetSelectRangeJ(2);
																	var count = (endRow- startRow + 1)* (endCol- startCol + 1);
																	// alert(count);
																	var rowList = [];
																	var colList = [];
																	for ( var i = startRow; i <= endRow; i++) {
																		rowList.push(i);
																	}
																	for ( var i = startCol; i <= endCol; i++) {
																		colList.push(i);
																	}
																	// ����ֻ����ID��
																	for ( var i in rowList) {
																		for ( var j in colList) {
																			var key = rowList[i]
																					+ "-"
																					+ colList[j];
																			if (indicator.tipData[key]) {
																				delete indicator.tipData[key];
																			}
																			// ȥ����ע
																			cell.SetCellTip(colList[j],rowList[i],0,"");
																		}
																	}
																	Ext.Ajax.request({
																				url : indicator.requrl+ '/addDataValid.do',
																				method : 'POST',
																				timeout : 3000,
																				async : true,
																				params : {
																					tempId : indicator.tempId,
																					tipData : Ext.encode(indicator.tipData)
																				},
																				success : function(resp,opts) {
																					var obj = Ext.decode(resp.responseText);
																					if (obj.success == true) {
																						commonFunction.showMessage('�����ɹ�',"������ֵ��Χ�ɹ�");
																					} else {
																						commonFunction.showMessage('����ʧ��',"������ֵ��Χʧ��");
																					}
																				}
																			});
																	btn.up('window').close();
																}
															} ]
												} ]
												this.callParent(arguments);
											}
										})
						return "dataValidWin";
					}
				})
var templateZBWinUtil = Ext.create('BSOFT.templateZBWinUtil', {});