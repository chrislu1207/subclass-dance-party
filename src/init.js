$(document).ready(function() {
  window.dancers = [];
  window.linedUp = false;
  window.battleMode = false;
  $('.battle').hide();

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
      25
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    dancer.animateDiv();
    if (window.dancers.length >= 2) {
      $('.battle').show();
    }
  });

  $('.lineup').click(function() {
    $('.addDancerButton').toggle();
    if (!window.linedUp) {
      $('img.dancer').stop();
      $('img.dancer').animate({ top: $(window).height() * 0.75 }, 500);
      window.linedUp = true;
    } else {
      for (var i = 0; i < window.dancers.length; i++) {
        window.dancers[i].animateDiv();
      }
      window.linedUp = false;
    }
  });

  $('.goHome').click(function() {
    $('img.dancer').remove();
    window.dancers = [];
  });

  $('.battle').click(function () {
    window.battleMode = true;
    $('img.dancer').stop();
    $('img.dancer').animate({ top: $(window).height() * 0.75 }, 500);

    window.dancers[0].$node.animate({ top: $(window).height() * 0.4, left: $(window).width() * .33}, 500);
    if (window.dancers[0].$node[0].className === 'dancer jumpyDancer') {
      if (window.dancers[0].evolved) {
        window.dancers[0].$node.attr('src', 'http://pokeunlock.com/wp-content/uploads/2015/01/gyarados-21.gif');
      } else {
        window.dancers[0].$node.attr('src', 'http://pokeunlock.com/wp-content/uploads/2015/01/magikarp-21.gif');
      }
    } else if (window.dancers[0].$node[0].className === 'dancer blinkyDancer') {
      if (window.dancers[0].evolved) {
        window.dancers[0].$node.attr('src', 'http://pokeunlock.com/wp-content/uploads/2015/01/gengar-31.gif');
      } else {
        window.dancers[0].$node.attr('src', 'http://pokeunlock.com/wp-content/uploads/2015/01/haunter-21.gif');
      }
    } else if (window.dancers[0].$node[0].className === 'dancer pikaDancer') {
      if (window.dancers[0].evolved) {
        window.dancers[0].$node.attr('src', 'http://pokeunlock.com/wp-content/uploads/2015/01/raichu-21.gif');
      } else {
        window.dancers[0].$node.attr('src', 'http://pokeunlock.com/wp-content/uploads/2015/01/pikachu-21.gif');
      }
    }
    window.dancers[0].$node.css('transform', 'scaleX(-2) scaleY(2)');
    window.dancers[1].$node.animate({ top: $(window).height() * 0.4, left: $(window).width() * .66}, 500);
    if (window.dancers[1].$node[0].className === 'dancer jumpyDancer') {
      if (window.dancers[1].evolved) {
        window.dancers[1].$node.attr('src', 'http://pokeunlock.com/wp-content/uploads/2015/01/gyarados-21.gif');
      } else {
        window.dancers[1].$node.attr('src', 'http://pokeunlock.com/wp-content/uploads/2015/01/magikarp-21.gif');
      }
    } else if (window.dancers[1].$node[0].className === 'dancer blinkyDancer') {
      if (window.dancers[1].evolved) {
        window.dancers[1].$node.attr('src', 'http://pokeunlock.com/wp-content/uploads/2015/01/gengar-31.gif');
      } else {
        window.dancers[1].$node.attr('src', 'http://pokeunlock.com/wp-content/uploads/2015/01/haunter-21.gif');
      }
    } else if (window.dancers[1].$node[0].className === 'dancer pikaDancer') {
      if (window.dancers[1].evolved) {
        window.dancers[1].$node.attr('src', 'http://pokeunlock.com/wp-content/uploads/2015/01/raichu-21.gif');
      } else {
        window.dancers[1].$node.attr('src', 'http://pokeunlock.com/wp-content/uploads/2015/01/pikachu-21.gif');
      }
    }

  });

  $(document).on('keypress', function (e) {
    var attackR = function() {
      window.dancers[0].$node.animate({left: $(window).width() * .66}, 500, function() {
        window.dancers[0].$node.animate({left: $(window).width() * .33}, 500);
      });
    };
    var attackL = function() {
      window.dancers[1].$node.animate({left: $(window).width() * .33}, 500, function() {
        window.dancers[1].$node.animate({left: $(window).width() * .66}, 500);
      });
    };

    if (window.battleMode) {
      if (e.keyCode === 97) {
        attackR();
      }
      if (e.keyCode === 108) {
        attackL();
      }
    }
  });



});

