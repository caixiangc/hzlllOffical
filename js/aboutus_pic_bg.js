define(
	function(){

		$(".btn-sidebar").click(function(){
			$(".sidebar").animate({right:0});
			$(".overlay").fadeIn();
		})

		$(".btn-close,.overlay").click(function(){
			$(".sidebar").animate({right:"-300px"});
			$(".overlay").fadeOut();
		})
	}
)