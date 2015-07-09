var makeRobo1Dancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node.addClass('dancer-robo1');
};

makeRobo1Dancer.prototype = Object.create(makeDancer.prototype);
makeRobo1Dancer.constructor = makeRobo1Dancer;