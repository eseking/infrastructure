Ext.define("BSOFT.custom.role.view.roleForm",{//创建form
	extend: 'Ext.form.Panel',
    alias : 'widget.roleForm',
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
      		 text: '保存',
      		 disabled: true,
      		 formBind: true,
      		 action:'formAdd'
      	   }
      	]
    	this.callParent(arguments);
	}
})