$(function(){

	// 头部下拉菜单
	$('#dropdown-menu li a')
		.on("click",function(){
			$('#dropdownMenu1 em')
			.html($(this)
			.html());
	});

    //微信弹出窗
    $('.pointer').on('click',function(){
        $('.wechat-layer').fadeIn();
    });

    $('.wechat-close').on('click',function(){
        $('.wechat-layer').fadeOut();
    });

	// 导航栏
	$('.header-nav .navbar-nav li a').on('click',function(){
		$(this).css('color',"#ad9f85").parent('li').siblings('li').children('a').css('color',"#444");
	});

	// 固定导航栏
        var h = 192;
        $(window).scroll(function () {
            var st = $(document).scrollTop();
            if(st >= h) {
                $(".fixed-nav").css({
                    "position": "fixed",
                    "top": 0,
                    "left": 0,
                    "display": "block"
                });
            } else {
                $(".fixed-nav").css("display","none");
            }
        });

	// 轮播图控制时间
	$('#myCarousel').carousel({
	  interval: 4000
	});

	//
    // $(".tab-item")
    $(".tablist > li").on("click",function() {
        // $(this)
        //         .addClass("active")
        //         .siblings("li")
        //         .removeClass("active");
        var index = $(this).index();
        // $(".products > div:eq("+index+")")
        $(".articles-listing-content > div")
                .eq(index)
                .addClass("show")
                .siblings("div")
                .removeClass("hide");
    });
});