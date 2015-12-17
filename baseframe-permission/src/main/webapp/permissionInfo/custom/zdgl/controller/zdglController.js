
Ext.define('BSOFT.custom.zdgl.controller.zdglController', {
	extend : 'Ext.app.Controller',
	init : function(getControllerConfig) {
		var me = this;
		//获取其他controller 传递过来的值
    	this.getControllerConfig= function(){
    	return controllerConfig;
    	},
		this.control({
					'zdglGrid button[action=add]' : {//新增字典表
						  click: function(btn) {
						        var grid = this.getGridList();
						        var data = grid.getSelectionModel().getSelection(); //加载controller即可    
						        var addview = Ext.widget('zdglView');
						        var maxCode;
						        Ext.getCmp("updateBtn").hide();
						        var requestConfig = {
						            async: false,
						            // 异步
						            params: {
						                beanId: 'zdglService',
						                methodName: 'generateTypecode1',
						                args: []
						            },
						            success: function(resp, opts) {
						                var obj = Ext.decode(resp.responseText);
						                if (parseInt(obj.api_code) == 1) Ext.Msg.alert("提示", '获取Typecode1失败！');
						                else maxCode = obj.msg_code;

						            },
						            failure: function(resp, opts) {
						                Ext.Msg.alert("提示", '网络出现问题');
						            }
						        };
						        commonFunction.serviceDispatch(requestConfig);
						        var addformTemp = addview.down('form').getForm();
						        addformTemp.findField('typecode1').setValue(maxCode);
						        addgridTemp = addview.down("grid");
						        addgridTemp.getStore().removeAll();
						  }
					},
					'zdglGrid button[action=update]' : {//更新字典表
						 click: function(btn) {
							  var grid = this.getGridList();
						      var data = grid.getSelectionModel().getSelection(); //加载controller即可    
						      if (data.length == 0) {
						            Ext.Msg.alert("提示", "请选择一条记录！");
						            return;
						        }
						        var typecode1 = data[0].get('typecode1');
						        var typename = data[0].get('typename');
						        var cid = data[0].get('cid');
						        var view = Ext.widget('zdglView');
						        Ext.getCmp("addBtn").hide();
						        var formTemp = view.down('form').getForm();
						        formTemp.findField('typecode1').setValue(typecode1);
						        formTemp.findField('typename').setValue(typename);
						        formTemp.findField('cid').setValue(cid);
						        formTemp.findField('typename').setDisabled(true);//文本框被禁用
						        formTemp.findField('cid').setDisabled(true);//文本框被禁用
						        var store = view.getStoreRemote(typecode1);
						        gridTemp = view.down("grid");
						        gridTemp.getStore().removeAll();
						        store.each(function(rec) {
						            gridTemp.getStore().add(rec);
						        });
						 }
					},
					'zdglGrid button[action=delete]' : {//删除字典
						 click: function(btn) {
							 var grid =this.getGridList(); 
								var data = grid.getSelectionModel().getSelection();
								if(data.length == 0){
														Ext.Msg.alert("提示","您最少要选择一条数据");
										}else{								
											 Ext.MessageBox.confirm('提示', '是否删除?', function(btn){
											    	if(btn=='yes'){
											var formDatas ={
													typecode1:data[0].get("typecode1")
											}
											var requestConfig = {
							                        async: false,
							                        // 异步
							                        params: {
							                            beanId: 'zdglService',
							                            methodName: 'deleteDmzd',
							                            args: Ext.encode(formDatas)
							                        },
							                        success: function(resp, opts) {
								                          var obj = Ext.decode(resp.responseText);
								                         
						                                  if (parseInt(obj.api_code) == 0) 
						                                  commonFunction.showMessage('操作成功','删除成功!');
						                                  else 
						                                  commonFunction.showMessage('操作失败','删除失败!!');
								                        },
								                        failure: function(resp, opts) {
						                                  commonFunction.showMessage('操作失败','网络问题!!');
								                        }
							                    };
							                    commonFunction.serviceDispatch(requestConfig);
							      		 	 //grid 刷新
											grid.store.load();
											    	}
											 }
										 )
						     }
						 }
					},
					'zdglGrid button[action=select]' : {//删除字典
						 click: function(btn) {
							 var grid =this.getGridList(); 
							 var typename =  Ext.getCmp('zdglGridzdmcText').getValue();
							 //var typecode =  Ext.getCmp('zdglGridzdbmText').getValue();
							 var paras = {};
							 paras.typename = typename;
							 paras.startNum = 1;
							 paras.endNum = 20;
						     var requestConfig = {
				                        async: false,
				                        // 异步
				                        params: {
				                            beanId: 'zdglService',
				                            methodName: 'listEntityByPage',
				                            args:['ZDGL.queryDmzd','ZDGL.countDmzd',Ext.encode(paras)]
				                        },
				                        success: function(resp, opts) {
					                          var obj = Ext.decode(resp.responseText);
			                                  if (parseInt(obj.api_code) == 0) {
			                                	  //刷新grid
			                                	  grid.store.loadData(obj.pageModel.datas);
			                                  commonFunction.showMessage('操作成功','查询成功!');
			                                  }
			                                  else {
			                                  commonFunction.showMessage('操作失败','查询失败!!');
			                                  }
					                        },
					                        failure: function(resp, opts) {
			                                  commonFunction.showMessage('操作失败','网络问题!!');
					                        }
				                    };
				                    commonFunction.serviceDispatch(requestConfig);
					 	}
					 },
					'zdglGrid':{
						itemdblclick: function(f, record, item, index, e, eOpts) {//双击事件
					        var grid = this.getGridList();
					        var data = grid.getSelectionModel().getSelection(); //加载controller即可    
					        if (data.length == 0) {
					            Ext.Msg.alert("提示", "请选择一条记录！");
					            return;
					        }
					        var typecode1 = data[0].get('typecode1');
					        var typename = data[0].get('typename');
					        var cid = data[0].get('cid');
					        var view = Ext.widget('zdglView');
					        Ext.getCmp("addBtn").hide();
					        var formTemp = view.down('form').getForm();
					        formTemp.findField('typecode1').setValue(typecode1);
					        formTemp.findField('typename').setValue(typename);
					        formTemp.findField('cid').setValue(cid);
					        formTemp.findField('typename').setDisabled(true);//文本框被禁用
					        formTemp.findField('cid').setDisabled(true);//文本框被禁用
					        var store = view.getStoreRemote(typecode1);
					        gridTemp = view.down("grid");
					        gridTemp.getStore().removeAll();
					        store.each(function(rec) {
					            gridTemp.getStore().add(rec);
					        });
					    }
					},
					'zdglView button[action=update]' : {//更新字典明细表
						click: function(btn) {
		                    var gridTemp = btn.up('window').down('grid');
		                    var formTemp = btn.up('window').down('form').getForm();
		                    var i;
		                    var f1 = formTemp.findField('typecode1').getValue(); //主字典的typecode1
		                    var f2 = formTemp.findField('typename').getValue(); //主字典的typecodename
		                    var f3 = formTemp.findField('cid').getValue(); //主字典的cid
		                    var basicStore = gridTemp.getStore();
		                    var json = [];
		                    var cnt = basicStore.getCount();
		                    for (i = 0; i < cnt; i += 1) {
		                        var record = basicStore.getAt(i);
		                        json.push(record.data);
		                    };
		                    var requestConfig = {
		                        async: false,
		                        // 异步
		                        params: {
		                            beanId: 'zdglService',
		                            methodName: 'updateDmzdmx',
		                            args: [Ext.encode(json), f1, f2, f3]
		                        },
		                        success: function(resp, opts) {
		                          var obj = Ext.decode(resp.responseText);
		                          btn.up('window').close();
                                  if (parseInt(obj.api_code) == 0) 
                                  commonFunction.showMessage('操作成功','修改成功!!');
                                  else 
                                  commonFunction.showMessage('操作失败','修改失败!!');

		                        },
		                        failure: function(resp, opts) {
		                          btn.up('window').close();
                                  commonFunction.showMessage('操作失败','网络问题!!');
		                        }
		                    };
		                    commonFunction.serviceDispatch(requestConfig);

		                }
					},
					'zdglView button[action=add]' : {//新增字典明细表
						click: function(btn) {
		                    var gridTemp = btn.up('window').down('grid');
		                    var formTemp = btn.up('window').down('form').getForm();
		                    var i;
		                    var f1 = formTemp.findField('typecode1').getValue(); //主字典的typecode1
		                    var f2 = formTemp.findField('typename').getValue(); //主字典的typecodename
		                    var f3 = formTemp.findField('cid').getValue(); //主字典的cid
		                    var basicStore = gridTemp.getStore();
		                    var json = [];
		                    var cnt = basicStore.getCount();
		                    for (i = 0; i < cnt; i += 1) {
		                        var record = basicStore.getAt(i);
		                        json.push(record.data);
		                    };
		                    var requestConfig = {
		                        async: false,
		                        // 异步
		                        params: {
		                            beanId: 'zdglService',
		                            methodName: 'addDmzdmx',
		                            args: [Ext.encode(json), f1, f2, f3]
		                        },
		                       success: function(resp, opts) {
		                          var obj = Ext.decode(resp.responseText);
		                          btn.up('window').close();
                                  if (parseInt(obj.api_code) == 0) 
                                  commonFunction.showMessage('操作成功','新增成功!!');
                                  else 
                                  commonFunction.showMessage('操作失败','新增失败!!');

		                        },
		                        failure: function(resp, opts) {
		                          btn.up('window').close();
                                  commonFunction.showMessage('操作失败','网络问题!!');
		                        }
		                    };
		                    commonFunction.serviceDispatch(requestConfig);
		                }
					}
				});
	},

	views : [
	         'BSOFT.custom.zdgl.view.zdglView',
	         'BSOFT.custom.zdgl.view.zdglGrid'
	        ],
	stores : [],
	models : [],
	refs:[
			{
			    ref: 'gridList',
			    selector: 'zdglGrid'
			}
		]

});