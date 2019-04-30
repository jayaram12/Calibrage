(function($) {
    "use strict";

    //when dom is ready
    $(document).ready(function() {

        // on scroll Navbar Fixed and back to top show
        $(window).on('scroll', function() {
            if($(window).width() > 600){
                if ($(window).scrollTop() > 600) {
                    $('#header').addClass('navbar-fixed-top');
                    $('#back-to-top').addClass('reveal');
                } else {
                    $('#header').removeClass('navbar-fixed-top');
                    $('#back-to-top').removeClass('reveal');
                }
            }
        });


        // Start Back to Top
        $('#back-to-top').on('click', function() {
            $("html, body").animate({scrollTop: 0}, 1000);
            return false;
        });


        // Start Portfolio Section
        $(window).on('load', function() {

            //Portfolio Start
            var $container = $('.portfolio-box');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            $('.filter a').on('click', function() {
                $('.filter .active').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $('.portfolio-box').isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
            //Portfolio End
        });


        //Owl Carousel-- Testimonial
        $(".testimonial-carousel").owlCarousel({
            pagination: false,
            navigation: false,
            items : 1,
            itemsDesktop : [1000,1],
            itemsDesktopSmall : [900,1],
            itemsTablet: [767,1],
            slideSpeed: 2500,
            stopOnHover: true,
            autoPlay: true,
            singleItem: false,
            navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
        });
        //Tooltip
        $('[data-toggle="tooltip"]').tooltip()

        //video background
        try {
            jQuery(".player").mb_YTPlayer();
        } catch (err) {}

        //WOW js
        new WOW().init();


    });
    //dom ready end







})(jQuery);

			$(document).ready(function(){
				$('#iview').iView({
					pauseTime: 7000,
					pauseOnHover: true,
					directionNavHoverOpacity: 0,
					timer: "Bar",
					timerDiameter: "50%",
					timerPadding: 0,
					timerStroke: 7,
					timerBarStroke: 0,
					timerColor: "#FFF",
					timerPosition: "bottom-right"
				});


			});
