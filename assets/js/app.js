$(document).ready(function(){
	var navicon = $('.navicon');
	var nav = $('.header__nav');

	navicon.click(function(){
		nav.toggleClass('hide');
	});
});