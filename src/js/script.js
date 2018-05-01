jQuery(document).ready(function($) {
	var name = "";
	var matchLength = 0;
	var etherumAmount = 0;
	var height = 0;

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

	$(document).on('click', '.btn-live', '.btn-live', function(event) {
		$(this).closest('.main-slider-item').addClass('main-slider-live');

		height = $(this).closest('.main-slider-item').outerHeight() - 30;

		var nameSelector = '#' + $(this).closest('.main-slider-item').attr('id') + ' .main-slider-name';
		name = $(nameSelector).text();

		var amountSelector = '#' + $(this).closest('.main-slider-item').attr('id') + ' .main-slider-amount';
		var amount = $(amountSelector).text();

		var hideSelectors = nameSelector + ', ' + amountSelector + ', ' +
		'#' + $(this).closest('.main-slider-item').attr('id') + ' .main-slider-risk' + ', ' +
		'#' + $(this).closest('.main-slider-item').attr('id') + ' .slider-item-middle' + ', ' +
		'#' + $(this).closest('.main-slider-item').attr('id') + ' .divider' + ', ' +
		'#' + $(this).closest('.main-slider-item').attr('id') + ' .pick-hand' + ', ' +
		'#' + $(this).closest('.main-slider-item').attr('id') + ' .tiebreaker' + ', ' +
		'#' + $(this).closest('.main-slider-item').attr('id') + ' .slider-item-buttons' + ', ' +
		'#' + $(this).closest('.main-slider-item').attr('id') + ' .challenge-message' + ', ' +
		'#' + $(this).closest('.main-slider-item').attr('id') + ' .btn-live';
		$(this).closest('.main-slider-item').css('height', height);
		$(hideSelectors).css('display', 'none');

		$(this).closest('.main-slider-item').find('.name-amount').append($.parseHTML(
			'<b><p style="text-decoration: underline">' + name + ' Requirements:</p><p>Match Length: <span class="match-length"></span></p><p>Etherum: <span class="match-etherum"></span></p></b>'
			));

		$(this).closest('.main-slider-item').append($.parseHTML(
			'<p>Level: </p><div class="match-length-choose"><p>Match length:</p><button class="match-length-btn">3</button><button class="match-length-btn">7</button><button class="match-length-btn">11</button></div>'
			));

		$(this).closest('.main-slider-item').append($.parseHTML(
			'<div class="etherum-amount"><p>Etherum: </p><input type="number" placeholder="Type Amount" class="etherum-amount-input"></div>'
			));

		$(this).closest('.main-slider-item').append($.parseHTML(
			'<button class="send-request-btn">Send Request</button>'
			));
	});

	$(document).on('click', '.match-length-btn', function(event) {
		$(this).css('background', 'rgba(256, 256, 256, 0.2)');
		$(this).siblings('.match-length-btn').each(function(index, el) {
			$(this).css('background', 'rgba(256, 256, 256, 0.5)');
		});
	});

	$(document).on('click', '.match-length-btn', function(event) {
		matchLength = $(this).html();
	});

	$(document).on('click', '.send-request-btn', function(event) {
		etherumAmount = $(this).closest('.main-slider-item').find('.etherum-amount-input').val();
		var hideSelectors = '#' + $(this).closest('.main-slider-item').attr('id') + ' p' + ', ' +
		'#' + $(this).closest('.main-slider-item').attr('id') + ' .match-length-choose' + ', ' +
		'#' + $(this).closest('.main-slider-item').attr('id') + ' .etherum-amount' + ', ' +
		'#' + $(this).closest('.main-slider-item').attr('id') + ' .send-request-btn';
		$(hideSelectors).css('display', 'none');
		$(this).closest('.main-slider-item').find('.name-amount').append($.parseHTML(
			'<p>Waiting for ' + name + ' Confirmation</p>' +
			'<p class="waiting-stats">'+matchLength+'</p><p class="waiting-stats">'+etherumAmount+'</p>'
			));

		$(this).closest('.main-slider-item').append($.parseHTML('<button class="waiting-cancel clearfix">Cancel</button>'));
		
	});
});