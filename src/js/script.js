jQuery(document).ready(function($) {
	// Slider
	$(".main-slider").slick({
		dots: false,
		slidesToShow: 1,
		centerMode: true,
		centerPadding: '40px',
		draggable: false
	});

	// Tiebreaker
	$('.tiebreaker_input').on('input change', function() {
		$(this).next($('.tiebreaker_val')).html(this.value);
	});

	// Hand picking buttons
	$('.pick-hand > div').on('click', function(event) {
		$(this).siblings().css('background', 'rgba(256, 256, 256, 0.3)');
		$(this).css('background', '#fff');
	});

	// Auth tabs
	$('.auth-top__button').on('click', function(event) {
		var id = '#' + $(this).attr('id') + '_tab';

		$('.auth-top__button').each(function(index, el) {
			$(this).removeClass('auth-top__button--active');
		});

		$('.auth-tab').each(function(index, el) {
			$(this).removeClass('auth-tab--active');
		});

		$(this).addClass('auth-top__button--active');
		$(id).addClass('auth-tab--active');
	});

	// Hide form after click on background
	$('.fade').on('click', function(event) {
		event.preventDefault();
		$(this).slideUp('fast');
		$('.auth').slideUp('fast');
	});

	// Message after Challenge button clicked
	$('.btn-challenge').on('click', function(event) {
		var height = $(this).closest('.main-slider-item').outerHeight();

		var nameSelector = '#' + $(this).closest('.main-slider-item').attr('id') + ' .main-slider-name';
		var name = $(nameSelector).text();

		var amountSelector = '#' + $(this).closest('.main-slider-item').attr('id') + ' .main-slider-amount';
		var amount = $(amountSelector).text();

		var hideSelectors = nameSelector + ', ' + amountSelector + ', ' +
			'#' + $(this).closest('.main-slider-item').attr('id') + ' .main-slider-risk' + ', ' +
			'#' + $(this).closest('.main-slider-item').attr('id') + ' .slider-item-middle' + ', ' +
			'#' + $(this).closest('.main-slider-item').attr('id') + ' .divider' + ', ' +
			'#' + $(this).closest('.main-slider-item').attr('id') + ' .pick-hand' + ', ' +
			'#' + $(this).closest('.main-slider-item').attr('id') + ' .tiebreaker' + ', ' +
			'#' + $(this).closest('.main-slider-item').attr('id') + ' .btn-challenge';
		$(this).closest('.main-slider-item').css('height', height);
		$(hideSelectors).css('display', 'none');

		var $sliderItem = $('#' + $(this).closest('.main-slider-item').attr('id'));
		var challengeMessage = '<p class="challenge-message"><b>Congrats</b>, you just challenged ' + name + ' for ' + amount + '</p>';
		var playLiveButton = '#' + $(this).closest('.main-slider-item').attr('id') + ' .btn-live';
		var $htmlMessage = $.parseHTML(challengeMessage);

		$sliderItem.append($htmlMessage);
		var $playBtnHtml = $(playLiveButton);
		$(playLiveButton).remove();
		$sliderItem.append($playBtnHtml);
		
		playLiveButton = '#' + $(this).closest('.main-slider-item').attr('id') + ' .btn-live';
		$(playLiveButton).html('Play Live');
		$(playLiveButton).css({'background': 'rgba(34, 139, 34, 0.6)',
							'color': '#fff',
							'padding': '8px',
							'cursor': 'pointer',
							'width': '20%',
							'margin': '20px 40%'});
	});
});