$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    dancers.push(dancer);
  });

  $('.line-up').on('click', function(e) {
    e.preventDefault();
    var numDancers = dancers.length;
    var space = 100/numDancers;
    var start = 0;

    $(dancers).each(function(index, el) {
      var node = el.$node;
      start = start + space;
      console.log(start);
      node.css({
        'top': '50%',
        'left': start + '%'
      });
    });
  });
});