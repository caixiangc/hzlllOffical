define(
	$(function(){
		var index_eq=0;
		var request_url=window.location.search;
		if(request_url=="?aca_news")    //   "="是赋值，“==”表示判断
		{
			index_eq =1;
			$(".contain .mid ul li").eq(index_eq).addClass("add").siblings().removeClass("add"); //切换选中的按钮高亮状态
			$(".tab_box > div").eq(index_eq).show().siblings().hide();
		}
		else if(request_url=="?aca_download")    //   "="是赋值，“==”表示判断
		{
			index_eq =2;
			$(".contain .mid ul li").eq(index_eq).addClass("add").siblings().removeClass("add"); //切换选中的按钮高亮状态
			$(".tab_box > div").eq(index_eq).show().siblings().hide();
		}
		else if(request_url=="?aca_system")    //   "="是赋值，“==”表示判断
		{
			index_eq =3;
			$(".contain .mid ul li").eq(index_eq).addClass("add").siblings().removeClass("add"); //切换选中的按钮高亮状态
			$(".tab_box > div").eq(index_eq).show().siblings().hide();
		}
		else
		{
			index_eq =0;
			$(".contain .mid ul li").eq(index_eq).addClass("add").siblings().removeClass("add"); //切换选中的按钮高亮状态
			$(".tab_box > div").eq(index_eq).show().siblings().hide();
		}
	})
)