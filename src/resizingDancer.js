var makeResizingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);

  this.step();
};

makeResizingDancer.prototype = Object.create(makeDancer.prototype);
makeResizingDancer.prototype.constructor = makeResizingDancer;

// makeResizingDancer.prototype.resize = function() {
//   this.$node.animate({
//     height: '20px',
//     width: '20px'
//   });
// };

makeResizingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.animate({
    height: '20px',
    width: '20px'
  });

  this.$node.animate({
    height: '10px',
    width: '10px'
  });
};