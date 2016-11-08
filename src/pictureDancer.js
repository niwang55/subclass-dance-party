var makePictureDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node.addClass('picture-dancer');

  this.step();
};

makePictureDancer.prototype = Object.create(makeDancer.prototype);
makePictureDancer.prototype.constructor = makePictureDancer;

makePictureDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.animate({'margin-top': '+=10px'});
  this.$node.animate({'margin-top': '-=10px'});

};

makePictureDancer.prototype.lineUp = function() {
  this.$node.css('left', '25%');
};

makePictureDancer.prototype.returnPos = function() {
  this.$node.css('left', this.left + 'px');
};