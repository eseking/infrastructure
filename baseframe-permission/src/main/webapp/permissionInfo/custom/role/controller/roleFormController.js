Ext.define('BSOFT.custom.role.controller.roleFormController', {
	
	    extend: 'Ext.app.Controller',
	    
		init:function(controllerConfig){
			var me = this;
			//获取其他controller 传递过来的值
	    	this.getControllerConfig= function(){
	    	return controllerConfig;
	    	},
			this.control({
				
				'roleForm button[action=formAdd]':{
					click:function(btn){
				//获取表单的值
				var formDatas =btn.up('form').getForm().getValues();
      		 	 // var formDatas = Ext.encode(btn.up('form').getForm().getValues());
      		 	 	/*
      		 	  Ext.Ajax.request({
      					url : urlUtil.requrl+'/addRole.do',
      					method : 'POST',
      					timeout :3000,
      					async:false,
      					params: {
      						formDatas: value
      					},
      					success: function(resp,opts) {
      						var obj=Ext.decode(resp.responseText);
      						
      						if( obj.success==true ){
      						commonFunction.showMessage('操作成功',"增加角色成功");
      						}else{
      						commonFunction.showMessage('操作失败',"增加角色失败");
      						}
      					}
      				})
      				*/
      		 	  //增加角色
      		 	  commonFunction.serverRequestObj(urlUtil.requrl+'/role/addRole.do','POST',false,formDatas,'增加角色成功');
      		 	  //grid 刷新
		 		   if(this.getGridList()){
		 			   this.getGridList().store.load();
		 		   }
                    btn.up('window').close();
					}
				},
				'roleUpdateForm button[action=formUpdate]':{
					click:function(btn){
				//获取表单的值
				//var formDatas =btn.up('form').getForm().getValues();
      		 	  var formDatas = btn.up('form').getForm().getValues();
      		 	 	/*
      		 	  Ext.Ajax.request({
      					url : urlUtil.requrl+'/addRole.do',
      					method : 'POST',
      					timeout :3000,
      					async:false,
      					params: {
      						formDatas: value
      					},
      					success: function(resp,opts) {
      						var obj=Ext.decode(resp.responseText);
      						
      						if( obj.success==true ){
      						commonFunction.showMessage('操作成功',"增加角色成功");
      						}else{
      						commonFunction.showMessage('操作失败',"增加角色失败");
      						}
      					}
      				})
      				*/
      		 	  //增加角色
      		 	  commonFunction.serverRequest(urlUtil.requrl+'/role/updateRole.do','POST',false,formDatas,'修改角色成功');
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
			'BSOFT.custom.role.view.roleForm',
			'BSOFT.custom.role.view.roleUpdateForm'
		],
		stores :[
		],
		models :[
			//"User"
		],
		refs: [
		    {
		    	ref:'formBase',        //form
		    	selector:'roleForm'  //复杂表达式  form别名 为变量
	    	},
	    	{
	    		ref:'gridList',        //grid
	    		selector:'roleGrid'  //复杂表达式  grid别名 为变量
	    	}
	    	]
	});