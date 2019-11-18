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
const slow = () => {
    pause();
    time = 300;
    timerId = play()
};
const normal = () => {
    pause();
    time = 100;
    timerId = play()
};
const fast = () => {
    pause();
    time = 0;
    timerId = play()
};

let timerId = play();

btnPause.onclick = pause;
btnPlay.onclick = () => {
    timerId = play()
};
btnSlow.onclick = slow;
btnNormal.onclick = normal;
btnFast.onclick = fast;