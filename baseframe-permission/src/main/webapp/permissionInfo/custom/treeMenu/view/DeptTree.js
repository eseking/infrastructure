
Ext.define("BSOFT.custom.treeMenu.view.DeptTree",{
	extend:'Ext.tree.Panel',
	alias:'widget.treeMenuView',
	rootVisible:false,
	displayField:'text',
	closable:true,
	animate:false,
	multiSelect :false,
	title:'目录管理',
	ptype:'treesingleselect',  
	  dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [
               /* {
                    iconCls: 'tasks-new-list',
                    tooltip: '增加节点'
                }*/
                {xtype:'button',text:'增加节点',action:'add',icon:'images/grid_add.png'},
                {xtype:'button',text:'修改节点',action:'update',icon:'images/grid_edit.png'},
                {xtype:'button',text:'删除节点',action:'delete',icon:'images/grid_delete.png'}
                  /*{
                    iconCls: 'tasks-mark-active',
                    tooltip: '编辑节点'
                },
                {
                    iconCls: 'tasks-delete-list',
                    tooltip: '删除节点'
                }*/
            ]
        }
    ],
	store:'BSOFT.custom.treeMenu.store.OrgTreeStore'
})