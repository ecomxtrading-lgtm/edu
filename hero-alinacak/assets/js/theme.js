(function ($) {
    'use strict';

    // Mobile Menu
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
        meanMenuOpen: "<span></span> <span></span> <span></span>",
        onePage: false,
    });

    //Header Search
    if($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function() {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function() {
            $('body').removeClass('search-active');
        });
    }

    // sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });

     // Loder  //
     $(function () {
        $('body').addClass('loaded');
    });
//buddy all button
$(function() {  
    $('.animate_buton')
      .on('mouseenter', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
              $(this).find('span').css({top:relY, left:relX})
      })
      .on('mouseout', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
          $(this).find('span').css({top:relY, left:relX})
      });
  });





    // brand list Active
    $('.brand_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        margin: 30,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 5
            },
            1920: {
                items: 5
            }
        }
    })
     // case study Active
     $('.case_study').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        margin: 30,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 4
            }
        }
    })

    // testimonial Active
     $('.testimonial').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        margin: 30,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })
     // testimonial Active
     $('.testi_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        margin: 30,
        nav: true,
        navText: ["<i class='flaticon flaticon-left-arrow''></i>", "<i class='flaticon flaticon-right-arrow''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })
    // testimonial Active
    $('.testi_list2').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        margin: 30,
        nav: false,
        navText: ["<i class='flaticon flaticon-left-arrow''></i>", "<i class='flaticon flaticon-right-arrow''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    })
    // testimonial Active
    $('.testi_list3').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        margin: 30,
        nav: true,
        navText: ["<i class='flaticon flaticon-left-arrow''></i>", "<i class='flaticon flaticon-right-arrow''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })
    // Blog list Active
    $('.blog_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        margin: 30,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })
     // Service list Active
     $('.service_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        margin: 30,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })
    // Service list Active
    $('.service_list2').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        margin: 30,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })
    // Slider list Active
    $('.slider_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        margin: 30,
        nav: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        navText: ["<i class='bi bi-chevron-left''></i>", "<i class='bi bi-chevron-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })
    // brand list Active
    $('.brand_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        margin: 30,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 5
            },
            1920: {
                items: 5
            }
        }
    })
    // case study Active
    $('.case_study2').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        margin: 0,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 4
            },
            1920: {
                items: 5
            }
        }
    })

     // Testi list 4 Active
     $('.testi_list4').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        margin: 30,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1920: {
                items: 3
            }
        }
    })
    // team list Active
    $('.team_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        margin: 30,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })
    // case study Active
    $('.case_study3').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        margin: 30,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })
    // Blog Active
    $('.blog_list2').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        margin: 30,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })

  

    /*---------------------
    WOW active js 
    --------------------- */
    new WOW().init();

    /* Portfolio Isotope  */
    $('.image_load').imagesLoaded(function () {

        if ($.fn.isotope) {

            var $portfolio = $('.image_load');

            $portfolio.isotope({

                itemSelector: '.grid-item',

                filter: '*',

                resizesContainer: true,

                layoutMode: 'masonry',

                transitionDuration: '0.8s'

            });
            $('.menu-filtering li').on('click', function () {

                $('.menu-filtering li').removeClass('current_menu_item');

                $(this).addClass('current_menu_item');

                var selector = $(this).attr('data-filter');

                $portfolio.isotope({

                    filter: selector,

                });

            });

        };

    });

    // Venubox
    $('.venobox').venobox({
        numeratio: true,
        infinigall: true

    });
    


    jQuery(document).ready(function ($) {
        "use strict";

        // =======< accordion js >========
        $(".accordion > li:eq(0) a").addClass("active").next().slideDown();
        $('.accordion a').on('click', function (j) {
            var dropDown = $(this).closest("li").find("p");

            $(this).closest(".accordion").find("p").not(dropDown).slideUp();

            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
            } else {
                $(this).closest(".accordion").find("a.active").removeClass("active");
                $(this).addClass("active");
            }

            dropDown.stop(false, true).slideToggle();

            j.preventDefault();
        });


         //=====< barfiller script >====
         $('#bar1').barfiller({
            duration: 7000
        });
        $('#bar2').barfiller({
            duration: 7000
        });

        //======< Custom Tab >======
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

        $(".tab ul.tabs li a").on("click", function (g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();

            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');

            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

            g.preventDefault();
        });

    });

     // Team 
    $(".team-share").click(function(){
        $(this).siblings(".team-social-icon").toggleClass('active');
    });

    


    if($('.prgoress_indicator path').length){
        var progressPath = document.querySelector('.prgoress_indicator path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var progress = pathLength - (scroll * pathLength / height);
          progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).on('scroll', updateProgress);
        var offset = 250;
        var duration = 550;
        jQuery(window).on('scroll', function () {
          if (jQuery(this).scrollTop() > offset) {
            jQuery('.prgoress_indicator').addClass('active-progress');
          } else {
            jQuery('.prgoress_indicator').removeClass('active-progress');
          }
        });
        jQuery('.prgoress_indicator').on('click', function (event) {
          event.preventDefault();
          jQuery('html, body').animate({ scrollTop: 0 }, duration);
          return false;
        });
    }

     /*------------- preloader js --------------*/
     var percentage = 0;
     var LoadingCounter = setInterval(function() {
         if (percentage <= 100) {
             // $('#loading-screen ').css('opacity', (100 - percentage));
             $("#loading-screen .loading-counter").text(percentage + "%");
             $("#loading-screen .bar").css("width", (100 - percentage) / 2 + "%");
             $("#loading-screen .progress-line").css(
                 "transform",
                 "scale(" + percentage / 100 + ")"
             );
             percentage++;
         } else {
             $("#loading-screen").fadeOut(500);
             setTimeout(() => {
                 $("#loading-screen").remove();
             }, 500);
             clearInterval(LoadingCounter);
         }
     }, 10);
     /*-----------------  End Percentage loading screen interactions -----------------  */

    // Nav Sidebar
    "use strict";
    jQuery(document).ready(function (o) {
        0 < o(".offset-side-bar").length &&
            o(".offset-side-bar").on("click", function (e) {
                e.preventDefault(), e.stopPropagation(), o(".cart-group").addClass("isActive");
            }),
            0 < o(".close-side-widget").length &&
                o(".close-side-widget").on("click", function (e) {
                    e.preventDefault(), o(".cart-group").removeClass("isActive");
                }),
            0 < o(".navSidebar-button").length &&
                o(".navSidebar-button").on("click", function (e) {
                    e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
                }),
            0 < o(".close-side-widget").length &&
                o(".close-side-widget").on("click", function (e) {
                    e.preventDefault(), o(".info-group").removeClass("isActive");
                }),
            o("body").on("click", function (e) {
                o(".info-group").removeClass("isActive"), o(".cart-group").removeClass("isActive");
            }),
            o(".xs-sidebar-widget").on("click", function (e) {
                e.stopPropagation();
            }),
            0 < o(".xs-modal-popup").length &&
                o(".xs-modal-popup").magnificPopup({
                    type: "inline",
                    fixedContentPos: !2,
                    fixedBgPos: !0,
                    overflowY: "auto",
                    closeBtnInside: !2,
                    callbacks: {
                        beforeOpen: function () {
                            this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
                        },
                    },
                });
    });



})(jQuery);


// // Dark Lite

// const button = document.querySelector(".dark-light");
// (function () {
//     let onpageLoad = localStorage.getItem("theme") || "";
//     let element = document.body;
//     element.classList.add(onpageLoad);
//     document.getElementById("theme").textContent =
//         localStorage.getItem("theme") || "light";
// })();

// function themeToggle() {
//     let element = document.body;
//     element.classList.toggle("light-theme");

//     let theme = localStorage.getItem("theme");
//     if (theme && theme === "light-theme") {
//         localStorage.setItem("theme", "");
//     } else {
//         localStorage.setItem("theme", "light-theme");
//     }
// }
