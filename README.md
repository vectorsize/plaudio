plaudio
=======

Plaudio is an html5 <audio> player with an extra Web Audio connect method. 

## Usage

```
<script src="Plaudio.js"></script>
<script>

// an audioContext instance is expected in the window object to be used inside the player 
window.audioContext = window.audioContext || new AudioContext();

window.addEventListener('DOMContentLoaded', function() {

  // instantiate
  var player = new Plaudio();
  // set the source
  player.source = 'audio.mp3';

  // some other audio nodes
  var filter = audioContext.createBiquadFilter();
  
  // connect your graph
  player.connect(filter);
  filter.connect(audioContext.destination);
  
  // and go!
  player.start();

}, false);
</script>
```

## API

## player.connect

The usual connect method to connect in the audio graph

## player.start

Simple start methid (aliased to play) to start playing

## player.pause

Siple pause method that pauses the playback immediately

## player.source

Sets the source to be played

## player.playbackRate

Changes the playback rate (without modifying the pitch)

## player.loop

Determines whether the playback should loop or not (requires loopStart and loopEnd to be set and loopEnd should be biger than loopStart) 

## player.loopStart

Looping start point in seconds.

## player.loopEnd

Looping end point in seconds.

## player.volume

Little extra if you don't want to use a gainNode.
