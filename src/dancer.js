var makeDancer = function(top, left, timeBetweenSteps) {  
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(this.top, this.left);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
  
makeDancer.prototype.setPosition = function() {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.makeNewPosition = function () {
    
  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;
  
  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);
  
  return [nh, nw];    
    
};

makeDancer.prototype.animateDiv = function () {
  var newq = this.makeNewPosition();
  var oldq = this.$node.offset();
  var maxSpeed = 500;
  var minSpeed = 2000;
  var that = this;

  this.$node.animate({ top: newq[0], left: newq[1] }, Math.max((Math.random() * maxSpeed), Math.random() * minSpeed), function() {
    that.animateDiv();
  });
};

makeDancer.prototype.lineUp = function () {
  this.$node.animate({ top: $(window).height() * 0.75 }, 500);
};