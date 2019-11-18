const string = `
   * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

*::before {
    box-sizing: border-box;
}

*::after {
    box-sizing: border-box;
}

body {
    background: #ffe600;
    min-height: 100vh;
}

.skin {
    position: relative;

}

.nose {
    border: 10px solid red;
    border-color: #000000 transparent transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: absolute;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
}

@keyframes wave {
    0% {
        transform: rotate(0deg);
    }

    33% {
        transform: rotate(5deg);
    }

    66% {
        transform: rotate(-5deg);
    }

    100% {
        transform: rotate(0deg);
    }
}

.nose:hover {
    transform-origin: center bottom;
    animation: wave 200ms infinite linear;
}

.yuan {
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background: #000000;
}

.eye {
    border: 2px solid #000000;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    margin-left: -32px;
    top: 100px;
    background: #2e2e2e;
    border-radius: 50%;
}

.eye::before {
    content: '';
    display: block;
    border: 3px solid #000000;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 4px;
    top: 2px;
}

.eye.left {
    transform: translateX(-100px);

}

.eye.right {
    transform: translateX(100px);
}

.mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}

.mouth .up {
    position: relative;
    top: -20px;
    z-index: 1;
}

.mouth .up .lip {
    border: 3px solid black;
    height: 30px;
    width: 100px;
    border-top-color: transparent;
    border-right-color: transparent;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background: #ffe600;
}

.mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-53px);
}

.mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    transform: rotate(15deg) translateX(53px);
}

.mouth .up .lip::before {
    content: '';
    display: block;
    width: 8px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
}

.mouth .up .lip.left::before {
    right: -6px;
}

.mouth .up .lip.right::before {
    left: -6px;
}

.mouth .down {
    height: 180px;
    position: absolute;
    top: 5px;
    width: 100%;
    overflow: hidden;
}

.mouth .down .yuan1 {
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
}

.mouth .down .yuan1 .yuan2 {
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    background: #ff485f;
    border-radius: 100px;
}

.face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    z-index: 3;
    border-radius: 50%;
    background: #ff0000;
}

.face > img {
    position: absolute;
    top: 50%;
    left: 50%;
}

.face.left {
    transform: translateX(-180px);
}

.face.left > img {
    transform-origin: 0 0;
    transform: rotateY(180deg)
}

.face.right {
    transform: translateX(180px);
}
`;
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