// 报表主体model
Ext.define("limitsLModel", {
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
		name : 'typename',
		type : 'string',
		sortable : true
	}]
});

var limitsLStore = Ext.create('Ext.data.Store', {
	pageSize:20,
	autoLoad:true,
	model : 'limitsLModel',
	proxy : {
		type : 'ajax',
		url : urlUtil.requrl + '/listLimits.do',
		actionMethods : {
			read : 'POST'
		},
		reader : {
			type : 'json',
			root : function(o) {
				if (o.api_code == 1&& o.success == false) {
					commonFunction.showMessage('操作失败',o.error_msg);
				} else {
					return o.result;
				}
			},
			totalProperty : 'pageModel.count'
		}
	}
});



// 数据权限字典项
Ext.define("BSOFT.custom.role.view.limitsLGrid",{// 创建grid
					extend : 'Ext.grid.Panel',
					alias : 'widget.limitLGrid',
					region : 'west',
					width : 240,
					margin : '0 0 0 3',
					listeners : {
						itemclick : function(view,record, item, index, e,eOpts) {
							var formDatas = this.up("panel").formDatas;
							//alert(Ext.encode(this.up("panel").formDatas));
							//角色ID
							var roleId = formDatas.id;
							//保存被选中的记录
							var limitsArray =formDatas.limitsArray;
							// 报表主体ID
							var typecode1 = record.get("typecode1");
							// 目标表store
							var targetStore = limitsybStore;
							
							var targetGrid = Ext.getCmp("limitsRGrid");
							
							var data = targetGrid.getSelectionModel().getSelection();
							if(data.length == 0){
								
							}else{
								 //存放GRID选中的ID
								var Ids =[];
								
								var keyCode;
	                            for(var i in data){
	                            	keyCode=data[i].data.typecode1;
	                            	Ids.push(data[i].data.typecode2);
	                            }
								
	                            limitsArray.add(keyCode,Ids);
	                            
							}
							targetStore.proxy.url = urlUtil.requrl + '/getTypecode1Limits.do?typecode1='+typecode1,
							/*targetStore.on(
						    		'load',function(roleGrid, rs,successful,operation,eOpts){
						    		}
						        )*/
							//	targetStore.load();
							targetStore.load(function(records, operation, success){
								//选中之前选择的记录
								
								if(limitsArray.containsKey(typecode1)){
									var ids = limitsArray.get(typecode1);
									
									var idsObj ={};
									for(var i in ids){
										var value = ids[i];
										idsObj[value]=value;
									}
									//alert(typecode1 +"	"+ Ext.encode(idsObj));
									var array=[];
									
									targetStore.each(function(record) {
										var typecode2 = record.get("typecode2");
										
										//alert(typecode2 +" "+ idsObj[typecode2]);
										if(idsObj[typecode2]) {
											array.push(record);
										}
									});
									//alert(array);
									targetGrid.getSelectionModel().select(array, true);
								}
							})
						}
					},
					columns : [ // 列模式
					{
						xtype : 'rownumberer',
						header : "序号",
						width : 55
					},{
						text : "字典名称",
						dataIndex : 'typename',
						width : 165
					} ],
					store : limitsLStore
				});

Ext.define("limitsybModel", {
	extend : "Ext.data.Model",
	fields : [ {
		name : 'id',
		type : 'string',
		sortable : true
	},{
		name : 'typecode1',
		type : 'string',
		sortable : true
	},{
		name : 'typecode2',
		type : 'string',
		sortable : true
	},{
		name : 'typename',
		type : 'string',
		sortable : true
	}/*,{
		name: 'checked',
		type:'boolean',
		defaultValue: false //显示多选
		}*/
	]
});


var limitsybStore = Ext.create('Ext.data.Store', {
	pageSize:20,
	autoLoad:true,
	model : 'limitsybModel',
	proxy : {
		type : 'ajax',
		url : urlUtil.requrl + '/getTypecode1Limits.do',
		actionMethods : {
			read : 'GET'
		},
		reader : {
			type : 'json',
			root : function(o) {
				if (o.api_code == 1&& o.success == false) {
					commonFunction.showMessage('操作失败',o.error_msg);
				} else {
					return o.result;
				}
			},
			totalProperty : 'pageModel.count'
		}
	}
});


Ext.define("BSOFT.custom.role.view.limitsRGrid",{// 创建grid
			extend : 'Ext.grid.Panel',
			alias : 'widget.limitRGrid',
			id:'limitsRGrid',
			region : 'center',
			width : 550,
			margin : '0 0 0 3',
			multiSelect :true,//文本框多选
			columns : [ 
			{
				text : "字典项编码",
				dataIndex : 'typecode2',
				width : 150
			}, {
				text : "字典项名称",
				dataIndex : 'typename',
				width : 150
			}],
			store : limitsybStore,
			selType : 'checkboxmodel',// 设定选择模式checkboxmodel
			listeners : {
				itemclick : function(view,record, item, index, e,eOpts) {
					/*console.log(this);
					console.log(record);*/
					var formDatas = this.up("panel").formDatas;
					//alert(Ext.encode(this.up("panel").formDatas));
					//角色ID
					var roleId = formDatas.id;
					//保存被选中的记录
					var limitsArray =formDatas.limitsArray;
					
					
				}
			}
		});


