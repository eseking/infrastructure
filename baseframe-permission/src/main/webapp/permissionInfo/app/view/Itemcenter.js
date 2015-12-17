var tab_title_welcome='';

Ext.define("BSOFT.app.view.Itemcenter",{
    extend:'Ext.panel.Panel', 
    alias:'widget.itemcenter',
    iconCls:'dept_table',
	title:tab_title_welcome,
	preventHeader:true,
	//closable:true,
	//region:'center',
	xtype:'panel',
	id:'center',
	margins:'5 5 5 0',
	//width: 2000,
	autoscroll:true,
	//layout:'border',
	layout:'fit'
	//collapsible:true,
	
 });