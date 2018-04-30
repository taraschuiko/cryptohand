jQuery(document).ready(function($) {
	$(".main-slider").slick({
		dots: false,
		slidesToShow: 1,
		centerMode: true,
		centerPadding: '40px',
		draggable: false
	});

	$('.tiebreaker_input').on('input change', function() {
		$(this).next($('.tiebreaker_val')).html(this.value);
	});

	$('.pick-hand > div').on('click', function(event) {
		$(this).siblings().css('background', 'rgba(256, 256, 256, 0.3)');
		$(this).css('background', '#fff');
		console.log('click');
	});
});