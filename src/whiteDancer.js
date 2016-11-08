var makeWhiteDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);

  this.setColor();
};

makeWhiteDancer.prototype = Object.create(makeDancer.prototype);
makeWhiteDancer.prototype.constructor = makeWhiteDancer;

makeWhiteDancer.prototype.setColor = function() {
  this.$node.css('border-color', 'white');
};