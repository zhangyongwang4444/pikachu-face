import string from './css.js';

let n = 1;
demo2.innerHTML = string.substr(0, n);
demo.innerText = string.substr(0, n);

let time = 100;

const draw = () => {
    n += 1;
    if (n > string.length) {
        window.clearInterval(timerId);
        return
    }
    console.log(n + ':' + string.substr(0, n));
    demo.innerText = string.substr(0, n);
    demo2.innerHTML = string.substr(0, n);
    demo.scrollTop = demo.scrollHeight;
};
const play = () => {
    return setInterval(draw, time)
};
const pause = () => {
    window.clearInterval(timerId)
};

let timerId = play();

btnPause.onclick = () => {
    pause()
};

btnPlay.onclick = () => {
    timerId = play()
};

btnSlow.onclick = () => {
    pause();
    time = 300;
    timerId = play()
};

btnNormal.onclick = () => {
    pause();
    time = 100;
    timerId = play()
};

btnFast.onclick = () => {
    pause();
    time = 0;
    timerId = play()
};