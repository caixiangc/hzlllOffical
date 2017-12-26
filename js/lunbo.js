define(
	function(){
		$('.thumb-in span').mouseover(function(){
			$(this).stop().addClass('on').siblings().removeClass('on');
			var index=$(this).index();
			$('.pic img').stop().eq(index).fadeIn(500).siblings().fadeOut(500);
		})
	}

)