$(document).ready(function() {
  window.dancers = [];

  var findNeighbors = function(top, left) {
    var neighbors = [];    

    dancers.forEach(function(element) {
      var a = Math.abs( top - element.top );
      var b = Math.abs( left - element.left );
      var distance = Math.sqrt( (a * a) + (b * b) );

      if (distance < 100) {
        neighbors.push(element);
      }
    });

    return neighbors;
  };

  // Click handler
  $('body').on('click', '.dancer', function(event) {
    var $clicked = $(this);
    var neighbors = findNeighbors($clicked.position().top, $clicked.position().left);

    // Loop through neighbors
    neighbors.forEach(function(dancer) {
      // Access $node and do something to it
      dancer.$node.css('color', 'cyan');
    });
  });

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    
    $('body').append(dancer.$node);
  });

  $('.lineup').on('click', function(event) {
    dancers.forEach(function(dancer) {
      dancer.lineUp();
    });
  });

  $('.return-position').on('click', function(event) {
    dancers.forEach(function(dancer) {
      dancer.returnPos();
    });
  });

  $('body').on('mouseenter', '.green-dancer', function(event) {
    $(this).fadeOut();
  });

  // $('body').on('click', '.green-dancer', function(event) {
  //   $(this).css('color', 'red');
  // });

  $('body').on('mouseleave', '.green-dancer', function(event) {
    $(this).fadeIn();
  });
});

