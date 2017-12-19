$(document).ready(function() {
  $('.parallax').parallax();
  $(".button-collapse").sideNav();
  $(".dropdown-button").dropdown();

  var options = [
   {selector: '.parallax1', offset: 200, callback: function(el) {
         Materialize.fadeInImage($(el));
       } }
 ];
 Materialize.scrollFire(options);


});
