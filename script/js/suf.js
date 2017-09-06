
			function submit_pl() {
			var ztext = $('textarea[name=pl]').val();
			if(ztext == '') {
				layer.msg('评论内容不能为空', {
					time: 1000
				});
				$('textarea[name=pl]').focus();
			} else {
				if(ztext.length > 50) {
					layer.msg('评论内容的长度为50字以内', {
						time: 1000
					});
				} else {
					if(filterSqlStr(ztext)) {
						layer.msg('评论内容包含了敏感字符，请重新输入！', {
							time: 1000
						});

					} else {
						layer.load(2);
						$.post(app_url + '/app-php/index.php?m=User&a=submit_pl', {
							sh_text: ztext,
							id: $('textarea[name=pl]').attr('id'),
							classid: $('textarea[name=pl]').attr('classid')
						}, function(ret) {
							layer.closeAll('loading');
							if(ret.r==0){
								layer.msg(ret.t, {
									time: 1000
								});
							}else if(ret.r==1){
								layer.msg('评论成功', {icon: 1});
								//初始化评论框
								$('textarea[name=pl]').val('');

                               //初始化分页
							   page_val = parseInt(2);
							    //初始化评论列表
								pl_list.site = ret.data;

								$('.scroll_tx').text('向上滑动加载更多数据');
//								vm.$set(pl_list.site,0,ret.data);		
//								Vue.set(pl_list.site, '0', ret.data)

								
							}else{
								layer.msg('评论失败', {
									time: 1000
								});
							}
							
						})
					}
				}
			}

		}

		function filterSqlStr(value) {

			var sqlStr = sql_str().split(',');
			var flag = false;

			for(var i = 0; i < sqlStr.length; i++) {

				if(value.toLowerCase().indexOf(sqlStr[i]) != -1) {
					flag = true;
					break;

				}
			}
			return flag;
		}

		function sql_str() {
			var str = "and,delete,or,exec,insert,select,union,update,count,*,',join,>,<";
			return str;
		}


        function favas(id,classid){
        var userid = $api.getStorage('userid');

		if(isNaN(userid)){
		  toast('你还没登录，请先登录', 2000, 'bottom');
		}else{
		        	$.post(app_url + '/app-php/index.php?m=User&a=add_fave',{'id':id,'classid':classid},function(ret){
//      		console.log();
        		if(ret.r=='0'){
        			layer.msg(ret.t, {time: 1000});
        		}else if(ret.r=='3'){
        			layer.msg(ret.t, {time: 1500});
//      			setTimeout(function(){location.href = '/Home/user/login/?url='+saff;},1500);
        			
        		}else if(ret.r=='1'){
        			layer.msg('收藏成功', {icon: 1});
        			$('.fava').attr('src',"../image/shop/pro_bottom/4.png");
        		}else{
        			layer.msg('收藏失败', {time: 1000});
        		}
        	})
		}

        }























