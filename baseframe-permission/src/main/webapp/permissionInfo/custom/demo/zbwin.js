
 

 	  //机构model
	  Ext.define("orgModel",{
			extend:"Ext.data.Model",
			fields:[
				{name:'id',type:'string',sortable:true},
				{name:'jgsx',type:'string',sortable:true},
				{name:'jgbm',type:'string',sortable:true},
				{name:'jgqc',type:'string',sortable:true},
				{name:'jgjc',type:'string',sortable:true}
			]
		});
	  //指标model
	  Ext.define("zbModel",{
			extend:"Ext.data.Model",
			fields:[
				{name:'id',type:'string',sortable:true},
				{name:'zbmc',type:'string',sortable:true}
			]
		});
	  
	  //报表主体model
	  Ext.define("bbztModel",{
			extend:"Ext.data.Model",
			fields:[
				{name:'id',type:'string',sortable:true},
				{name:'bbqc',type:'string',sortable:true},
				{name:'bbjc',type:'string',sortable:true},
				{name:'ssysnd',type:'string',sortable:true}
			]
		});
	  
	  //报表时间model
	  Ext.define("bbtimeModel",{
			extend:"Ext.data.Model",
			fields:[
				{name:'id',type:'string',sortable:true},
				{name:'ysnd',type:'string',sortable:true},
				{name:'qsrq',type:'string',sortable:true},
				{name:'jzrq',type:'string',sortable:true}
			]
		});
	  
	  var bbztStore = Ext.create('Ext.data.Store', {
			pageSize:indicator.pagesize,
			//autoLoad:true,
			model : 'bbztModel',
			proxy:{
			    type:'ajax',
			    url:indicator.requrl+'/listBbzt.do',
			    actionMethods: {  
          		read: 'POST'  
      		},
			    reader: {
			        type: 'json',
			        root: function(o){
			        	if(o.api_code ==1 && o.success ==false){
			        		//commonFunction.showMessage('操作失败',o.error_msg);
			        	}else{
			        		return o.pageModel.datas;
			        	}
			        },
			        totalProperty: 'pageModel.count'
			    }
			}	
		});
	  
	  var bbtimeStore = Ext.create('Ext.data.Store', {
			pageSize:indicator.pagesize,
			//autoLoad:true,
			model : 'bbtimeModel',
			proxy:{
			    type:'ajax',
			    url:indicator.requrl+'/listBbtime.do',
			    actionMethods: {  
        		read: 'POST'  
    		},
			    reader: {
			        type: 'json',
			        root: function(o){
			        	if(o.api_code ==1 && o.success ==false){
			        		//commonFunction.showMessage('操作失败',o.error_msg);
			        	}else{
			        		return o.pageModel.datas;
			        	}
			        },
			        totalProperty: 'pageModel.count'
			    }
			}	
		});
	  
	  var orgStore = Ext.create('Ext.data.Store', {
			pageSize:indicator.pagesize,
			//autoLoad:true,
			model : 'orgModel',
			proxy:{
			    type:'ajax',
			    url:indicator.requrl+'/listOrg.do',
			     actionMethods: {  
            		read: 'POST'  
        		},
			    reader: {
			        type: 'json',
			        root: function(o){
			        	if(o.api_code ==1 && o.success ==false){
			        		//commonFunction.showMessage('操作失败',o.error_msg);
			        	}else{
			        		return o.pageModel.datas;
			        	}
			        },
			        totalProperty: 'pageModel.count'
			    }
			}	
		});
	  var zbStore = Ext.create('Ext.data.Store', {
			pageSize:indicator.pagesize,
			//autoLoad:true,
			model : 'zbModel',
			proxy:{
			    type:'ajax',
			    url:indicator.requrl+'/listZB.do',
			     actionMethods: {  
          		read: 'POST'  
      		},
			    reader: {
			        type: 'json',
			        root: function(o){
			        	if(o.api_code ==1 && o.success ==false){
			        		//commonFunction.showMessage('操作失败',o.error_msg);
			        	}else{
			        		return o.pageModel.datas;
			        	}
			        },
			        totalProperty: 'pageModel.count'
			    }
			}	
		});
	  Ext.define("orgGrid",{//创建grid
			extend:'Ext.grid.Panel',
			alias: 'widget.orgGrid',
			title:'请选择机构',
			layout:'fit',
			columns : [ //列模式
			    {xtype: 'rownumberer',header:"序号",width:40},
				{text:"机构名称",dataIndex:'jgqc',width:150}
				],
			store:orgStore,
			dockedItems:[
			 			//searchBar,
			 			{ 
			 				        dock: 'bottom', 
			 			            xtype: 'pagingtoolbar', 
			 				        store:orgStore, 
			 				        plugins: [{ptype:'resizer'}],
			 			            pageSize: indicator.pagesize, 
			 			            displayInfo: true, 
			 			            displayMsg: '显示 {0} - {1} 条，共计 {2} 条', 
			 			            emptyMsg: '没有数据' 
			 			  }
			 			
			 			]
	  });
	  
	
	  //增加指标
	  Ext.define("addZBWin", {
				    extend: 'Ext.window.Window',
				    alias : 'widget.addZBWin',
				    width: 350,
				    height:200,
				    hidden: false,  
				    maximizable: true,
				    modal:true,
				    title : '增加指标',
				    layout: 'fit',
				    autoShow: true,
				    initComponent: function() {
			        this.items = [
			        		{
						       	  xtype:'form',
						       	  bodyStyle:'padding:15px 15px 15px',
						          autoScroll:true,
					              defaults:{
					                  labelAlign:'left'
					              },
					              items:[
					                   { //是否为空，以及提示语言
					                       xtype:'fieldset',
					                       title:'指标',
							        	   collapsible: true,
							        	   items:[
							        	   	      {
											            xtype: 'textfield',
											            fieldLabel: '指标名称',
											            allowBlank: false,
											            name:'zbmc'
												  },
												  {
											            xtype: 'textfield',
											            fieldLabel: '指标简称',
											            name:'zbjc'
												  },
												  {
											            xtype: 'combo',
											            fieldLabel: '指标类别',
											            name:'zbtype'
												  }
							        	   ]
					                   }
			        		],
			        		 buttons:[
						        	   {
						        		 text: '保存',
						        		 disabled: true,
						        		 formBind: true,
						        		 handler: function(btn)
						        		 {		
						        		 	  var value = Ext.encode(btn.up('form').getForm().getValues());
						        		 	 	Ext.Ajax.request({
						        					url : indicator.requrl+'/addZB.do',
						        					method : 'POST',
						        					timeout :3000,
						        					async:false,
						        					params: {
						        						formDatas: value
						        					},
						        					success: function(resp,opts) {
						        						var obj=Ext.decode(resp.responseText);
						        						
						        						if( obj.success==true ){
						        						commonFunction.showMessage('操作成功',"增加指标成功");
						        						}else{
						        						commonFunction.showMessage('操作失败',"增加指标失败");
						        						}
						        						
						        						var search = Ext.getCmp("gridSearchText").getValue();
						    		            		//无查询条件
						    		            		if(Ext.isEmpty(search)){
						    		            			zbStore.proxy.extraParams.condition="";
						    		            			zbStore.load();
						    		            		}else{
						    		            			
						    		            			zbStore.proxy.extraParams.condition= Ext.encode({'name':search});
						    		            			zbStore.load();
						    		            		}
						        						
						        						return obj;
						        					}

						        				})
					                          btn.up('window').close();
						        		 	 
						        		 }
						        	   }
						        	]
			        		
			        		}]
			        
			        this.callParent(arguments);
				    }
			})
			
			
			
			//增加年度信息
	  Ext.define("addBBTIMEWin", {
				    extend: 'Ext.window.Window',
				    alias : 'widget.addBBTIMEWin',
				    width: 350,
				    height:200,
				    hidden: false,  
				    maximizable: true,
				    modal:true,
				    title : '增加年度信息',
				    layout: 'fit',
				    autoShow: true,
				    //ztid:'11',
				    initComponent: function() {
			        this.items = [
			        		{
						       	  xtype:'form',
						       	  bodyStyle:'padding:15px 15px 15px',
						          autoScroll:true,
					              defaults:{
					                  labelAlign:'left'
					              },
					              items:[
					                   { //是否为空，以及提示语言
					                       xtype:'fieldset',
					                       title:'增加年度信息',
							        	   collapsible: true,
							        	   items:[
							        	   	      {
											            xtype: 'textfield',
											            fieldLabel: '预算年度',
											            allowBlank: false,
											            name:'ysnd'
												  },
												  {
											            xtype: 'datefield',
											            fieldLabel: '起始日期',
											            name:'qsrq',
											            allowBlank: false,
											            format:'Y-m-d'
												  },
												  {
											            xtype: 'datefield',
											            fieldLabel: '截止日期',
											            format:'Y-m-d',
											            allowBlank: false,
											            name:'jzrq'
												  }
							        	   ]
					                   }
			        		],
			        		 buttons:[
						        	   {
						        		 text: '保存',
						        		 disabled: true,
						        		 formBind: true,
						        		 handler: function(btn)
						        		 {
						        			 
						        			 var ztid = btn.up('window').ztid;
						        			 if(Ext.isEmpty(ztid)){
						        				 Ext.Msg.alert("提示","请选择报表主体!!!");
						        				 return ;
						        			 }
						        		 	  var value = Ext.encode(btn.up('form').getForm().getValues());
						        		 	 	Ext.Ajax.request({
						        					url : indicator.requrl+'/addBbtime.do',
						        					method : 'POST',
						        					timeout :3000,
						        					async:false,
						        					params: {
						        						formDatas: value,
						        						ztid:ztid
						        					},
						        					success: function(resp,opts) {
						        						var obj=Ext.decode(resp.responseText);
						        						
						        						if( obj.success==true ){
						        						commonFunction.showMessage('操作成功',"增加年度信息成功");
						        						}else{
						        						commonFunction.showMessage('操作失败',"增加年度信息失败");
						        						}
						        						bbtimeStore.load();
						        						
						        						return obj;
						        					}

						        				})
					                          btn.up('window').close();
						        		 	 
						        		 }
						        	   }
						        	]
			        		
			        		}]
			        
			        this.callParent(arguments);
				    }
			})
			
			
			
	  //增加报表主体
	  Ext.define("addBBZTWin", {
				    extend: 'Ext.window.Window',
				    alias : 'widget.addBBZTWin',
				    width: 350,
				    height:200,
				    hidden: false,  
				    maximizable: true,
				    modal:true,
				    title : '增加报表主体',
				    layout: 'fit',
				    autoShow: true,
				    initComponent: function() {
			        this.items = [
			        		{
						       	  xtype:'form',
						       	  bodyStyle:'padding:15px 15px 15px',
						          autoScroll:true,
					              defaults:{
					                  labelAlign:'left'
					              },
					              items:[
					                   { //是否为空，以及提示语言
					                       xtype:'fieldset',
					                       title:'增加报表主体',
							        	   collapsible: true,
							        	   items:[
							        	   	      {
											            xtype: 'textfield',
											            fieldLabel: '报表全称',
											            allowBlank: false,
											            name:'bbqc'
												  },
												  {
											            xtype: 'textfield',
											            fieldLabel: '报表简称',
											            name:'bbjc'
												  }
							        	   ]
					                   }
			        		],
			        		 buttons:[
						        	   {
						        		 text: '保存',
						        		 disabled: true,
						        		 formBind: true,
						        		 handler: function(btn)
						        		 {
						        		 	  var value = Ext.encode(btn.up('form').getForm().getValues());
						        		 	 	Ext.Ajax.request({
						        					url : indicator.requrl+'/addBbzt.do',
						        					method : 'POST',
						        					timeout :3000,
						        					async:false,
						        					params: {
						        						formDatas: value
						        					},
						        					success: function(resp,opts) {
						        						var obj=Ext.decode(resp.responseText);
						        						
						        						if( obj.success==true ){
						        						commonFunction.showMessage('操作成功',"增加报表主体成功");
						        						}else{
						        						commonFunction.showMessage('操作失败',"增加报表主体失败");
						        						}
						        						bbztStore.load();
						        						
						        						return obj;
						        					}

						        				})
					                          btn.up('window').close();
						        		 	 
						        		 }
						        	   }
						        	]
			        		
			        		}]
			        
			        this.callParent(arguments);
				    }
			})
	  
	 
	  Ext.define("ZBGrid",{//创建grid
			extend:'Ext.grid.Panel',
			alias: 'widget.ZBGrid',
			title:'请选择指标',
			layout:'fit',
			columns : [ //列模式
			    {xtype: 'rownumberer',header:"序号",width:40},
				{text:"指标名称",dataIndex:'zbmc',width:150}
				],
			store:zbStore,
			
			dockedItems:[
			 			{
					    xtype: 'toolbar',
					    dock: 'top',
					    items: [
					        { xtype:'button', text: '增加指标' ,icon:'images/grid_add.png',
					        	
					        	handler:function(btn){
					        		Ext.widget("addZBWin");
					        	}
					        }
					    ]},
			 			{ 
			 				        dock: 'bottom', 
			 			            xtype: 'pagingtoolbar', 
			 				        store:zbStore, 
			 				        plugins: [{ptype:'resizer'}],
			 			            pageSize: indicator.pagesize, 
			 			            displayInfo: true, 
			 			            displayMsg: '显示 {0} - {1} 条，共计 {2} 条', 
			 			            emptyMsg: '没有数据' 
			 			  }
			 			
			 			]
 			
	  });
	  
	  //报表主体
	  Ext.define("BbztGrid",{//创建grid
			extend:'Ext.grid.Panel',
			alias: 'widget.Bbzt',
			region: 'west',
			width: 250,
			margin:'0 0 0 3',
			listeners:{
       			
				itemclick :function(view,record,item,index,e,eOpts){
					//报表主体ID
					var ztid = record.get("id");
					
					//目标表store
					var targetStore = bbtimeStore;
					targetStore.proxy.extraParams.condition= Ext.encode({'ztid':ztid});
					targetStore.load();
       			}
			
			},
			
			columns : [ //列模式
			    {xtype: 'rownumberer',header:"序号",width:40},
				{text:"报表名称",dataIndex:'bbjc',width:200}
				],
			store:bbztStore,
			selType:'checkboxmodel',//设定选择模式
			dockedItems:[
			 			{
					    xtype: 'toolbar',
					    dock: 'top',
					    items: [
					        { xtype:'button', text: '增加报表主体' ,icon:'images/grid_add.png',
					        	
					        	handler:function(btn){
					        		Ext.widget("addBBZTWin");
					        	}
					        }
					    ]},
			 			{ 
			 				        dock: 'bottom', 
			 			            xtype: 'pagingtoolbar', 
			 				        store:bbztStore, 
			 				        plugins: [{ptype:'resizer'}],
			 			            pageSize: indicator.pagesize, 
			 			            displayInfo: true, 
			 			            displayMsg: '显示 {0} - {1} 条，共计 {2} 条', 
			 			            emptyMsg: '没有数据' 
			 			  }
			 			
			 			]
			
	  });
	  

	  Ext.define("BbtimeGrid",{//创建grid
			extend:'Ext.grid.Panel',
			alias: 'widget.Bbtime',
			region: 'center',
			width: 350,
			margin:'0 0 0 3',
			columns : [ //列模式
			    {xtype: 'rownumberer',header:"序号",width:40},
				{text:"预算年度",dataIndex:'ysnd',width:80},
				{text:"起始日期",dataIndex:'qsrq',width:80},
				{text:"截止日期",dataIndex:'jzrq',width:80}
				],
			store:bbtimeStore,
			selType:'checkboxmodel',//设定选择模式
			dockedItems:[
			 			{
					    xtype: 'toolbar',
					    dock: 'top',
					    items: [
							/*{ xtype:'button', text: '绑定年度' ,icon:'images/grid_add.png',
								
								handler:function(btn){
									var data = btn.up('grid').getSelectionModel().getSelection();
									if(data.length == 0){
										Ext.Msg.alert("提示","您最少要选择一条数据");
										return;
									}else{
										var selectData = data[0].data;
										
									}
								}
							},*/
					        { xtype:'button', text: '增加年度信息' ,icon:'images/grid_add.png',
					        	
					        	handler:function(btn){
					        		//获取报表主体ID
					        		
					        		var condition =bbtimeStore.proxy.extraParams.condition;
					        		if(condition){
					        			Ext.widget("addBBTIMEWin",Ext.decode(condition));
					        		}else{
					        			Ext.Msg.alert("提示","请选择报表主体!!!");
					        		}
					        		
					        	}
					        },
					        {xtype:'button',text:'预览',action:'preView',icon:'images/shape_group.png',
				            	handler:function(btn){
				            		
				            		var data = btn.up('grid').getSelectionModel().getSelection();
									if(data.length == 0){
										Ext.Msg.alert("提示","请选择报表的时间区间!!!");
										return;
									}else{
										var selectData = data[0].data;
										var timeId = selectData.id;
				            		
				            		if(indicator.tempId==""){
				            			return;
				            		}
				            		var resultData =[];
				            		//["23":data,"33":data]
				            		var rowReg ={};
				            		var colReg ={};
				            		//{"reg":[{"value":"2","text":"市五医院","row":3,"col":1,"key":"31","type":"org"},
				            		//          {"value":"3","text":"中心医院","row":4,"col":1,"key":"41","type":"org"},
				            		 //         {"value":"1","text":"门急诊人次数","row":2,"col":10,"key":"210","type":"zb"}],"rowReg":{"2":"1"},"colReg":{"1":"3"}}
				            		
				            		var rowFlag="";
				            		var tempCol="";
				            		var tempCol2="";
				            		//判断哪个是行指标  列相同即为行指标
				            		for(var i in indicator.regData){
				            			if(indicator.regData[i].type == "zb"){
				            				var col = indicator.regData[i].col;
				            				if(tempCol==""){
				            					tempCol=col;
				            				}else{
				            				if(tempCol==col){
				            					rowFlag="zb";
				            				}
				            				}
				            			}else{
				            				var col = indicator.regData[i].col;
				            				if(tempCol2==""){
				            					tempCol2=col;
				            				}else{
				            				if(tempCol2==col){
				            					rowFlag="org";
				            				}
				            				}
				            				
				            				
				            			}
				            		}
				     				//alert(rowFlag);
				     				//指标只有一行一列
				     				if(rowFlag==""){
				     					
				     					rowFlag="org";
				     				}
				     				
				     				
				     				
				            		for(var i in indicator.regData){
				            			resultData.push(indicator.regData[i]);
				            			if(indicator.regData[i].type == rowFlag){
				            				//alert(JSON.stringify(regData[i]));
				            				var row = indicator.regData[i].row;
				            				//行号为key 行指标为value
				            				rowReg[row]=indicator.regData[i].value;
				            				
				            			}else{
				            				var col = indicator.regData[i].col;
				            				//列号为key 行指标为value
				            				colReg[col]=indicator.regData[i].value;
				            			}
				            		}
				            		
				            		
				            	//	alert(Ext.encode(rowReg));
				            		
				            		$.ajax({
				            	   		type: "GET",
				            	   		url: indicator.requrl+"/getDatas.do?timeId="+timeId+"&rowFlag="+rowFlag+"&rm="+Math.random(),
				            			dataType: "json",
				            			async:false,
				            	   		success: function(data){
				            	   			if(data!=null && data.api_code ==0){
				            	   				//	alert(data.result);
				            	   					//写数
				            	   					//指标的值
				            	   					//var regValue={
				            	   					//		"2615":111,
				            	   					//		"2616":222,
				            	   					//		"2617":333
				            	   					//}
				            	   					
				            	   					regValue=data.result;
				            	   				//	alert(JSON.stringify(regValue));
				            	   					
				            	   					for(var i in rowReg){
				            	   						for(var j in colReg){
				            	   							var key =rowReg[i]+colReg[j];
				            	   							//alert(key);
				            	   							var value = "";
				            	   							if(regValue[key]){
				            	   								value = regValue[key];
				            	   							}else{
				            	   								value = "0";
				            	   							}
				            	   							cell.S(parseInt(j),parseInt(i),0,value);
				            	   						}
				            	   					}
				            	   					cell.CalculateAll();
				            	   					cell.MoveToCell(4, 4);
				            	   			}
				            	   		}
				            		});
				            		
				            	}
				            	}
				            
				            },
				            
				            {xtype:'button',text:'导入数据',action:'import',icon:'images/computer_add.png',
				            	
				            	handler:function(btn){
				            		
				            		 Ext.MessageBox.confirm('提示', '是否确定导入？将覆盖表中数据!', function(conbtn){
									    	if(conbtn=='yes'){
				            		
				            		if(!Ext.isEmpty(indicator.loadData)){
				            			
				            			var data = btn.up('grid').getSelectionModel().getSelection();
										if(data.length == 0){
											Ext.Msg.alert("提示","请选择报表的时间区间!!!");
											return;
										}else{
											var selectData = data[0].data;
											var timeId = selectData.id;
				            			
				            			
				            			
				            			var rowReg =indicator.loadData.rowReg;
				            			var colReg =indicator.loadData.colReg;
				            			//行指标
				            			var rowFlag =indicator.loadData.rowFlag;
				            			
				            			//alert(rowFlag);
				            			var importDatas=[];
				            			 for(var i in rowReg){
					   						for(var j in colReg){
					   							//数据类型
					   							var type = cell.GetCellDataType(parseInt(j),parseInt(i),0);
					   							var value;
					   							switch(type){
					   							case 0: 
					   								value="";
					   								break;
					   							case 1: 
					   								value = cell.GetCellString(parseInt(j),parseInt(i),0);
					   								break;
					   							case 2: 
					   								value = cell.GetCellDouble(parseInt(j),parseInt(i),0);
					   								break;
					   							}
					   							var obj =
				   								{
				   								row:rowReg[i],
				   							    col:colReg[j],
				   							 	value:value
				   								}
					   							importDatas.push(obj);
					   						}
					   					}
				            			//导入数据
				            			Ext.Ajax.request({
								        					url : indicator.requrl+'/addDatas.do',
								        					method : 'POST',
								        					timeout :3000,
								        					async:false,
								        					params: {
								        						formDatas: Ext.encode(importDatas),
								        						timeId:timeId,
								        						rowFlag:rowFlag
								        					},
								        					success: function(resp,opts) {
								        						var obj=Ext.decode(resp.responseText);
								        						
								        						if( obj.success==true ){
								        						commonFunction.showMessage('操作成功',"导入数据成功");
								        						}else{
								        						commonFunction.showMessage('操作失败',"导入数据失败");
								        						}
								        						
								        						return obj;
								        					}

								        })
				            			 
				            		}
				            			
				            		}
				            		
				            	}})//end confirm
				            	}
				            
				            }
					        
					    ]},
			 			{ 
			 				        dock: 'bottom', 
			 			            xtype: 'pagingtoolbar', 
			 				        store:bbtimeStore, 
			 				        plugins: [{ptype:'resizer'}],
			 			            pageSize: indicator.pagesize, 
			 			            displayInfo: true, 
			 			            displayMsg: '显示 {0} - {1} 条，共计 {2} 条', 
			 			            emptyMsg: '没有数据' 
			 			  }
			 			
			 			]
			
	  });
	  
	//指标主体窗口
	     Ext.define("bsoft.bbztpanel", {
				    extend: 'Ext.panel.Panel',
				    alias : 'widget.bbztpanel',
				    split:true,
					frame:true,
					width: 600,
					height: 350,
					//renderTo: document.body,
				    layout: 'border',
				    title:'请选择报表主体',
				    initComponent: function() {
			        this.items = [
			        		{xtype:'Bbzt'},
			        		{xtype:'Bbtime'}
			        		]
			        
			        this.callParent(arguments);
				    }
			});
	  
	  
	  
	   //当前grid的store
	  	var currentStore;
	  
	      Ext.define("zbPanel",{
	    	 extend:"Ext.tab.Panel",
	    	 alias : 'widget.zbPanel',
	          //renderTo:"tabPanelDiv",
	          //title:title,
		     // bodyStyle:'padding:15px 15px 15px',
		      tbar:[
		            {xtype:'textfield',id:'gridSearchText'},
		            {xtype:'button',text:'查询',action:'search',icon:'images/grid_find.png',
		            	
		            	handler:function(btn){
		            		var search = Ext.getCmp("gridSearchText").getValue();
		            		//无查询条件
		            		if(Ext.isEmpty(search)){
		            			currentStore.proxy.extraParams.condition="";
		            			currentStore.load();
		            		}else{
		            			
		            			currentStore.proxy.extraParams.condition= Ext.encode({'name':search});
		            			currentStore.load();
		            		}
		            		
		            	}
		            
		            },
		            {xtype:'button',text:'保存',action:'add',icon:'images/grid_add.png',id:'addReg', 
		            	handler:function(btn){
		            		
		            		if(indicator.tempId==""){
		            			return;
		            		}
		            		var resultData =[];
		            		//["23":data,"33":data]
		            		var rowReg ={};
		            		var colReg ={};
		            		//{"reg":[{"value":"2","text":"市五医院","row":3,"col":1,"key":"31","type":"org"},
		            		//          {"value":"3","text":"中心医院","row":4,"col":1,"key":"41","type":"org"},
		            		 //         {"value":"1","text":"门急诊人次数","row":2,"col":10,"key":"210","type":"zb"}],"rowReg":{"2":"1"},"colReg":{"1":"3"}}
		            		
		            		var rowFlag="";
		            		var tempCol="";
		            		var tempCol2="";
		            		
		            		var regData =indicator.regData;
		            		//alert(JSON.stringify(regData));
		            	
		            		//判断哪个是行指标  列相同即为行指标
		            		for(var i in regData){
		            			if(regData[i].type == "zb"){
		            				var col = regData[i].col;
		            				if(tempCol==""){
		            					tempCol=col;
		            				}else{
		            				if(tempCol==col){
		            					rowFlag="zb";
		            				}
		            				}
		            			}else{
		            				var col = regData[i].col;
		            				if(tempCol2==""){
		            					tempCol2=col;
		            				}else{
		            				if(tempCol2==col){
		            					rowFlag="org";
		            				}
		            				}
		            				
		            				
		            			}
		            		}
		     				//alert(rowFlag);
		     				
		     				//指标只有一行一列
		     				if(rowFlag==""){
		     					
		     					rowFlag="org";
		     				}
		            		for(var i in regData){
		            			resultData.push(regData[i]);
		            			if(regData[i].type == rowFlag){
		            				//alert(JSON.stringify(regData[i]));
		            				var row = regData[i].row;
		            				//行号为key 行指标为value
		            				rowReg[row]=regData[i].value;
		            				
		            			}else{
		            				var col = regData[i].col;
		            				//列号为key 行指标为value
		            				colReg[col]=regData[i].value;
		            			}
		            		}
		            		
		            	
		            		if(resultData.length==0){
		            			alert("请设置取数公式");
		            			return;
		            		}
		            		var result={
		            				reg:resultData,
		            				rowReg:rowReg,
		            				colReg:colReg,
		            				rowFlag:rowFlag
		            		};
		            	//	alert(Ext.encode(result));
		            	//	alert(Ext.encode(indicator.tempId));
		            
		            		Ext.Ajax.request({
	        					url : indicator.requrl+"/saveReg.do",
	        					method : 'POST',
	        					timeout :3000,
	        					async:false,
	        					params: {
	        						reg: Ext.encode(result),
	        						id:indicator.tempId
	        					},
	        					success: function(resp,opts) {
	        						var obj=Ext.decode(resp.responseText);
	        						
	        						if( obj.success==true ){
	        						commonFunction.showMessage('操作成功',"保存成功");
	        						}else{
	        						commonFunction.showMessage('操作失败',"保存失败");
	        						}
	        						
	        						return obj;
	        					}

		            		});
		            		
		            	}
		            
		            },
		            {xtype:'button',text:'取消',action:'cancel',icon:'images/grid_delete.png',id:'cancelReg',
		            	
		            	 handler: function(btn){
		            		    var row = cell.GetCurrentRow();
		            			var col = cell.GetCurrentCol();
		            			var key =row+""+col;
		            			if(indicator.regData[key]){
		            				delete indicator.regData[key];
		            			}
		            			
		            			cell.S(col,row,0,"");
		            			cell.MoveToCell(col, row);
		            	 }
		            
		            }
		           
		      
		      ],
		      items:[
		 	    	     {
		 	    	    	 xtype:'orgGrid',
		 	    	    	listeners:{
		 	          			activate:function ( component,opts ){
		 	          				//显示保存和取消按钮
		 	          				Ext.getCmp('cancelReg').setVisible(true);
		 	          				Ext.getCmp('addReg').setVisible(true);
		 	          				currentStore = component.store;
		 	          				currentStore.load();
		 	          			},
		 	          			itemdblclick :function(view,record,item,index,e,eOpts){
		 	    					//机构ID
		 	    					var value = record.get("id");
		 	    					//机构简称
		 	    					var text = record.get("jgjc");
		 	    					var row = cell.GetCurrentRow();
		 	    					var col = cell.GetCurrentCol();
		 	    					var type = "org";
		 	    					var key =row+""+col;
		 	    					var data ={  
		 	    							value:value,
		 	    							text:text,
		 	    							row:row,
		 	    							col:col,
		 	    							key:key,
		 	    							type:type
		 	    						}
		 	    					
		 	    					indicator.regData[key]=data;
		 	    					//resultData.push(data);
		 	    					var display= "["+text+"]";
		 	    					cell.S(col,row,0,display);
		 	    					cell.MoveToCell(col, row);
		 	    					
		 	    				}
		 	       			}
		 	    	     }   
		 	    	    ,
		 	    	  { 
		 	    	    	xtype:'ZBGrid',
		 	    	    	listeners:{
		 	          			activate:function ( component,opts ){
		 	          				//显示保存和取消按钮
		 	          				Ext.getCmp('cancelReg').setVisible(true);
		 	          				Ext.getCmp('addReg').setVisible(true);
		 	          				currentStore = component.store;
		 	          				currentStore.load();
		 	          			},
		 	          			itemdblclick :function(view,record,item,index,e,eOpts){
		 	    					//指标
		 	    					var value = record.get("id");
		 	    					//指标名称
		 	    					var text = record.get("zbmc");
		 	    					var row = cell.GetCurrentRow();
		 	    					var col = cell.GetCurrentCol();
		 	    					var type = "zb";
		 	    					var key =row+""+col;
		 	    					var data ={
		 	    							value:value,
		 	    							text:text,
		 	    							row:row,
		 	    							col:col,
		 	    							key:key,
		 	    							type:type
		 	    						}
		 	    					
		 	    					indicator.regData[key]=data;
		 	    					//resultData.push(data);
		 	    					var display= "["+text+"]";
		 	    					cell.S(col,row,0,display);
		 	    					cell.MoveToCell(col, row);
		 	    					
		 	    				}
		 	       			}
		 	    	  },{
		 	    		  
		 	    		 xtype:'bbztpanel',
		 	    		 listeners:{
	 	          			activate:function ( component,opts ){
	 	          				currentStore = bbztStore;
	 	          				currentStore.load();
	 	          				//隐藏保存和取消按钮
	 	          				Ext.getCmp('cancelReg').setVisible(false);
	 	          				Ext.getCmp('addReg').setVisible(false);
	 	          			}
		 	    		}
		 	    		  
		 	    	  }
		      ]
		  		
	     })


	     //指标窗口
	     Ext.define("bsoft.zbwin", {
				    extend: 'Ext.window.Window',
				    alias : 'widget.zbwin',
				    width: 600,
				    height:400,
				    hidden: false,  
				    maximizable: true,
				    modal:false,
				    layout: 'fit',
				    autoShow: true,
				    initComponent: function() {
			        this.items = [
			        		
			        		{xtype:'zbPanel'}
			        		]
			        
			        this.callParent(arguments);
				    }
			})
			
		