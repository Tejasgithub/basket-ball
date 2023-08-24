let homePts = document.getElementById("homepoints")
let guestPts = document.getElementById("guestpoints")
let hpoints = 0
let gpoints = 0

function plusone() {
    hpoints += 1
    homePts.textContent = hpoints
}

function plustwo() {
    hpoints += 2
    homePts.textContent = hpoints
}

function plusthree() {
    hpoints += 3
    homePts.textContent = hpoints
}

function oneplus() {
    gpoints += 1
    guestPts.textContent = gpoints
}

function twoplus() {
    gpoints += 2
    guestPts.textContent = gpoints
}

function threeplus() {
    gpoints += 3
    guestPts.textContent = gpoints
}

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    let fiveMinutes = 60 * 5,
        display = document.getElementById("timer");
    startTimer(fiveMinutes, display);
};

function refresh() {
    window.location.reload();
}

function newgame() {
    hpoints = hpoints = 0
    gpoints = gpoints = 0

    homePts.textContent = hpoints
    guestPts.textContent = gpoints
}