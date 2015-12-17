Ext.define("BSOFT.custom.permission.view.PerTree",{
	extend:'Ext.tree.Panel',
	alias:'widget.perTree',
	rootVisible:false,
	displayField:'text',
	animate:true,
	region:'west',
	width: 350,
	layout:'fit',
	//selType:'checkboxmodel',//设定选择模式
	multiSelect :true,
	//ptype:'treesingleselect',
	  dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [
                {xtype:'button',text:'授权',action:'add',icon:'images/grid_add.png'},
                {xtype:'button',text:'删除权限',action:'delete',icon:'images/grid_delete.png'}
            ]
        }
    ],
	store:'BSOFT.custom.permission.store.DeptStore4Tree',
	
	listeners: {
            checkchange: function(node, checked){
                updateCheckStatusFunction(node, checked);
            },
            //选中状态
            load:function(store, rs,successful,operation,eOpts ){
            	var me =this;
            	// me.roleId
            	//页面初始化时  从window 中传入变量roleId
            	 successful:{
            		// alert(11);
            	 		/*//获取被选中的ID 列表
            	 	    	requestConfig={
							async:true, //异步
							params: {
								beanId:'baseResServiceImpl',
								methodName:'getOneEntity',
								args:['PERMISSIONINFO.exist',me.roleId]
							},
							success: function(resp,opts) {
								//选中节点
								var obj=Ext.decode(resp.responseText);
								if(obj.result && obj.result.ext1){
									var idList= Ext.decode(obj.result.ext1);
									for(var i in idList){
										var records = me.getRootNode().findChild('id',idList[i], true);
				                    	Ext.Array.each(records,function(record){
										record.set('checked', true);
										})
									}
								}
							
							}
						}
						commonFunction.serviceDispatch(requestConfig);*/
            		 
            			Ext.Ajax.request({
        					url : urlUtil.requrl+'/getMenuPermission.do',
        					method : 'POST',
        					timeout :3000,
        					async:true,
        					params: {
        						roleId: me.roleId
        					
        					},
        					success: function(resp,opts) {
        						var obj=Ext.decode(resp.responseText);
								if(obj.result && obj.result.menuList){
									var temp= Ext.decode(obj.result.menuList);
									var idList = temp.checkedMenu;
								//	alert(idList);
									for(var i in idList){
										var records = me.getRootNode().findChild('id',idList[i], true);
				                    	Ext.Array.each(records,function(record){
										record.set('checked', true);
										})
									}
								}
        					}

            		})
            		 
            		 
					};
            }
        },
        initComponent:function(){
        	//alert('init'+this.roleId);
				this.callParent(arguments);
			}
})

//递归：选中父菜单时，其所包含的子菜单全部选中
    var updateCheckStatusFunction = function(parentNode, checked) {
	    Ext.each(parentNode.childNodes, function(childNode, index, allItems) {
	        childNode.set('checked', checked);
	        updateCheckStatusFunction(childNode, checked);
	    });
	}