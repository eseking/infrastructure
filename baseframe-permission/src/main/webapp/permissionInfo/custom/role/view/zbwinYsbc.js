Ext.define(
				"BSOFT.templateZBWinUtil",
				{
					getZBWin : function() {
						// 机构model
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
						// 指标model
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
						// 报表主体model
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
						// 报表时间model
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
											// commonFunction.showMessage('操作失败',o.error_msg);
										} else {
											return o.pageModel.datas;
										}
									},
									totalProperty : 'pageModel.count'
								}
							}
						});
						// 权限store
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
											// commonFunction.showMessage('操作失败',o.error_msg);
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
											// commonFunction.showMessage('操作失败',o.error_msg);
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
											// commonFunction.showMessage('操作失败',o.error_msg);
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
											// commonFunction.showMessage('操作失败',o.error_msg);
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
											// commonFunction.showMessage('操作失败',o.error_msg);
										} else {
											return o.pageModel.datas;
										}
									},
									totalProperty : 'pageModel.count'
								}
							}
						});
						Ext.define("orgGrid", {// 创建grid
							extend : 'Ext.grid.Panel',
							alias : 'widget.orgGrid',
							title : '请选择机构',
							layout : 'fit',
							columns : [ // 列模式
							{
								xtype : 'rownumberer',
								header : "序号",
								width : 40
							}, {
								text : "机构名称",
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
								displayMsg : '显示 {0} - {1} 条，共计 {2} 条',
								emptyMsg : '没有数据'
							}
							]
						});
						var perReadData = {};
						var perHiddenData = {};
						var perSetValBatchData = {};	
						Ext.define(
										"perGrid",
										{// 创建grid
											extend : 'Ext.grid.Panel',
											alias : 'widget.perGrid',
											title : '权限设置',
											layout : 'fit',
											columns : [ // 列模式
											{
												xtype : 'rownumberer',
												header : "序号",
												width : 40
											}, {
												text : "机构名称",
												dataIndex : 'jgqc',
												width : 150
											} ],
											selType : 'checkboxmodel',// 设定选择模式
											store : perStore,
											dockedItems : [
													{
														xtype : 'toolbar',
														dock : 'top',
														items : [
																{
																	xtype : 'button',
																	text : '只读',
																	icon : 'cell/images/eye.png',
																	handler : function(
																			btn) {
																		var data = btn.up('grid').getSelectionModel().getSelection();
																		if (data.length == 0) {
																			Ext.Msg.alert("提示","请选择机构!!!");
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
																			// 起始行
																			var startRow = cell.GetSelectRangeJ(1);
																			// 起始列
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
																			// 保存只读的ID号
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
																					// 设置只读
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
																			// alert("起始
																			// 列:
																			// "+cell.GetSelectRangeJ(0)
																			// +"
																			// 行:
																			// "+cell.GetSelectRangeJ(1));
																			// alert("结束
																			// 列:
																			// "+cell.GetSelectRangeJ(2)
																			// +"
																			// 行:
																			// "+cell.GetSelectRangeJ(3));
																		}
																	}
																},
																{
																	xtype : 'button',
																	text : '隐藏',
																	icon : 'cell/images/shading.png',
																	handler : function(
																			btn) {
																		var data = btn.up('grid').getSelectionModel().getSelection();
																		if (data.length == 0) {
																			Ext.Msg.alert("提示","请选择机构!!!");
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
																			// 起始行
																			var startRow = cell.GetSelectRangeJ(1);
																			// 起始列
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
																			// 保存隐藏的ID号
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
																					// 设置隐藏
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
																			// alert("起始
																			// 列:
																			// "+cell.GetSelectRangeJ(0)
																			// +"
																			// 行:
																			// "+cell.GetSelectRangeJ(1));
																			// alert("结束
																			// 列:
																			// "+cell.GetSelectRangeJ(2)
																			// +"
																			// 行:
																			// "+cell.GetSelectRangeJ(3));
																		}
																	}
																},
																{
																	xtype : 'button',
																	text : '取消只读',
																	icon : 'cell/images/grid_delete.png',
																	handler : function(
																			btn) {
																		var data = btn.up('grid').getSelectionModel().getSelection();
																		if (data.length == 0) {
																			Ext.Msg.alert("提示","请选择机构!!!");
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
																			// 起始行
																			var startRow = cell.GetSelectRangeJ(1);
																			// 起始列
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
																			// 保存只读的ID号
																			for ( var i in rowList) {
																				for ( var j in colList) {
																					var key = rowList[i]
																							+ "-"
																							+ colList[j];
																					if (perReadData[key]) {
																						delete perReadData[key];
																					}
																					// 取消只读
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
																			// alert("起始
																			// 列:
																			// "+cell.GetSelectRangeJ(0)
																			// +"
																			// 行:
																			// "+cell.GetSelectRangeJ(1));
																			// alert("结束
																			// 列:
																			// "+cell.GetSelectRangeJ(2)
																			// +"
																			// 行:
																			// "+cell.GetSelectRangeJ(3));
																		}
																	}
																},
																{
																	xtype : 'button',
																	text : '取消隐藏',
																	icon : 'cell/images/grid_delete.png',
																	handler : function(
																			btn) {
																		var data = btn.up('grid').getSelectionModel().getSelection();
																		if (data.length == 0) {
																			Ext.Msg.alert("提示","请选择机构!!!");
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
																			// 起始行
																			var startRow = cell.GetSelectRangeJ(1);
																			// 起始列
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
																			// 保存只读的ID号
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
																	text : '保存',
																	icon : 'images/grid_add.png',
																	handler : function(
																			btn) {
																		var data = btn.up('grid').getSelectionModel().getSelection();
																		if (data.length == 0) {
																			Ext.Msg.alert("提示","请选择机构!!!");
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
																								commonFunction.showMessage('操作成功',"设置权限成功");
																							} else {
																								commonFunction.showMessage('操作失败',"设置权限失败");
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
														displayMsg : '显示 {0} - {1} 条，共计 {2} 条',
														emptyMsg : '没有数据'
													}
											]
										});
						// 增加指标
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
											title : '增加指标',
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
													items : [ { // 是否为空，以及提示语言
														xtype : 'fieldset',
														title : '指标',
														collapsible : true,
														items : [
																{
																	xtype : 'textfield',
																	fieldLabel : '指标名称',
																	allowBlank : false,
																	name : 'zbmc'
																},
																{
																	xtype : 'textfield',
																	fieldLabel : '指标简称',
																	name : 'zbjc'
																},
																{
																	xtype : 'combo',
																	fieldLabel : '指标类别',
																	name : 'zbtype'
																} ]
													} ],
													buttons : [ {
														text : '保存',
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
																				commonFunction.showMessage('操作成功',"增加指标成功");
																			} else {
																				commonFunction.showMessage('操作失败',"增加指标失败");
																			}
																			var search = Ext.getCmp("gridSearchText").getValue();
																			// 无查询条件
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
								//设置取数时间		
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
											title : '时间维度',
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
													items : [ { // 是否为空，以及提示语言
														xtype : 'fieldset',
														title : '指标',
														collapsible : true,
														items : [
																{
																	xtype : 'textfield',
																	fieldLabel : '指标名称',
																	name : 'zbname',
																	value:this.zbname
																},
																{
																	xtype : 'combo',
																	fieldLabel : '年度',
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
																	fieldLabel : '季度',
																	name : 'zbjd',
																	displayField:   'typename',
													                valueField:     'typecode2',
													                queryMode: 'local',
													                store:         Ext.create('Ext.data.ArrayStore', {
													                              fields: ['typecode2', 'typename'],
													                              data : [
													                              		  ['1','一季度'],
													                                      ['2','二季度'],
														                                  ['3','三季度'],
														                                  ['4','四季度']
														                              ]// from states.js
																	})
																},
																{
																	xtype : 'datefield',
																	fieldLabel : '月',
																	name : 'zbmonth',
																	format : 'Y-m-d'
																} ]
													},
													
													 { // 是否为空，以及提示语言
														xtype : 'fieldset',
														title : '复杂模板设置机构',
														collapsible : true,
														items : [
																{
																	xtype : 'combo',
																	fieldLabel : '机构',
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
														text : '确定',
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
										
										
										
						// 增加指标
						Ext.define("addZBNoteWin", {
							extend : 'Ext.window.Window',
							alias : 'widget.addZBNoteWin',
							width : 450,
							height : 200,
							hidden : false,
							maximizable : true,
							modal : true,
							title : '增加指标公式说明',
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
									items : [ { // 是否为空，以及提示语言
										xtype : 'fieldset',
										title : '公式说明',
										collapsible : true,
										items : [ {
											xtype : 'textareafield',
											fieldLabel : '公式说明',
											allowBlank : false,
											width : 380,
											name : 'zbnote'
										} ]
									} ],
									buttons : [ {
										text : '确定',
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
											 * commonFunction.showMessage('操作成功',"增加指标成功");
											 * }else{
											 * commonFunction.showMessage('操作失败',"增加指标失败"); }
											 *
											 * var search =
											 * Ext.getCmp("gridSearchText").getValue();
											 * //无查询条件 if(Ext.isEmpty(search)){
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
						// 增加年度信息
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
											title : '增加年度信息',
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
													items : [ { // 是否为空，以及提示语言
														xtype : 'fieldset',
														title : '增加年度信息',
														collapsible : true,
														items : [
																{
																	xtype : 'textfield',
																	fieldLabel : '预算年度',
																	allowBlank : false,
																	name : 'ysnd'
																},
																{
																	xtype : 'datefield',
																	fieldLabel : '起始日期',
																	name : 'qsrq',
																	allowBlank : false,
																	format : 'Y-m-d'
																},
																{
																	xtype : 'datefield',
																	fieldLabel : '截止日期',
																	format : 'Y-m-d',
																	allowBlank : false,
																	name : 'jzrq'
																} ]
													} ],
													buttons : [ {
														text : '保存',
														disabled : true,
														formBind : true,
														handler : function(btn) {
															var ztid = btn.up('window').ztid;
															if (Ext.isEmpty(ztid)) {
																Ext.Msg.alert("提示","请选择报表主体!!!");
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
																				commonFunction.showMessage('操作成功',"增加年度信息成功");
																			} else {
																				commonFunction.showMessage('操作失败',"增加年度信息失败");
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
						// 增加报表主体
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
											title : '增加报表主体',
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
													items : [ { // 是否为空，以及提示语言
														xtype : 'fieldset',
														title : '增加报表主体',
														collapsible : true,
														items : [
																{
																	xtype : 'textfield',
																	fieldLabel : '报表全称',
																	allowBlank : false,
																	name : 'bbqc'
																},
																{
																	xtype : 'textfield',
																	fieldLabel : '报表简称',
																	name : 'bbjc'
																} ]
													} ],
													buttons : [ {
														text : '保存',
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
																				commonFunction.showMessage('操作成功',"增加报表主体成功");
																			} else {
																				commonFunction.showMessage('操作失败',"增加报表主体失败");
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
										{// 创建grid
											extend : 'Ext.grid.Panel',
											alias : 'widget.ZBGrid',
											title : '请选择指标',
											layout : 'fit',
											columns : [ // 列模式
											{
												xtype : 'rownumberer',
												header : "序号",
												width : 40
											}, {
												text : "指标名称",
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
																	text : '增加指标',
																	icon : 'cell/images/grid_add.png',
																	handler : function(btn) {
																		Ext.widget("addZBWin");
																	}
																},
																{
																	xtype : 'button',
																	text : '增加公式说明',
																	icon : 'cell/images/grid_add.png',
																	handler : function(btn) {
																		Ext.widget("addZBNoteWin");
																	}
																},{
																	xtype : 'button',
																	text : '时间维度',
																	icon : 'cell/images/grid_add.png',
																	handler : function(btn) {
																	var grid = btn.up("grid");
																	var data = grid.getSelectionModel().getSelection();	
																	if(data.length == 0){
																		Ext.Msg.alert("提示","请选择指标");
																		return;
																	}else{
																		// 指标
																		var value = data[0].data["id"];
																		// 指标名称
																		var zbname = data[0].data["zbmc"];
																	//传递指标名称
																	var win = 	Ext.widget("setTimeWin",{zbname:zbname});
																	//设置行列
																	
																	//保存按钮
																	win.on('beforeclose',function(item){
																		
																	//获取年度  季度 
																	var form = item.down("form").getForm();	
																	//年度
																	var zbnd = form.findField('zbnd').getValue();
																	//季度
																	var zbjd = form.findField('zbjd').getValue();
																	//月份
																	var zbmonth = form.findField('zbmonth').getValue();
																	
																	//机构   复杂模板
																	var zbjg = form.findField('zbjg').getValue();
																	
																	if(!Ext.isEmpty(zbnd)){
																		zbname=zbname+zbnd+"年";
																	}else{
																		zbnd="";
																	}
																	
																	if(!Ext.isEmpty(zbjd)){
																		zbname=zbname+"第"+zbjd+"季度";
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
																		zbid : value,	//指标值
																		jgid: zbjg,		//机构值
																		text : zbname,	//名称
																		row : row,		//行
																		col : col,		//列
																		key : key,		//行-列
																		zbnd : zbnd,	//指标年度
																		zbjd : zbjd,	//指标季度
																		zbmonth : zbmonth	//指标月
																		}
																	}else{
																	 data = {
																		value : value,	//值
																		text : zbname,	//名称
																		row : row,		//行
																		col : col,		//列
																		key : key,		//行-列
																		type : type,	//类型  行指标、列指标
																		zbnd : zbnd,	//指标年度
																		zbjd : zbjd,	//指标季度
																		zbmonth : zbmonth	//指标月
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
																	text : '设置编辑单元格',
																	icon : 'cell/images/grid_edit.png',
																	handler : function(btn) {
																		
																		// 起始行
																		var startRow = cell.GetSelectRangeJ(1);
																		// 起始列
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
																		// 保存选择区域的Id号
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
																				
																				//获取单元格的值
																				var cellVal = cell.S(colList[j],rowList[i],0,"");
																				// 设置背景色   标记待设单元格
																				cell.SetCellBackColor(colList[j],rowList[i],0,6);
																			}
																		}
																	}
																},{
																	xtype : 'button',
																	text : '取消编辑单元格',
																	icon : 'cell/images/grid_delete.png',
																	handler : function(btn) {
																		// 起始行
																		var startRow = cell.GetSelectRangeJ(1);
																		// 起始列
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
																		// 保存只读的ID号
																		for ( var i in rowList) {
																			for ( var j in colList) {
																				var key = rowList[i]
																						+ "-"
																						+ colList[j];
																				if (perSetValBatchData[key]) {
																					delete perSetValBatchData[key];
																				}
																				// 取消背景色   取消标记单元格
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
														displayMsg : '显示 {0} - {1} 条，共计 {2} 条',
														emptyMsg : '没有数据'
													}
											]
										});
						// 报表主体
						Ext.define(
										"BbztGrid",
										{// 创建grid
											extend : 'Ext.grid.Panel',
											alias : 'widget.Bbzt',
											region : 'west',
											width : 250,
											margin : '0 0 0 3',
											listeners : {
												itemclick : function(view,
														record, item, index, e,
														eOpts) {
													// 报表主体ID
													var ztid = record.get("id");
													// 目标表store
													var targetStore = bbtimeStore;
													targetStore.proxy.extraParams.condition = Ext.encode({
																'ztid' : ztid
															});
													targetStore.load();
												}
											},
											columns : [ // 列模式
											{
												xtype : 'rownumberer',
												header : "序号",
												width : 40
											}, {
												text : "报表名称",
												dataIndex : 'bbjc',
												width : 200
											} ],
											store : bbztStore,
											selType : 'checkboxmodel',// 设定选择模式
											dockedItems : [
													{
														xtype : 'toolbar',
														dock : 'top',
														items : [ {
															xtype : 'button',
															text : '增加报表主体',
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
														displayMsg : '显示 {0} - {1} 条，共计 {2} 条',
														emptyMsg : '没有数据'
													}
											]
										});
						Ext.define(
										"BbtimeGrid",
										{// 创建grid
											extend : 'Ext.grid.Panel',
											alias : 'widget.Bbtime',
											region : 'center',
											width : 350,
											margin : '0 0 0 3',
											columns : [ // 列模式
											{
												xtype : 'rownumberer',
												header : "序号",
												width : 40
											}, {
												text : "预算年度",
												dataIndex : 'ysnd',
												width : 80
											}, {
												text : "起始日期",
												dataIndex : 'qsrq',
												width : 80
											}, {
												text : "截止日期",
												dataIndex : 'jzrq',
												width : 80
											} ],
											store : bbtimeStore,
											selType : 'checkboxmodel',// 设定选择模式
											dockedItems : [
													{
														xtype : 'toolbar',
														dock : 'top',
														items : [
																/*
																 * {
																 * xtype:'button',
																 * text: '绑定年度'
																 * ,icon:'images/grid_add.png',
																 *
																 * handler:function(btn){
																 * var data =
																 * btn.up('grid').getSelectionModel().getSelection();
																 * if(data.length ==
																 * 0){
																 * Ext.Msg.alert("提示","您最少要选择一条数据");
																 * return;
																 * }else{ var
																 * selectData =
																 * data[0].data;
																 *  } } },
																 */
																{
																	xtype : 'button',
																	text : '增加年度信息',
																	icon : 'images/grid_add.png',
																	handler : function(btn) {
																		// 获取报表主体ID
																		var condition = bbtimeStore.proxy.extraParams.condition;
																		if (condition) {
																			Ext.widget("addBBTIMEWin",Ext.decode(condition));
																		} else {
																			Ext.Msg.alert("提示","请选择报表主体!!!");
																		}
																	}
																},
																{
																	xtype : 'button',
																	text : '预览',
																	action : 'preView',
																	icon : 'images/shape_group.png',
																	handler : function(btn) {
																		var data = btn.up('grid').getSelectionModel().getSelection();
																		if (data.length == 0) {
																			Ext.Msg.alert("提示","请选择报表的时间区间!!!");
																			return;
																		} else {
																			var selectData = data[0].data;
																			var timeId = selectData.id;
																			if (indicator.tempId == "") {
																				return;
																			}
																			
																			
																			//判断是否复杂模板
																			if(indicator.template =='1'){
																				//复杂模板  默认行为ORG
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
																										//获取单元格的值
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
																			}//复杂模板  add by caol
																			
																			//简单模板
																			var resultData = [];
																			// ["23":data,"33":data]
																			var rowReg = {};
																			var colReg = {};
																			// {"reg":[{"value":"2","text":"市五医院","row":3,"col":1,"key":"31","type":"org"},
																			// {"value":"3","text":"中心医院","row":4,"col":1,"key":"41","type":"org"},
																			// {"value":"1","text":"门急诊人次数","row":2,"col":10,"key":"210","type":"zb"}],"rowReg":{"2":"1"},"colReg":{"1":"3"}}
																			var rowFlag = "";
																			var tempCol = "";
																			var tempCol2 = "";
																			// 判断哪个是行指标
																			// 列相同即为行指标
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
																			// 指标只有一行一列
																			if (rowFlag == "") {
																				rowFlag = "org";
																			}
																			for ( var i in indicator.regData) {
																				resultData
																						.push(indicator.regData[i]);
																				if (indicator.regData[i].type == rowFlag) {
																					// alert(JSON.stringify(regData[i]));
																					var row = indicator.regData[i].row;
																					// 行号为key
																					// 行指标为value
																					rowReg[row] = indicator.regData[i].value;
																				} else {
																					var col = indicator.regData[i].col;
																					// 列号为key
																					// 行指标为value
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
																										//从REG中获取  年 季度 月 拼装KEY值
																										//真实的行列值  行数减一匹配KEY值  如 第三行的值  指标设置在第二行
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
																	text : '导入数据',
																	action : 'import',
																	icon : 'images/computer_add.png',
																	handler : function(btn) {
																		Ext.MessageBox.confirm('提示','是否确定导入？将覆盖表中数据!',
																						function(conbtn) {
																							if (conbtn == 'yes') {
																								if (!Ext.isEmpty(indicator.loadData)) {
																									var data = btn.up('grid').getSelectionModel().getSelection();
																									if (data.length == 0) {
																										Ext.Msg.alert("提示","请选择报表的时间区间!!!");
																										return;
																									} else {
																										var importDatas = [];
																										var rowFlag ;
																										var selectData = data[0].data;
																										var timeId = selectData.id;
																										//判断是否复杂模板
																										if(indicator.template =='1'){
																											//复杂模板  默认行为ORG
																											rowFlag ='org';
																											for(var k in indicator.regData){
																											var  regTemp = indicator.regData[k];
																											
																											//获取单元格的值
																											var j =regTemp.col;
																											var i =regTemp.row;
																											
																											// 数据类型
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
																										// 行指标
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
																												// 数据类型
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
																												//增加季度信息
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
																										// 导入数据
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
																															commonFunction.showMessage('操作成功',"保存成功");
																														} else {
																															commonFunction.showMessage('操作失败',"保存失败");
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
														displayMsg : '显示 {0} - {1} 条，共计 {2} 条',
														emptyMsg : '没有数据'
													}
											]
										});
						// 指标主体窗口
						Ext.define("bsoft.bbztpanel", {
							extend : 'Ext.panel.Panel',
							alias : 'widget.bbztpanel',
							split : true,
							frame : true,
							width : 600,
							height : 350,
							// renderTo: document.body,
							layout : 'border',
							title : '请选择报表主体',
							initComponent : function() {
								this.items = [ {
									xtype : 'Bbzt'
								}, {
									xtype : 'Bbtime'
								} ]
								this.callParent(arguments);
							}
						});
						// 当前grid的store
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
														text : '查询',
														action : 'search',
														icon : 'cell/images/grid_find.png',
														handler : function(btn) {
															var search = Ext.getCmp("gridSearchText").getValue();
															// 无查询条件
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
														text : '保存',
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
															// {"reg":[{"value":"2","text":"市五医院","row":3,"col":1,"key":"31","type":"org"},
															// {"value":"3","text":"中心医院","row":4,"col":1,"key":"41","type":"org"},
															// {"value":"1","text":"门急诊人次数","row":2,"col":10,"key":"210","type":"zb"}],"rowReg":{"2":"1"},"colReg":{"1":"3"}}
															var rowFlag = "";
															var tempCol = "";
															var tempCol2 = "";
															var regData = indicator.regData;
															// alert(JSON.stringify(regData));
															// 判断哪个是行指标 列相同即为行指标
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
															// 指标只有一行一列
															if (rowFlag == "") {
																rowFlag = "org";
															}
															for ( var i in regData) {
																resultData
																		.push(regData[i]);
																if (regData[i].type == rowFlag) {
																	// alert(JSON.stringify(regData[i]));
																	var row = regData[i].row;
																	// 行号为key
																	// 行指标为value
																	rowReg[row] = regData[i].value;
																} else {
																	var col = regData[i].col;
																	// 列号为key
																	// 行指标为value
																	colReg[col] = regData[i].value;
																}
															}
															if (resultData.length == 0) {
																alert("请设置取数公式");
																return;
															}
															// 获取所有的公式
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
																	// 是公式
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
																				commonFunction.showMessage('操作成功',"保存成功");
																			} else {
																				commonFunction.showMessage('操作失败',"保存失败");
																			}
																			return obj;
																		}
																	});
														}
													},
													{
														xtype : 'button',
														text : '保存复杂模板',
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
																	// 是公式
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
																				commonFunction.showMessage('操作成功',"保存成功");
																			} else {
																				commonFunction.showMessage('操作失败',"保存失败");
																			}
																			return obj;
																		}
																	});
															
														}
													
													},
													{
														xtype : 'button',
														text : '取消',
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
																// 显示保存和取消按钮
																Ext.getCmp('cancelReg').setVisible(true);
																Ext.getCmp('addReg').setVisible(true);
																Ext.getCmp('addComplexReg').setVisible(true);
																
																currentStore = component.store;
																currentStore.load();
															},
															itemdblclick : function(view,record,item,index, e,eOpts) {
																// 机构ID
																var value = record.get("id");
																// 机构简称
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
																// 显示保存和取消按钮
																Ext.getCmp('cancelReg').setVisible(true);
																Ext.getCmp('addReg').setVisible(true);
																Ext.getCmp('addComplexReg').setVisible(true);
																currentStore = component.store;
																currentStore.load();
																
																//加载先前编辑的“设置编辑单元格”内容
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
																			//设置批设标记
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
																// 指标
																var value = record.get("id");
																// 指标名称
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
																// 隐藏保存和取消按钮
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
																// 隐藏保存和取消按钮
																Ext.getCmp('cancelReg').setVisible(false);
																Ext.getCmp('addReg').setVisible(false);
																Ext.getCmp('addComplexReg').setVisible(false);
																currentStore = component.store;
																currentStore.load();
																		
															},
															itemclick : function(view,record,item,index, e,eOpts) {
																// alert(11);
																// alert(Ext.encode(perReadData));
																// 取消上一次的只读
																for ( var i in perReadData) {
																	var temp = perReadData[i];
																	// 取消上一次的只读
																	cell.SetCellInput(temp.col,temp.row,0,0);
																	cell.SetCellBackColor(temp.col,temp.row,0,-1);
																}
																// 取消上一次的隐藏
																for ( var i in perHiddenData) {
																	var temp = perHiddenData[i];
																	// 设置隐藏
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
																					// 只读
																					if (obj.result&& obj.result.readPer) {
																						perReadData = Ext.decode(obj.result.readPer);
																						for ( var i in perReadData) {
																							var temp = perReadData[i];
																							// 设置只读
																							cell.SetCellInput(temp.col,temp.row,0,5);
																							cell.SetCellBackColor(temp.col,temp.row,0,2);
																						}
																						// alert(perReadData);
																					}
																					// 隐藏
																					if (obj.result&& obj.result.showPer) {
																						perHiddenData = Ext.decode(obj.result.showPer);
																						for ( var i in perHiddenData) {
																							var temp = perHiddenData[i];
																							// 设置隐藏
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
						// 指标窗口
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
					// 历史记录
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
											// commonFunction.showMessage('操作失败',o.error_msg);
										} else {
											return o.result;
										}
									},
									totalProperty : 'pageModel.count'
								}
							}
						});
						// 创建grid
						Ext.define("logGrid", {
							extend : 'Ext.grid.Panel',
							alias : 'widget.logGrid',
							// title:'请选择机构',
							layout : 'fit',
							columns : [ // 列模式
							{
								xtype : 'rownumberer',
								header : "序号",
								width : 40
							}, {
								text : "操作人",
								dataIndex : 'operator',
								width : 110
							}, {
								text : "操作时间",
								dataIndex : 'operationtime',
								width : 120
							}, {
								text : "记录值",
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
								displayMsg : '显示 {0} - {1} 条，共计 {2} 条',
								emptyMsg : '没有数据'
							} ]
						});
						Ext.define("bsoft.dataLogWin", {
							extend : 'Ext.window.Window',
							alias : 'widget.dataLogWin',
							title : '历史记录',
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
					// 审批记录
					getPerWin : function() {
						var row = cell.GetSelectRangeJ(1);
					 	var col = cell.GetSelectRangeJ(0);
						// 审批意见查看model
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
						// 审批意见store
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
						// 创建审批意见grid
						Ext.define("logGrid", {
							extend : 'Ext.grid.Panel',
							alias : 'widget.logGrid',
							region : 'center',
							// title:'请选择机构',
							layout : 'fit',
							columns : [ // 列模式
							{
								xtype : 'rownumberer',
								header : "序号",
								width : 20
							}, {
								text : "审批人机构",
								dataIndex : 'sprjg',
								width : 60
							}, {
								text : "审批人",
								dataIndex : 'spr',
								width : 60
							}, {
								text : "审批时间",
								dataIndex : 'spsjstr',
								width : 110
							} , {
								text : "审批意见",
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
								displayMsg : '显示 {0} - {1} 条，共计 {2} 条',
								emptyMsg : '没有数据'
							} ]
						});
						//审批意见表单
						Ext.define('perForm', {
							extend : 'Ext.form.Panel',
							alias : 'widget.perForm',
							region : 'north',
							initComponent : function() {
								this.items = [ { // 是否为空，以及提示语言
									xtype : 'fieldset',
									title : '审批意见',
									collapsible : true,
									items : [ {
										xtype : 'textfield',
										fieldLabel : '审批意见',
										name : 'spyj'
									}]
								}],
								this.buttons=[{text: '保存',
							            		 disabled: true,
							            		 formBind: true,
							            		 action:'formAdd',
							            		 handler : function(btn) {
							            			 var row = cell.GetSelectRangeJ(1);
							            			 var col = cell.GetSelectRangeJ(0);
							            			 var form = this.up('form').getForm();
							            			 var spyj = form.findField('spyj').getValue();
							            			 if( Ext.isEmpty(spyj)){
							            				 Ext.Msg.alert("提示","请填写审批意见！");
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
																Ext.MessageBox.alert('消息','审批意见提交成功!');
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
						//审批意见主窗体
						Ext.define("bsoft.dataLogWin", {
							extend : 'Ext.window.Window',
							alias : 'widget.dataLogWin',
							title : '审批意见',
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
					// 审批记录
					getPerWin2 : function() {
						var row = cell.GetSelectRangeJ(1);
					 	var col = cell.GetSelectRangeJ(0);
						// 审批意见查看model
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
						// 审批意见store
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
						// 创建审批意见grid
						Ext.define("logGrid", {
							extend : 'Ext.grid.Panel',
							alias : 'widget.logGrid',
							region : 'center',
							// title:'请选择机构',
							layout : 'fit',
							columns : [ // 列模式
							{
								xtype : 'rownumberer',
								header : "序号",
								width : 20
							}, {
								text : "审批人机构",
								dataIndex : 'sprjg',
								width : 60
							}, {
								text : "审批人",
								dataIndex : 'spr',
								width : 60
							}, {
								text : "审批时间",
								dataIndex : 'spsjstr',
								width : 110
							} , {
								text : "审批意见",
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
								displayMsg : '显示 {0} - {1} 条，共计 {2} 条',
								emptyMsg : '没有数据'
							} ]
						});
						//审批意见主窗体
						Ext.define("bsoft.dataLogWin", {
							extend : 'Ext.window.Window',
							alias : 'widget.dataLogWin',
							title : '审批意见',
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
					// 批复值
					getPfzWin : function() {
						var row = cell.GetSelectRangeJ(1);
					 	var col = cell.GetSelectRangeJ(0);
						// 批复值查看model
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
						// 批复值store
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
						// 创建批复值grid
						Ext.define("pfzGrid", {
							extend : 'Ext.grid.Panel',
							alias : 'widget.pfzGrid',
							region : 'center',
							// title:'请选择机构',
							layout : 'fit',
							columns : [ // 列模式
							{
								xtype : 'rownumberer',
								header : "序号",
								width : 20
							}, {
								text : "批复人机构",
								dataIndex : 'pfrjg',
								width : 60
							}, {
								text : "批复人",
								dataIndex : 'pfr',
								width : 60
							}, {
								text : "批复时间",
								dataIndex : 'pfsjstr',
								width : 110
							} , {
								text : "批复值",
								dataIndex : 'pfz',
								width : 120
							}],
							store : pfzsStore,
							dockedItems : [ {
								dock : 'bottom',
								xtype : 'pagingtoolbar',
								store : pfzsStore,
								displayInfo : true,
								displayMsg : '显示 {0} - {1} 条，共计 {2} 条',
								emptyMsg : '没有数据'
							} ]
						});
						//批复值表单
						Ext.define('pfzForm', {
							extend : 'Ext.form.Panel',
							alias : 'widget.pfzForm',
							region : 'north',
							initComponent : function() {
								this.items = [ { // 是否为空，以及提示语言
									xtype : 'fieldset',
									title : '设置批复值',
									collapsible : true,
									items : [ {
										xtype : 'textfield',
										fieldLabel : '批复值',
										name : 'pfz'
									}]
								}],
								this.buttons=[
							           	   {
							            		 text: '保存',
							            		 disabled: true,
							            		 formBind: true,
							            		 action:'formAdd',
							            		 handler : function(btn) {
							            			 var row = cell.GetSelectRangeJ(1);
							            			 var col = cell.GetSelectRangeJ(0);
							            			 var form = this.up('form').getForm();
							            			 var pfz = form.findField('pfz').getValue();
							            			 if( Ext.isEmpty(pfz)){
							            				 Ext.Msg.alert("提示","请填写批复值！");
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
																Ext.MessageBox.alert('消息','设置批复值成功!');
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
						//批复值主窗体
						Ext.define("bsoft.pfzWin", {
							extend : 'Ext.window.Window',
							alias : 'widget.pfzWin',
							title : '设置批复值',
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
					// 数据范围
					getDataValidWin : function() {
						Ext.apply(Ext.form.field.VTypes, {
							doubleType : function(v) {
								var r = /^[-\+]?\d+(\.\d+)?$/;
								return r.test(v);
							},
							doubleTypeText : "只能输入数字"
						// myPassMask:/[123]/i //只能输入数字 限制输入
						});
						// 指标窗口
						Ext.define(
										"bsoft.dataValidWin",
										{
											extend : 'Ext.window.Window',
											alias : 'widget.dataValidWin',
											title : '设置批注',
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
															{ // 是否为空，以及提示语言
																xtype : 'fieldset',
																title : '数据范围',
																collapsible : true,
																items : [
																		{
																			xtype : 'textfield',
																			fieldLabel : '上限',
																			name : 'downLimit',
																			vtype : 'doubleType'
																		},
																		{
																			xtype : 'textfield',
																			fieldLabel : '下限',
																			name : 'upLimit',
																			vtype : 'doubleType'
																		} ]
															},
															{ // 是否为空，以及提示语言
																xtype : 'fieldset',
																title : '说明',
																collapsible : true,
																items : [ {
																	xtype : 'textareafield',
																	fieldLabel : '说明',
																	width : 280,
																	name : 'note'
																} ]
															} ],
													buttons : [
															{
																text : '确定',
																disabled : true,
																formBind : true,
																handler : function(
																		btn) {
																	var up = btn.up('form').getForm().findField('upLimit').getValue();
																	var down = btn.up('form').getForm().findField('downLimit').getValue();
																	var note = btn.up('form').getForm().findField('note').getValue();
																	var tips = "";
																	if (!Ext.isEmpty(up)) {
																		tips += "下限: "+ up+ "    ";
																	}
																	if (!Ext.isEmpty(down)) {
																		tips += "上限: "+ down+ "    ";
																	}
																	if (!Ext.isEmpty(note)) {
																		tips += "说明: "+ note;
																	}
																	var startRow = cell.GetSelectRangeJ(1);
																	// 起始列
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
																	// 保存只读的ID号
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
																			// 设置只读
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
																						commonFunction.showMessage('操作成功',"设置数值范围成功");
																					} else {
																						commonFunction.showMessage('操作失败',"设置数值范围失败");
																					}
																				}
																			});
																	btn.up('window').close();
																}
															},
															{
																text : '取消',
																disabled : true,
																formBind : true,
																handler : function(btn) {
																	var startRow = cell.GetSelectRangeJ(1);
																	// 起始列
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
																	// 保存只读的ID号
																	for ( var i in rowList) {
																		for ( var j in colList) {
																			var key = rowList[i]
																					+ "-"
																					+ colList[j];
																			if (indicator.tipData[key]) {
																				delete indicator.tipData[key];
																			}
																			// 去掉标注
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
																						commonFunction.showMessage('操作成功',"设置数值范围成功");
																					} else {
																						commonFunction.showMessage('操作失败',"设置数值范围失败");
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