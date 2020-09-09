(function() {

	'use strict';

	// bootstrap carousel
	$('.carousel').carousel();

	// waypoint triggers
	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

	$('.wp2').waypoint(function(){
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});

	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown')
	}, {
		offset: '75%'
	});

	$('.wp4').waypoint(function(){
		$('.wp4').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});

	$('.wp5').waypoint(function(){
		$('.wp5').addClass('animated fadeIn');
	}, {
		offset: '75%'
	});

	$('.wp6').waypoint(function(){
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

	$('.wp7').waypoint(function(){
		$('.wp7').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

	$('.wp8').waypoint(function(){
		$('.wp8').addClass('animated fadeInUp');
	}, {
		offset: '100%'
	});

	$('.wp9').waypoint(function(){
		$('.wp9').addClass('animated fadeIn');
	}, {
		offset: '100%'
	});

	// smooth scrolling to top
	$('.btn-back-to-top').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 2000);
				return false;
			}
		}
	});

})();
