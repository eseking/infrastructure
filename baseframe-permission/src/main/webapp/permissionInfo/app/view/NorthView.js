Ext.define("BSOFT.app.view.NorthView",{
	extend:'Ext.panel.Panel',
	alias:'widget.northView',
	contentEl: 'north',
	initComponent: function(){
        var me = this;
        me.callParent(arguments);
    }
});