require(["config"],function(m){
	require(["jquery","jqueryui"],function($){
		$("#inherit").load("../html/sub/head.html");
		$("#num").on("keyup",function(){
			var val=$(".input1 #num").val();
			val=/^\d{11}$/.test(val);
			console.log(val);
			if(val){
				$("#check1").css("display","block");
				$("#alert1").css("display","none");
			}
			else{
				$("#alert1").css("display","block");
				$("#check1").css("display","none");
			}
		})
		$(".input2 #psd").on("keyup",function(){
			var val=$(".input2 #psd").val();
			val=/^[\da-zA-Z]{6,20}$/.test(val);
				if(val){
				$("#check2").css("display","block");
				$("#alert2").css("display","none");
			}
			else{
				$("#alert2").css("display","block");
				$("#check2").css("display","none");
			}
		})
	    $(".input3 #confirmpsd").on("keyup",function(){
			var val=$(".input3 #confirmpsd").val();
	        if(val==$(".input2 #psd").val()){
	        	$("#check3").css("display","block");
	        	$("#alert5").css("display","none");
	        }
	        else{
	        	$("#check3").css("display","none");
	        	$("#alert5").css("display","block");
	        }
		})
	    $(".input4 #confirm").on("keyup",function(){
			var val=$(".input4 #confirm").val();
			val=/^.{4,8}$/.test(val);
			if(val){
				$("#check4").css("display","block");
				$("#alert4").css("display","none");
			}
			else{
				$("#alert4").css("display","block");
				$("#check4").css("display","none");
			}
		})


//		$(window).on("load",function(){
//			$("#search input").on("keyup",function(){
//				jsonp("http://suggestion.baidu.com/su?wd="+this.value+"&cb=deal");
//			})
//		})
//		window.deal = function(data){
//			  var datalist=document.getElementById("datalist");
//			  datalist.style.display="block";
//			  datalist.innerHTML="";
//				data.s.forEach(function(item){
//					var Oli=document.createElement("li");
//					Oli.innerHTML=item;
//					datalist.appendChild(Oli);
//				})
//			}
//			function jsonp(url){
//				var _script=document.createElement("script");
//				_script.src=url;
//				_script.id="delete_after_use";
//				document.body.appendChild(_script);
//		}
			
	})
})
