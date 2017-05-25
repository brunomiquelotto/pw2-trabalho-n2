$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
    autoHeight: false,
    autoHeightClass: 'owl-height',
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