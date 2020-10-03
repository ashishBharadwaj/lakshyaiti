var BsCarousel = function () {
    // Carousel interval
    // $('.carousel').carousel({
    //     interval: 1000
    // });

    // smart height detection for all major screens
    // if (Layout.getViewPort().width > 1600) {
    //     height = $(window).height() - $('.subscribe').outerHeight();  // full height for high resolution
    // } else if (Layout.getViewPort().height > height) {
    //     height = Layout.getViewPort().height;
    // }

    (function( $ ) {
        //Variables on page load 
        var $myCarousel = $('#carouselExampleSlidesOnly'),
            $prev = $myCarousel.find('#slide-prev'),
            $next = $myCarousel.find('#slide-next');
            
        //Initialize carousel 
        $myCarousel.carousel({
            interval: 6000
        });
        $prev.on('click', ()=>{
            $myCarousel.carousel('prev');

        });
        $next.on('click', ()=>{
            $myCarousel.carousel('next');
            
        })        
    })(jQuery);
}();