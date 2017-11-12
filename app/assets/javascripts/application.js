// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .


$("#volume").slider({
    min: 0,
    max: 100,
    value: 0,
    range: "min",
    slide: function(event, ui) {
      setVolume(ui.value / 100);
    }
  });
  
  var myMedia = document.createElement('audio');
  $('#player').append(myMedia);
  myMedia.id = "myMedia";

  playAudio('http://emilcarlsson.se/assets/Avicii%20-%20The%20Nights.mp3', 0);
  
  function playAudio(fileName, myVolume) {
      myMedia.src = fileName;
      myMedia.setAttribute('loop', 'loop');
      setVolume(myVolume);
      myMedia.play();
  }
  
  function setVolume(myVolume) {
    var myMedia = document.getElementById('myMedia');
    myMedia.volume = myVolume;
  }