let homeScore = document.getElementById("homescore")
let guestScore = document.getElementById("guestscore")
let homecount = 0
let guestcount = 0

function home1() {
    homecount += 1
    homeScore.textContent = homecount
}

function home2() {
    homecount += 2
    homeScore.textContent = homecount
}

function home3() {
    homecount += 3
    homeScore.textContent = homecount
}

function guest1() {
    guestcount += 1
    guestScore.textContent = guestcount
}

function guest2() {
    guestcount += 2
    guestScore.textContent = guestcount
}

function guest3() {
    guestcount += 3
    guestScore.textContent = guestcount
}

function repeat() {
    homeScore.textContent = 0
    guestScore.textContent = 0
    homecount = 0
    guestcount = 0
}