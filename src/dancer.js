var makeDancer = function(top, left) {
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
};

makeDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};