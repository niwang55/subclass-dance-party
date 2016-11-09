describe('greenDancer', function() {
  var greenDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    greenDancer = new makeGreenDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(greenDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a green-dancer class', function() {
    expect(greenDancer.$node.hasClass('green-dancer')).to.be.true;
  });

  it('should have a color other than red', function() {
    expect(greenDancer.$node.css('color')).to.not.equal('rgb(0, 0, 255)');
  });

  it('should have the color code rgb(59, 208, 133)', function() {
    expect(greenDancer.$node.css('color')).to.equal('rgb(59, 208, 133)');
  });
});