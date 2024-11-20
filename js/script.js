$(".h_submenu").hide();
$(".h_menu>li").mouseover(function(){
  $(this).children(".h_submenu").stop().slideDown();
})
$(".h_menu>li").mouseout(function(){
  $(this).children(".h_submenu").stop().slideUp();
})

$(".m_nav").hide();
$(".m_btn").click(function(){
  $(".m_nav").show();
  $(".m_menu_wrap").animate({right: "0"}, 500);
})
$(".m_close").click(function(){
  $(".m_nav").fadeOut(500);
  $(".m_menu_wrap").animate({right: "-400px"}, 500);
})
$(".m_nav_bg").click(function(){
  $(".m_nav").fadeOut(500);
  $(".m_menu_wrap").animate({right: "-400px"}, 500);
})

$(".m_submenu").hide();
$(".m_menu>li").click(function(){
  $(this).children(".m_submenu").slideToggle(500);
  $(this).siblings().children(".m_submenu").slideUp(500);
})

var swiper = new Swiper(".main_swiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

AOS.init();