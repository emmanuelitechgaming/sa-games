$(document).ready(function() {

  $( "#langpick" ).click(function() {

    if ($('.asd').hasClass('modal-open')) {
        alert();


    }
});
  var setElementHeight = function () {
      var height = $(window).height();

      $('.autoheight').css('min-height', (height - 50));
  };

  $(window).on("resize", function () {
      setElementHeight();
  }).resize();

  $( ".arrow" ).click(function() {

  if ($('.footerContainer').hasClass('open')) {
      $('.footerContainer').removeClass('open');
      $('.slide').removeClass('open');
      $('.slide').removeClass('slider');

  } else {
      $('.footerContainer').addClass('open');
      $('.slide').addClass('open');
      $('.slide').addClass('slider');
  }

  });



    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }

   $('[data-toggle="offcanvas"]').click(function () {
         $('#wrapper').toggleClass('toggled');
   });

     $( ".nav-cs" ).click(function() {

       if ($(this).hasClass('opencs')) {
       $("#mySidenav").css("width", "0%");
       $(this).removeClass('opencs');

       } else {
             $("#mySidenav").css("width", "100%");

           $(this).addClass('opencs');
       }

   });



});
