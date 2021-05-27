jQuery(document).ready(function($) {

    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 600);
        return false;
    })
    
    $('.rating-carousel').owlCarousel({
        loop: true,
        items: 2,
        autoplay:true,
        autoplayHoverPause:false,
        dots: false,
        nav: true,
        lazyLoad:true,
        responsive : {
                0 : {
                  items: 1,
                  nav: true
              },
              480 : {
                  items: 1,
                  nav: true
              },
              768 : {
                  items: 2,
                  nav: true
              },
              1280 : {
                  items: 2,
                  nav: true
              },
              1920 : {
                  items: 2,
                  nav: true
              },
        }
    });


    $(window).scroll(function() {
        var scroll = $(window).scrollTop();


        if (scroll >= 650) {
          $(".scroll-header").addClass("scroll");
        } else {
            $(".scroll-header").removeClass("scroll");
        }
    }); //missing );


});
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

