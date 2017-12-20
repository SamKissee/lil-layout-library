$(document).ready(function() {
  $('.parallax').parallax();
  $(".button-collapse").sideNav();
  $(".dropdown-button").dropdown();
  $(".lever").click(function(){
        $("body").toggleClass("nightmode");
    });

  var options = [
   {selector: '.parallax1', offset: 200, callback: function(el) {
         Materialize.fadeInImage($(el));
       } },
   {selector: '.article-area', offset: 200, callback: function(el) {
         Materialize.fadeInImage($(el));
       } },
   {selector: '.parallax2', offset: 200, callback: function(el) {
         Materialize.fadeInImage($(el));
       } },
 ];
 Materialize.scrollFire(options);


});
