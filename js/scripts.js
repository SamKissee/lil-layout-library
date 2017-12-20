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
   {selector: '.gallery-header', offset: 200, callback: function(el) {
         Materialize.fadeInImage($(el));
       } },
   {selector: '.img1', offset: 300, callback: function(el) {
         Materialize.fadeInImage($(el));
       } },
   {selector: '.img2', offset: 300, callback: function(el) {
         Materialize.fadeInImage($(el));
       } },
   {selector: '.img3', offset: 300, callback: function(el) {
         Materialize.fadeInImage($(el));
       } },
   {selector: '.img4', offset: 300, callback: function(el) {
         Materialize.fadeInImage($(el));
       } },
   {selector: '.img5', offset: 300, callback: function(el) {
         Materialize.fadeInImage($(el));
       } },
   {selector: '.img6', offset: 300, callback: function(el) {
         Materialize.fadeInImage($(el));
       } },
   {selector: '.parallax3', offset: 200, callback: function(el) {
         Materialize.fadeInImage($(el));
       } },
   {selector: '.page-footer', offset: 200, callback: function(el) {
         Materialize.fadeInImage($(el));
       } },
   {selector: '.blog-area', offset: 200, callback: function(el) {
         Materialize.fadeInImage($(el));
       } },
 ];
 Materialize.scrollFire(options);


});
