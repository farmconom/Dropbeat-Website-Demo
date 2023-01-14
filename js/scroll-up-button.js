// on top every re fresh
$(document).ready(function(){
  $(window).scrollTop(0);
});

const topBtn = document.querySelector(".top");

window.addEventListener('scroll', function() {
    if (window.scrollY < 650) {
      topBtn.classList.add('hide-arrow');
    } else if (window.scrollY > 580) {
      topBtn.classList.remove('hide-arrow');
    }
  });

  $(function() {
    $('.top').click (function() {
      $('html, body').animate({scrollTop: $('section.home').offset().top }, 'slow');
      return false;
    });
  });


  function refreshPage() {
    window.location.reload();
    window.scrollTo(0, 0);
  }
  
  
  
  