$(document).ready(function(){
	var voltaMenu = function(){
		$('.side-menu').animate({
			marginLeft: "-220px"}, "slow")
	}
	var width = $( window ).width();

	$("#sec-avanco").click(function() {
		$('body,html').animate({
			scrollTop: $(".sec-avanco").offset().top}, "slow", function(){
				if(width <= 480){
					voltaMenu();
				}
			});
	});

	$("#sec-invasao").click(function() {
		$('body,html').animate({scrollTop: $(".sec-invasao").offset().top}, "slow",function(){
			if(width <= 480){
					voltaMenu();
				}
		});
	});

	$("#sec-lider").click(function() {
		$('body,html').animate({scrollTop: $(".sec-lider").offset().top}, "slow", function(){
			if(width <= 480){
					voltaMenu();
				}
		});
	});

	$("#sec-major").click(function() {
		$('body,html').animate({scrollTop: $(".sec-major").offset().top}, "slow", function(){
			if(width <= 480){
					voltaMenu();
				}
		});
	});

	$("#sec-ouvidor").click(function() {
		$('body,html').animate({scrollTop: $(".sec-ouvidor").offset().top}, "slow"), function(){
			if(width <= 480){
					voltaMenu();
				}
		};
	});

	$(".btn-menu").click(function(event) {
		$('.side-menu').animate({
			marginLeft: "0px"}, "slow")
	});

	$("#fechar").click(function(event) {
		$('.side-menu').animate({
			marginLeft: "-220px"}, "slow")
	});

});
