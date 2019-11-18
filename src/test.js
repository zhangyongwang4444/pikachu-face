import string from './css.js';

const player = {
    timerId: null,
    time: 100,
    n: 1,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    events: {
        '#btnPause':
            'pause',
        '#btnPlay':
            'play',
        '#btnSlow':
            'slow',
        '#btnNormal':
            'normal',
        '#btnFast':
            'fast'
    },

    init: () => {
        player.ui.demo2.innerHTML = string.substr(0, player.n);
        player.ui.demo.innerText = string.substr(0, player.n);
        player.bindEvents();
        player.play();
    },
    bindEvents: () => {
        for (let key in player.events) if (player.events.hasOwnProperty(key)) {
            const value = player.events[key];
            document.querySelector(key).onclick = player[value];
        }
    },
    draw: () => {
        player.n += 1;
        if (player.n > string.length) {
            window.clearInterval(player.timerId);
            return
        }
        console.log(player.n + ':' + string.substr(0, player.n));
        player.ui.demo.innerText = string.substr(0, player.n);
        player.ui.demo2.innerHTML = string.substr(0, player.n);
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
    },
    play: () => {
        player.timerId = setInterval(player.draw, player.time)
    },
    pause: () => {
        window.clearInterval(player.timerId)
    },
    slow: () => {
        player.pause();
        player.time = 300;
        player.play()
    },
    normal: () => {
        player.pause();
        player.time = 100;
        player.play()
    },
    fast: () => {
        player.pause();
        player.time = 0;
        player.play()
    }
};
player.init();

