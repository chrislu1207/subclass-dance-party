var makeWigglyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="http://pokeunlock.com/wp-content/uploads/2015/01/snorlax.gif" class="dancer wigglyDancer"></img>');
  this.setPosition(this.top, this.left);
  this.$node.on('mouseover', this.rotate.bind(this));
  this.step();
  this.degree = 0;
};

makeWigglyDancer.prototype = Object.create(makeDancer.prototype);
makeWigglyDancer.prototype.constructor = makeWigglyDancer;
makeWigglyDancer.prototype.oldStep = makeDancer.prototype.step;

makeWigglyDancer.prototype.step = function() {
  this.oldStep();
  // this.$node.effect('shake');
  // this.degree += 1;
  // this.$node.css('transform', 'scale(2) rotate(' + this.degree + 'deg)');
};

makeWigglyDancer.prototype.rotate = function() {
  this.degree += 45;
  this.$node.css('transform', 'scale(2) rotate(' + this.degree + 'deg)');
};
