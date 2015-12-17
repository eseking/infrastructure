Ext.define('BSOFT.app.controller.ControllerBase', {
    extend: 'Ext.app.Controller', 
    /* refs: [
    	{ref:'center_gird',selector:'panel[itemId=EmbedHere]'}
  	],*/
  //  requires: ['BSOFT.app.lib.MyValidate'],	//公用验证框架添加
   // themeUtil : Ext.create("BSOFT.app.utils.ThemeUtil"),
	init:function(){
		var me = this;
	//	themeUtil = me.themeUtil;
// init my skin
	//	me.themeUtil.InitSkin();
		
		this.addNewTab=function(tabInfo){
			if(tabInfo){
			    //console.log(tabInfo);
				var mainView=Ext.getCmp('centerViewTab');
				var newTab=mainView.down(tabInfo.viewXtype);
				if(!newTab){
					var controllerName=tabInfo.controllerName;
					if(!controllerList.containsKey(controllerName)){
						//alert(controllerName);
						//加载自定义事件
	    				//me.application.getController(controllerName).init();
						me.application.getController(controllerName).init();
	    				controllerList.add(controllerName,true);
    				}
					
					//自定义属性
					if(!Ext.isEmpty(tabInfo.customConfig)){//
					    
						var customConfig =Ext.decode(tabInfo.customConfig);
						if(customConfig.title){
							newTab=Ext.widget(tabInfo.viewXtype,{title:customConfig.title});
						}else if(customConfig.beanName){
							 var beanName = customConfig.beanName;	
					         
						     newTab=Ext.widget(tabInfo.viewXtype,{'beanName':beanName});
						     
						     me.application.getController(controllerName).getControllerConfig=function(){
						    	 return customConfig.params;
						     };
						}
						else{
							newTab=Ext.widget(tabInfo.viewXtype);
						}
						if(customConfig.extraParams){
							newTab.store.proxy.extraParams=customConfig.extraParams;
							newTab.store.load();	
						}
						
					   
					}else{
					   
						   newTab=Ext.widget(tabInfo.viewXtype);
						
					}
					mainView.add(newTab);
					mainView.setActiveTab(newTab);
				}else{									
					mainView.setActiveTab(newTab);
				}
			}
		},
		this.control({
			
			"acMenu panel":{ //树节点的单击事件
				itemclick:function(tree,record,item,index,e,options){
					if(record.get('leaf')== false)  return;
					var param = record.get('info');
					//获取基本CRUD链接
					//commonFunction.getCRUDLink(param);	
					
					//加上自定义界面
					var tempext4 = record.get('ext4');
					
				//	alert(param + tempext4);
					
					//自定义页面
			        if(!Ext.isEmpty(tempext4)){
			        	me.addNewTab({
							controllerName:record.get('ext5'),
							viewXtype:record.get('ext4'),
							customConfig:record.get('ext6')
						});
						return;
			        }
				}
			},
			'northView':{
				afterrender: function(cmp){
					var me = this; //the controller
					
					 
					//与DOM元素交互
					var imgs = cmp.getEl().select('img');
					var glid;
					imgs.on('click', function(evt, el, o){ 
						//图标地址
						var imgsrc = el.getAttribute("outSrc");
						var acMenu =Ext.ComponentQuery.query("acMenu")[0];
						acMenu.removeAll(true);
						var accordion_tree=[];
						var accordion_items = accordionMenuTree.get_accordion_items();
						for(var i in accordion_items){
							var treeItem =accordion_items[i];
							if(treeItem.descInfo==imgsrc){
								glid = treeItem.id;
								//菜单多级显示 
								if(treeItem.EXT7=='1'){
									var treeItemChildren =treeItem.children;
									for(var i in treeItemChildren){
										var treeItemChild =treeItemChildren[i];
											//组装树
										var treestore = Ext.create('Ext.data.TreeStore', {
										 	 model : modelFactory.getTree(), 
										 	 root: treeItemChild
										});
										var acc_item=	Ext.create('Ext.tree.Panel', {  
										    title: treeItemChild.text,
										    rootVisible:false,
										    displayField:'text',
										    store:treestore
										}); 
										accordion_tree.push(acc_item);	
									}
										
								}else{
									//组装树
									var treestore = Ext.create('Ext.data.TreeStore', {
									 	 model : modelFactory.getTree(), 
									 	 root: treeItem
									});
									var acc_item=	Ext.create('Ext.tree.Panel', {  
									    title: treeItem.text,
									    displayField:'text',
									    //root: treeItem,
									    rootVisible:false,
									    store:treestore
									}); 
									
									accordion_tree.push(acc_item);
								}
							}
						}//end for
						//acMenu.activeOnTop = true;
						acMenu.add(accordion_tree);
						//展开第一个元素
						acMenu.items.first().expand();
					
					});
				}
			}
			
		});
	},
	
	
	views:[
		'BSOFT.app.view.ViewTree',
		'BSOFT.app.view.MainLayout',
		/*'BSOFT.app.view.Itemcenter',*/
		'BSOFT.app.view.AccordionMenu',
		'BSOFT.app.view.NorthView'
	],
	stores :[
		"BSOFT.app.store.ViewTreeStore"
	],
	models :[
		//"User"
	] 
});


/**
 * 根据权限过滤  显示每家社区的值
 * @param {} store
 */
function store_permission(store,usercode){
	store.filterBy(function(record) {
		var result=false;
		if(record.get('ID') || record.get('IndexName')){
			if( record.get('ID') == usercode || record.get('IndexName') == usercode){
			  result=true;
			}
		}
		return result;
	});
}	
				
				
				
				
				
