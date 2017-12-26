require.config({
	paths:{
		'jquery':'js/jquery-1.11.3.min.js',
		'backtop':'js/backtop',
		'nav':'js/nav',
		'contain_slide':'js/contain_slide',
		'contain_slide_2':'js/contain_slide_2',
		'lunbo':'js/lunbo',
		'aboutus_switch':'js/aboutus_switch',
		'aboutus_request_url':'js/aboutus_request_url',
		'aboutus_pic_preview':'js/aboutus_pic_preview',
		'aboutus_pic_bg':'js/aboutus_pic_bg',
		'academic_request_url':'js/academic_request_url',
		'academic_switch':'js/academic_switch'
	}
})
require(['jquery','backtop','nav','contain_slide','contain_slide_2','lunbo','aboutus_switch','aboutus_request_url','aboutus_pic_preview','aboutus_pic_bg','academic_request_url','academic_switch'],function(jq,backtop,nav,contain_slide,contain_slide_2,lunbo,aboutus_switch,aboutus_request_url,aboutus_pic_preview,aboutus_pic_bg,academic_request_url,academic_switch)
{
//使中间的轮播图随着物理设备的改变而，适当缩放居中展示
		$(window).load(function() {
		$("#background").fullBg();
	});
	$(window).load(function() {
		$("#background1").fullBg();
	});
	$(window).load(function() {
		$("#background2").fullBg();
	});
	$(window).load(function() {
		$("#background3").fullBg();
	});
	$(window).load(function() {
		$("#background4").fullBg();
	});
}
)