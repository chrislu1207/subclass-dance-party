var makeJumpyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="http://pokeunlock.com/wp-content/uploads/2015/01/magikarp.gif" class="dancer jumpyDancer"></img>');
  this.setPosition(this.top, this.left);
  this.$node.on('click', this.evolve.bind(this));
  this.evolved = false;
};

makeJumpyDancer.prototype = Object.create(makeDancer.prototype);
makeJumpyDancer.prototype.constructor = makeJumpyDancer;
makeJumpyDancer.prototype.oldStep = makeDancer.prototype.step;

makeJumpyDancer.prototype.step = function() {
  this.oldStep();
  // if (this.evolved) {
  //   this.$node.effect('shake', 'slow');
  // } else {
  //   this.$node.effect('bounce', 'slow');
  // }
};

makeJumpyDancer.prototype.evolve = function() {
  this.$node.attr('src', 'http://pokeunlock.com/wp-content/uploads/2015/01/gyarados.gif');
  this.evolved = true;
};
