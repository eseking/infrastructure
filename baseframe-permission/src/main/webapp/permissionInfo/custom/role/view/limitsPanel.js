Ext.define("BSOFT.custom.role.view.limitsPanel",{// 创建grid
					extend : 'Ext.panel.Panel',
					alias : 'widget.limitsPanel',
					width : 800,
					layout : 'border',
					items : [{
						xtype:'limitLGrid',
						layout : "fit",
						split : true,
						collapsed : false,
						region : 'center'
					  },{
					    xtype:'limitRGrid',
						width : 550,
						layout : "fit",
						split : true,
						collapsed : false,
						region : 'east'
					}],
					 dockedItems: [
					               {
					                   xtype: 'toolbar',
					                   dock: 'bottom',
					                   items: [
					                       {xtype:'button',text:'保存',action:'save',icon:'images/grid_add.png'},
					                   ]
					               }
					           ],
					           initComponent:function(){
					   			   this.callParent(arguments);
					   			   var formDatas = this.formDatas;
					   			   //角色ID
					   			   var roleId=formDatas.id;
					   			   //保存被选中的记录
					   			   var limitsArray =formDatas.limitsArray;
						   			var requestConfig = {
					                        async: false,
					                        // 异步
					                        params: {
					                            beanId: 'zdglService',
					                            methodName: 'getCheckOperPermission',
					                            args: [roleId]
					                        },
					                       success: function(resp, opts) {
					                          var obj = Ext.decode(resp.responseText);
					                          //permissionType:[{10401:["12021","12051","12061"],10402:["1","2","3"]}]
					                          var permissionType=obj.result;
			                                  var perr=eval(permissionType);
			                                	  var Ids =[];
			                                	  for(var i=0;i<perr.length;i++){ 
			                                		  Ids.push(perr[i]['10401'][0]);
			                                		  Ids.push(perr[i]['10401'][1]);
			                                		  Ids.push(perr[i]['10401'][2]);
			                                		  Ids.push(perr[i]['10402'][0]);
			                                		  Ids.push(perr[i]['10402'][1]);
			                                		  Ids.push(perr[i]['10402'][2]);
			                                	  }
			                                	  	limitsArray.add("10401",Ids);
			                                	  	limitsArray.add("10402",Ids);
					                        }
					                      
					                    };
					                    commonFunction.serviceDispatch(requestConfig);
					           }
				});

						