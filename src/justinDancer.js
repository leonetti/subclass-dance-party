var makeJustinDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node.addClass('dancer-justin');
};

makeJustinDancer.prototype = Object.create(makeDancer.prototype);
makeJustinDancer.constructor = makeJustinDancer;