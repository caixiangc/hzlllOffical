define(
	function(){

		$(window).scroll(function(){  //ֻҪ���ڹ���,�ʹ����������

			var scrollt = document.documentElement.scrollTop + document.body.scrollTop; //��ȡ������ĸ߶�

			if( scrollt >200 ){  //�жϹ�����߶ȳ���200px,����ʾ

				$("#return_sign").fadeIn(400); //����

			}else{

				$("#return_sign").stop().fadeOut(400); //������ػ���û�г���,�͵���.�������stop()ֹ֮ͣǰ����,������������

			}

		});

		$("#return_top").click(function(){ //�������ǩ��ʱ��,ʹ��animate��200�����ʱ����,��������

			$("html,body").animate({scrollTop:"0px"},200);

		});

	}
)