// owl-carousel 2
$(document).ready(function(){
  $(".testimonial").owlCarousel({
  loop:false,
  items:3,
  margin:10,
  dots:true,
  responsive:{
    0:{
        items:1,
    },
    600:{
        items:2,
    },
    1000:{
        items:3,
    }
  }
  });
});

// owl-carousel 1
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    smartSpeed:1500,
    nav:true,  
    center:true,
    items:5,
    margin:20,
    responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:5,
      }
    }
    });
  });
  
  // beforeAfter
  $(function(){
    $('.beforeAfter').beforeAfter({
      clickMove:true,
    });
  });

  // counterup
  $('.counter').counterUp({
    delay: 40,
    time: 1000,
  });


  AOS.init({
    duration: 800,
  });


  
    