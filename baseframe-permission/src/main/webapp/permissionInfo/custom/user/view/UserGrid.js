Ext.define("BSOFT.custom.user.view.UserGrid",{//创建grid
	extend:'Ext.grid.Panel',
	alias: 'widget.UserGrid',
	closable : true,
	title:'用户管理',
	layout:'fit',
	columns : [ //列模式
	    {xtype: 'rownumberer',header:"序号",width:40},
		{text:"用户名称",dataIndex:'userName',width:150},
		
		],	
	selType:'checkboxmodel',//设定选择模式
	store:'BSOFT.custom.user.store.UserStore',
	dockedItems:[
	 			{
					    xtype: 'toolbar',
					    dock: 'top',
					    items: [
					       /* {xtype:'button', text: '授权' ,icon:'images/grid_add.png',action:'per'},*/
					        {xtype:'button', text: '增加用户' ,icon:'images/grid_add.png',action:'add'},
					        {xtype:'button', text: '修改用户' ,icon:'images/grid_edit.png',action:'update'},
					        {xtype:'button', text: '删除用户' ,icon:'images/grid_delete.png',action:'delete'}
					    ]
	 			},
	 			{ 
	 				        dock: 'bottom', 
	 			            xtype: 'pagingtoolbar', 
	 				        store:'BSOFT.custom.user.store.UserStore', 
	 				        plugins: [{ptype:'resizer'}],
	 			            pageSize: 20, 
	 			            displayInfo: true, 
	 			            displayMsg: '显示 {0} - {1} 条，共计 {2} 条', 
	 			            emptyMsg: '没有数据' 
	 			  }
	 		]
});


