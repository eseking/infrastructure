Ext.define('BSOFT.custom.role.controller.roleLimitController', {
	    extend: 'Ext.app.Controller',
		init:function(controllerConfig){
			var me = this;
			//获取其他controller 传递过来的值
	    	this.getControllerConfig= function(){
	    	return controllerConfig;
	    	},
			this.control({
				'limitsPanel button[action=save]':{
					click:function(btn){
						var resultData= '[{';
						var key;
						var value;
						var formDatas = btn.up("panel").formDatas;
						//角色ID
						var roleId = formDatas.id;
						//保存被选中的记录
						var limitsArray =formDatas.limitsArray;
						var countInt=0;
						//获取右边grid的值
						var grid =this.getLimitRGrid();
						var data = grid.getSelectionModel().getSelection();
						//如果右边选中了就保存到limitsArray中，因为在limitsLGrid页面是做了当切换的时候才会保存上次做的操作，需在保存的时候判断一下左后一次在没切换的时候是否保存了数据
						if(data.length==0){
						}
						else{
							//存放GRID选中的ID
							var Ids =[];
							var keyCode;
                           for(var i in data){
                           	keyCode=data[i].data.typecode1;
                           	Ids.push(data[i].data.typecode2);
                           }
                           limitsArray.add(keyCode,Ids);
						}
						//对limitsArray进行遍历输出
						limitsArray.each(function(key, value, length){
						     key=key;
						     var value1 = [];
						     for(var index=0;index<value.length;index++){
						    	 value1.push('"'+value[index]+'"');
						     }
						     resultData = resultData +key+":["+value1+"]";
						     countInt++;
						     if(length!=countInt){
						    	 resultData =resultData+','
						     }
						});
						resultData = resultData+"}]"
						var requestConfig = {
			                        async: false,
			                        // 异步
			                        params: {
			                            beanId: 'zdglService',
			                            methodName: 'addOperPermission',
			                            args: [roleId,resultData]
			                        },
			                       success: function(resp, opts) {
			                          var obj = Ext.decode(resp.responseText);
			                          btn.up('window').close();
	                                  if (parseInt(obj.api_code) == 0) 
	                                  commonFunction.showMessage('操作成功','添加成功!!');
	                                  else 
	                                  commonFunction.showMessage('操作失败','添加失败!!');
			                        },
			                        failure: function(resp, opts) {
			                          btn.up('window').close();
	                                  commonFunction.showMessage('操作失败','网络问题!!');
			                        }
			                    };
			                    commonFunction.serviceDispatch(requestConfig);
					}
				}
			});
			},
		views:[
			//'BSOFT.custom.role.view.limitsRGrid',
			'BSOFT.custom.role.view.limitsLGrid',
			'BSOFT.custom.role.view.limitsPanel'
		],
		stores :[
		],
		models :[
		],
		refs:[{
		    ref: 'gridList',
		    selector: 'roleGrid'
		},{
		    ref: 'limitRGrid',
		    selector: 'limitRGrid'
		},{
			 ref: 'limitLGrid',
			    selector: 'limitLGrid'
			},{
			ref: 'limitsPanel',
		    selector: 'limitsPanel'
		}]
		});