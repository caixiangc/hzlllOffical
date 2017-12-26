define(
	function(){
		$(".portfolio a").click(function(){
			var imgsrc=$(this).find("img").attr("src");
			var title=$(this).find("span").text();
			$('.pop-img').attr("src",imgsrc);
			$('.pop-title').text(title);
			$('#pop').css({top:($(window).height()-$('#pop').height())/2+"px",right:($(window).width()-$('#pop').width())/2+"px"}).show(500);
			$('.overlay').fadeIn();
		})
		$(".overlay,.pop-close").click(function(){
			$('#pop').css({top:($(window).height()-$('#pop').height())/2+"px",right:($(window).width()-$('#pop').width())/2+"px"}).hide(500);
			$('.overlay').fadeOut();
		})
	}
)