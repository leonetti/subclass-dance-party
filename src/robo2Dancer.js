var makeRobo2Dancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node.addClass('dancer-robo2');
};

makeRobo2Dancer.prototype = Object.create(makeDancer.prototype);
makeRobo2Dancer.constructor = makeRobo2Dancer;