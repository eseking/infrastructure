Ext.define("BSOFT.app.store.ViewTreeStore",{
	extend:'Ext.data.TreeStore',
	//defaultRootId : 'root',
	model : modelFactory.getTree(),
	proxy:{
		type:'ajax',
		url:urlUtil.requrl+'/getViewTree.do',
		reader: {
				root:function(o){
	        	if(o.pageModel){
	        		return	o.pageModel.datas;
	        	}else{
	        		return o.children;
	        	}
	        	},
	            type: 'json'
	        }
	}
	
});