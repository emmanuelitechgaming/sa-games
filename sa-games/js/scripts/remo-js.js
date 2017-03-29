$( document ).ready(function() {

  $("#firstbutton").closest("label").css({'border-bottom' : '2px solid #fff', 'padding-bottom' : '10px'});
  $("#secondbutton").closest("label").css("padding-bottom", "10px")

  $("#firstbutton").click(function() {
    $("#firstradiobutton").css("display", "block");
    $(this).closest("label").css("border-bottom", "2px solid #fff");
    $("#secondbutton").closest("label").css("border-bottom", "2px solid #000");
    $("#secondradiobutton").css("display", "none");
  });

  $("#secondbutton").click(function() {
    $("#firstradiobutton").css("display", "none");
    $(this).closest("label").css("border-bottom", "2px solid #fff");
    $("#firstbutton").closest("label").css("border-bottom", "2px solid #000");
    $("#secondradiobutton").css("display", "block");
  });

  $('.remo-toggleline').click( function() {
    $(this).toggleClass("remo-collapse-line");
  } );
});
