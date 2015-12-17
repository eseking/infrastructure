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
	pageSize:40,
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


Ext.define("BSOFT.custom.user.view.UserUpdateForm",{//创建form
	extend: 'Ext.form.Panel',
    alias : 'widget.UserUpdateForm',
    width: 350,
    height: 400,
    bodyStyle:{'padding':'15px 15px 15px'},
    defaults:{
        labelAlign:'left'
    },
	 initComponent: function() {
        this.items = [
             { //是否为空，以及提示语言
                 xtype:'fieldset',
                 title:'用户信息',
	        	   collapsible: true,
	        	   items:[
	        	   		  {
					            xtype: 'hidden',
					            name:'id'
						  },{
					            xtype: 'textfield',
					            fieldLabel: '用户名称',
					            allowBlank: false,
					            name:'userName'
						  },
						  	 {
					            xtype: 'textfield',
					            fieldLabel: '用户密码',
					            
					            name:'passwd'
						  },
						  		{
						            xtype: 'combo',
						            fieldLabel: '所属角色',
						            store: roleStore,
						            queryMode: 'remote',
						            displayField: 'roleName',
						            valueField: 'id',
						           
						            width: 200,
						            name: 'roleId'
					               	
					            }
					     
	        	   ]
             }
	],
	 this.buttons=[
      	   {
      		 text: '修改',
      		 disabled: true,
      		 formBind: true,
      		 action:'formUpdate'
      	   }
      	]
    	this.callParent(arguments);
	}
})