var makeWhiteDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);

  this.$node.css('color', 'white');
};

makeWhiteDancer.prototype = Object.create(makeDancer.prototype);
makeWhiteDancer.prototype.constructor = makeWhiteDancer;