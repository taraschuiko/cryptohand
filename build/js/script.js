jQuery(document).ready(function(e){e(".main-slider").slick({dots:!1,slidesToShow:1,centerMode:!0,centerPadding:"40px",draggable:!1}),e(document).on("input","#tiebreaker_input",function(){e("#tiebreaker_val").html(e(this).val())})});