define(
	function(){
		var index_eq=0;
		var request_url=window.location.search;
		if(request_url=="?manager_or")    //   "="�Ǹ�ֵ����==����ʾ�ж�
		{
			index_eq =1;
			$(".contain ol li").eq(index_eq).addClass("add").siblings().removeClass("add"); //�л�ѡ�еİ�ť����״̬
			$(".tab_box > div").eq(index_eq).show().siblings().hide();
		}
		else if(request_url=="?video")    //   "="�Ǹ�ֵ����==����ʾ�ж�
		{
			index_eq =2;
			$(".contain ol li").eq(index_eq).addClass("add").siblings().removeClass("add"); //�л�ѡ�еİ�ť����״̬
			$(".tab_box > div").eq(index_eq).show().siblings().hide();
		}
		else if(request_url=="?photo")    //   "="�Ǹ�ֵ����==����ʾ�ж�
		{
			index_eq =3;
			$(".contain ol li").eq(index_eq).addClass("add").siblings().removeClass("add"); //�л�ѡ�еİ�ť����״̬
			$(".tab_box > div").eq(index_eq).show().siblings().hide();
		}
		else
		{
			index_eq =0;
			$(".contain ol li").eq(index_eq).addClass("add").siblings().removeClass("add"); //�л�ѡ�еİ�ť����״̬
			$(".tab_box > div").eq(index_eq).show().siblings().hide();
		}
	}
)