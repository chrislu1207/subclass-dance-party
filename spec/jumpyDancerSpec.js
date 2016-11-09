describe('jumpyDancer', function() {

  var jumpyDancer, clock;
  var timeBetweenSteps = 25;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    jumpyDancer = new makeJumpyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(jumpyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have an evolve method', function() {  
    expect(jumpyDancer.evolve).to.be.a.function;
  });

  it('should evolve', function() {
    jumpyDancer.evolve();
    expect(jumpyDancer.evolved).to.be.equal(true);
  });
});
