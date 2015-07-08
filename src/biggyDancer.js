var makeBiggyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  
  this.setTransition();
};

makeBiggyDancer.prototype = Object.create(makeDancer.prototype);
makeBiggyDancer.constructor = makeBiggyDancer;

makeBiggyDancer.prototype.setTransition = function() {
  var transTime = (this.timeBetweenSteps/1000).toFixed(2);
  
  this.$node.css({
    WebkitTransition: '-webkit-transform ' + transTime + 's',
    MozTransition: '-moz-transform ' + transTime + 's',
    transition: 'transform ' + transTime + 's'
  });
}

makeBiggyDancer.prototype.step = function() {
  makeDancer.prototype.step.apply(this);
  this.$node.toggleClass('dancer-big');
};