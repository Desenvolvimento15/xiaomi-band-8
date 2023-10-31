$('.galeria').slick({
  dots: false,
  arrows: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
       
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
   
      }
    },
    

  ]
});