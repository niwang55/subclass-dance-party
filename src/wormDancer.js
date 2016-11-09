var makeWormDancer = class extends makeDancer {
  initialize() {
    this.step();
    this.$node.css('color', 'pink');
  }

  step() {
    super.step();
    var random = Math.random() * 100;
    this.$node.animate({
      'margin-left': '+=' + random + 'px'
    }, 'fast');

    this.$node.animate({
      'right': '-=' + random + 'px' 
    }, 'fast');
  }
};

// var makeWormDancer = function(top, left, timeBetweenSteps) {
//   makeDancer.apply(this, arguments);

//   this.step();
//   this.$node.css('color', 'pink');
// };

// makeWormDancer.prototype = Object.create(makeDancer.prototype);
// makeWormDancer.prototype.constructor = makeWormDancer;


// makeWormDancer.prototype.step = function() {
//   var random = Math.random() * 100;
//   makeDancer.prototype.step.call(this);
//   this.$node.animate({
//     'margin-left': '+=' + random + 'px'
//   }, 'fast');

//   this.$node.animate({
//     'right': '-=' + random + 'px' 
//   }, 'fast');
// };