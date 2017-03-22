var len = 7;
var titles = ['Zakynthos', 'Portland', 'Dubai', 'Singapore', 'Moscow', 'London', 'New York'];

$(document).ready(function() {
	var count = 1;
	var $dots = $(".dot");

	$("#next").click(function() {
		showNext();
	});

	$("#previous").click(function() {
		showPrevious();
	});

	$dots.click(function() {

		//remove current photo
		var $curr = $(".photo:nth-child("+ count + ")");
		$curr.removeClass("active");

		//set new photo
		count = $(this).index() + 1;
		var $next = $(".photo:nth-child("+ count + ")");
		$next.addClass("active");

		//color selected dot and new title
		$('#header').html(titles[count-1]);
		$dots.removeClass('colored');
   		$(this).addClass('colored');

	})

	
	function showNext() {
		if (count+1 <= len) {
			var $curr = $(".photo:nth-child("+ count + ")");
			var $currDot = $(".dot:nth-child(" + count + ")");
			$currDot.removeClass("colored");
			count++;						 
			$('#header').html(titles[count-1]);
			var $next = $(".photo:nth-child(" + count + ")");
			var $nextDot = $(".dot:nth-child(" + count + ")");
			$next.css({opacity:0})
					.addClass("active")
					.animate({opacity: 1}, 500, function() {
						$curr.removeClass("active");
						$nextDot.addClass("colored");
					});
	 	}
	}

	function showPrevious() {
		if (count-1 >= 1) {
	 		var $curr = $(".photo:nth-child("+ count + ")");
	 		var $currDot = $(".dot:nth-child(" + count + ")");
			$currDot.removeClass("colored");
	 		$curr.addClass("last-active")
	 				.removeClass("active");
			count--;
			$('#header').html(titles[count-1]);
			var $nextDot = $(".dot:nth-child(" + count + ")");
			var $prev = $(".photo:nth-child(" + count + ")");
			$prev.css({opacity:0})
					.addClass("active")
					.animate({opacity: 1}, 500, function() {
						$curr.removeClass("last-active");
						$nextDot.addClass("colored"); 
					});
	 	}
	}

});