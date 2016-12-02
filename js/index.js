;$(function(){

});

'use strict'
var sidebar = $("#sidebar"),
backTop = $(".back-to-top");
var mask = $(".mask");
function showSidebar() {
	console.log("love shanshan ");
	mask.fadeIn();
	sidebar.animate({right:0});

}
/**
 * @param  {[type]}
 * @return {[type]}
 */
function paa(name) {
	console.log('love shanshan');
}
function hideSidebar() {
	
	mask.fadeOut();
	sidebar.animate({right:-sidebar.width()});
	console.log("lx`s love shanshan");
}

backTop.on("click",function(){
	$("html,body").animate({
		scrollTop:0
	},800);
});

$(window).on('scroll',function() {
	if($(window).scrollTop() > $(window).height()){
		backTop.fadeIn();
	}else{
		backTop.fadeOut();
	}
});
$(window).trigger('scroll');

$("#shanshan").click(function() {
	alert("love shansahn");
});

$("#shanshan1").click(function() {
	alert("love shansahn111");
});
