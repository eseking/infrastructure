Ext.define('comm.AccordionMenuTree', {
	get_accordion_items : function() {
		var accordion_items_response;
		// 根据顶级菜单 获取下级菜单树 把下级中的父级菜单创建为 折叠菜单的title
		Ext.Ajax.request({
			url : urlUtil.requrl + '/getViewTree.do?pid=1',
			method : 'GET',
			timeout : 3000,
			async : false,// 同步
			success : function(resp, opts) {
				// 某级菜单集合
				accordion_items_response = Ext.decode(resp.responseText);
			}
		});
		if (accordion_items_response.pageModel.datas.length == 0) {
			Ext.Msg.alert("提示", "无浏览权限!!请联系管理员为您分配权限");
		}
		var accordion_items = accordion_items_response.pageModel.datas;
		// 把权限树放入全局变量
		// accordion_items_globle=accordion_items;
		return accordion_items;
	},

	get_accordion_tree : function() {
		var accordion_items = accordionMenuTree.get_accordion_items();
		var accordion_tree = [];
		// 通过treeItem控制一级菜单权限
		//alert(Ext.encode(accordion_items));
		var tr = document.getElementById("frame_menu_controller_tr");
		for ( var i in accordion_items) {
			var treeItem = accordion_items[i];
			//alert(treeItem.id);
			if (!Ext.isEmpty(treeItem.descInfo)) {
				// 获取图片地址
				var imgsrc = treeItem.descInfo;
				// 图片失去焦点
				var osrc = imgsrc.substring(0, imgsrc.indexOf(".")) + "_focus.gif";
			
				Ext.DomHelper.append(tr,'<td width="100%"><img src="'
										+ treeItem.descInfo
										+ '" overSrc="'
										+ osrc
										+ '" outSrc="'
										+ treeItem.descInfo
										+ '" clickStatus="0" name="Image8" width="76" height="74" border="0" style="cursor:hand" onmouseover="mouseover(this)" onmouseout="mouseout(this)" onclick="imgclick(this)"></td>');
			}

			var treestore = Ext.create('Ext.data.TreeStore', {
				model : modelFactory.getTree(),
				root : treeItem
			});
			var acc_item = Ext.create('Ext.tree.Panel', {
				title : treeItem.text,
				displayField : 'text',
				rootVisible : false,
				store : treestore
			});
			accordion_tree.push(acc_item);
		}
		return accordion_tree;
	}
});

var accordionMenuTree = Ext.create('comm.AccordionMenuTree', {});

Ext.define('BSOFT.app.view.AccordionMenu', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.acMenu',
	margins : '5 0 5 5',
	split : true,
	
//	collapseDirection : 'top',
//	collapseMode : 'mini',
	//collapsed : true,
	
	animCollapse : true,
	width : 210,
	activeOnTop : true,
	animate : true,
	layout : 'accordion',
	items : accordionMenuTree.get_accordion_tree()
});