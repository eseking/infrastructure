

Ext.define('comm.commonFunction',{

/**
 * 生成唯一ID
 * @param {} prefix 前缀
 * @return {}
 */
    uniqid:function (prefix) {
    var uid = new Date().getTime().toString(16);
    uid += Math.floor((1 + Math.random()) * Math.pow(16, (16 - uid.length)))
        .toString(16).substr(1);    
    return (prefix || '') + uid;
},
/**
 * 公共请求方法
 * @param {} url      请求URL
 * @param {} postType 请求类型 POST GET
 * @param {} async    是否异步 true false
 * @param {} paramObj 传递的参数 JSONOBJ
 * @param {} message  成功后的消息提示  如果为false  则无消息提示 默认为: 数据已经更新
 */
   serverRequest:function (url,postType,async,paramObj,message,callBack){
	
		if(paramObj==null){
			paramObj={};
		}
		if(Ext.isEmpty(message)){
			message='数据已经更新';
		}
		Ext.Ajax.request({
			url : url,
			method : postType,
			timeout :3000,
			async:async,//同步
			params: {
				formDatas: Ext.encode(paramObj)
			},
			success: function(resp,opts) {
				var obj=Ext.decode(resp.responseText);
				commonFunction.sessionOverTime(obj);
				
				if(message!=false){
				if( obj.success==true || obj.success=='200'){
				commonFunction.showMessage('操作成功',message);
				}else{
				commonFunction.showMessage('操作失败',obj.error_msg);
				}
				}
				if(obj.error_msg){
					Ext.Msg.alert(obj.error_msg);
				}
				if(callBack){
					callBack(obj);
					return;
				}
				
				return obj;
			}, 
			failure: function(resp,opts) {
				var obj=Ext.decode(resp.responseText);
				if(message!=false){
				commonFunction.showMessage('操作失败','无法连接服务器!!');
				}
				return obj;
			} 

		})

},


	serverRequestObj:function (url,postType,async,paramObj,message,callBack){
	
	if(paramObj==null){
		paramObj={};
	}
	if(Ext.isEmpty(message)){
		message='数据已经更新';
	}
	Ext.Ajax.request({
		url : url,
		method : postType,
		timeout :3000,
		async:async,//同步
		params: paramObj,
		success: function(resp,opts) {
			var obj=Ext.decode(resp.responseText);
			commonFunction.sessionOverTime(obj);
			
			if(message!=false){
			if( obj.success==true || obj.success=='200'){
			commonFunction.showMessage('操作成功',message);
			}else{
			commonFunction.showMessage('操作失败',obj.error_msg);
			}
			}
			if(obj.error_msg){
				Ext.Msg.alert(obj.error_msg);
			}
			if(callBack){
				callBack(obj);
				return;
			}
			
			return obj;
		}, 
		failure: function(resp,opts) {
			var obj=Ext.decode(resp.responseText);
			if(message!=false){
			commonFunction.showMessage('操作失败','无法连接服务器!!');
			}
			return obj;
		} 

	})

},

/**
 * 
 * @param {} config  请求的信息
 * @param {} message 成功后的消息提示 没有值则不显示
 */
	 
	serviceDispatch:function(config,message){
		if(Ext.isEmpty(config)){
			Ext.Msg.alert('请填写所请求服务的信息');
			return;
		}
		
		var defaultConfig={
			url : serviceDispatchUrl,
			method : 'POST',
			timeout :10000,
			async:true,//异步
			//params: {
			//	beanId:'baseResServiceImpl',
			//	methodName:'getOneEntity',
			//	args:['USER.queryUserById','139afc7a45241cac']
		//	},
			success: function(resp,opts) {
				var obj=Ext.decode(resp.responseText);
				commonFunction.sessionOverTime(obj);
				if(!Ext.isEmpty(message)){
				if( obj.success==true || obj.success=='200'){
				commonFunction.showMessage('操作成功',message);
				}else{
				commonFunction.showMessage('操作失败',obj.error_msg);
				}
				}
				if(obj.error_msg){
					Ext.Msg.alert(obj.error_msg);
				}
				
				if(config.mask){
					config.mask.hide();
				}
				return obj;
			}, 
			failure: function(resp,opts) {
				var obj=Ext.decode(resp.responseText);
				if(!Ext.isEmpty(message)){
				commonFunction.showMessage('操作失败','无法连接服务器!!');
				}
				if(config.mask){
					config.mask.hide();
				}
				return obj;
			}

		}

		Ext.apply(defaultConfig,config);
		
		
		Ext.Ajax.request(defaultConfig);
	},
	/**
	 * 验证登陆
	
	validateLogin:function(){
			 Ext.Ajax.request({
			  url:projectName+'/conf/validateLogin.action',
			  method:'POST',
			  timeout:4000,
			  async:true,//同步操作
			  success:function(response,opts){
				  var obj =eval("("+response.responseText+")");
				  commonFunction.sessionOverTime(obj);
				 	
			  }
		});
	
	
	}, */

openNewWindow:	function (url){
		   window.open(url);
		},

/**
 * 显示消息  
 * @param {} title   消息标题
 * @param {} message 消息内容
 */
showMessage:function (title,message){
        Ext.example.msg(title, message);
    },
/*function showResult(btn){
        Ext.example.msg('Button Click', 'You clicked the {0} button', btn);
    };*/
    
    
    /**
				 * 获取CRUD链接
				 * @param {} viewName
				 
			getCRUDLink:function (viewName){
					store_url=null;
				Ext.Ajax.request({
					url:projectName+'/form/getCRUD.action?formName='+viewName,
					
					method:'POST',
					timeout:4000,
					async:false,//跟关键 我不需要异步操作
					success:function(response,opts){
						
						var  arr =Ext.decode(response.responseText);
						
						commonFunction.sessionOverTime(arr);
					
						
						
						var CRUD_Obj={};
						for(var i in arr){
						var obj =	arr[i];
						var BeanId=obj['extend3'];
						var ClassName=obj['extend4'];
						var MethodName=obj['extend5'];
						var Args=[];
						if(obj['extend6']!=null && obj['extend6']!=''){
						var temp =eval("("+obj['extend6']+")");//得到对应请求中的参数
						Ext.each(temp,function(data){
							Args.push(data['args']);//将分别得到的参数放到全局变量数组Args中
						})
						}
						
						var Types=[];
						if(obj['extend7']!=null && obj['extend7']!=''){
						var temp =eval("("+obj['extend7']+")");//得到对应请求中的参数
						Ext.each(temp,function(data){
							Types.push(data['type']);//将分别得到的参数放到全局变量数组Args中
						})
						}
						
						
						
							var	actionUrl=projectName+"/beanProxy?beanId="+BeanId+"&className="+ClassName+"&methodName="+MethodName;	
							if(Types.length>0){
					    		var types=Types.join("&types=");
					    		actionUrl=actionUrl+"&types="+types;
				    		}
				    	
					    	if(Args.length>0){
				    			var args=	Args.join("&args=");
				    			actionUrl=actionUrl+"&args="+args;
			    			}
			    			
			    			
			    			
							//增加URL
			    			if(obj.extend2 == '1'){
			    			var	createUrl=actionUrl;
			    			CRUD_Obj.createUrl=createUrl;
			    			}
			    			//删除URL
			    			else if(obj.extend2 == '2'){
			    			var	deleteUrl=actionUrl;
			    			CRUD_Obj.deleteUrl=deleteUrl;
			    			}
			    			//修改查询URL 用于修改时从后台获取数据
			    			else if(obj.extend2 == '5'){
			    				if(Ext.isEmpty(MethodName)){
			    				
			    				}else{
			    				var	updateSearchUrl=actionUrl;
			    				CRUD_Obj.updateSearchUrl=updateSearchUrl;
			    				}
			    			}
			    			//修改URL
			    			else if(obj.extend2 == '3'){
			    			var	updateUrl=actionUrl;
			    			CRUD_Obj.updateUrl=updateUrl;
			    			}
			    			//查询
			    			else if(obj.extend2 == '4'){
			    				//createUrl=actionUrl;
			    				//alert(createUrl);
			    				var	querUrl=actionUrl;
			    			    CRUD_Obj.querUrl=querUrl;
			    				store_url = querUrl;
			    			}
			    			
			    		
						
						}
						
						
		    			
		    			if(!CRUD_List.containsKey('CRUD.'+viewName)){
		    			   CRUD_List.add('CRUD.'+viewName,CRUD_Obj);
		    			}
						
					}
					
					});
				
				},
				*/
				
		/**
		 * 判断Session是否过期
		 * @param {} obj
		 */		
		sessionOverTime:function(obj){		
				if(obj.api_code && obj.api_code==2){
					Ext.MessageBox.confirm('提示', '登录超时，是否重新登录?', function(btn){
          						    	if(btn=='yes'){
          						    		document.location = "login.jsp";
          						    	}else{
          						    		return;
          						    	}
						 })
				}	 
		},
       
         
         showLoadMarsk:function(maskMsg){		
			if(Ext.isEmpty(maskMsg)){
				maskMsg='数据加载中，请稍候...';
			}
			var loadMarsk = new Ext.LoadMask(Ext.getBody(),  {  
    			msg     : maskMsg,
    			removeMask:true
			}); 
			loadMarsk.show(); 	 
			return loadMarsk;
		},
    
	
		/**
		 * 获取数据字典的 value值，用于下拉框初始化时，不加载数据，直接翻转KEY值
		 */
		getDicRawValue:function(key,dicType,cascade){
			
			
		
		
		},
		
		/**
		 * 静态属性
		 * @return {}
		 */
		ConstantUtil : (function()
		{
		    var obj = {};
		    //所有的数据字典大类
		    obj.SJZD_AllDicTypeMap = "allDicTypeMap";
		    //所有的数据字典类别
		    obj.SJZD_AllDicType = "allDicType";
		    //所有的数据字典明细
		    obj.SJZD_AllDicDetail = "allDicDetail";
		    obj.ALL = [obj.SJZD_AllDicTypeMap, obj.SJZD_AllDicType, obj.SJZD_AllDicDetail];
		    return obj;
		})
    
    
});






var commonFunction = Ext.create('comm.commonFunction',{
});	
