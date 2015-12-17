Ext.define('BSOFT.custom.treeMenu.controller.treeMenuController', {
    extend: 'Ext.app.Controller',
	init:function(){
		this.control({
			//增加菜单	机构管理
			 'treeMenuView button[action=add]':{
                click: function(button) {
                	//被选中的树节点
                	var treeDataList = button.up('treepanel').getSelectionModel().getSelection();               	
                	if(treeDataList.length == 0){
								//	Ext.Msg.alert("提示","您最少要选择一条数据");
                				//如未选中 则增加根节点
		                		//获取树节点数据
								//var treeData = treeDataList[0].data;
								//弹出窗口						
								var form ={						
								items:
								[
								  {xtype:'textfield',fieldLabel:'菜单名称',name:'name'},
								  {xtype:'textfield',fieldLabel:'菜单URL',name:'ext1'},
								  {xtype:'textfield',fieldLabel:'顺序',name:'orderIndex'}
								],
								buttons : [
									{'text': '保存', 
									'formBind': true,
									   handler: function() {
					                    var form = this.up('form').getForm();			                                  
					                    var name=form.findField('name').getValue();
					                    var ext1=form.findField('ext1').getValue();
					                    var orderIndex=form.findField('orderIndex').getValue();
					                    if( Ext.isEmpty(name)){
					                    	Ext.Msg.alert("提示","请填写菜单名");
					                    	return;		                    	
					                    }		                    
					                    var formDatas={
					                    	name:name,
					                    	ext1:ext1,
					                    	pid:null,
					                    	orderIndex:orderIndex
					                    }
					                    	//增加节点
					                    	commonFunction.serverRequestObj(urlUtil.requrl+'/addMenu.do','POST',false,formDatas,'增加节点成功');
				                    	    this.up('form').up('window').close();
				                    	    button.up('treepanel').getSelectionModel().deselectAll(true);
					                    	button.up('treepanel').store.reload();
				                  }							
								},
									{ 'text': '重置','action':'reset'}
									]
								}											
									 Ext.define('addMenuView', {
									    extend: 'Ext.window.Window',
									    alias : 'widget.addMenuView',
									    width:300,
									    height:200,
									    hidden: false,
									    maximizable: true,
									    modal:true,
									    title : '增加节点',
									    layout: 'fit',
									    autoShow: true,
									    initComponent: function() {
									    	var f = Ext.widget('form',form);
									        this.items = [
									        		f
									        ];
									        this.callParent(arguments);
									    }
									});
								//创建window
								Ext.widget('addMenuView');
                				
					}else{
						//获取树节点数据
						var treeData = treeDataList[0].data;
						//弹出窗口						
						var form ={						
						items:
						[
						  {xtype:'textfield',fieldLabel:'菜单名称',name:'name'},
						  {xtype:'textfield',fieldLabel:'菜单URL',name:'ext1'},
						  {xtype:'textfield',fieldLabel:'顺序',name:'orderIndex'}
						],
						buttons : [
							{'text': '保存', 
							'formBind': true,
							   handler: function() {
			                    var form = this.up('form').getForm();			                                  
			                    var name=form.findField('name').getValue();
			                    var ext1=form.findField('ext1').getValue();
			                    var orderIndex=form.findField('orderIndex').getValue();
			                    if( Ext.isEmpty(name)){
			                    	Ext.Msg.alert("提示","请填写菜单名");
			                    	return;		                    	
			                    }		                    
			                    var formDatas={
			                    	name:name,
			                    	ext1:ext1,
			                    	pid:treeData.id,
			                    	orderIndex:orderIndex
			                    }
			                    	//增加节点
			                    	commonFunction.serverRequestObj(urlUtil.requrl+'/addMenu.do','POST',false,formDatas,'增加节点成功');
		                    	    this.up('form').up('window').close();
		                    	    button.up('treepanel').getSelectionModel().deselectAll(true);
			                    	button.up('treepanel').store.reload();
		                  }							
						},
							{ 'text': '重置','action':'reset'}
							]
						}											
							 Ext.define('addMenuView', {
							    extend: 'Ext.window.Window',
							    alias : 'widget.addMenuView',
							    width:300,
							    height:200,
							    hidden: false,
							    maximizable: true,
							    modal:true,
							    title : '增加节点',
							    layout: 'fit',
							    autoShow: true,
							    initComponent: function() {
							    	var f = Ext.widget('form',form);
							        this.items = [
							        		f
							        ];
							        this.callParent(arguments);
							    }
							});
						//创建window
						Ext.widget('addMenuView');	 		
					}
                }
            },
            //修改机构
             'treeMenuView button[action=update]':{ 
                    click: function(button) { 
                	//被选中的树节点      
                	var treeDataList = button.up('treepanel').getSelectionModel().getSelection(); 
                	var controllerName ='BSOFT.custom.treeMenu.controller.treeUpdateMenuController';
                	var viewName ='treeUpdateMenuForm';
                	
                	
                	var store = button.up('treepanel').store;
                	
                	//确保controller 只加载一次
                    if(!controllerList.containsKey(controllerName)){
							var mvcController =this.application.getController(controllerName).init(store);
				    		controllerList.add(controllerName,true);         
                    }
                	if(treeDataList.length == 0){
									Ext.Msg.alert("提示","您最少要选择一条数据");
					}else{
						//获取树节点数据
						var treeData = treeDataList[0].data;
						//获取到选中行的值并填入到文本框中去
						var formDatas ={
							id :treeData.id	
						}
						//把当前选中的用户名称保存
						var winName=commonFunction.uniqid();
							 Ext.define(winName, {
							    extend: 'Ext.window.Window',
							    alias : 'widget.'+winName,
							    width:300,
							    height:200,
							    hidden: false,
							    maximizable: true,
							    modal:true,
							    title : '修改节点',
							    layout: 'fit',
							    autoShow: true,
							    initComponent: function() {
							    	var form = Ext.widget(viewName);
							        this.items = [
							        		form
							        ];
							        this.callParent(arguments);
							    }
							})
							  //创建window
						var  formWin = Ext.widget(winName);
						var basic =formWin.down('form').getForm();
						//回调函数  加载回调的表单值
						 var updateSearchCallBack = function(obj){
							var callBackData={
								data:obj.result
							};
							basic.loadRecord(callBackData);
						}
						 commonFunction.serverRequestObj(urlUtil.requrl+'/getMenu.do','POST',true,formDatas,'加载数据成功',updateSearchCallBack);						
				    	}               	
                   }
              }, 
             /* 'treeUpdateMenuForm button[action=treeUpdateMenu]':{
					click:function(btn){
						  //获取表单的值
	 				     var formDatas =btn.up('form').getForm().getValues();
		       		 	  //修改用户
		       		 	 commonFunction.serverRequest(urlUtil.requrl+'/updateMenu.do','POST',false,formDatas,'修改节点成功');
		       		 	 btn.up('form').up('window').close();
		       		     btn.up('treepanel').store.load();
							}
						},*/
	
            //删除机构
            'treeMenuView button[action=delete]':{
           // '[iconCls=tasks-delete-list]': {
                    click: function(button) {
                	//被选中的树节点
                	var treeDataList = button.up('treepanel').getSelectionModel().getSelection();
                	if(treeDataList.length == 0){
									Ext.Msg.alert("提示","您最少要选择一条数据");
					}else{
						//获取树节点数据
						var treeData = treeDataList[0].data;
						 Ext.MessageBox.confirm('提示', '是否删除?', function(btn){
	          						    	if(btn=='yes'){
	          						    		var formDatas={
	          						    		 id :treeData.id
	          						    		}
			          						     
												    commonFunction.serverRequestObj(urlUtil.requrl+'/delMenu.do','POST',false,formDatas,'删除成功');
	          						    			button.up('treepanel').getSelectionModel().deselectAll(true);
										 		    button.up('treepanel').store.reload();
	          						    	}
	          						   });
					}
                }
            }
		});
	},
	views:[
		'BSOFT.custom.treeMenu.view.DeptTree'
		//'BSOFT.custom.treeMenu.view.treeUpdateMenuForm'
	],
	stores :[
		"BSOFT.custom.treeMenu.store.OrgTreeStore"
	
	],
	models :[
		//"User"
	] 
});