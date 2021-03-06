var makeDancer = class {
  constructor(top, left, timeBetweenSteps) {
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;
    this.$node = $('<span class="dancer"></span>');

    this.step();
    this.initialize();
    this.setPosition(this.top, this.left);
  }

  initialize() {}

  step() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }

  setPosition(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }

  lineUp() {
    this.$node.animate({'left': '25%'});
  }

  returnPos() {
    this.$node.animate({'left': this.left + 'px'});
  }
};

// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {
//   this.top = top;
//   this.left = left;
//   this.timeBetweenSteps = timeBetweenSteps;

//   // use jQuery to create an HTML <span> tag
//   this.$node = $('<span class="dancer"></span>');

//   this.step();
//   this.setPosition(this.top, this.left);

//   // dancer.step = function() {
//   //   // the basic dancer doesn't do anything interesting at all on each step,
//   //   // it just schedules the next step
//   //   setTimeout(dancer.step, timeBetweenSteps);
//   // };
//   // dancer.step();

//   // dancer.setPosition = function(top, left) {
//   //   // Use css top and left properties to position our <span> tag
//   //   // where it belongs on the page. See http://api.jquery.com/css/
//   //   //
//   //   var styleSettings = {
//   //     top: top,
//   //     left: left
//   //   };
//   //   dancer.$node.css(styleSettings);
//   // };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   // dancer.setPosition(top, left);

// };

// makeDancer.prototype.step = function() {
//   setTimeout(this.step.bind(this), this.timeBetweenSteps);
// };

// makeDancer.prototype.setPosition = function(top, left) {
//   var styleSettings = {
//     top: top,
//     left: left
//   };
//   this.$node.css(styleSettings);
// };

// makeDancer.prototype.lineUp = function() {
//   this.$node.animate({'left': '25%'});
// };

// makeDancer.prototype.returnPos = function() {
//   this.$node.animate({'left': this.left + 'px'});
// };






