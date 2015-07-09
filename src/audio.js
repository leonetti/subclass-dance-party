$(document).ready(function(){

  $audio = $('.dp-audio');
  $audioBtn = $('.icon-audio');

  $audioBtn.on('click', function(e) {
    e.preventDefault();
    if ($(this).hasClass('icon-audio--mute')) {
      $(this).removeClass('icon-audio--mute');
      $audio.trigger('play');
    } else {
      $(this).addClass('icon-audio--mute');
      $audio.trigger('pause');
    }
  });

});