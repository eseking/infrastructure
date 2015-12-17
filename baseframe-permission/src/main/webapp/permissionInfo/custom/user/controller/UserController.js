Ext.define('BSOFT.custom.user.controller.UserController',{
     extend: 'Ext.app.Controller',
	 init:function(controllerConfig){
		var me = this;
		//获取其他controller 传递过来的值
    	this.getControllerConfig= function(){
    	return controllerConfig;
    	},
		this.control({
			//授权
			/*'UserGrid button[action=per]':{
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
									mvcController.initParam(grid);
						    		controllerList.add(controllerName,true);		                              
		                       }else{
		                            var mvcController =this.application.getController(controllerName);
		                            mvcController.getControllerConfig= function(){
		                          	return grid;
		    	                    }
		                       }
		                   var title= data[0].data.userName+'授权';
		                   var userId =data[0].data.id;
		                  //把ID 传递到页面
		                     var view = Ext.widget(viewName,{title:title,userId:userId});
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
			},*/
			//增加
			'UserGrid button[action=add]':{ 
				click:function(btn){ 
					//加载form 的controller
					var grid =this.getGridList();
					var controllerName ='BSOFT.custom.user.controller.UserFormController';
                    var viewName ='UserForm';
			        //判断只加载一次form(或者grid)和controller
                    if(!controllerList.containsKey(controllerName)){
							var mvcController =this.application.getController(controllerName).init();
							//mvcController.init(grid);
				    		controllerList.add(controllerName,true);
                    }else{  
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
        			    title : '增加用户',
        			    layout: 'fit',
        			    autoShow: true,
        			    initComponent: function() {
        			    	var form =Ext.widget(viewName);
	     			        this.items = [
	     			               form
	     			        ];
	     			        this.callParent(arguments);
	        			    }
                    	})                                                   
                     Ext.widget(winName);
				}
			},
			//修改
			'UserGrid button[action=update]':{
				click:function(btn){ 
					var grid =this.getGridList();
					var data = grid.getSelectionModel().getSelection();
					var controllerName ='BSOFT.custom.user.controller.UserFormController';
                    var viewName ='UserUpdateForm';
                    //确保controller 只加载一次
                    if(!controllerList.containsKey(controllerName)){
							var mvcController =this.application.getController(controllerName).init();
				    		controllerList.add(controllerName,true);         
                    }
					if(data.length == 0){
						Ext.Msg.alert("提示","您最少要选择一条数据");
					}else{
						//当前选择数据的主键
						var formDatas ={
							id:data[0].get("id"),
						}
						//把当前选中的用户名称保存
						var winName=commonFunction.uniqid();
	                    Ext.define(winName, {
	        			    extend: 'Ext.window.Window',
	        			    alias : 'widget.'+winName,
	        			    width: 500,
	        			    height: 400,
	        			    hidden: false,  
	        			    maximizable: true,
	        			    modal:true,
	        			    title : '修改用户',
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
					   commonFunction.serverRequestObj(urlUtil.requrl+'/user/getUser.do','POST',true,formDatas,'加载数据成功',updateSearchCallBack);
					}     
				}
			},
			//删除
			'UserGrid button[action=delete]':{
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
								 commonFunction.serverRequestObj(urlUtil.requrl+'/user/deleteUser.do','POST',false,formDatas,'删除用户成功');
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
           'BSOFT.custom.user.view.UserGrid'
    ],
    stores:[
           'BSOFT.custom.user.store.UserStore'
          // 'BSOFT.custom.user.store.UserComStore'
    ],
    models:[
           'BSOFT.custom.user.model.UserModel'
    ],
    refs:[
		{
		    ref: 'gridList',
		    selector:'UserGrid'
		},
		{
	    	ref:'formBase',        //form
	    	selector:'UserForm'  //复杂表达式  form别名 为变量
    	}
	]
})