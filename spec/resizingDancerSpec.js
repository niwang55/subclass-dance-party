describe('resizingDancer', function() {

  var resizingDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    resizingDancer = new makeResizingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(resizingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node resize', function() {
    sinon.spy(resizingDancer.$node, 'animate');
    resizingDancer.step();
    expect(resizingDancer.$node.animate.called).to.be.true;
  });
});
