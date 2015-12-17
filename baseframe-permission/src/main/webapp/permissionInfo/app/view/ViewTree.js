Ext.define("BSOFT.app.view.ViewTree",{
	extend:'Ext.tree.Panel',
	alias:'widget.viewTree',
	rootVisible:false,
	displayField:'text',
	animate:true,
	multiSelect :false,
	ptype:'treesingleselect',
	dockedItems:[{
		xtype:'toolbar'//,
	}],
	store:'ViewTreeStore'
});


