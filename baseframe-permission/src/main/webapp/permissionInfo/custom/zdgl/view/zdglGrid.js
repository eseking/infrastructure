//model
Ext.define("zdglModel",{
			extend:"Ext.data.Model",
			fields:[
			    {name:'id',type:'string',sortable:true},
				{name:'typename',type:'string',sortable:true},
				{name:'cid',type:'string',sortable:true},
				{name:'typecode1',type:'string',sortable:true}
			]
		});
//store
var zdglStore = Ext.create('Ext.data.Store', {
	pageSize:20,
	autoLoad:true,
	model : 'zdglModel',
	proxy:{
	    type:'ajax',
	    url:urlUtil.requrl+'/listZdgl.do',
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
Ext.define("BSOFT.custom.zdgl.view.zdglGrid",{//创建grid
	extend:'Ext.grid.Panel',
	alias: 'widget.zdglGrid',
	closable : true,
	title:'字典维护',
	layout:'fit',
	columns : [ //列模式
	    {xtype: 'rownumberer',header:"序号",width:40},
		{text:"字典名称",dataIndex:'typename',width:150},
		{text:"联动编码",dataIndex:'cid',width:150},
		{text:"字典编码",dataIndex:'typecode1',width:150}
		],
	selType:'checkboxmodel',//设定选择模式
	store:zdglStore,
	dockedItems:[
	 			{
					    xtype: 'toolbar',
					    dock: 'top',
					    items: [
					            
					        {xtype:'textfield',fieldLabel: '字典名称:',name:'typename',id:'zdglGridzdmcText'},
					        {xtype:'textfield',fieldLabel: '字典编码:',name:'typecode1',id:'zdglGridzdbmText'}
					    ]
	 			},
	 			{
				    xtype: 'toolbar',
				    dock: 'top',
				    items: [
				        {xtype:'button', text: '查询' ,icon:'images/grid_find.png',action:'select'},
				        {xtype:'button', text: '新增' ,icon:'images/grid_add.png',action:'add'},
				        {xtype:'button', text: '修改' ,icon:'images/grid_edit.png',action:'update'},
				        {xtype:'button', text: '删除' ,icon:'images/grid_delete.png',action:'delete'}
				    ]
	 			},
	 			{ 
	 					dock: 'bottom', 
			            xtype: 'pagingtoolbar', 
				        store:zdglStore, 
				        plugins: [{ptype:'resizer'}],
			            pageSize: 20, 
			            displayInfo: true, 
			            displayMsg: '显示 {0} - {1} 条，共计 {2} 条', 
			            emptyMsg: '没有数据' 
	 			  }
	 			]
});




