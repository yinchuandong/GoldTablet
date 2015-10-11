(function(){
	var security = {
		init: function(){
            this.bindEvent();
		},
		bindEvent:function(){		
			/*************第一表************/
			function fpassword(){//原来密码的验证
				var Img = ["../img/confirm.png","../img/false.png"];
				var formalpassword = $("#j-fpassword").val();
				var _fImg = $("#j-fpassword").parent().parent().find("img");//定位到图片层
				if(formalpassword != ""){
						_fImg.css("visibility","visible");
						if (formalpassword == "123")
							_fImg.attr("src",Img[0]);
						else
							_fImg.attr("src",Img[1]);
					}
					else
						_fImg.css("visibility","hidden");
			}

			function npassword(){
				var Img = ["../img/confirm.png","../img/false.png"];
				var newpassword = $("#j-npassword").val();
				var repeatpassword = $("#j-repassword").val();
				var _nImg = $("#j-npassword").parent().parent().find("img");//定位到图片层
				var _reImg = $("#j-repassword").parent().parent().find("img");//定位到图片层
				if(newpassword != ""){
					_nImg.attr("src",Img[0]);
					_nImg.css("visibility","visible");
					if (repeatpassword == "") {
						_reImg.css("visibility","hidden");
					}
					else{
						if(repeatpassword == newpassword){
							_reImg.attr("src",Img[0]);
							_reImg.css("visibility","visible");
						}
						else{
							_reImg.attr("src",Img[1]);
							_reImg.css("visibility","visible");
						}
					}	
				}
				else{
					_nImg.css("visibility","hidden");

					if(repeatpassword =="")
						_reImg.css("visibility","hidden");
					else{
						_reImg.attr("src",Img[1]);
						_reImg.css("visibility","visible");
					}
				}
			}

			function repassword(){
				var Img = ["../img/confirm.png","../img/false.png"];
				var newpassword = $("#j-npassword").val();
				var repeatpassword = $("#j-repassword").val();
				var _reImg = $("#j-repassword").parent().parent().find("img");//定位到图片层
					if(repeatpassword != ""){
						if(repeatpassword == newpassword){
							_reImg.attr("src",Img[0]);
							_reImg.css("visibility","visible");
						}
						else{
							_reImg.attr("src",Img[1]);
							_reImg.css("visibility","visible");
						}
					}
					else{
						if(newpassword != ""){
							_reImg.attr("src",Img[1]);
							_reImg.css("visibility","visible");
						}
						else
							_reImg.css("visibility","hidden");
					}
			}
			//安第一个提交按钮
			$("#j-sub-btn1").click(function(){
				var Img = ["../img/confirm.png","../img/false.png"];
				var _fImg = $("#j-fpassword").parent().parent().find("img");//定位到图片层
				var _nImg = $("#j-npassword").parent().parent().find("img");//定位到图片层
				var _reImg = $("#j-repassword").parent().parent().find("img");//定位到图片层
				fpassword();
				npassword();
				repassword();
				if( ((_reImg).attr("src")==Img[0]) && ((_nImg).attr("src")==Img[0]) && ((_fImg).attr("src")==Img[0]) )
					alert("提交成功");
			})
			//当填写密码错误时，测试密码为123
			$("#j-fpassword").click(function(){
				$("#j-fpassword").blur(function(){
					fpassword();
				})
			})
			//填写新密码时候的图片显示
			$("#j-npassword").click(function(){
				$("#j-npassword").blur(function(){
					npassword();
				})
			})
			//填写重复密码时候的图片显示
			$("#j-repassword").click(function(){
				$("#j-repassword").blur(function(){
					repassword();
				})
			})
			

			/*************第二个表***************/
			//判断银行卡号是否为空
			function bankcardnum(){
				var Img = ["../img/confirm.png","../img/false.png"];
				var bankcardnum = $("#j-bankcardnum").val();
				var _bImg = $("#j-bankcardnum").parent().parent().find("img");//定位到图片层
				if(bankcardnum == ""){
					_bImg.css("visibility","hidden");
				}
				else{
					_bImg.attr("src",Img[0]);
					_bImg.css("visibility","visible");
				}
			}
			//判断姓名是否为空
			function name(){
				var Img = ["../img/confirm.png","../img/false.png"];
				var name = $("#j-name").val();
				var _naImg = $("#j-name").parent().parent().find("img");//定位到图片层
				if(name == ""){
					_naImg.css("visibility","hidden");
				}
				else{
					_naImg.attr("src",Img[0]);
					_naImg.css("visibility","visible");
				}
			}

			$("#j-sub-btn2").click(function(){
				var Img = ["../img/confirm.png","../img/false.png"];
				var _bImg = $("#j-bankcardnum").parent().parent().find("img");//定位到图片层
				var _naImg = $("#j-name").parent().parent().find("img");//定位到图片层
				bankcardnum();
				name();
				if( ((_bImg).attr("src")==Img[0]) && ((_naImg).attr("src")==Img[0]) )
					alert("提交成功");
			})

			$("#j-bankcardnum").click(function(){
				$("#j-bankcardnum").blur(function(){
					bankcardnum();
				})
			})

			$("#j-name").click(function(){
				$("#j-name").blur(function(){
					name();
				})
			})
			/*************第三表************/
			function fbank(){//原来密码的验证
				var Img = ["../img/confirm.png","../img/false.png"];
				var formalbank = $("#j-fbank").val();
				var _fImg = $("#j-fbank").parent().parent().find("img");//定位到图片层
				if(formalbank != ""){
						_fImg.css("visibility","visible");
						if (formalbank == "123")
							_fImg.attr("src",Img[0]);
						else
							_fImg.attr("src",Img[1]);
					}
					else
						_fImg.css("visibility","hidden");
			}

			function nbank(){
				var Img = ["../img/confirm.png","../img/false.png"];
				var newbank = $("#j-nbank").val();
				var repeatbank = $("#j-rebank").val();
				var _nImg = $("#j-nbank").parent().parent().find("img");//定位到图片层
				var _reImg = $("#j-rebank").parent().parent().find("img");//定位到图片层
				if(newbank != ""){
					_nImg.attr("src",Img[0]);
					_nImg.css("visibility","visible");
					if (repeatbank == "") {
						_reImg.css("visibility","hidden");
					}
					else{
						if(repeatbank == newbank){
							_reImg.attr("src",Img[0]);
							_reImg.css("visibility","visible");
						}
						else{
							_reImg.attr("src",Img[1]);
							_reImg.css("visibility","visible");
						}
					}	
				}
				else{
					_nImg.css("visibility","hidden");

					if(repeatbank =="")
						_reImg.css("visibility","hidden");
					else{
						_reImg.attr("src",Img[1]);
						_reImg.css("visibility","visible");
					}
				}
			}

			function rebank(){
				var Img = ["../img/confirm.png","../img/false.png"];
				var newbank = $("#j-nbank").val();
				var repeatbank = $("#j-rebank").val();
				var _reImg = $("#j-rebank").parent().parent().find("img");//定位到图片层
					if(repeatbank != ""){
						if(repeatbank == newbank){
							_reImg.attr("src",Img[0]);
							_reImg.css("visibility","visible");
						}
						else{
							_reImg.attr("src",Img[1]);
							_reImg.css("visibility","visible");
						}
					}
					else{
						if(newbank != ""){
							_reImg.attr("src",Img[1]);
							_reImg.css("visibility","visible");
						}
						else
							_reImg.css("visibility","hidden");
					}
			}
			//安第一个提交按钮
			$("#j-sub-btn3").click(function(){
				var Img = ["../img/confirm.png","../img/false.png"];
				var _fImg = $("#j-fbank").parent().parent().find("img");//定位到图片层
				var _nImg = $("#j-nbank").parent().parent().find("img");//定位到图片层
				var _reImg = $("#j-rebank").parent().parent().find("img");//定位到图片层
				fbank();
				nbank();
				rebank();
				if( ((_reImg).attr("src")==Img[0]) && ((_nImg).attr("src")==Img[0]) && ((_fImg).attr("src")==Img[0]) )
					alert("提交成功");
			})
			//当填写密码错误时，测试密码为123
			$("#j-fbank").click(function(){
				$("#j-fbank").blur(function(){
					fbank();
				})
			})
			//填写新密码时候的图片显示
			$("#j-nbank").click(function(){
				$("#j-nbank").blur(function(){
					nbank();
				})
			})
			//填写重复密码时候的图片显示
			$("#j-rebank").click(function(){
				$("#j-rebank").blur(function(){
					rebank();
				})
			})
		}
	}
	security.init();
})()