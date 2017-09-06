


//	var app_url = "http://www.iniubb.cn";
var zhibo_url  = "http://zhibo.ainiubaobao.com";

	var app_url = zhibo_url;
//var app_url = "http://192.168.0.112";

  var url =  "http://www.ainiubaobao.com";

	var mweb_url  = "http://m.ainiubaobao.com";





function islogin(){
    	var userid = $api.getStorage('userid');
//alert(userid);
if(isNaN(userid)){

toast('你还没登录，请先登录', 2000, 'middle');
  api.openWin({
	    name: 'login_window',
	    url: './html/login_window.html',
	  pageParam: {

    }
	  });
}
}
	//页面返回
    function backs(){
		  api.closeWin();
//			api.closeWin({
//			    name: 'login_frame'
//			});
       }
       //页面跳转之前判断是否登录
       function islogin_skip(list){
	    var userid = $api.getStorage('userid');

		if(isNaN(userid)){

		   toast('你还没登录，请先登录', 2000, 'bottom');
		   api.openWin({
			    name: 'login_window',
			    url: '../html/login_window.html',
			    pageParam: {

		         }
			  });
		}else{
				api.openWin({
			       name: list,
			       url: list+'.html',

			       pageParam: {

			       }
			    });
			  }
	}
    //页面跳转
	function skip(list){

		api.openWin({
	    name: list,
	    url: list+'.html',

	    pageParam: {

	    }
	  });

	}


    //视频跳转
	function video_skip(video_id,video_name){

//		api.openWin({
//	    name: 'video_info_window',
//	    url: 'video_info_window.html',
//	    pageParam: {
//	         id: video_id,
//	        name: video_name
//	    }
//	  });
//


layer.load(2);

	var video_id = video_id;
	var name = video_name;
	var userid = $api.getStorage('userid');
	var username = $api.getStorage('username');
	var groupid = $api.getStorage('groupid');
	var rnd = $api.getStorage('rnd');
	//判断是否登录
//	if(!isNaN(userid)){
//		var url = zhibo_url+'/video/'+video_id+'.html?userid='+userid+'&username='+username+'&groupid='+groupid+'&rnd='+rnd;
//	}else{
//	  var url = zhibo_url+'/video/'+video_id+'.html';
//	}

 var url = zhibo_url+'/video/'+video_id+'?app_assgin=app&rnd='+rnd+'&ui='+userid;



//alert(url);
//
var browser = api.require('webBrowser');
browser.open({
    url: url,
    progress:{
				color:'#1d80e6'
			},
    titleBar:{

      visible:true,
				bg:'#1d80e6',
				textColor:'#fff'
    }
}, function(ret){
			layer.closeAll('loading');
		});

//var browser = api.require('webBrowser');
//browser.openView({
//  url: url,
//  rect: {
//      x: 0,
//      y: 24,
//      w: 'auto',
//      h: 'auto'
//  }
//}, function(ret, err) {
////alert(url);
//  switch (ret.state) {
//      case 0:
//          break;
//      case 1:
//          break;
//      case 2:
//          break;
//      case 3:
//          break;
//      case 4:
//          break;
//      default:
//          break;
//  }
//});
//var obj = api.require('UIWebBrowser');
//obj.open({
//  rect: {
//       x: 0,
//      y: -50,
//      w: 'auto',
//      h: 650
//  },
//  path: url,
//  fixedOn: api.frameName,
//  fixed: true,
//
//}, function(ret) {
////  api.alert({
////      msg: JSON.stringify(ret)
////  });
//});
	}
	 //视频分类跳转
	function video_list_skip(video_id,video_name,type,classid){

		api.openWin({
	    name: 'video_list_window',
	    url: 'video_list_window.html',
	    pageParam: {
	        id: video_id,
	        name: video_name,
	        type: type,
	        classid:classid
	    }
	  });

	}
	function video_list_skips(video_id,video_name,type,classid){

		api.openWin({
			name: 'video_list_window',
			url: '../video_list_window.html',
			pageParam: {
					id: video_id,
					name: video_name,
					type: type,
					classid:classid
			}
		});

	}
	 //商城跳转
	function shop_info_skip(shop_id,shop_name){
		api.openWin({
	    name: 'shop_info_window',
	    url: 'shop_info_window.html',
	    pageParam: {

	         id: shop_id,
	        name: shop_name
	    }
	  });
	}




	//页面数据加载动画--暂停
	  	function stop_hideProgress(){
          api.hideProgress();
	}
	//页面数据加载动画--开始
	function start_hideProgress(){
	  api.showProgress({
	    title: '努力加载中...',
	    text: '先喝杯茶...',
	    modal: false
	});
	}
	//页面获取数据错误提示 5秒
	function toast_err5(){
   	  api.toast({
			msg: '数据获取失败，请检查你的网络连接',
			duration: 5000,
			location: 'bottom'
					});
	}

	/*
	 *页面提示
	 * text  提示内容
	 * time  显示的时间
	 * tag  弹出位置
	 * top--顶部      middle--中间   bottom--底部
	 */
	function toast(text,time,tag){
   	  api.toast({
			msg: text,
			duration: time,
			location: tag
					});
	}
		function toast1(text,time){
   	  api.toast({
			msg: text,
			duration: time,
			location: 'bottom'
					});
	}
	function toast2(text){
   	  api.toast({
			msg: text,
			duration: 2000,
			location: 'bottom'
					});
	}
		function toast3(text){
   	  api.toast({
			msg: text,
			duration: 2000,
			location: 'middle'
					});
	}

	function open_web(url){
		var browser = api.require('webBrowser');
		browser.open({
		    url: url,
		    progress:{
						color:'#1d80e6'
					},
		    titleBar:{

		      visible:true,
						bg:'#1d80e6',
						textColor:'#fff'
		    }
		}, function(ret){
		//			stop_hideProgress();
				});

	}










