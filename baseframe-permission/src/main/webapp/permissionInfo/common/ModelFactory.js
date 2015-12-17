/**
 * 工厂类  获取MODEL类 并创建MODEL 
 */
Ext.define("BSOFT.app.model.modelFactory",{
	//数据类模型的集合
	models:new Ext.util.MixedCollection(),
	//字段集合
	fields:new Ext.util.MixedCollection(),
	getModelByName:function(modelName){
		
			var newModel = Ext.define(modelName,{//创建MODEL 类
				extend:'Ext.data.Model',
				fields:model_fields
			});
			return modelName;
	},
	getTree:function(){
			Ext.define('BSOFT.model.Tree', {
			    extend: 'Ext.data.Model',
				fields: [
					{name: 'text',  type: 'string',sortable : true},
				    {name: 'info',   type: 'string',sortable : true},
				    {name: 'id',   type: 'string',sortable : true},
				    {name: 'leaf',   type: 'boolean',sortable : true},
				    {name: 'ext4',type:'string',sortable : true},
				    {name: 'ext5',type:'string',sortable : true},
				    {name: 'descInfo',type:'string',sortable : true},
				    {name: 'ext6',type:'string',sortable : true}
				]
			});
			return 'BSOFT.model.Tree';
		
	},
	/**
	 *  从后台获取model 
	 * @param {} modelName
	 * @return {}
	 */
	getModel:function(modelName){
		
			//放入缓存中
			if(this.models.containsKey(modelName)){
			
				return modelName;
			}
		
		   var modelFields;
		   
		   	Ext.Ajax.request({
			url : urlUtil.requrl+'/conf/getModel.action',
			method : 'POST',
			timeout :3000,
			async:false,//异步
			params: {
				modelName:modelName
			},
			success: function(resp,opts) {
				var obj=Ext.decode(resp.responseText);
				commonFunction.sessionOverTime(obj);
				var temp =Ext.decode(obj.result);
				var newModel = Ext.define(modelName,{//创建MODEL 类
				extend:'Ext.data.Model',
				fields:temp['fields']
			});
			
				modelFactory.models.add(modelName,true);
			
			}, 
			failure: function(resp,opts) {
			
			} 

		});
	
		return modelName;	
	
	}

});
var modelFactory = Ext.create('BSOFT.app.model.modelFactory',{});







