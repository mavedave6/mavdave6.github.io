$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 20,
        randomStart: true,
        moveSlides: 1,
        captions: true,
        speed: 3000,
        pager: true,
        pagerType: 'short',
        pagerSelector: 'id_pager'
    });
});
