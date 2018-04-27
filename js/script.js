window.onload = start;

function start() {
    var load = document.getElementById("load");
    var wrap = document.getElementById("wrap");

    fadeInOut(load, wrap);
}

function fadeInOut(load, wrap) {
    setInterval(function () {
        wrap.style.animationName = "in";
        wrap.style.animationDuration = "3s";
        wrap.style.display = "block";
        load.style.display = "none";
    }, 1000);
    clearInterval();
}