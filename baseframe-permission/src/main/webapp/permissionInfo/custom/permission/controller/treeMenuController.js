Ext.define('BSOFT.custom.permission.controller.treeMenuController', {
    extend: 'Ext.app.Controller',
    /* refs: [
    	{ref:'center_gird',selector:'panel[itemId=EmbedHere]'}
  	],*/
    
    /*
    initParam:function(controllerConfig){
		var me = this;
		//获取其他controller 传递过来的值
    	this.getControllerConfig= function(){
    	return controllerConfig;
    	}
    },
    */
    
	init:function(controllerConfig){
		var me = this;
		//获取其他controller 传递过来的值
    	this.getControllerConfig= function(){
    	return controllerConfig;
    	},
		this.control({
			"perTree":{ //树节点的单击事件
				itemclick:function(tree,record,item,index,e,options)
				{
				
					if(record.get('leaf')== false)  return;
					
					
					//获取角色或用户ID
					var grid = me.getControllerConfig();
					var roleData = grid.getSelectionModel().getSelection()[0];
					var roleName=roleData.data.roleName?roleData.data.roleName:roleData.data.userName;
					
					var formBaseItem={
							        	   	   xtype:'fieldset',
							        	   	   title: '基本事件',
							        	   	   collapsible: false,
							        	   	   defaultType: 'textfield',
							        	   	    defaults: {
								                    anchor: '100%',
								                    layout: {
								                        type: 'hbox'
								                    }
								                },
							        	   	   items:[
							        	   	   	{
							        	   	      xtype: 'fieldcontainer',
							        	   	   	labelStyle: 'font-weight:bold;padding:0',
							                    layout: 'hbox',
							                    defaultType: 'textfield',
							        	   	   	items:[
							        	   	   				{ 
														boxLabel: '查询',
														name:'baseEvent',
														xtype:'checkbox',
														flex:1,
														inputValue:'search',
														checked:true
														},
									        	   	   		{ 
														boxLabel: '新增',
														name:'baseEvent',
														xtype:'checkbox',
														flex:1,
														inputValue:'add',
														checked:true
														} ,
														{ 
														boxLabel: '修改',
														name:'baseEvent',
														xtype:'checkbox',
														flex:1,
														inputValue:'update',
														checked:true
														},
														{ 
														boxLabel: '删除',
														name:'baseEvent',
														xtype:'checkbox',
														flex:1,
														inputValue:'delete',
														checked:true
														},
														{ 
														boxLabel: '导出',
														name:'baseEvent',
														xtype:'checkbox',
														flex:1,
														inputValue:'export',
														checked:true
														}
							        	   	   	]
							        	   	   }
							        	   	  ] 
							      };
					
					//生成权限页面
					var form =Ext.create("Ext.form.Panel",{
								bodyStyle :'padding:5 5 5 5',
								buttonAlign:'left',
								items:[
								formBaseItem
								],
								buttons:[
							      {text:'保存',action:'add',icon:'images/grid_add.png',
							      handler: function() {
							      	
							      
									var permissionForm =this.up('form');
									//页面权限信息
									//{"baseEvent":[1,3,2],"customEvent":["13a454118fdab297","13a05498dcfbf4c3"]}
									var permission =permissionForm.getForm().getValues();
									
									//保存页面权限信息
									var pageData={
										$objReferenceClassName:'com.bsoft.icp.gp.Entity.base.PagePermission',
										id:commonFunction.uniqid(),
										uId:roleData.data.id,
										uName:roleName,
										permission:Ext.encode(permission),
										ext1:record.get('info')
									}
									
									var requestConfig={
										params: {
											beanId:'permissionServiceImpl',
											methodName:'addPagePermission',
											args:[Ext.encode(pageData)]
										}
									}
									//默认配置
									commonFunction.serviceDispatch(requestConfig,'授权成功');
							      	
								
							      	
							      }
							      }
							    ]
								})//end form 
								
					var customItem =  {
				        	   	   	   xtype:'fieldset',
					        	   	   title: '自定义事件',
					        	   	   collapsible: false,
					        	   	   defaultType: 'textfield',
					        	   	    defaults: {
						                    anchor: '100%',
						                    layout: {
						                        type: 'hbox'
						                    }
						                },
				        	   	   items:[]
				        	   }
					
					
					//获取自定义事件 
				    //类名
					var formData ={
						eventbody:record.get('info')
					}    	   
				        	   
					var customConfig={
						async:false,//同步
						params: {
							beanId:'baseResServiceImpl',
							methodName:'listEntityByMap',
							args:['eventconfigbean.querycustomeventconfigByEventbody',Ext.encode(formData)]
							
						},
						success: function(resp,opts) {
							var obj=Ext.decode(resp.responseText);
							
							if(obj.pageModel.datas ){
								var datas = obj.pageModel.datas;
								
								var items=[];
								Ext.each(datas,function(data){
									//按钮隐藏  按钮无名称
									if(data.extend9 == false || Ext.isEmpty(data.buttonname)){
									
									}else{
										
										var item={
											boxLabel: data.buttonname,
											name:'customEvent',
											xtype:'checkbox',
											flex:1,
											inputValue:data.extend8,
											checked:true
										}
									items.push(item);
									}
								
								})
								
							//布局 每行四列	
							customItem.items=formLayout.hbox_layout(items,4);
							form.add(customItem);
							}
							
						}
					}
					//获取自定义事件
					commonFunction.serviceDispatch(customConfig);
						//设置选中状态
						var pageData={
								$objReferenceClassName:'com.bsoft.icp.gp.Entity.base.PagePermission',
								uId:roleData.data.id,
								ext1:record.get('info')
							}		
						var cks=form.query('checkbox[name=baseEvent]');	
						
						var cks_custom=form.query('checkbox[name=customEvent]');	
					//读取权限状态
						var requestConfig={
							params: {
								beanId:'baseResServiceImpl',
								methodName:'getOneEntity',
								args:['PAGEPERMISSION.exist',Ext.encode(pageData)]
							},
							success: function(resp,opts) {
							var obj=Ext.decode(resp.responseText);
							//如果有权限值   保证所有按钮都没有 回显正确
							if(obj.result){
								Ext.each(cks,function(ck){
									ck.setValue(false);
								});
								Ext.each(cks_custom,function(ck){
								ck.setValue(false);
								});
							//如果有权限值
							if(obj.result.permission){
							var permission = Ext.decode(obj.result.permission);
							//设置选中
							if(!Ext.isEmpty(permission.baseEvent)){
								Ext.each(cks,function(ck){
									ck.setValue(false);
									if(permission.baseEvent instanceof Array){
									for(var i in permission.baseEvent){
										if(ck.inputValue == permission.baseEvent[i]){
											ck.setValue(true);
										}
									}
									}else{
										if(ck.inputValue == permission.baseEvent){
											ck.setValue(true);
										}
									}
								})
							}
							if(permission.customEvent){
								Ext.each(cks_custom,function(ck){
									ck.setValue(false);
									if(permission.customEvent instanceof Array){
									for(var i in permission.customEvent){
										if(ck.inputValue == permission.customEvent[i]){
											ck.setValue(true);
										}
									}
									}else{
										if(ck.inputValue == permission.customEvent){
											ck.setValue(true);
										}
									}
									
								})
							
							}
							}
							}
							//显示页面
							var center =	me.getPermissionWindow().query('[region=center]')[0];			
							if(center){
								center.removeAll(true);	
								center.add(form);
							}	
						}
						}
						//读取权限状态
						commonFunction.serviceDispatch(requestConfig);	
				}
			},
			
			
			  //删除授权
            'perTree button[action=delete]':{
				click:function(button){
					
					var grid = me.getControllerConfig();
					var roleData = grid.getSelectionModel().getSelection()[0];
					var	roleId = roleData.data.id;
					
					alert(roleId);
					/*var me = this;
					       Ext.MessageBox.confirm('提示', '是否删除权限?', function(btn){
	          						    	if(btn=='yes'){
						//获取角色或用户ID
						var grid = me.getControllerConfig();
						var roleData = grid.getSelectionModel().getSelection()[0];
						
							
						var	roleId = roleData.data.id;
							
						
						var requestConfig={
							params: {
								beanId:'permissionServiceImpl',
								methodName:'delPermission',
								args:[roleId]
							}
						}
						//默认配置
						commonFunction.serviceDispatch(requestConfig,'删除授权成功');
						me.getPermissionWindow().close();
	          						    	}
					       })*/
					
				}
				
            },
            
            //授权
            'perTree button[action=add]':{
				click:function(button){
					//被选中的树节点
                	var treeDataList = button.up('treepanel').getView().getChecked();
                	if(treeDataList.length == 0){
						Ext.Msg.alert("提示","您最少要选择一条数据");
					}else{
						//获取树节点数据
						//组装节点数据   层级：[id，id,id]
						//String ext1 = "{1:['13331038775830444'],2:['133361093237500001','133412899363500001','133421893159400001'],'3':['133361095200000001','133361098046800001','133412952502900001','133413103806800001','133549553464000001','133551856868700001','133558095459300001','133707070901500001','133722138761200001'],4:['133448394207800001','133428119947800001','133428156409200001','133428195067000001']}";
						var perObj={};
						var nodeIdList=new Array();
						Ext.Array.each(treeDataList,function(record){
							var level = record.data.ext2;
							nodeIdList.push(record.data.id);
							if(perObj[level]){
								perObj[level].push(record.data.id);
							}else{
								perObj[level] = new Array();
								perObj[level].push(record.data.id);
							}
						})
						//获取角色ID
						var grid = this.getControllerConfig();
						var roleData = grid.getSelectionModel().getSelection()[0];
					
						var roleName=roleData.data.roleName?roleData.data.roleName:roleData.data.userName;
						
						var datas ={
								accessMenu:perObj,
								//选中的ID
								checkedMenu:nodeIdList
								
						}
						
					   // alert(Ext.encode(nodeIdList));
						//保存权限字符串  可见菜单列表
						var formData ={
							//id:commonFunction.uniqid(),
							roleId:roleData.data.id,
							//角色授权
							type:'2',
							//roleName:roleName,
							accessMenu:Ext.encode(datas)
						}
						/*var requestConfig={
							params: {
								beanId:'permissionServiceImpl',
								methodName:'addPermission',
								args:[Ext.encode(formData)]
							}
						}
						//默认配置
						commonFunction.serviceDispatch(requestConfig,'授权成功');
						
						*/
						//alert(Ext.encode(formData));
						if(nodeIdList.length == 0){
							return ;
						}
						//导入数据
            			Ext.Ajax.request({
				        					url : urlUtil.requrl+'/addMenuPermission.do',
				        					method : 'POST',
				        					timeout :3000,
				        					async:false,
				        					params: {
				        						formDatas: Ext.encode(formData)
				        					
				        					},
				        					success: function(resp,opts) {
				        						var obj=Ext.decode(resp.responseText);
				        						
				        						if( obj.success==true ){
				        						commonFunction.showMessage('操作成功',"导入数据成功");
				        						}else{
				        						commonFunction.showMessage('操作失败',"导入数据失败");
				        						}
				        						
				        						return obj;
				        					}

				        })
						
						
					}
				}
               }
			
			
			
		});
	},
	views:[
		'BSOFT.custom.permission.view.PerTree',
		
		'BSOFT.custom.permission.view.permissionWindow'
	],
	stores :[
		"BSOFT.custom.permission.store.DeptStore4Tree"
	],
	models :[
		//"User"
	],
	refs:[
		{
		    ref: 'permissionWindow',
		    selector: 'permissionWindow'
		}
	]
});