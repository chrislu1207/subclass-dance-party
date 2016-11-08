var makeJumpyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="http://cdn.bulbagarden.net/upload/c/cd/PCP129.png" class="dancer jumpyDancer"></img>');
  this.setPosition(this.top, this.left);
};

makeJumpyDancer.prototype = Object.create(makeDancer.prototype);
makeJumpyDancer.prototype.constructor = makeJumpyDancer;
makeJumpyDancer.prototype.oldStep = makeDancer.prototype.step;

makeJumpyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle('explode');
};
