
window.onload = function(){

	fc2footer();

	function fc2footer(){
		$('#fc2_footer span').css('display', 'none');
	}

	var settings = {
		interval : 150, // cube繧貞�縺咎俣髫
		dur : 3000, // 	cube縺梧戟邯壹☆繧区凾髢
		windowWidth : $(window).width(),
		windowHeight : $(window).height()
	}

	// cube縺ｮ譛邨ゅせ繧ｿ繧､繝ｫ險ｭ螳
	var styleFor = {
		height : 22, // cube縺ｮ鬮倥＆
		width : 22, // cube縺ｮ蟷
		'border-width' : 10 // cube縺ｮ鄂ｫ邱壼ｹ
	}

	// cube縺ｮ蛻晄悄繧ｹ繧ｿ繧､繝ｫ險ｭ螳
	var styleInit = {
		position:'absolute',
		'z-index' : 1,
		display : 'inline-block',
		// border : 'solid 4px #eaeaea',
		'border-radius' : '100px',
		height : 8,
		width : 8,
		adj : 0 ,
		opacity : 0.8
	}

	var cube = {
		init : function(){
			$('body')
				.wrapInner('<div style="position:relative;z-index:2"></div>')
				.append('<div style="position:fixed;top:0;left:0;z-index:1" id="cube-area"></div>');

			$('#cube-area').css({
				height : settings.windowHeight,
				width : settings.windowWidth
			});

			styleInit.adj = styleFor['border-width'] + styleFor['width'];
		},
		add : function(){
			var initX = cube.getRandomX();
			var initY = cube.getRandomY();

			var endX = cube.getRandomX();
			var endY = cube.getRandomY();

			styleFor.left = endX;
			styleFor.top = endY;

			var colorcode = Math.floor(Math.random() * 0xFFFFFF).toString(16);

			$('#cube-area').append($('<div class="block" />')
				.css(styleInit) // end init
				.css({
					top : initY,
					left : initX,
					// background : '#' + colorcode
					border : 'solid 4px #' + colorcode
				})
				.animate(styleFor,{
						easing : 'linear',
						duration : settings.dur,
						complete : function(){
							$(this).fadeOut(300,function(){
								$(this).remove();
							});
						}
					}
				)
			);
		},
		getRandomX : function(){
			return Math.floor( Math.random() * settings.windowWidth - styleInit.adj);
		},
		getRandomY : function(){
			return Math.floor( Math.random() * settings.windowHeight );
		}
	}


	// execute
	cube.init();
	setInterval(function(){
		cube.add();
	},settings.interval);

}