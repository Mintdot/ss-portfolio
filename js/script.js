window.onload = function () {
    start()
}

function start() {
    var load = document.getElementById("load");
    var wrap = document.getElementById("wrap");

    fadeOut(load);
    fadeIn(wrap);
}

function fadeOut(load) {
    setInterval(function () {
        load.style.animationName = "out";
        load.style.animationDuration = "3s";
        load.style.display = "none";
    }, 1000);
    clearInterval();
}

function fadeIn(wrap) {
    setInterval(function () {
        wrap.style.animationName = "in";
        wrap.style.animationDuration = "3s";
        wrap.style.display = "block";
    }, 1000);
    clearInterval();
}