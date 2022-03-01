//=============================slider part start=======================
$(function(){
    $('.banar-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
      });
    $('.about-items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
        ]
      });
      $('.up').counterUp({
        delay: 10,
        time: 2500
    });
    $('.comment-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      pauseOnHover: true,
      prevArrow: ".left",
      nextArrow: ".right",
    });
    $('.team').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
      ]
    });





    $(window).scroll(function(){
      var top = $(this) .scrollTop()
      if(top > 300){
        $(".navbar") .addClass("sticky-manu")
      }
      else{
        $(".navbar") .removeClass("sticky-manu")
      }
      if(top >300){
        $(".back-to-top") .fadeIn(300)
      }
      else{
        $(".back-to-top") .fadeOut(300)
      }
    })

    $(".back-to-top") .click(function(){
      $("html,body") .animate({scrollTop: 0},1000)
    })

    new VenoBox({
      selector: '.my-image-links',
      numeration: true,
      infinigall: true,
      share: true,
      spinner: 'wander'
  });


  var scrollLink = $('.scroll-link');
  $(scrollLink).on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - 40
    }, 1000);
  });
  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    scrollLink.each(function () {
      var sectionhead = $(this.hash).offset().top - 100;
      if (scrollTop >= sectionhead) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });



 //Catalog-slider-3d
var rev = $('.three-D-slider');
rev.on('init', function (event, slick, currentSlide) {
  var
    cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    next2 = cur.next().next(),
    prev = cur.prev(),
    prev2 = cur.prev().prev();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  prev2.addClass('slick-sprev2');
  next2.addClass('slick-snext2');
  cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
  slick.$prev = prev;
  slick.$next = next;
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  console.log('beforeChange');
  var
    cur = $(slick.$slides[nextSlide]);
  console.log(slick.$prev, slick.$next);
  slick.$prev.removeClass('slick-sprev');
  slick.$next.removeClass('slick-snext');
  slick.$prev.prev().removeClass('slick-sprev2');
  slick.$next.next().removeClass('slick-snext2');
  next = cur.next(),
    prev = cur.prev();
  //prev2.prev().prev();
  //next2.next().next();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  prev.prev().addClass('slick-sprev2');
  next.next().addClass('slick-snext2');
  slick.$prev = prev;
  slick.$next = next;
  cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
});

rev.slick({
  speed: 2000,
  arrows: false,
  dots: false,
  autoplay: true,
  focusOnSelect: true,
  centerMode: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
  infinite: true,
});


})
//=============================slider part end=======================