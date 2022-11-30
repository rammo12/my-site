// Pre Loader Start **/
function preloader() {
    $('#preloader').delay(1000).fadeOut();
};

$(window).on('load', function () {
    preloader(),
    wowanimation();
});
// Pre Loader End **/

/* main slider 3-banner */
// main-slider
$('.ontime-project-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
/*== /main slider 3-banner ==*/

/*== TOP RATED PRODUCTS carousel ==*/
// owl carasoul slide top rated ===//
$('.project-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    responsive:{
    0:{
    items: 1
    },
    500:{
    items: 2
    },
    767:{
    items:2
    },
    991:{
    items:4
    },
    1000:{
    items:6
    }
    }
})
// owl carasoul slide top rated ===//
/*== /TOP RATED PRODUCTS carousel ==*/

/*== BRAND & CLIENTS start ==*/
// owl carasoul slide BRAND & CLIENTS ===//
$('.brand-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:false,
    responsive:{
    0:{
    items: 1
    },
    500:{
    items: 2
    },
    767:{
    items:2
    },
    991:{
    items:3
    },
    1000:{
    items:6
    }
    }
})
/*== BRAND & CLIENTS end ==*/
// owl carasoul slide BRAND & CLIENTS ===//

// img carasoul slide for blog page ===//
$('.img-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    responsive:{
    0:{
    items: 1
    },
    500:{
    items: 1
    },
    767:{
    items: 1
    },
    991:{
    items: 1
    },
    1000:{
    items: 1
    }
    }
})
// img carasoul slide for blog page ===//

/*== RELATED PRODUCTS carousel product.html ==*/
// owl carasoul slide top rated ===//
$('.related-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    responsive:{
    0:{
    items: 1
    },
    500:{
    items: 2
    },
    767:{
    items:2
    },
    991:{
    items:4
    },
    1000:{
    items:4
    }
    }
})
// owl carasoul slide top rated ===//
/*== /RELATED PRODUCTS carousel ==*/
