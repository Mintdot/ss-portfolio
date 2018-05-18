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

function view(year_id) {
    year_id = "year" + year_id;
    var year = document.getElementById(year_id);
    var other_years = document.getElementsByClassName("content");

    for(var i = 0; i < other_years.length; i++) {
        var other_year = other_years.item(i);
        other_year.classList.remove("view");
    }
    year.classList.add("view");
}