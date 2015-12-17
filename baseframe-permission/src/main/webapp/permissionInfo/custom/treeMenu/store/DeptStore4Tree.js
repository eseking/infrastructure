Ext.define('BSOFT.model.TreeMenuModel', {
			    extend: 'Ext.data.Model',
				fields: [
					{name: 'text',  type: 'string',sortable : true},
				    {name: 'info',   type: 'string',sortable : true},
				    {name: 'id',   type: 'string',sortable : true},
				    {name: 'leaf',   type: 'boolean',sortable : true},
				    {name: 'EXT4',type:'string',sortable : true},
				    {name: 'EXT5',type:'string',sortable : true}
				]
			});
Ext.define("BSOFT.custom.treeMenu.store.DeptStore4Tree",{
	extend:'Ext.data.TreeStore',
	//defaultRootId : 'root',
	model : 'BSOFT.model.TreeMenuModel', 
	proxy:{
		type:'ajax',
		url:projectName+'/conf/getConfViewTree.action',
		 reader : {  
           root:function(o){
        	if(o.pageModel){
        		return	o.pageModel.datas;
        	}else{
        		return o.children;
        	}
        	},
        	type:'json'
          //  root: 'result'
        }
      
	}
});