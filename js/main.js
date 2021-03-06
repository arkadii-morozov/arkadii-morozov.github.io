$(window).on( "load", init);

function init(){
    var height = $(".welcome").css("top");  // for paralax
    var count = false;
    $('.menu__btn').on('click', function(){
        count = !count;
        if(count){
            $('.drop-nav').slideDown(100);   
        } else{
            $('.drop-nav').slideUp(100);
        }
    });
    //
    $(document).on('click', function(e){
        let target = e.target;
        let parentEl = target.parentElement.className;
        let gamburger = false;
        let dropNav = false;
        if (parentEl && parentEl=="menu__btn"){
            gamburger = true;
        }
        if (parentEl && parentEl=="drop-nav") {
            dropNav = true;
        }
            
        if (target.className != "menu__btn" &&
            gamburger == false &&
            target.className != "drop-nav" &&
            dropNav == false &&
            count ){
            count = !count;
            $('.drop-nav').slideUp(100);
        }
    });

    $(window).resize(function() {
        var widthDisp = $(window).width()+16;
        $('.welcome').css('top','calc(50% - 80px)');
        if ( widthDisp >= 768 ){
             $('.drop-nav').slideUp(20);
             count = false;
        }
    });

    /* === scrolling === */
    $(window).scroll(function(){
        if ($(this).scrollTop() > 150) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').on('click', function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
    $('.scrollingPortf').on('click', () => {
        $("html, body").animate({ scrollTop: $(window).height() }, 600);
        return false;
    });
    $('.scrollingCont').on('click', () => {
        $("html, body").animate({ scrollTop: $(window).height()*10 }, 600);
        return false;
    });
    /* === end scrolling === */

    // parallax    
    $(window).bind('scroll',function(e){
        parallaxScroll();
    });
    function parallaxScroll(){
        var scrolled = $(window).scrollTop();        
        if (height){        
            var top = height.substring(0, (height.length - 2));
            $('.welcome').css('top',(top-(scrolled*1.5))+'px');
        }        
    }

    /**
    * Owl Carousel
    */
    let pageUrl = window.location.href;
    let initOwlCarusel = pageUrl.indexOf('about-me.html') + 1;
    if(initOwlCarusel) {

        $(function () {
            var owl = jQuery(".owl-carousel");
            owl.owlCarousel({
                loop: true,
                margin: 10,
                items: 1,
                autoplay: true,
                autoplayTimeout: 6000,
                dots: true,
                nav: false,
                MouseDrag: true,
                touchDrag: true,
                navContainer: [$(".nav-panel")]
                //             navText: [
                //                 "<span class='fa fa-angle-left fa-5x'></span>",
                //                 "<span class='fa fa-angle-right fa-5x'></span>"
                //                             ]
                //             responsive:{
                //                 0:{
                //                     items:1
                //                 },
                //                 600:{
                //                     items:3
                //                 },
                //                 1000:{
                //                     items:5
                //                 }
                //             }
            });
            $(".owl-dot").click(function () {
                owl.trigger("stop.owl.autoplay");
                owl.trigger("play.owl.autoplay");
            });
            // Go to the next item
            $('.owl-button-prev').click(function () {
                owl.trigger("stop.owl.autoplay");
                owl.trigger("play.owl.autoplay");
                owl.trigger('prev.owl.carousel');
            })
            // Go to the previous item
            $('.owl-button-next').click(function () {
                // With optional speed parameter
                // Parameters has to be in square bracket '[]'
                owl.trigger("stop.owl.autoplay");
                owl.trigger("play.owl.autoplay");
                owl.trigger('next.owl.carousel');
            })
            $(".owl-carousel.owl-drag .owl-item").on("touchstart mousedown", function (e) {
                // Prevent carousel swipe
                //e.stopPropagation();
                owl.trigger("stop.owl.autoplay");
                owl.trigger("play.owl.autoplay");
            })
        });//<- end owl function
    }
};
