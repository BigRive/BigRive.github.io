export default{                                                //做为一个模块使用，提高集成化的程度
	init(){
		$(document).ready(function() {
			$.get("./Component/navbar.txt", function(data){    //导航栏和版权页独立出来为一个组件
				$(".nav_header").html(data);
				bindDropdownHover();                           //故障修复：修复了因为模块化导致鼠标放到下拉菜单标题时不会自动展开菜单的问题
				navTextStatus();                               //方便根据点击进去的页面设置导航栏标题的颜色
			});
			$.get("./Component/footer.txt", function(data){
				$(".footer").html(data);
			});
			function bindDropdownHover(){                       //重新绑定事件
				$(".dropdown").hover(
					function() {                                //鼠标移入时添加类名
						$(this).addClass("show");               //类名“show”是Bootstrap自带的
						$(this).find(".dropdown-menu").addClass("show");
					},
					function() {                                //鼠标移出时删除类名
						$(this).removeClass("show");
						$(this).find(".dropdown-menu").removeClass("show");
					}
				);
			}
			function navTextStatus(){                            //根据跳转的页面，高亮相应的导航栏文本
				var i;
				for(i = 0; i < $(".nav-link").length; i++){      //因为很多页面还没有做出来，所以这只是权宜之计
					$(".nav-link").eq(i).removeClass("active");
				}
				$(".nav-link").eq(0).addClass("active");
		// 		// 获取当前页面的 URL
		// 	    var currentURL = window.location.pathname;
		
		// 	    // 根据当前页面的 URL 设置对应的导航项样式
		// 	    if (currentURL === "/index.html" || currentURL === "/") {
		// 		  $("#home-link").addClass("active");
		// 	    } else if (currentURL === "/about.html") {
		// 		  $("#about-link").addClass("active");
		// 	    } else if (currentURL === "/services.html") {
		// 		  $("#services-link").addClass("active");
		// 	    } else if (currentURL === "/contact.html") {
		// 		  $("#contact-link").addClass("active");
		// 	    }
			}
		});
	}
}