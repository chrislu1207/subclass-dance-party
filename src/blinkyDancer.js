var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="http://pokeunlock.com/wp-content/uploads/2015/01/haunter.gif" class="dancer blinkyDancer"></img>');
  this.setPosition(this.top, this.left);
  this.$node.on('click', this.evolve.bind(this));
  this.evolved = false;
  // this.step();
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step;

makeBlinkyDancer.prototype.step = function() {
  this.oldStep();
  // this.$node.effect('highlight', {color: '#FFFF7F'}, 200);
  this.$node.toggle();
};

makeBlinkyDancer.prototype.evolve = function () {
  this.$node.attr('src', 'http://pokeunlock.com/wp-content/uploads/2015/01/gengar.gif');
  this.evolved = true;
};
