$(window).on( "load", init);

function init(){
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
        if ( widthDisp >= 768 ){
             $('.drop-nav').slideUp(20);
             count = false;
        }
    });
    
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
    
    // parallax
    $(window).bind('scroll',function(e){
        parallaxScroll();
    });
    function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        // console.log(scrolled);
        $('.welcome').css('top',(430-(scrolled*1.25))+'px');
    }
    
    /**
    * Owl Carousel
    */
    $(function() {
        var owl = jQuery(".owl-carousel");
        owl.owlCarousel({
            loop:true,
            margin:10,
            items:1,
            autoplay:true,
            autoplayTimeout:6000,
            dots : true,
            nav:true,
            mouseDrag: true,
            touchDrag: true,
            navText: [
                "<span class='fa fa-angle-left fa-5x'></span>",
                "<span class='fa fa-angle-right fa-5x'></span>"
                            ]
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
        $(".owl-dot").click(function(){
            owl.trigger("stop.owl.autoplay");
            owl.trigger("play.owl.autoplay");
        });
        $(".owl-next").click(function(){
            owl.trigger("stop.owl.autoplay");
            owl.trigger("play.owl.autoplay");
        });
        $(".owl-prev").click(function(){
            owl.trigger("stop.owl.autoplay");
            owl.trigger("play.owl.autoplay");
        });
        $(".owl-item").on("touchstart mousedown", function(e) {
            // Prevent carousel swipe
            //e.stopPropagation();
            console.log("свайп");
            owl.trigger("stop.owl.autoplay");
            owl.trigger("play.owl.autoplay");
        })
    });
};
