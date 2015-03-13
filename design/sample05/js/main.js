

$(document).ready(function(){
  $('.container').fadeIn(2000);
  $('body').pointer();
  // $('body').pointer2();
  // $('.fade').click(function() {
  //   var url = $(this).attr("href");
  //   // アニメーションで透過0になるまでフェードアウトさせる。速度ミリ秒
  //   $(".container").animate({"opacity": 0}, 1000, function() {
  //     location.href = url;
  //   });
  // });
});


// window.onload = function() {
// setTimeout("show()",2000);
// }

// function show() {
// // $('body').css('display', 'block');
// $('.container').fadeIn(2000);
// }

// $('head').append('<style type="text/css">.container{display:none;}</style>');
// $(function() {
//   ページ遷移時にフェードアウトさせるclickイベントの要素を指定。ここではli a
//   $('a').click(function() {
//     var url = $(this).attr("href");
//     // アニメーションで透過0になるまでフェードアウトさせる。速度ミリ秒
//     $('.container').animate({"opacity": 0}, 1000,
//     	function() {
// 	      location.href = url;
//     });
// });
// $(function(){
// 	$("#first").rotate({
// 	bind:
// 		{
// 			mouseover : function() {
// 				$(this).rotate({
// 					animateTo: 360
// 				})
// 			},
// 			mouseout : function() {
// 				$(this).rotate({
// 					animateTo: 0
// 				})
// 			}
// 		}
// 	});
// });



$('#first').hover(function(){
    // $('#first_h').css('display', 'none');
    $("#first_h", this).stop().animate({width: "100%",left:'0%',opacity:1},{queue:false,duration:300});
}, function() {
    $("#first_h", this).stop().animate({width: "0%",left:'-100%',opacity:0},{queue:false,duration:500});
    // $('#first_h').css('display', 'none');
});


$('#second').hover(function(){
    $("#second_h", this).stop().animate({width: "100%",left:'0%',opacity:1},{queue:false,duration:300});
}, function() {
    $("#second_h", this).stop().animate({width: "0%",left:'-100%',opacity:0},{queue:false,duration:500});
});


$('#third').hover(function(){
    $("#third_h", this).stop().animate({width: "100%",left:'0%',opacity:1},{queue:false,duration:300});
}, function() {
    $("#third_h", this).stop().animate({width: "0%",left:'-100%',opacity:0},{queue:false,duration:500});
});


$('#fourth').hover(function(){
	$("#fourth_h").css('display', 'block');
    $("#fourth_h", this).stop().animate({width: "100%",left:'0%',opacity:1},{queue:false,duration:300});
}, function() {
    $("#fourth_h", this).stop().animate({width: "0%",left:'-100%',opacity:0},{queue:false,duration:500});

});

// $(function() {
//   var a = $("a")[0];
//   a.addEventListener("touchstart", touchHandler, false);
//   a.addEventListener("touchmove", touchHandler, false);
//   a.addEventListener("touchend", touchHandler, false);

//   function touchHandler(e){
//     // e.preventDefault();
//     var url = $(this).attr("href");
//     location.href = url;
//   }
// });

// $('a').click(function(event) {
//     var url = $(this).attr("href");
//     location.href = url;
// });

(function($){
  $.fn.pointer = function (options) {
    var settings = {
      size : 80,
      spd : 300,
      color : "#444"
    }
    settings = $.extend(settings, options);

    var circle_style = {
      "position":"absolute",
      "z-index":9999,
      "height":10,
      "width":10,
      "border":"solid 4px "+settings.color,
      "border-radius":settings.size
    }
    return this.each(function() {
      var $this = $(this);
      $this.css({"position":"relative"});
      $(document).click(function(e){
        var x = e.pageX-5;
        var y = e.pageY-5;

        var pos = {
          top :(-settings.size/2)+y,
          left :(-settings.size/2)+x
        }

        $this.append('<div class="circle"></div>');
        $this.find(".circle:last").css(circle_style).css({
          "top":y,
          "left":x
        }).animate({"height":settings.size,"width":settings.size,"left":pos.left,"top":pos.top},{duration:settings.spd,queue:false})
        .fadeOut(settings.spd*1.8,function(){
          $(this).remove();
        });
      });
    });
  }
})(jQuery);

// $(function(){
//     // イベント登録
//     $('body').on('touchstart touchmove touchend', function(event){
//         // タッチスタートでフラグを設定
//     $('body').bind('touchstart', function() {
//         event.preventDefault();                     // ページが動いたり、反応を止める（A タグなど）
//         this.pageX = event.changedTouches[0].pageX; // X 座標の位置
//         this.pageY = event.changedTouches[0].pageY; // Y 座標の位置

//         var x = this.pageX;
//         var y = this.pageY;

//     });
// });

(function($){
  $.fn.pointer2 = function (options) {
    var settings = {
      size : 80,
      spd : 300,
      color : "#444"
    }
    settings = $.extend(settings, options);

    var circle_style = {
      "position":"absolute",
      "z-index":9999,
      "height":10,
      "width":10,
      "border":"solid 4px "+settings.color,
      "border-radius":settings.size
    }
    return this.each(function() {
      var $this = $(this);
      $this.css({"position":"relative"});
      $('body').bind('touchstart', function() {
        // event.preventDefault();
        this.pageX = event.changedTouches[0].pageX; // X 座標の位置
        this.pageY = event.changedTouches[0].pageY; // Y 座標の位置

        var x = this.pageX;
        var y = this.pageY;

        var pos = {
          top :(-settings.size/2)+y,
          left :(-settings.size/2)+x
        }

        $this.append('<div class="circle"></div>');
        $this.find(".circle:last").css(circle_style).css({
          "top":y,
          "left":x
        }).animate({"height":settings.size,"width":settings.size,"left":pos.left,"top":pos.top},{duration:settings.spd,queue:false})
        .fadeOut(settings.spd*1.8,function(){
          $(this).remove();
        });
      });
    });
  }
})(jQuery);
