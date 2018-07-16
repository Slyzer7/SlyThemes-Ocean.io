/*
Template Name: Ocean  -  One Page Responsive
Author: SlyThemes

Index Of JS:

    :: 1. Page-Loader
       -1.1 Button to go back to Top
       -1.2 Contact-Form 
    :: 2. Isotope
    :: 3. WOW
    :: 4. Counter-Up
    :: 5. Filter
    :: 6. Smooth-Page-Scroll
    :: 7. Nav scrolling
    :: 8. Smooth Button-Scroll
    :: 9. Progress-Bar
    :: 10. Tabs
    :: 11. Magnific-Popup JS
    :: 12. Owl-Carousel JS
    :: 13. Stellar
    :: 14. Map
    :: 15. Animation-Code
        
*/
"use strict";
/*jslint browser:true */

/* >>>>>>>>> Page-Loader >>>>>>>>>>*/
$(window).on("load", function() {

    // Page Loader
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    var page_loader = $('#page_loader');

    if (!isMobile){
        setTimeout(function() {
            page_loader.addClass('preloaded');
        }, 800);
        setTimeout(function() {
            page_loader.remove();
        }, 2000);

    }
    else{
        page_loader.remove();
    }

    /* >>>>>>>>>Button to go back to the top >>>>>>>>>>>>*/
    var wind = $(window);

    var main_height = $(".main-height").outerHeight();

    $(".sub-height").outerHeight(main_height);

    var owl = $('.owl-carousel');

    // scrollIt
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',         // the easing function for animation
      scrollTime: 850,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -60            // offste (in px) for fixed top navigation
    });


    // button scroll to top
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            button_top = $(".button-top");

        if(bodyScroll > 700){

            button_top.addClass("button-show");

        }else{

            button_top.removeClass("button-show");
        }
    });

    // Push Menus
    var $menuLeft = $(".pushmenu-left");
    var $menuRight = $(".pushmenu-right");
    var $toggleleft = $(".menu_bars.left");
    var $toggleright = $(".menu_bars.right");
    $toggleright.on("click", function() {
        $('.menu_bars').toggleClass("active");
        $menuRight.toggleClass("pushmenu-open");
        $("body").toggleClass("pushmenu-push-toLeft");
        $(".navbar").toggleClass("navbar-right_open");
        return false;
    });

    $('.push_nav li a').on('click', function(){
        $toggleright.toggleClass("active");
        $menuRight.toggleClass("pushmenu-open");
        $("body").toggleClass("pushmenu-push-toLeft");
        $(".navbar").toggleClass("navbar-right_open");
        return true;
    });

    /* >>>>>>>>> Contact-Form >>>>>>>>>>*/
    $('#contact-form').validator();

    $('#contact-form').on('submit', function(e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function(data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });

    /* >>>>>>>>> Isotope >>>>>>>>>>*/
    $('.gallery').isotope({
        itemSelector: '.item-img'
    }); 

    /* >>>>>>>>> WOW >>>>>>>>>>*/
    if ($(window).width() > 767) {
        new WOW().init();
    }

    /* >>>>>>>>> counterUp >>>>>>>>>>*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    }); 

    var $gallery = $('.gallery').isotope({});

    /* >>>>>>>>> Filter >>>>>>>>>>*/
    $('.filtering').on('click', 'span', function() {
        var filterValue = $(this).attr('data-filter');
        $gallery.isotope({
            filter: filterValue
        });
    });

    $('.filtering').on('click', 'span', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

});


