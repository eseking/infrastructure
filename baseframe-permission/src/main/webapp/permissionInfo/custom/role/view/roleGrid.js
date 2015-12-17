//model
Ext.define("roleModel",{
			extend:"Ext.data.Model",
			fields:[
				{name:'id',type:'string',sortable:true},
				{name:'roleName',type:'string',sortable:true}
			]
		});

//store
var roleStore = Ext.create('Ext.data.Store', {
	pageSize:20,
	autoLoad:true,
	model : 'roleModel',
	proxy:{
	    type:'ajax',
	    url:urlUtil.requrl+'/listRole.do',
	    actionMethods: {  
  		read: 'POST'  
		},
	    reader: {
	        type: 'json',
	        root: function(o){
	        	if(o.api_code ==1 && o.success ==false){
	        		//commonFunction.showMessage('操作失败',o.error_msg);
	        	}else{
	        		return o.pageModel.datas;
	        	}
	        },
	        totalProperty: 'pageModel.count'
	    }
	}	
});

Ext.define("BSOFT.custom.role.view.roleGrid",{//创建grid
	extend:'Ext.grid.Panel',
	alias: 'widget.roleGrid',
	closable : true,
	title:'角色管理',
	layout:'fit',
	columns : [ //列模式
	    {xtype: 'rownumberer',header:"序号",width:40},
		{text:"角色名称",dataIndex:'roleName',width:150}
		],
	selType:'checkboxmodel',//设定选择模式
	store:roleStore,
	dockedItems:[
	 			{
					    xtype: 'toolbar',
					    dock: 'top',
					    items: [
					        { 
					        	xtype:'button', text: '授权' ,icon:'images/grid_add.png',action:'per'
					        },
					        { 
					        	xtype:'button', text: '增加角色' ,icon:'images/grid_add.png',action:'add'
					        },
					        { 
					        	xtype:'button', text: '修改角色' ,icon:'images/grid_edit.png',action:'update'
					        },
					        { 
					        	xtype:'button', text: '删除角色' ,icon:'images/grid_delete.png',action:'delete'
					        },
					        { 
					        	xtype:'button', text: '数据权限' ,icon:'images/grid_add.png',action:'limits'
					        }
					    ]
	 			},
	 			{ 
	 				        dock: 'bottom', 
	 			            xtype: 'pagingtoolbar', 
	 				        store:roleStore, 
	 				        plugins: [{ptype:'resizer'}],
	 			            pageSize: 20, 
	 			            displayInfo: true, 
	 			            displayMsg: '显示 {0} - {1} 条，共计 {2} 条', 
	 			            emptyMsg: '没有数据' 
	 			  }
	 			
	 			]
});


