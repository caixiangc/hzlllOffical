define(
	$(function(){
		var index_eq=0;
		var request_url=window.location.search;
		if(request_url=="?aca_news")    //   "="�Ǹ�ֵ����==����ʾ�ж�
		{
			index_eq =1;
			$(".contain .mid ul li").eq(index_eq).addClass("add").siblings().removeClass("add"); //�л�ѡ�еİ�ť����״̬
			$(".tab_box > div").eq(index_eq).show().siblings().hide();
		}
		else if(request_url=="?aca_download")    //   "="�Ǹ�ֵ����==����ʾ�ж�
		{
			index_eq =2;
			$(".contain .mid ul li").eq(index_eq).addClass("add").siblings().removeClass("add"); //�л�ѡ�еİ�ť����״̬
			$(".tab_box > div").eq(index_eq).show().siblings().hide();
		}
		else if(request_url=="?aca_system")    //   "="�Ǹ�ֵ����==����ʾ�ж�
		{
			index_eq =3;
			$(".contain .mid ul li").eq(index_eq).addClass("add").siblings().removeClass("add"); //�л�ѡ�еİ�ť����״̬
			$(".tab_box > div").eq(index_eq).show().siblings().hide();
		}
		else
		{
			index_eq =0;
			$(".contain .mid ul li").eq(index_eq).addClass("add").siblings().removeClass("add"); //�л�ѡ�еİ�ť����״̬
			$(".tab_box > div").eq(index_eq).show().siblings().hide();
		}
	})
)