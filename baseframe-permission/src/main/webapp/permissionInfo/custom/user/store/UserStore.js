Ext.define('BSOFT.custom.user.store.UserStore', {
  	extend:'Ext.data.Store',
	pageSize:20,
	autoLoad:true,
	model:'BSOFT.custom.user.model.UserModel',
	proxy:{
	    type:'ajax',
	    url:urlUtil.requrl+'/listUser.do',
	    actionMethods: {  
  		read: 'POST'  
		},
	    reader: {
	        type: 'json',
	        root: function(o){
	        	if(o.api_code ==1 && o.success ==false){
	        		commonFunction.showMessage('操作失败',o.error_msg);
	        	}else{
	        		return o.pageModel.datas;
	        	}
	        },
	        totalProperty: 'pageModel.count'
	    }
	}	
});