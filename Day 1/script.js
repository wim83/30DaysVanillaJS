window.addEventListener('keydown',
function(e){console.log(e);
var number = e.keyCode;
//var audio = document.getElementsByTagName('audio[data-key="'+number+'"]');    DOESN'T WORK!
var audio = document.querySelector('audio[data-key="'+number+'"]');          // WORKS
console.log(audio);
//var audio = new Audio('audio[data-key="'+number+'"]');
audio.currentTime=0;
audio.play();
            //var audio = ('audio[data-key="'+number+'"]');
//audio.play();
            //console.log(audio);
/* <audio data-key="72" src="sounds/ride.wav"></audio> */

});

// document.getElementsByTagName('body').addEventListener('click',function(e){console.log(e);})