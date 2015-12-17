Ext.define('BSOFT.custom.treeMenu.controller.treeUpdateMenuController', {
	    extend: 'Ext.app.Controller',    
		init:function(controllerConfig){
			var me = this;
			//获取其他controller 传递过来的值
	    	this.getControllerConfig= function(){
	    	return controllerConfig;
	    	},
			this.control({						
		       'treeUpdateMenuForm button[action=treeUpdateMenu]':{
					click:function(btn){
				 //获取表单的值
				  var formDatas =btn.up('form').getForm().getValues();
      		 	  //修改用户
      		 	 commonFunction.serverRequest(urlUtil.requrl+'/updateMenu.do','POST',false,formDatas,'修改节点成功');
      		 	 btn.up('form').up('window').close();
      		 	 this.getControllerConfig().load();
					}
				}
			});
		},
		views:[
			'BSOFT.custom.treeMenu.view.treeUpdateMenuForm'
		],
		stores :[
		    // 'BSOFT.custom.user.store.UserStore'
		],
		models :[
			  //'BSOFT.custom.user.model.UserModel'
		]
	});