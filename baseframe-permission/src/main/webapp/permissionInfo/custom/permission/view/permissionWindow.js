 Ext.define('BSOFT.custom.permission.view.permissionWindow', {
			    extend: 'Ext.window.Window',
			    alias : 'widget.permissionWindow',
			    width: 950,
			    height: 600,
			    title : '权限设置',
			    //layout: 'hbox',
			    autoShow: true,
			    layout: 'border',
			   // modal:true,
			    initComponent: function() {
			    	var me = this;
			    	var pname=commonFunction.uniqid();
			    	var panel=Ext.define(pname,{
						extend:'Ext.panel.Panel',
						alias:'widget.'+pname,
						margins:'5 5 5 0',
						height : 220,
						region:'center',
						layout:'fit'
						
			    	})
			    	
			    
			    	
			      /*  this.items = [
			        {xtype: 'mainlayout'}
			        ];*/
			    	
			    	this.items = [
					
			    	{xtype:'perTree',roleId:me.roleId}
			    	//panel
			    	/*	{
							
							xtype:'panel',
							margins:'5 2 5 5',
							width: 350,
							collapsible:true,//可以被折叠
							//id:commonFunction.uniqid(),
							//layout:'fit',
							items:[{
								xtype:'perTree',
								roleId:me.roleId
							}]
						}*/
				/*		{
							title:'定制页面',
						//	region:'center',
							xtype:'panel',
							margins:'5 5 5 0',
							height : 220,
							pname:'center',
							layout:'fit',
							
							items:[
								Ext.create("Ext.form.Panel",{
								bodyStyle :'padding:5 5 5 5',
								items:[
								{
										xtype:'hidden'
							        	   	  
							      }
									
								]
								})
						]
						}*/
						]
			        this.callParent(arguments);
			    }
			});