var makeMichaelDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node.addClass('dancer-michael');
};

makeMichaelDancer.prototype = Object.create(makeDancer.prototype);
makeMichaelDancer.constructor = makeMichaelDancer;