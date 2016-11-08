var makeWigglyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="http://cdn.bulbagarden.net/upload/3/3f/PCP143.png" class="dancer wigglyDancer"></img>');
  this.setPosition(this.top, this.left);
};

makeWigglyDancer.prototype = Object.create(makeDancer.prototype);
makeWigglyDancer.prototype.constructor = makeWigglyDancer;
makeWigglyDancer.prototype.oldStep = makeDancer.prototype.step;

makeWigglyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle('explode');
};
