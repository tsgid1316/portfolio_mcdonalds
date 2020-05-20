// $("nav .gnb ul li").hover(function(){
//     $("nav").find(".sub_nav").stop().fadeToggle(300);
// });

// $(document).on('mouseover', '.gnb ul li', function () {
//     $('.sub_nav').slideDown(200);
// });

// $(document).on('mouseleave', 'div', function () {
//     if (!$(this).hasClass('nav')) {
//         $('.sub_nav').slideUp(200);
//     }
// });

// slide

$(".slide").slick({
  autoplay: true, // 자동 스크롤 사용 여부
  autoplaySpeed: 5000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
});

// nav_slide

$("nav li").hover(function () {
  $("nav").find(".sub_nav").stop().slideToggle(400);
});
