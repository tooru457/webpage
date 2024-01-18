$(".slider").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "30px",
    dots: true,
    fade: true,
    slidesToShow: 1,
    speed: 400,

});

//トグルメニュー
$(function(){
    $('button').click(function(){
          $('.header-nav').slideToggle('200');
        });
});

