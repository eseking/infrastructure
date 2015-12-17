Ext.define('BSOFT.model.TreeMenuModel', {
			    extend: 'Ext.data.Model',
				fields: [
					{name: 'text',  type: 'string',sortable : true,mapping: 'name'},
				    {name: 'info',   type: 'string',sortable : true},
				    {name: 'id',   type: 'string',sortable : true},
				    {name: 'leaf',   type: 'boolean',sortable : true},
				    {name: 'EXT4',type:'string',sortable : true},
				    {name: 'checked',type:'boolean',defaultValue: false},//defaultValue: false 显示多选
				    {name: 'EXT5',type:'string',sortable : true},
				    {name: 'ext2',type:'string',sortable : true} //层级
				]
			});
Ext.define("BSOFT.custom.permission.store.DeptStore4Tree",{
	extend:'Ext.data.TreeStore',
	//autoLoad : true,
	model : 'BSOFT.model.TreeMenuModel', 
	proxy:{
		type:'ajax',
		//url:projectName+'/conf/getTreePermissionsDis.action',
		url:urlUtil.requrl+'/images/bg1.gif',
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