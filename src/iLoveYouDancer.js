var iLoveYouDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node.removeClass('dancer').addClass('love');
  this.setTransition();
};

iLoveYouDancer.prototype = Object.create(makeDancer.prototype);
iLoveYouDancer.constructor = iLoveYouDancer;

iLoveYouDancer.prototype.setTransition = function() {
  var transTime = (this.timeBetweenSteps/1000).toFixed(2);
  
  this.$node.css({
    WebkitTransition: '-webkit-transform ' + transTime + 's',
    MozTransition: '-moz-transform ' + transTime + 's',
    transition: 'transform ' + transTime + 's'
  });
}

iLoveYouDancer.prototype.step = function() {
  
};