(function(window){
    var u = {};
    var isAndroid = (/android/gi).test(navigator.appVersion);
    var uzStorage = function(){
        var ls = window.localStorage;
        if(isAndroid){
           ls = os.localStorage();
        }
        return ls;
    };
    function parseArguments(url, data, fnSuc, dataType) {
        if (typeof(data) == 'function') {
            dataType = fnSuc;
            fnSuc = data;
            data = undefined;
        }
        if (typeof(fnSuc) != 'function') {
            dataType = fnSuc;
            fnSuc = undefined;
        }
        return {
            url: url,
            data: data,
            fnSuc: fnSuc,
            dataType: dataType
        };
    }
    u.trim = function(str){
        if(String.prototype.trim){
            return str == null ? "" : String.prototype.trim.call(str);
        }else{
            return str.replace(/(^\s*)|(\s*$)/g, "");
        }
    };
    u.trimAll = function(str){
        return str.replace(/\s*/g,'');
    };
    u.isElement = function(obj){
        return !!(obj && obj.nodeType == 1);
    };
    u.isArray = function(obj){
        if(Array.isArray){
            return Array.isArray(obj);
        }else{
            return obj instanceof Array;
        }
    };
    u.isEmptyObject = function(obj){
        if(JSON.stringify(obj) === '{}'){
            return true;
        }
        return false;
    };
    u.addEvt = function(el, name, fn, useCapture){
        if(!u.isElement(el)){
            console.warn('$api.addEvt Function need el param, el param must be DOM Element');
            return;
        }
        useCapture = useCapture || false;
        if(el.addEventListener) {
            el.addEventListener(name, fn, useCapture);
        }
    };
    u.rmEvt = function(el, name, fn, useCapture){
        if(!u.isElement(el)){
            console.warn('$api.rmEvt Function need el param, el param must be DOM Element');
            return;
        }
        useCapture = useCapture || false;
        if (el.removeEventListener) {
            el.removeEventListener(name, fn, useCapture);
        }
    };
    u.one = function(el, name, fn, useCapture){
        if(!u.isElement(el)){
            console.warn('$api.one Function need el param, el param must be DOM Element');
            return;
        }
        useCapture = useCapture || false;
        var that = this;
        var cb = function(){
            fn && fn();
            that.rmEvt(el, name, cb, useCapture);
        };
        that.addEvt(el, name, cb, useCapture);
    };
    u.dom = function(el, selector){
        if(arguments.length === 1 && typeof arguments[0] == 'string'){
            if(document.querySelector){
                return document.querySelector(arguments[0]);
            }
        }else if(arguments.length === 2){
            if(el.querySelector){
                return el.querySelector(selector);
            }
        }
    };
    u.domAll = function(el, selector){
        if(arguments.length === 1 && typeof arguments[0] == 'string'){
            if(document.querySelectorAll){
                return document.querySelectorAll(arguments[0]);
            }
        }else if(arguments.length === 2){
            if(el.querySelectorAll){
                return el.querySelectorAll(selector);
            }
        }
    };
    u.byId = function(id){
        return document.getElementById(id);
    };
    u.first = function(el, selector){
        if(arguments.length === 1){
            if(!u.isElement(el)){
                console.warn('$api.first Function need el param, el param must be DOM Element');
                return;
            }
            return el.children[0];
        }
        if(arguments.length === 2){
            return this.dom(el, selector+':first-child');
        }
    };
    u.last = function(el, selector){
        if(arguments.length === 1){
            if(!u.isElement(el)){
                console.warn('$api.last Function need el param, el param must be DOM Element');
                return;
            }
            var children = el.children;
            return children[children.length - 1];
        }
        if(arguments.length === 2){
            return this.dom(el, selector+':last-child');
        }
    };
    u.eq = function(el, index){
        return this.dom(el, ':nth-child('+ index +')');
    };
    u.not = function(el, selector){
        return this.domAll(el, ':not('+ selector +')');
    };
    u.prev = function(el){
        if(!u.isElement(el)){
            console.warn('$api.prev Function need el param, el param must be DOM Element');
            return;
        }
        var node = el.previousSibling;
        if(node.nodeType && node.nodeType === 3){
            node = node.previousSibling;
            return node;
        }
    };
    u.next = function(el){
        if(!u.isElement(el)){
            console.warn('$api.next Function need el param, el param must be DOM Element');
            return;
        }
        var node = el.nextSibling;
        if(node.nodeType && node.nodeType === 3){
            node = node.nextSibling;
            return node;
        }
    };
    u.closest = function(el, selector){
        if(!u.isElement(el)){
            console.warn('$api.closest Function need el param, el param must be DOM Element');
            return;
        }
        var doms, targetDom;
        var isSame = function(doms, el){
            var i = 0, len = doms.length;
            for(i; i<len; i++){
                if(doms[i].isEqualNode(el)){
                    return doms[i];
                }
            }
            return false;
        };
        var traversal = function(el, selector){
            doms = u.domAll(el.parentNode, selector);
            targetDom = isSame(doms, el);
            while(!targetDom){
                el = el.parentNode;
                if(el != null && el.nodeType == el.DOCUMENT_NODE){
                    return false;
                }
                traversal(el, selector);
            }

            return targetDom;
        };

        return traversal(el, selector);
    };
    u.contains = function(parent,el){
        var mark = false;
        if(el === parent){
            mark = true;
            return mark;
        }else{
            do{
                el = el.parentNode;
                if(el === parent){
                    mark = true;
                    return mark;
                }
            }while(el === document.body || el === document.documentElement);

            return mark;
        }

    };
    u.remove = function(el){
        if(el && el.parentNode){
            el.parentNode.removeChild(el);
        }
    };
    u.attr = function(el, name, value){
        if(!u.isElement(el)){
            console.warn('$api.attr Function need el param, el param must be DOM Element');
            return;
        }
        if(arguments.length == 2){
            return el.getAttribute(name);
        }else if(arguments.length == 3){
            el.setAttribute(name, value);
            return el;
        }
    };
    u.removeAttr = function(el, name){
        if(!u.isElement(el)){
            console.warn('$api.removeAttr Function need el param, el param must be DOM Element');
            return;
        }
        if(arguments.length === 2){
            el.removeAttribute(name);
        }
    };
    u.hasCls = function(el, cls){
        if(!u.isElement(el)){
            console.warn('$api.hasCls Function need el param, el param must be DOM Element');
            return;
        }
        if(el.className.indexOf(cls) > -1){
            return true;
        }else{
            return false;
        }
    };
    u.addCls = function(el, cls){
        if(!u.isElement(el)){
            console.warn('$api.addCls Function need el param, el param must be DOM Element');
            return;
        }
        if('classList' in el){
            el.classList.add(cls);
        }else{
            var preCls = el.className;
            var newCls = preCls +' '+ cls;
            el.className = newCls;
        }
        return el;
    };
    u.removeCls = function(el, cls){
        if(!u.isElement(el)){
            console.warn('$api.removeCls Function need el param, el param must be DOM Element');
            return;
        }
        if('classList' in el){
            el.classList.remove(cls);
        }else{
            var preCls = el.className;
            var newCls = preCls.replace(cls, '');
            el.className = newCls;
        }
        return el;
    };
    u.toggleCls = function(el, cls){
        if(!u.isElement(el)){
            console.warn('$api.toggleCls Function need el param, el param must be DOM Element');
            return;
        }
       if('classList' in el){
            el.classList.toggle(cls);
        }else{
            if(u.hasCls(el, cls)){
                u.removeCls(el, cls);
            }else{
                u.addCls(el, cls);
            }
        }
        return el;
    };
    u.val = function(el, val){
        if(!u.isElement(el)){
            console.warn('$api.val Function need el param, el param must be DOM Element');
            return;
        }
        if(arguments.length === 1){
            switch(el.tagName){
                case 'SELECT':
                    var value = el.options[el.selectedIndex].value;
                    return value;
                    break;
                case 'INPUT':
                    return el.value;
                    break;
                case 'TEXTAREA':
                    return el.value;
                    break;
            }
        }
        if(arguments.length === 2){
            switch(el.tagName){
                case 'SELECT':
                    el.options[el.selectedIndex].value = val;
                    return el;
                    break;
                case 'INPUT':
                    el.value = val;
                    return el;
                    break;
                case 'TEXTAREA':
                    el.value = val;
                    return el;
                    break;
            }
        }

    };
    u.prepend = function(el, html){
        if(!u.isElement(el)){
            console.warn('$api.prepend Function need el param, el param must be DOM Element');
            return;
        }
        el.insertAdjacentHTML('afterbegin', html);
        return el;
    };
    u.append = function(el, html){
        if(!u.isElement(el)){
            console.warn('$api.append Function need el param, el param must be DOM Element');
            return;
        }
        el.insertAdjacentHTML('beforeend', html);
        return el;
    };
    u.before = function(el, html){
        if(!u.isElement(el)){
            console.warn('$api.before Function need el param, el param must be DOM Element');
            return;
        }
        el.insertAdjacentHTML('beforebegin', html);
        return el;
    };
    u.after = function(el, html){
        if(!u.isElement(el)){
            console.warn('$api.after Function need el param, el param must be DOM Element');
            return;
        }
        el.insertAdjacentHTML('afterend', html);
        return el;
    };
    u.html = function(el, html){
        if(!u.isElement(el)){
            console.warn('$api.html Function need el param, el param must be DOM Element');
            return;
        }
        if(arguments.length === 1){
            return el.innerHTML;
        }else if(arguments.length === 2){
            el.innerHTML = html;
            return el;
        }
    };
    u.text = function(el, txt){
        if(!u.isElement(el)){
            console.warn('$api.text Function need el param, el param must be DOM Element');
            return;
        }
        if(arguments.length === 1){
            return el.textContent;
        }else if(arguments.length === 2){
            el.textContent = txt;
            return el;
        }
    };
    u.offset = function(el){
        if(!u.isElement(el)){
            console.warn('$api.offset Function need el param, el param must be DOM Element');
            return;
        }
        var sl = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
        var st = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

        var rect = el.getBoundingClientRect();
        return {
            l: rect.left + sl,
            t: rect.top + st,
            w: el.offsetWidth,
            h: el.offsetHeight
        };
    };
    u.css = function(el, css){
        if(!u.isElement(el)){
            console.warn('$api.css Function need el param, el param must be DOM Element');
            return;
        }
        if(typeof css == 'string' && css.indexOf(':') > 0){
            el.style && (el.style.cssText += ';' + css);
        }
    };
    u.cssVal = function(el, prop){
        if(!u.isElement(el)){
            console.warn('$api.cssVal Function need el param, el param must be DOM Element');
            return;
        }
        if(arguments.length === 2){
            var computedStyle = window.getComputedStyle(el, null);
            return computedStyle.getPropertyValue(prop);
        }
    };
    u.jsonToStr = function(json){
        if(typeof json === 'object'){
            return JSON && JSON.stringify(json);
        }
    };
    u.strToJson = function(str){
        if(typeof str === 'string'){
            return JSON && JSON.parse(str);
        }
    };
    u.setStorage = function(key, value){
        if(arguments.length === 2){
            var v = value;
            if(typeof v == 'object'){
                v = JSON.stringify(v);
                v = 'obj-'+ v;
            }else{
                v = 'str-'+ v;
            }
            var ls = uzStorage();
            if(ls){
                ls.setItem(key, v);
            }
        }
    };
    u.getStorage = function(key){
        var ls = uzStorage();
        if(ls){
            var v = ls.getItem(key);
            if(!v){return;}
            if(v.indexOf('obj-') === 0){
                v = v.slice(4);
                return JSON.parse(v);
            }else if(v.indexOf('str-') === 0){
                return v.slice(4);
            }
        }
    };
    u.rmStorage = function(key){
        var ls = uzStorage();
        if(ls && key){
            ls.removeItem(key);
        }
    };
    u.clearStorage = function(){
        var ls = uzStorage();
        if(ls){
            ls.clear();
        }
    };


    /*by king*/
    u.fixIos7Bar = function(el){
        if(!u.isElement(el)){
            console.warn('$api.fixIos7Bar Function need el param, el param must be DOM Element');
            return;
        }
        var strDM = api.systemType;
        if (strDM == 'ios') {
            var strSV = api.systemVersion;
            var numSV = parseInt(strSV,10);
            var fullScreen = api.fullScreen;
            var iOS7StatusBarAppearance = api.iOS7StatusBarAppearance;
            if (numSV >= 7 && !fullScreen && iOS7StatusBarAppearance) {
                el.style.paddingTop = '20px';
            }
        }
    };
    u.fixStatusBar = function(el){
        if(!u.isElement(el)){
            console.warn('$api.fixStatusBar Function need el param, el param must be DOM Element');
            return;
        }
        var sysType = api.systemType;
        if(sysType == 'ios'){
            u.fixIos7Bar(el);
        }else if(sysType == 'android'){
            var ver = api.systemVersion;
            ver = parseFloat(ver);
            if(ver >= 4.4){
                el.style.paddingTop = '25px';
            }
        }
    };
    u.toast = function(title, text, time){
        var opts = {};
        var show = function(opts, time){
            api.showProgress(opts);
            setTimeout(function(){
                api.hideProgress();
            },time);
        };
        if(arguments.length === 1){
            var time = time || 500;
            if(typeof title === 'number'){
                time = title;
            }else{
                opts.title = title+'';
            }
            show(opts, time);
        }else if(arguments.length === 2){
            var time = time || 500;
            var text = text;
            if(typeof text === "number"){
                var tmp = text;
                time = tmp;
                text = null;
            }
            if(title){
                opts.title = title;
            }
            if(text){
                opts.text = text;
            }
            show(opts, time);
        }
        if(title){
            opts.title = title;
        }
        if(text){
            opts.text = text;
        }
        time = time || 500;
        show(opts, time);
    };
    u.post = function(/*url,data,fnSuc,dataType*/){
        var argsToJson = parseArguments.apply(null, arguments);
        var json = {};
        var fnSuc = argsToJson.fnSuc;
        argsToJson.url && (json.url = argsToJson.url);
        argsToJson.data && (json.data = argsToJson.data);
        if(argsToJson.dataType){
            var type = argsToJson.dataType.toLowerCase();
            if (type == 'text'||type == 'json') {
                json.dataType = type;
            }
        }else{
            json.dataType = 'json';
        }
        json.method = 'post';
        api.ajax(json,
            function(ret,err){
                if (ret) {
                    fnSuc && fnSuc(ret);
                }
            }
        );
    };
    u.get = function(/*url,fnSuc,dataType*/){
        var argsToJson = parseArguments.apply(null, arguments);
        var json = {};
        var fnSuc = argsToJson.fnSuc;
        argsToJson.url && (json.url = argsToJson.url);
        //argsToJson.data && (json.data = argsToJson.data);
        if(argsToJson.dataType){
            var type = argsToJson.dataType.toLowerCase();
            if (type == 'text'||type == 'json') {
                json.dataType = type;
            }
        }else{
            json.dataType = 'text';
        }
        json.method = 'get';
        api.ajax(json,
            function(ret,err){
                if (ret) {
                    fnSuc && fnSuc(ret);
                }
            }
        );
    };

/*end*/


    window.$api = u;




})(window);

