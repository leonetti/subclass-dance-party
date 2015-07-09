$(document).ready(function(){
  /**
   * Global window.dancers array
   */
  window.dancers = [];





  /**
   * Iterates over dancers
   */
  var eachDancer = function(callback) {
    for(var i = 0; i < dancers.length; i++) {
      var dancer = dancers[i];
      callback(dancer, i);
    }
  }





  /**
   * Removes classes
   */
  var removeClasses = function() {
    eachDancer(function(dancer) {
      dancer.$node.removeClass('dance-right dance-left');
    });
  }





  /**
   * Adds a dancer to the screen on click
   */
  $('.add-dancer').on('click', function(e) {
    e.preventDefault();
    removeClasses();

    var dancerFunctionName = $(this).data("dance-function");
    var dancerMakerFunction = window[dancerFunctionName];
    var dancer = new dancerMakerFunction(
      $(".main").height() * Math.random(),
      $(".main").width() * Math.random()
    );

    $('.main').append(dancer.$node);
    dancers.push(dancer);
  });
  




  /**
   * Line up functionality
   */
  $(".line-up").on("click", function(e) {
    e.preventDefault();
    removeClasses();

    var numDancers = dancers.length;
    var startPos = 5;
    var increment = 80/numDancers;

    eachDancer(function(dancer) {
      dancer.$node.css({
        'top' : '40%',
        'left' : startPos + '%'
      });
      startPos = startPos + increment;
    });
  });





  /**
   * Evolution functionality
   */
  $('.evolution').on('click', function(e) {
    e.preventDefault();
    removeClasses();

    var animEndString = 'webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend';

    var startPos = 5;
    var increment = 80/(dancers.length);

    eachDancer(function(dancer, i) {
      // remove all classes first
      dancer.$node.removeClass('dance-right dance-left');

      dancer.$node.css({
        'top' : '40%',
        'left' : startPos + '%'
      });
      startPos = startPos + increment;

      if(i%2 === 0){
        dancer.$node.css({
          'top' : 0
        }).addClass('dance-right');
      } else {
        dancer.$node.css({
          'top' : '60%'
        }).addClass('dance-left');
      }
    });

  });
});