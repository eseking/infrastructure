Ext.define("BSOFT.custom.role.view.roleUpdateForm",{//创建form
	extend: 'Ext.form.Panel',
    alias : 'widget.roleUpdateForm',
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
                 title:'角色信息',
	        	   collapsible: true,
	        	   items:[
	        	   		  {
					            xtype: 'hidden',
					            name:'id'
						  },
	        	   	      {
					            xtype: 'textfield',
					            fieldLabel: '角色名称',
					            allowBlank: false,
					            name:'roleName'
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