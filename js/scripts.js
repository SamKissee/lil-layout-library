$(document).ready(function() {
  $('.parallax').parallax();
  $(".button-collapse").sideNav();
  $(".dropdown-button").dropdown();
  $('#modal1').modal();
  $('#modal2').modal();
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
   {selector: '.item1', offset: 300, callback: function(el) {
         Materialize.fadeInImage($(el));
       } },
   {selector: '.item2', offset: 300, callback: function(el) {
         Materialize.fadeInImage($(el));
       } },
   {selector: '.item3', offset: 300, callback: function(el) {
         Materialize.fadeInImage($(el));
       } },
   {selector: '.item4', offset: 300, callback: function(el) {
         Materialize.fadeInImage($(el));
       } },
   {selector: '.item5', offset: 300, callback: function(el) {
         Materialize.fadeInImage($(el));
       } },
   {selector: '.item6', offset: 300, callback: function(el) {
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
