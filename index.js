let homeCount = document.getElementById("home-el")
let guestCount = document.getElementById("guest-el")

let countHome = 0


function incrementHomePlus1(){
    countHome += 1
    homeCount.innerText = countHome
}

function incrementHomePlus2(){
    countHome += 2
    homeCount.innerText = countHome
}

function incrementHomePlus3(){
    countHome += 3
    homeCount.innerText = countHome
}


let countGuest = 0

function incrementGuestPlus1(){
    countGuest += 1
    guestCount.innerText = countGuest
}

function incrementGuestPlus2(){
    countGuest += 2
    guestCount.innerText = countGuest
}

function incrementGuestPlus3(){
    countGuest += 3
    guestCount.innerText = countGuest
}