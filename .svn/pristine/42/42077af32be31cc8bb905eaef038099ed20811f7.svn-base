/*
 * 使用方法ajax(api.ajax()中的第一个参数，api.ajax()中的第二个参数，表示是否从本地获取)
 * 使用完全类同api.ajax()
 * 
 ajax({
 	url: 'widget://res/login/city.json'
 }, function(ret, err) {
 	if(ret) {
 		api.alert({
 			msg: JSON.stringify(ret)
 		});
 	} else {
 		api.alert({
 			msg: JSON.stringify(err)
 		});
 	}
 }, true);
 
 * 
 */
var LOCAL = false
function ajax(ajaxDta, fun, local) {
	if(undefined == local && LOCAL) {
		ajaxFromJson(ajaxDta, fun);
	}else if(local)
	{
		ajaxFromJson(ajaxDta, fun);
	} else {
		api.ajax(ajaxDta, fun);
	}
}
function ajaxFromJson(ajaxDta, fun) {
	//		//异步返回结果：
	//		api.readFile({
	//		    path: 'widget://res/login/city.json'
	//		}, function(ret, err) {
	//		    if (ret.status) {
	//		        var data = ret.data;
	//		        alert(data);
	//		    } else {
	//		        alert(err.msg);
	//		    }
	//		});

	//异步返回结果：
	api.readFile({
		path: ajaxDta.url
	}, function(ret, err) {
		if(ret.status) {
			var data = $api.strToJson(ret.data);
			if(data) {
				fun(data, err);
			} else {
				fun(null, 'json数据格式化错误！');
			}
		} else {
			//		        alert(err.msg);
			fun(ret, err);
		}
	});
}

//	function ajaxFromNet() {
//		api.ajax({
//		    url: 'http://192.168.1.101:3101/upLoad',
//		    method: 'post',
//		    data: {
//		        values: {
//		            name: 'haha'
//		        },
////		        files: {
////		            file: 'fs://a.gif'
////		        }
//		    }
//		}, function(ret, err) {
//		    if (ret) {
//		        api.alert({ msg: JSON.stringify(ret) });
//		    } else {
//		        api.alert({ msg: JSON.stringify(err) });
//		    }
//		});
//	}