$(document).ready(function() {

  $( ".arrow" ).click(function() {

  if ($('.footerContainer').hasClass('open')) {
      $('.footerContainer').removeClass('open');
      $('.slide').removeClass('open');

  } else {
      $('.footerContainer').addClass('open');
      $('.slide').addClass('open');
  }

  });

  var trigger = $('.hamburger'),
       overlay = $('.overlay'),
      isClosed = false;

     trigger.click(function () {
       hamburger_cross();
     });

     function hamburger_cross() {

       if (isClosed == true) {
         overlay.hide();
         trigger.removeClass('is-open');
         trigger.addClass('is-closed');
         isClosed = false;
       } else {
         overlay.show();
         trigger.removeClass('is-closed');
         trigger.addClass('is-open');
         isClosed = true;
       }
   }

   $('[data-toggle="offcanvas"]').click(function () {
         $('#wrapper').toggleClass('toggled');
   });
   
});
