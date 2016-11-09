describe('all Dancers', function() {

  var dancer, blinkyDancer, greenDancer, pictureDancer, resizingDancer, wormDancer;
  var top = 10;
  var left = 20;
  var timeBetweenSteps = 100;
  var dancers = [];

  beforeEach(function() {
    dancer = new makeDancer(top, left, timeBetweenSteps);
    blinkyDancer = new makeBlinkyDancer(top, left, timeBetweenSteps);
    greenDancer = new makeGreenDancer(top, left, timeBetweenSteps);
    pictureDancer = new makePictureDancer(top, left, timeBetweenSteps);
    resizingDancer = new makeResizingDancer(top, left, timeBetweenSteps);
    wormDancer = new makeWormDancer(top, left, timeBetweenSteps);
    dancers.push(dancer, blinkyDancer, greenDancer, pictureDancer, resizingDancer, wormDancer);
  });

  it('should have a jQuery $node object', function() {
    for (var i = 0; i < dancers.length; i++) {
      expect(dancers[i].$node).to.be.an.instanceof(jQuery);
    }
  });

  it('should have a dancer class', function() {
    for (var i = 0; i < dancers.length; i++) {
      expect(dancers[i].$node.hasClass('dancer')).to.be.true;
    }
  });

  it('should have methods named "step", "setPosition", "lineUp", and "returnPos"', function() {
    for (var i = 0; i < dancers.length; i++) {
      expect(dancers[i].step).to.be.a('function');
      expect(dancers[i].setPosition).to.be.a('function');
      expect(dancers[i].lineUp).to.be.a('function');
      expect(dancers[i].returnPos).to.be.a('function');
    }
  });

});
