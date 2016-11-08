var makePictureDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node.addClass('picture-dancer');

  this.top = top;
  this.step();
};

makePictureDancer.prototype = Object.create(makeDancer.prototype);
makePictureDancer.prototype.constructor = makePictureDancer;

makePictureDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.animate({'margin-top': '+=10px'});
  this.$node.animate({'margin-top': '-=10px'});

};