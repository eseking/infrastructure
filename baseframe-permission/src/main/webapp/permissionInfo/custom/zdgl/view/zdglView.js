Ext.define('BSOFT.custom.zdgl.view.zdglView', {
    extend: 'Ext.window.Window',
    alias: 'widget.zdglView',
    width: 750,
    height: 500,
    titleAlign: 'center',
    title: '字典维护',
    layout: 'anchor',
    autoShow: true,
    modal:true,
    //添加“modal:true ”的配置，即可实现弹出window窗口后背景窗口变得不可编辑。
    getStoreRemote: function(typecode1) {
        var storeR;
        var getCallBack = function(jsons) {
            var dicStore = Ext.create('Ext.data.Store', {
                model: 'Dmzdmx',
                data: jsons
            });
            storeR = dicStore;
        };
        var requestConfig = {
            async: false,
            // 异步
            params: {
                beanId: 'zdglService',
                methodName: 'getDmzdmx',
                args: [typecode1]
            },
            success: function(resp, opts) {
                var obj = Ext.decode(resp.responseText);
                getCallBack(obj.result);
            },
            failure: function(resp, opts) {
                storeR = defaultStore;
            }
        };
        commonFunction.serviceDispatch(requestConfig);
        return storeR;
    },
    initComponent: function() {
        Ext.define('Dmzdmx', {
            extend: 'Ext.data.Model',
            fields: [{
                name: 'typecode1',
                type: 'string'
            },
            {
                name: 'typecode2',
                type: 'string'
            },
            {
                name: 'typename',
                type: 'string'
            },
            {
                name: 'pid',
                type: 'string'
            },
            ]
        });
        var defaultStore = Ext.create('Ext.data.Store', {
            model: 'Dmzdmx',
            data: [{
                'typecode1': 'typecode1',
                'typecode2': 'typecode2',
                "typename": "typename",
                "pid": "pid"
            }]
        });
        var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        });

        var cellgrid = Ext.create('Ext.grid.Panel', {
        	anchor: '100% 85%',
        	
            columns: [{
                id: 'typecode2id',
                header: '字典项编码',
                dataIndex: 'typecode2',
                editor: {
                    allowBlank: false
                }
            },
            {
                id: 'typenameid',
                header: '字典项名称',
                dataIndex: 'typename',
                flex: 1,
                editor: {
                    allowBlank: false
                }
            },
            {
                id: 'pidid',
                header: '父编码',
                dataIndex: 'pid',
                editor: {
                    allowBlank: true
                }
            },
            {
                xtype: 'actioncolumn',
                width: 30,
                sortable: false,
                items: [{
                    icon: 'images/grid_delete.png',
                    tooltip: '删除项目',
                    handler: function(cellgrid, rowIndex, colIndex) {
                        cellgrid.getStore().removeAt(rowIndex);
                    }
                }]
            }],
            //grid选择模式
            selModel: {
               // selType: 'cellmodel',
                selType:'checkboxmodel'//设定选择模式
            },
            width: 600,
            height: 300,
            title: '字典明细',
            titleAlign: 'center',
            frame: true,
            tbar: [{
                text: '新增',
                handler: function() {
                    var r = Ext.create('Dmzdmx', {
                        typecode2: '',
                        typename: '',
                        pid: ''
                    });
                    cellgrid.getStore().insert(0, r);
                    cellEditing.startEditByPosition({
                        row: 0,
                        column: 0
                    });
                }
            }],
            plugins: [cellEditing]
        });

        this.items = [{
            xtype: 'form',
            anchor: '100% 15%',
            bodyPadding:20,
            items: [{
                xtype: 'fieldcontainer',
                width: 800,
                layout: {
                    type: 'hbox'
                },
                defaultType: 'textfield',
                items: [{
                    fieldLabel: '字典编码',
                    labelWidth: 78,
                    width: 150,
                    name: 'typecode1',
                    padding: '0 5 0 0',
                    readOnly: true

                },
                {
                    fieldLabel: '字典名称',
                    labelWidth: 60,
                    name: 'typename',
//                    width: 150,
                    padding: '0 5 0 5',
                    allowBlank:false
                },
                {
                    fieldLabel: '联动到',
                    labelWidth: 60,
                    name: 'cid',
                    width: 150,
                    padding: '0 5 0 5'
                }]
            }]
        },
        cellgrid];
        this.buttons = [{
            id: 'addBtn',
            text: '保存',
            action: 'add'
        },
        {
            id: 'updateBtn',
            text: '修改',
            action: 'update'
        },
        {
            text: '取消',
            scope: this,
            handler: this.close
        }];
        this.callParent(arguments);
    }
});