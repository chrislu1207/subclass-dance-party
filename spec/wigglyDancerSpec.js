describe('wigglyDancer', function() {

  var wigglyDancer, clock;
  var timeBetweenSteps = 25;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    wigglyDancer = new makeWigglyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(wigglyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a rotate method', function() {  
    expect(wigglyDancer.rotate).to.be.a.function;
  });

  it('should rotate on mouseover', function() {
    wigglyDancer.rotate();
    expect(wigglyDancer.degree).to.be.equal(45);
  });
});
