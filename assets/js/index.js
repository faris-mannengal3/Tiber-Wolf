$(window).scroll(function(){
  if ($(this).scrollTop() > 120) {
      $('#header-section').addClass('fixed');
  } else {
      $('#header-section').removeClass('fixed');
  }
});

$("#toggle-btn").click(function(){
    $("#nav").toggleClass("show-menu");
  });
 
  var swiper = new Swiper(".heroSwiper", {
    loop: true,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: "#hero-swiper-button-next",
      prevEl: "#hero-swiper-button-prev",
    },
   
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    
  });

  var swiper = new Swiper(".trendingSwiper", {
    pagination: {
      el: "#trending-swiper-pagination",
      dynamicBullets: true,

    },
    loop: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
  });
     
  $(".fa-heart").click(function(){
    $(this).toggleClass("favorate");
  });

  var swiper = new Swiper(".destinationSwiper", {
    
    loop:true,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: "#destinetion-swiper-button-next",
      prevEl: "#destinetion-swiper-button-prev",
    },
    
    breakpoints: {
     
      991: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

    },

  });

  var swiper = new Swiper(".tourGuidSwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop:true,
    navigation: {
      nextEl: "#tour-guid-swiper-button-next",
      prevEl: "#tour-guid-swiper-button-prev",
    },
  
  });