Ext.define('Ext.zbn.PageComboResizer', {
  extend: 'Ext.AbstractPlugin',
  pageSizes: [5, 10, 15, 20, 25, 30, 50, 75, 100, 200, 300, 500,1000,'全部'],
  prefixText: '每页显示 ',
  postfixText: '记录',
  alias: 'plugin.resizer',

  constructor: function(config){
    Ext.apply(this, config);
    this.callParent(arguments);
  },
  init : function(pagingToolbar) {
    var ps = this.pageSizes;
    var combo = Ext.create('Ext.form.ComboBox',{
      editable:false,
      typeAhead: true,
      triggerAction: 'all',
      name:'gridcombox',
      hiddenname:'gridcombox',
      lazyRender:true,
      mode: 'local',
      width:50,
      store: ps,
      listeners: {
        select: function(c, r, s){
        	
     		if(pagingToolbar.store.getTotalCount()!=undefined)
     		{
     		
        	if(r[0].data.field1=='全部'){
        		pagingToolbar.store.pageSize=pagingToolbar.store.getTotalCount();
        		pagingToolbar.store.loadPage(pagingToolbar.store.currentPage);

        	}
        	else{     	
          	pagingToolbar.store.pageSize =r[0].data.field1;	
          	pagingToolbar.store.loadPage(pagingToolbar.store.currentPage);
        	
        	}
     		
     		}
        }
      }
    });
    Ext.iterate(this.pageSizes, function(ps) {
      if (ps==pagingToolbar.store.pageSize) {
        combo.setValue (ps);
        return;
      }
    });
 	var inputIndex  =  pagingToolbar.items.indexOf(pagingToolbar.items.get('refresh'));
    pagingToolbar.insert(++inputIndex,'-');
    pagingToolbar.insert(++inputIndex, this.prefixText);
    pagingToolbar.insert(++inputIndex, combo);
    pagingToolbar.insert(++inputIndex, this.postfixText);

    pagingToolbar.on({
      beforedestroy: function(){
        combo.destroy();
      }
    });

  }
});