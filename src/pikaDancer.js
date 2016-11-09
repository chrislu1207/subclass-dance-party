var makePikaDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="http://pokeunlock.com/wp-content/uploads/2015/01/pikachu-1.gif" class="dancer pikaDancer"></img>');
  this.setPosition(this.top, this.left);
  this.$node.on('click', this.evolve.bind(this));
  this.evolved = false;
  // this.step();
};

makePikaDancer.prototype = Object.create(makeDancer.prototype);
makePikaDancer.prototype.constructor = makePikaDancer;
makePikaDancer.prototype.oldStep = makeDancer.prototype.step;

makePikaDancer.prototype.step = function() {
  this.oldStep();
  // this.$node.effect('highlight', {color: '#FFFF7F'}, 200);
  // this.$node.toggle();
};

makePikaDancer.prototype.evolve = function () {
  this.$node.attr('src', 'http://pokeunlock.com/wp-content/uploads/2015/01/raichu.gif');
  this.evolved = true;
};