// var userid = $api.getStorage('userid');
 var userid = $api.getStorage('userid');
var rnd = $api.getStorage('rnd');

function web_open(url){
	var userid = $api.getStorage('userid');
 var rnd = $api.getStorage('rnd');
 // alert(rnd);
// start_hideProgress();
		if (typeof($api.getStorage('userid')) != "undefined") {
			var url = zhibo_url+url+'?app_assgin=app&rnd='+rnd+'&ui='+userid;
			var browser = api.require('webBrowser');
		browser.open({
			url : url,
			progress : {
				color : '#1d80e6'
			},
			titleBar : {
				visible : true,
				bg : '#1d80e6',
				textColor : '#fff'
			}
		}, function(ret) {
			// stop_hideProgress();
		});
		} else {
		// stop_hideProgress();
			api.openWin({
				name : 'login_window',
				url : '../html/login_window.html',
				pageParam : {
				}
			});
		}
}

function web_open_nl(url){
	var userid = $api.getStorage('userid');
	var rnd = $api.getStorage('rnd');


	var url = zhibo_url+url+'?app_assgin=app&rnd='+rnd+'&ui='+userid;



	var browser = api.require('webBrowser');
	browser.open({
	url : url,
	progress : {
		color : '#1d80e6'
	},
	titleBar : {
		visible : true,
		bg : '#1d80e6',
		textColor : '#fff'
	}
	}, function(ret) {
	// stop_hideProgress();
	});

}
