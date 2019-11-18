import string from './css.js';

let n = 1;
demo.innerText = string.substr(0, n);
demo2.innerHTML = string.substr(0, n);
console.log(n);
let timerId = setInterval(() => {
    n += 1;
    if (n > string.length) {
        window.clearInterval(timerId);
        return
    }
    console.log(n + ':' + string.substr(0, n));
    demo.innerText = string.substr(0, n);
    demo2.innerHTML = string.substr(0, n);
    demo.scrollTop = demo.scrollHeight;
}, 0);