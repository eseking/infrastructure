Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.Loader.setConfig({
		enabled:true
	});
	Ext.application({
		name : 'BSOFT',//应用的名字
		appFolder : "permissionInfo",//应用的目录
		launch:function(){//当前页面加载完成执行的函数
	     /*   Ext.create('Ext.container.Viewport', { //简单创建一个试图
	        	layout:'auto',//自动填充布局
	            items: {
	            	xtype: 'viewBase',
	                title: 'Users',
	                html : 'List of users will go here'
	            }
	        });*/
			  Ext.create('Ext.container.Viewport', {
	        	//padding : "15 15 15 15",
				layout:'auto',//自动填充布局
	            items: [
	            	{
	            	   xtype: 'treeMenuView'
	            	  //xtype:'UserGrid'
	            	}
	            ]
	        });
		},
		controllers:[
			  'BSOFT.custom.treeMenu.controller.treeMenuController'
		      // 'BSOFT.custom.user.controller.UserController'
		]
	});
})