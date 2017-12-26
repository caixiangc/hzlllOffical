define(
	function () {
		var num=0;
		$("#edu_leftt").click(
			function () {
				if(num>=-1) {
					num-=1;
					<!--alert(num);-->
					$("#education_inn").animate({left: "-=385"}, 300);
				}
			}
		),
			$("#edu_rightt").click(
				function () {
					if(num<0) {
						num+=1;
						<!--alert(num);-->
						$("#education_inn").animate({left: "+=385px"}, 300);
					}
				}
			)
	}
)