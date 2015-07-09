$(document).ready(function(){
  // Global window.dancers array
  window.dancers = [];

  // Adds a dancer to the screen on click
  $(".add-dancer").on("click", function(event){
    // Get dancer function name from the data attribute
    var dancerFunctionName = $(this).data("dance-function");

    // Fetch the maker function from the window object based on the dancer
    // function name.
    var dancerMakerFunction = window[dancerFunctionName];

    // Now make a new dancer instance based on the data attribute/maker function
    // defined above.
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random()
    );

    $('.main').append(dancer.$node);

    dancers.push(dancer);
  });
});