define(
	function(){
		$(".contain ol li").click(function(){
			$(this).addClass("add").siblings().removeClass("add"); //�л�ѡ�еİ�ť����״̬
			var index=$(this).index(); //��ȡ�����°�ť������ֵ����Ҫע��index�Ǵ�0��ʼ��
			$(".tab_box > div").eq(index).show().siblings().hide(); //�ڰ�ťѡ��ʱ��������ʾ��Ӧ�����ݣ�ͬʱ���ز���Ҫ�Ŀ������
		});
	}
)