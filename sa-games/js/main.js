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


});
