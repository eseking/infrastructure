Ext.define("limitsybModel", {
	extend : "Ext.data.Model",
	fields : [ {
		name : 'id',
		type : 'string',
		sortable : true
	}, {
		name : 'typecode1',
		type : 'string',
		sortable : true
	}, {
		name : 'typecode2',
		type : 'string',
		sortable : true
	}, {
		name : 'typename',
		type : 'string',
		sortable : true
	} ]
});
var limitsybStore = Ext.create('Ext.data.Store', {
	pageSize:20,
	autoLoad:true,
	model : 'limitsybModel',
	proxy : {
		type : 'ajax',
		url :  urlUtil.requrl + '/getTypecode1Limits.do',
		actionMethods : {
			read : 'POST'
		},
		reader : {
			type : 'json',
			root : function(o) {
				if (o.api_code == 1&& o.success == false) {
					 commonFunction.showMessage('操作失败',o.error_msg);
				} else {
					return o.pageModel.datas;
				}
			},
			totalProperty : 'pageModel.count'
		}
	}
});
Ext.define("BSOFT.custom.role.view.limitsRGrid",{// 创建grid
			extend : 'Ext.grid.Panel',
			alias : 'widget.limitRGrid',
			region : 'center',
			width : 550,
			margin : '0 0 0 3',
			columns : [ // 列模式
			{
				xtype : 'rownumberer',
				header : "序号",
				width : 55
			}, {
				text : "字典项编码",
				dataIndex : 'typecode2',
				width : 150
			}, {
				text : "字典项名称",
				dataIndex : 'typename',
				width : 150
			}],
			store : limitsybStore,
			selType : 'checkboxmodel',// 设定选择模式
		});