$(function() {
    "use strict";

    var wind = $(window);

    function prealoaderSetup() {
        if (!isMobile) {
            setTimeout(function() {
                preloader.addClass('preloaded');
            }, 800);
            setTimeout(function() {
                preloader.remove();
            }, 2000);

        } else {
            preloader.remove();
        }
    }

    /* >>>>>>>>> Smooth-Page-Scroll >>>>>>>>>>*/
    $('.navbar-nav').singlePageNav({
        speed: 1000,
        currentClass: 'active',
        offset: 55
    });

    $("body").scrollspy({
        target: ".navbar-collapse",
        offset: 70
    });

    /* >>>>>>>>> Nav scrolling >>>>>>>>>>*/
    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar-fixed-top");

        if (bodyScroll > 70) {

            navbar.addClass("nav-scroll");

        } else {

            navbar.removeClass("nav-scroll");
        }
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 60) {
            $('.navbar').addClass("shrink");
        }
        else {
            $('.navbar').removeClass("shrink");
            $('.active-navbar .navbar').addClass("shrink");
        }
    });

    // fixing nav on top on scrolliing
    var $fixednav = $(".bottom_navbar .navbar");
    $(window).on("scroll",function () {
        var $heightcalc = $(window).height() - $fixednav.height();
        if($(this).scrollTop() > $heightcalc){
            $fixednav.addClass("navbar-fixed-top");
            $fixednav.addClass("bottom_auto");
        }else {
            $fixednav.removeClass("navbar-fixed-top");
            $fixednav.removeClass("bottom_auto");
        }
    });

    $(".scroll").on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top}, 1000);
    });

    //More scroll nav
    $(window).on('scroll',function () {
        if($(this).scrollTop()  > 200){
            $('.special-nav').addClass("fixing_navbar_after_scrolling");
            $('.special-nav').removeClass("special_nav_styling");
        }
        else {
            $('.special-nav').removeClass("fixing_navbar_after_scrolling");
            $('.special-nav').addClass("special_nav_styling");
        }
    })


    /* >>>>>>>>> Smooth Button-Scroll >>>>>>>>>>*/
    $('.button-scroll').on('click', function() {

        var scrollTo = $(this).attr('data-scrollTo');

        $('body, html').animate({

            "scrollTop": $('#' + scrollTo).offset().top - 60
        }, 1000);

    });


    /* >>>>>>>>> Progress-Bar >>>>>>>>>>*/
    wind.on('scroll', function() {
        $(".skill_progression span").each(function() {
            var bottom_of_object =
                $(this).offset().top + $(this).outerHeight();
            var bottom_of_window =
                $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if (bottom_of_window > bottom_of_object) {
                $(this).css({
                    width: myVal
                });
            }
        });
    });


    /* >>>>>>>>> Tabs >>>>>>>>>>*/
    $(".services").on("click", "li", function() {

        var myID = $(this).attr("id");

        $(this).addClass("active").siblings().removeClass("active");

        $(".services .item").hide();

        $("#" + myID + "-content").fadeIn();

    });


    /* >>>>>>>>> Magnific-Popup JS >>>>>>>>>>*/
    $('.portfolio .link').magnificPopup({
        delegate: 'a',
        type: 'image'
    });


    /* >>>>>>>>> Owl-Carousel JS >>>>>>>>>>*/
    $('.demo4 .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        mouseDrag: false,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ['<span> <i class="fa fa-angle-left" aria-hidden="true"></i> </span>',
            '<span> <i class="fa fa-angle-right" aria-hidden="true"></i> </span>'
        ],
        smartSpeed: 500
    });

    $('.Reviews .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        mouseDrag: false,
        autoplay: true,
        smartSpeed: 500
    });

    $('.Social .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        mouseDrag: false,
        autoplay: true,
        smartSpeed: 500
    });

    /* >>>>>>>>> Stellar >>>>>>>>>>*/
    wind.stellar();




    $(".page_content_client_inner_slider").owlCarousel({
        items: 5,
        loop: true,
        margin: 40,
        autoplay: true,
        autoplayTimeout: 2300,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
                margin: 20
            },
            500: {
                items: 4,
                margin: 30
            },
            1100: {
                items: 5,
                margin: 40
            }
        }
    });

    /* >>>>>>>>> Map >>>>>>>>>>*/
    $(".map-toggle").on('click', function() {
        $(".map-loc").slideToggle(10);
        $("span").toggleClass("open");
    });


    /* >>>>>>>>> Animation-Code >>>>>>>>>>*/
    $(window).on('scroll', function() {
        $('.hide-me').each(function(i) {
            var bottom_of_object = $(this).position().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_object) {
                $(this).animate({
                    'opacity': '1'
                }, 780);
            }

        });

    });

    /* >>>>>>>>> Theme Color Panel Functions >>>>>>>>>>*/
    $(".style-option-wrap #style-btn").on("click", function() {
        $(this).parent(".style-option-wrap").toggleClass("open-style");
    });

    /* >>>>>>>>> Theme Color Function >>>>>>>>>>*/
    $(".theme-panel #theme-green").on("click", function() {
        var style = this.id;
        $("body").attr('class', style);
    });

    $('#theme-orange,#theme-navy,#theme-blue,#theme-red,#theme-yellow').on("click", function() {
        var style = this.id;
        $("body").attr('class', style);
    });


});

