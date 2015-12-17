
//accItem.add(Ext.create('BSOFT.view.ViewTree',{})).doLayout();

Ext.define("BSOFT.app.view.MainLayout",{
	extend:'Ext.panel.Panel',
	alias:'widget.mainlayout',
	defaults:{
		split:true,
		bodyStyle:'padding:1px'
	},
	layout:'border',
	items:[{
		region: 'north',
		collapsible:true,
		resizable:false,
		header:false,
		xtype:'northView'
	},{
	    title: '菜单',
        region:'west',
        collapsible: true,
        iconCls :'according',
        margins:'5 2 5 5',
        width: 210,
        preventHeader:true,
        id:'westAcc',
        xtype:'acMenu'
	}, {
		xtype:'tabpanel',
		region: 'center',
		header:false,
		deferredRender: false,
        id:'centerViewTab',
    	items: [
		        {
//		            title: '欢迎',
		            autoScroll : false,//自动显示滚动条
		            iconCls:'index-home',
		            closable : true,
		            bodyPadding: 1,
		            frame : true,
		            tabConfig: {
		                title: '<span style=\'color:#2932E1;font-family: 微软雅黑;font-size:12px;\'>欢迎</span>',
		                tooltip: '<span style=\'color:#2932E1;font-family: 微软雅黑;font-size:12px;\'>欢迎界面</span>'
		            },
		            xtype:"panel",
		            layout: 'fit',
		            items:[{
		            	    xtype:'image',
		            	   src :urlUtil.requrl+'/images/theme/2.jpg',
		            	   resizable:false,
		            	   items:[{
		            		   
		            	   }]
//			                layout:'fit',
//			            	width  :  Ext.dom.Element.getDocumentWidth() - 100,
//			            	height :  Ext.dom.Element.getDocumentHeight()- 150
//		            	   width: 300,
//		            	   height:300
			            }]
		        }
		    ]
//		    plugins: [
//		              Ext.create('Ext.ux.TabCloseMenu',{
//		            	  closeTabText:'<span style =\'font-family:微软雅黑;\'>关闭该选项卡</span>',
//		            	  closeOthersTabsText: '<span style =\'font-family:微软雅黑;\'>关闭其他选项卡</span>',
//		            	  closeAllTabsText:'<span style =\'font-family:微软雅黑;\'>关闭所有选项卡</span>'
//		              })
//		          ]
	}]
});