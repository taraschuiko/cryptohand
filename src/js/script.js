jQuery(document).ready(function($) {
	$(".main-slider").slick({
		dots: false,
		slidesToShow: 1,
		centerMode: true,
		centerPadding: '40px',
		draggable: false
	});

	$(document).on('input', '#tiebreaker_input', function() {
    $('#tiebreaker_val').html( $(this).val() );
});
});
