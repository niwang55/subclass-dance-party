var makeGreenDancer = class extends makeDancer {
  initialize() {
    this.$node.css('color', '#3BD085');
    this.$node.addClass('green-dancer');
  }
};


// var makeGreenDancer = function(top, left, timeBetweenSteps) {
//   makeDancer.apply(this, arguments);

//   this.$node.css('color', '#3BD085');
//   this.$node.addClass('green-dancer');
// };

// makeGreenDancer.prototype = Object.create(makeDancer.prototype);
// makeGreenDancer.prototype.constructor = makeGreenDancer;