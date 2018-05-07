jQuery(document).ready(function($) {
	function sleep(seconds) {
		var e = new Date().getTime() + (seconds * 1000);
		while (new Date().getTime() <= e) {}
	}

	sleep(2);

	$('.game-select').each(function(index, el) {
		$(this).css('display', 'flex');
	});

	$('.game-center h1').css('display', 'none');

	$('.game-center').append($.parseHTML(
		'<div class="waiting-countdown">20</div><h2 style="text-transform: uppercase;" class="game-win-lose"></h2>'
	));

	// On hand select

	var winner = "";

	$(document).one('click', '.game-select-item:not(.game-select-no div)', function(event) {
		$(this).css('background', '#278015');
		$(this).siblings('.game-select-item').each(function(index, el) {
			$(this).css('background', '#333');
		});
		winner = $(this).text();

		$('.game-select-no div').first().css('background', '#278015');

		$('.waiting-countdown').addClass('countdown-confirm').text('Click to confirm').css({
			'fontSize': '16pt',
			'background': '#278015',
			'cursor': 'pointer'
		});
	});

	var currentScore = 0;

	$(document).one('click', '.countdown-confirm', function(event) {
		$(this).text(winner).css('fontSize', '60pt');
		$('.game-select-no div').first().css('background', '#804843').text('✌');
		$('.game-win-lose').text('You win');
		currentScore++;
		$('.game-photo img').css({
			'filter': 'opacity(50%)'
		});
		$('.game-photo-score').css({'display': 'inline'});
		$('#player_score_2').text(currentScore);
	});	
});