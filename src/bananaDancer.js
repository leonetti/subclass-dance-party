var makeBananaDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node.addClass('dancer-banana');
  this._initEvents();
};

makeBananaDancer.prototype = Object.create(makeDancer.prototype);
makeBananaDancer.constructor = makeBananaDancer;

makeBananaDancer.prototype._initEvents = function() {
  this.$node.on('mouseover', function(e) {
    e.preventDefault();
    $(this).removeClass('dancer-banana').addClass('dancer-banana--marcus');
  });
}