Ext.define("BSOFT.custom.treeMenu.view.treeUpdateMenuForm",{//创建form
	extend: 'Ext.form.Panel',
    alias : 'widget.treeUpdateMenuForm',
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
                 title:'目录信息',
	        	   collapsible: true,
	        	   items:[
	        	   		  {
					            xtype: 'hidden',
					            name:'id'
						  },{
					            xtype: 'hidden',
					            name:'pid'
						  },{
					            xtype: 'textfield',
					            fieldLabel: '菜单名称',
					            allowBlank: false,
					            name:'name'
						  },{
					            xtype: 'textfield',
					            fieldLabel: '菜单URL',
					            //allowBlank: false,
					            name:'ext1'
						  },{
					            xtype: 'textfield',
					            fieldLabel: '顺序',
					            //allowBlank: false,
					            name:'orderIndex'
						  }
	        	   ]
             }
	],
	 this.buttons=[
      	   {
      		 text: '确定',
      		 disabled: true,
      		 formBind: true,
      		 action:'treeUpdateMenu'
      	   }
      	]
    	this.callParent(arguments);
	}
})