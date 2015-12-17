Ext.define('BSOFT.custom.role.controller.roleController', {
    extend: 'Ext.app.Controller',
    /* refs: [
    	{ref:'center_gird',selector:'panel[itemId=EmbedHere]'}
  	],*/
	init:function(controllerConfig){
		var me = this;
		//获取其他controller 传递过来的值
    	this.getControllerConfig= function(){
    	return controllerConfig;
    	},
		this.control({
			'roleGrid button[action=per]':{
				click:function(btn){ 
					var grid =this.getGridList(); 
					var data = grid.getSelectionModel().getSelection();
					//commonFunction.validateLogin();
					if(data.length == 0){
											Ext.Msg.alert("提示","您最少要选择一条数据");
							}else{
								//加载controller即可
		                        var controllerName ='BSOFT.custom.permission.controller.treeMenuController';
		                       var viewName ='permissionWindow';					
		                       if(!controllerList.containsKey(controllerName)){
									var mvcController =this.application.getController(controllerName,{test:22});
									mvcController.init(grid);
						    		controllerList.add(controllerName,true);		                              
		                       }else{
		                            var mvcController =this.application.getController(controllerName);
		                            mvcController.getControllerConfig= function(){
		                          	return grid;
		    	                    }
		                       }
		                   var title= data[0].data.roleName+'授权';
		                   var roleId =data[0].data.id;
		                  //把ID 传递到页面
		                     var view = Ext.widget(viewName,{title:title,roleId:roleId});				                
					         var proxy ={
							type:'ajax',
							url:urlUtil.requrl+'/getALLMenu.do',
							 reader : {  
					           root:function(o){
					        	if(o.pageModel){
					        		return	o.pageModel.datas;
					        	}else{
					        		return o.children;
					        	}
					        	},
					        	type:'json'					          
					        }
						}
					         if(view.down('treepanel').store){
					                    view.down('treepanel').store.setProxy(proxy);
					                    view.down('treepanel').store.load();
					         }

					        }
					}				
			},
			'roleGrid button[action=limits]':{
				click:function(btn){
					var grid =this.getGridList();
					var data = grid.getSelectionModel().getSelection();
					if(data.length == 0){
											Ext.Msg.alert("提示","您最少要选择一条数据");
							}else{
								 //获取角色表信息
			                    var treeDate=data[0].data;
			                    var limitsArray = new Ext.util.HashMap();
			                  //获取到选中行的id
								var formDatas ={
									id :treeDate.id,
									limitsArray:limitsArray
								}
								var controllerName ='BSOFT.custom.role.controller.roleLimitController';
			                    var viewName ='limitsPanel';
			                    if(!controllerList.containsKey(controllerName)){
										var mvcController =this.application.getController(controllerName).init(formDatas);
							    		controllerList.add(controllerName,true);                          
			                    }else{
			                    } 
			                    var winName=commonFunction.uniqid();
			                    Ext.define(winName, {
			        			    extend: 'Ext.window.Window',
			        			    alias : 'widget.'+winName,
			        			    width: 800,
			        			    height: 500,
			        			    hidden: false,  
			        			    maximizable: true,
			        			    modal:true,
			        			    title : '数据权限',
			        			    layout: 'fit',
			        			    autoShow: true,
			        			    initComponent: function() {
			        			    	var form = Ext.widget(viewName,{formDatas:formDatas});
				     			        this.items = [
				     			                 form
				     			        ];
				     			        this.callParent(arguments);
				        			    }
			                    	})                                                            
			                     Ext.widget(winName);
					    }
				  }
			},
			'roleGrid button[action=add]':{
				click:function(btn){ 
					//加载form 的controller
					var grid =this.getGridList();
					var controllerName ='BSOFT.custom.role.controller.roleFormController';
                    var viewName ='roleForm';
			
                    if(!controllerList.containsKey(controllerName)){
							var mvcController =this.application.getController(controllerName).init();
							//mvcController.init(grid);
				    		controllerList.add(controllerName,true);                          
                    }else{
                        // var mvcController =this.application.getController(controllerName);                        
                    }                    
                    var winName=commonFunction.uniqid();
                    Ext.define(winName, {
        			    extend: 'Ext.window.Window',
        			    alias : 'widget.'+winName,
        			    width: 500,
        			    height: 400,
        			    hidden: false,  
        			    maximizable: true,
        			    modal:true,
        			    title : '增加角色',
        			    layout: 'fit',
        			    autoShow: true,
        			    initComponent: function() {
        			    	var form =     Ext.widget(viewName);
	     			        this.items = [
	     			        		form
	     			        ];
	     			        this.callParent(arguments);
	        			    }
                    	})                                                            
                     Ext.widget(winName);
				}
			},
			'roleGrid button[action=update]':{
				click:function(btn){ 
					var grid =this.getGridList();
					var data = grid.getSelectionModel().getSelection();
					var controllerName ='BSOFT.custom.role.controller.roleFormController';
                    var viewName ='roleUpdateForm';
                    //确保controller 只加载一次
                    if(!controllerList.containsKey(controllerName)){
							var mvcController =this.application.getController(controllerName).init();
							//mvcController.init(grid);
				    		controllerList.add(controllerName,true);
                           
                    }
					if(data.length == 0){
						Ext.Msg.alert("提示","您最少要选择一条数据");
					}else{
						//当前选择数据的主键
						var formDatas ={
								id:data[0].get("id")
						}
						var winName=commonFunction.uniqid();
	                    Ext.define(winName, {
	        			    extend: 'Ext.window.Window',
	        			    alias : 'widget.'+winName,
	        			    width: 500,
	        			    height: 400,
	        			    hidden: false,  
	        			    maximizable: true,
	        			    modal:true,
	        			    title : '修改角色',
	        			    layout: 'fit',
	        			    autoShow: true,
	        			    initComponent: function() {
	        			    	var form =     Ext.widget(viewName);
		     			        this.items = [
		     			        		form
		     			        ];
		     			        this.callParent(arguments);
		        			    }
	                    	});
	                    //创建form窗口
	                     var formWin = Ext.widget(winName);
	                    
	                     var basic =formWin.down('form').getForm();
	                    
						
						//回调函数  加载回调的表单值
						var updateSearchCallBack = function(obj){
							var callBackData={
								data:obj.result
							};
							basic.loadRecord(callBackData);	
						}
						commonFunction.serverRequestObj(urlUtil.requrl+'/role/getRole.do','POST',true,formDatas,'加载数据成功',updateSearchCallBack);
					}					                                     
				}
			},
			//删除
			'roleGrid button[action=delete]':{
				click:function(btn){ 
					//加载form 的controller
					var grid =this.getGridList(); 
					var data = grid.getSelectionModel().getSelection();
					if(data.length == 0){
											Ext.Msg.alert("提示","您最少要选择一条数据");
							}else{								
								 Ext.MessageBox.confirm('提示', '是否删除?', function(btn){
								    	if(btn=='yes'){
								var formDatas ={
										id:data[0].get("id")
								}
								 commonFunction.serverRequestObj(urlUtil.requrl+'/role/deleteRole.do','POST',false,formDatas,'删除用户成功');
				      		 	 //grid 刷新
								grid.store.load();
								    	}
								 }
							 )
						 		   
						}
				}
			}
		});
	},
	views:[
		'BSOFT.custom.role.view.roleGrid',
		'BSOFT.custom.role.view.limitsPanel',
		//'BSOFT.custom.role.view.limitsRGrid',
		'BSOFT.custom.role.view.limitsLGrid'
	],
	stores :[
	],
	models :[
		//"User"
	],
	refs:[
		{
		    ref: 'gridList',
		    selector: 'roleGrid'
		},{
		    ref: 'limitRGrid',
		    selector: 'limitRGrid'
		},{
			 ref: 'limitLGrid',
			 selector: 'limitLGrid'
		},{
		    ref: 'limitsPanel',
		    selector: 'limitsPanel'
		},{
	    	ref:'formBase',        //form
	    	selector:'roleForm'  //复杂表达式  form别名 为变量
    	}
	]
});