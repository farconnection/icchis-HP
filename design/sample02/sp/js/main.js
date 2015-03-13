
// document.write('<base href="http://sxxx317.web.fc2.com/sp/css/');
    // $('#slit').on('click', function ( e ) {
    //         $.fn.custombox( this, {
    //             url : '#modal',
    //             effect: 'blur',
    //             width: $(window).width()-20,
    //             height: $(window).height()-200
    //         });
    //         e.preventDefault();
    // });

//-----------ガイド--------------
$(function() {
    function runEffect() {
      $("#guide").toggle(200);
    };
    // set effect from select menu value
    $( "#guidebutton" ).click(function() {
      runEffect();
      return false;
    });
});

//--------------タブ--------------

// $(function() {
//     $( "#news" ).tabs();
// });

$(function () {

    $('#work').each(function () {

        var $tabList    = $(this).find('.tabs-nav'),
            $tabAnchors = $tabList.find('a'),
            $tabPanels  = $(this).find('.tabs-panel');

        $tabList.on('click', 'a', function (event) {

            event.preventDefault();

            var $this = $(this);

            if ($this.hasClass('active')) {
                return;
            }

            $tabAnchors.removeClass('active');
            $this.addClass('active');

            $tabPanels.hide();
            $($this.attr('href')).show(100);

        });

        $tabAnchors.eq(0).trigger('click');

    });

});


// スライド
$(function () {

    $('#slideshow').each(function () {

        var $slides = $(this).find('img'),
            slideCount = $slides.length,
            currentIndex = 0;

        $slides.eq(currentIndex).fadeIn();
        // $slides.eq(currentIndex).transition({ rotate: '360deg' });

        setInterval(showNextSlide, 5000);

        function showNextSlide () {

            var nextIndex = (currentIndex + 1) % slideCount;

            $slides.eq(currentIndex).fadeOut(3000);
            $slides.eq(nextIndex).fadeIn(3000);
            currentIndex = nextIndex;
        }

    });

});


//------------ホバ------------


//-------------ドラッグ-------------
$(function() {
    $( "#cbox" ).draggable();
  });