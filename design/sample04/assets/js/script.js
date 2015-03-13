// $('head').append('<style type="text/css">#wrapper{display:none;}</style>');
$(function() {
	$('#wrapper').fadeIn(2000);
	$('#to_aim').click(function() {
		$('#wrapper').animate({"opacity": 0}, 1000, function() {
		$('#wrapper').css('display', 'none');
		$('#aim').fadeIn(2000);
	    });
	    return false;
    });
	$('#to_action').click(function() {
		$('#wrapper').animate({"opacity": 0}, 1000, function() {
		$('#wrapper').css('display', 'none');
		$('#action').fadeIn(2000);
	    });
	    return false;
    });
	$('#to_member').click(function() {
		$('#wrapper').animate({"opacity": 0}, 1000, function() {
		$('#wrapper').css('display', 'none');
		$('#member').fadeIn(2000);
	    });
	    return false;
    });
	$('#to_back1').click(function() {
		$('#aim').animate({"opacity": 0}, 1000, function() {
				// var url = $(this).attr("href");
			    // アニメーションで透過0になるまでフェードアウトさせる。速度ミリ秒
				location.href = 'index.html';
		});
	    return false;
	});
	$('#to_back2').click(function() {
		$('#action').animate({"opacity": 0}, 1000, function() {
				// var url = $(this).attr("href");
			    // アニメーションで透過0になるまでフェードアウトさせる。速度ミリ秒
				location.href = 'index.html';
		});
	    return false;
	});
	$('#to_back3').click(function() {
		$('#member').animate({"opacity": 0}, 1000, function() {
				// var url = $(this).attr("href");
			    // アニメーションで透過0になるまでフェードアウトさせる。速度ミリ秒
				location.href = 'index.html';
		});
	    return false;
	});
});
