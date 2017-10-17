window.addEventListener('keydown',
    function (e) {
        console.log(e);
        const NUMBER = e.keyCode;
        // var audio = document.getElementsByTagName('audio[data-key="'+number+'"]');    DOESN'T WORK!
        // var audio = document.querySelector('audio[data-key="' + NUMBER + '"]'); // WORKS
        const AUDIO = document.querySelector('audio[data-key="' + e.keyCode + '"]');
        const KEY = document.querySelector('.key[data-key="' + e.keyCode + '"]');
        if (!AUDIO) return; // stop function if no 'valid' selection
        AUDIO.currentTime = 0; // rewind audio (for 'loop' effect)
        AUDIO.play();
        console.log(KEY) // testing & visualizing options
        KEY.classList.add('playing');

        const KEYS = document.querySelectorAll('.key');
        keys.forEach(key => key.addEventListener('transistionend'), removeTransition);
    });

// document.getElementsByTagName('body').addEventListener('click',function(e){console.log(e);})