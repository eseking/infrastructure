Ext.define('BSOFT.custom.user.controller.UserFormController', {
	    extend: 'Ext.app.Controller',    
		init:function(controllerConfig){
			var me = this;
			//获取其他controller 传递过来的值
	    	this.getControllerConfig= function(){
	    	return controllerConfig;
	    	},
			this.control({
				'UserForm button[action=formAdd]':{
					click:function(btn){
				  //获取表单的值
				  var formDatas =btn.up('form').getForm().getValues();
      		 	  //增加角色
      		 	  commonFunction.serverRequestObj(urlUtil.requrl+'/user/addUser.do','POST',false,formDatas,'增加用户成功');
      		 	  //grid 刷新
		 		   if(this.getGridList()){
		 			   this.getGridList().store.load();
		 		   }
                    btn.up('window').close();
					}
				},							
		       'UserUpdateForm button[action=formUpdate]':{
					click:function(btn){
				 //获取表单的值
				  var formDatas =btn.up('form').getForm().getValues();
      		 	  //修改用户
      		 	  commonFunction.serverRequest(urlUtil.requrl+'/user/updateUser.do','POST',false,formDatas,'修改用户成功');
      		 	  //grid 刷新
		 		   if(this.getGridList()){
		 			   this.getGridList().store.load();
		 		   }
		 		     btn.up('window').close();
					}
				}
			});
		},
		views:[
			'BSOFT.custom.user.view.UserForm',
			'BSOFT.custom.user.view.UserUpdateForm'
		],
		stores :[
		    // 'BSOFT.custom.user.store.UserStore'
		],
		models :[
			  //'BSOFT.custom.user.model.UserModel'
		],
		refs: [
		    {
		    	ref:'formBase',        //form
		    	selector:'UserForm'  //复杂表达式  form别名 为变量
	    	},
	    	{
	    		ref:'gridList',        //grid
	    		selector:'UserGrid'  //复杂表达式  grid别名 为变量
	    	}
	    	]
	});