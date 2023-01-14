//   train
  $(function() {
    $('.btn-train').click (function() {
      $('html, body').animate({scrollTop: $('section.ballet').offset().top - 100}, 'slow');
      if (window.innerWidth < 762) {
        inactiveHam();
      }
      return false;
    });
  });

//   classes
$(function() {
  $('.btn-class').click (function() {
    $('html, body').animate({scrollTop: $('section.classes').offset().top - 100}, 'slow');
    if (window.innerWidth < 762) {
        inactiveHam();
      }
    return false;
  });
});

//   shows
$(function() {
    $('.btn-shows').click (function() {
      $('html, body').animate({scrollTop: $('section.opening').offset().top - 100}, 'slow');
      if (window.innerWidth < 762) {
        inactiveHam();
      }
      return false;
    });
  });

  //   shortcode
$(function() {
    $('.btn-short').click (function() {
      $('html, body').animate({scrollTop: $('section.shortcode').offset().top - 100}, 'slow');
      if (window.innerWidth < 762) {
        inactiveHam();
      }
      return false;
    });
  });

    //   contact
$(function() {
    $('.btn-contact').click (function() {
      $('html, body').animate({scrollTop: $('section.map').offset().top - 100}, 'slow');
      if (window.innerWidth < 762) {
        inactiveHam();
      }
      return false;
    });
  });