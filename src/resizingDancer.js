var makeResizingDancer = class extends makeDancer {
  initialize() {
    this.$node.addClass('resize-dancer');
    this.step();
  }

  step() {
    super.step();
    this.$node.animate({
      height: '20px',
      width: '20px',
      'border-radius': '20px'
    });

    this.$node.animate({
      height: '5px',
      width: '5px'
    });
  }

  lineUp() {
    this.$node.css('left', '25%');
  }

  returnPos() {
    this.$node.css('left', this.left + 'px');
  }
};

// var makeResizingDancer = function(top, left, timeBetweenSteps) {
//   makeDancer.apply(this, arguments);
//   this.$node.addClass('resize-dancer');

//   this.step();
// };

// makeResizingDancer.prototype = Object.create(makeDancer.prototype);
// makeResizingDancer.prototype.constructor = makeResizingDancer;


// makeResizingDancer.prototype.step = function() {
//   makeDancer.prototype.step.call(this);
//   this.$node.animate({
//     height: '20px',
//     width: '20px',
//     'border-radius': '20px'
//   });

//   this.$node.animate({
//     height: '5px',
//     width: '5px'
//   });
// };

// makeResizingDancer.prototype.lineUp = function() {
//   this.$node.css('left', '25%');
// };

// makeResizingDancer.prototype.returnPos = function() {
//   this.$node.css('left', this.left + 'px');
// };