$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    dots:false,
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,

    autoHeight: false,
    autoHeightClass: 'owl-height',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})