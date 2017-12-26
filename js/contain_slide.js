define(
	function () {
		var num=0;
		$("#edu_left").click(
			function () {
				if(num>=-1) {
					num-=1;
					<!--alert(num);-->
					$("#education_int").animate({left: "-=385"}, 300);
				}
			}
		),
			$("#edu_right").click(
				function () {
					if(num<0) {
						num+=1;
						<!--alert(num);-->
						$("#education_int").animate({left: "+=385"}, 300);
					}
				}
			)
	}
)