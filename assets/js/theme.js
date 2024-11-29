// -----------------------------

//   JS INDEX
/* =================== */
/*  
   
    ## Preloader
    ## sticky
    ## Counter Up
    ## Smooth scroll
    ## Owl carousel
    ## Wow
*/
// -----------------------------


(function($) {
    "use strict";



    /*---------------------
    preloader
    --------------------- */

    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() { $(this).remove(); });
    });


    /*-----------------
    sticky
    -----------------*/
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 85) {
            $('header').addClass('navbar-fixed-top');
        } else {
            $('header').removeClass('navbar-fixed-top');
        }
    });


    /*------------------------------
         counter
    ------------------------------ */
    $('.counter-up').counterUp();


    /*---------------------
    smooth scroll
    --------------------- */
    $('.smoothscroll').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top - 80
        }, 1200);
    });



    /*---------------------
    owl carousel
    --------------------- */
    // Screenshot Carousel
    
    function screenshots_carousel() {
        var total = $('.screenshots-carousel .owl-stage .owl-item.active').length;

        $('.screenshots-carousel .owl-stage .owl-item').removeClass('firstActiveItem lastActiveItem');

        $('.screenshots-carousel .owl-stage .owl-item.active').each(function(index) {
            if (index === 0) {
                // this is the first one and this is for resize
                $(this).addClass('firstActiveItem');
            }
            if (index === total - 1 && total > 1) {
                // this is the last one
                $(this).addClass('lastActiveItem');
            }
        });
    }

    
    var carousel = $('.screenshots-carousel').owlCarousel({
        items: 5,
        loop: true,
        responsiveClass: true,
        nav: true,
        margin: 5,
        autoplay: false,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        center: true,
        navText: ['<span class="ti-angle-left"></span>', '<span class="ti-angle-right"></span>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3
            },
            992: {
                items: 5
            },
            1200: {
                items: 5
            }
        },
        onInitialized: function() {
            screenshots_carousel();
        }
    });
    carousel.on('translated.owl.carousel', function(event) {
        screenshots_carousel();
    });
    
    // Screenshot Carousel End

    // Customer Reviews Carousel
    function c_review_carousel() {
        var owl = $(".c-review-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 5,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                992: {
                    items: 3
                }
            }
        });
    }
    c_review_carousel();
    // Customer Reviews Carousel End

    // Customer Reviews Carousel 2
    function c2_review_carousel() {
        var owl = $(".c2-review-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 5,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 1
                }
            }
        });
    }
    c2_review_carousel();
    // Customer Reviews Carousel End

    // Customer Reviews Carousel 3
    function c3_review_carousel() {
        var owl = $(".c3-review-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 5,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 1
                }
            }
        });
    }
    c3_review_carousel();
    // Customer Reviews Carousel End


    /*---------------------
    Wow
    --------------------- */
    var wowSel = 'wow';
    
    var wow = new WOW({
        boxClass: wowSel,
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        callback: function(box) {
            
        },
        scrollContainer: null
    });
    wow.init();

    
    

}(jQuery));



 