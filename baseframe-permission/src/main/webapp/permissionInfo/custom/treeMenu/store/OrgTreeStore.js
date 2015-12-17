Ext.define('BSOFT.model.OrgTreeModel', {
			    extend: 'Ext.data.Model',
			    fields: [
							{name: 'text',  type: 'string',sortable : true,mapping: 'name'},
						    {name: 'info',   type: 'string',sortable : true},
						    {name: 'id',   type: 'string',sortable : true},
						    {name: 'leaf',   type: 'boolean',sortable : true},
						    {name: 'EXT4',type:'string',sortable : true},
						  //  {name: 'checked',type:'boolean',defaultValue: false},//defaultValue: false 显示多选
						    {name: 'EXT5',type:'string',sortable : true},
						    {name: 'ext2',type:'string',sortable : true} //层级
						]
			});
Ext.define("BSOFT.custom.treeMenu.store.OrgTreeStore",{
	extend:'Ext.data.TreeStore',
	model : 'BSOFT.model.OrgTreeModel', 
	proxy:{
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
});