describe('pikaDancer', function() {

  var pikaDancer, clock;
  var timeBetweenSteps = 25;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pikaDancer = new makePikaDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(pikaDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have an evolve method', function() {  
    expect(pikaDancer.evolve).to.be.a.function;
  });
});
