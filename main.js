<<<<<<< HEAD
=======

console.log("Password Generator");


const btn5 = document.getElementById("btn5")
const btn10 = document.getElementById("btn10")
const btn15 = document.getElementById("btn15")
const btn20 = document.getElementById("btn20")

const btngetter = document.getElementById("gg")
const inputText = document.getElementById("inputText")

const inNum = document.getElementById("NUM")
const inUpper = document.getElementById("UPP")
const inLower = document.getElementById("LOV")
const inSymbol = document.getElementById("SYM")
const hisob = document.querySelector(".hisob")

let random

let count = true
let btnNum = false
let upperC = false
let lowerC = false
let symbolC = false
let yig = ""


inSymbol.addEventListener("click", function() {
    if (symbolC) symbolC = false
    else symbolC = true
})

inNum.addEventListener("click", function() {
    if (btnNum) btnNum = false
    else btnNum = true
})

inUpper.addEventListener("click", function() {
    if (upperC) upperC = false
    else upperC = true
})

inLower.addEventListener("click", function() {
    if (lowerC) lowerC = false
    else lowerC = true
})



btn5.addEventListener("click", function () {
    btnGetter(btn5)
    hisob.innerText = "5"
})

btn10.addEventListener("click", function () {
    btnGetter(btn10)
    hisob.innerText = "10"
})
btn15.addEventListener("click", function () {
    btnGetter(btn15)
    hisob.innerText = "15"
})
btn20.addEventListener("click", function () {
    btnGetter(btn20)
    hisob.innerText = "20"
})



function upper(btn) {
    if (upperC) {
        for (let i = 0; btn > i; i++) {
            random = Math.floor(Math.random() * 26)
            let harfK = "QWERTYUIOPLKJHGFDSAZXCVBNM"
            yig += harfK[random]
        }
        console.log(yig);
    }
    return yig
}

function lower(btn) {
    if (lowerC) {
        for (let i = 0; btn > i; i++) {
            random = Math.floor(Math.random() * 26)
            let kichik = "qwertyuioplkjhgfdsazxcvbnm"
            yig += kichik[random]
        }
        console.log(yig);
    }
    return yig
}



function randomNum(btn) {
    if (btnNum) {
        for (let i = 0; btn > i; i++) {
            random = Math.floor(Math.random() * 9)
            let num = "1234567890"
            yig = yig + "" + num[random]
        }
        console.log(yig);
    }
    return yig
}

function Symbol(btn) {
    if (symbolC) {
        for (let i = 0; btn > i; i++) {
            random = Math.floor(Math.random() * 13)
            let num = "!@#$%^&*(*)/-+"
            yig = yig + "" + num[random]
        }
        console.log(yig);
    }
    return yig
}


function btnGetter (btn) {
    btn.style.backgroundColor = "rgb(115, 236, 115)"
    btngetter.addEventListener("click",function() {
        btn.style.backgroundColor = "blueviolet"

        if (btnNum) inputText.value = randomNum(btn.innerText)
        if (upperC) inputText.value = upper(btn.innerText)
        if (lowerC) inputText.value = lower(btn.innerText)
        if (symbolC) inputText.value = Symbol(btn.innerText)
        inputText.value = yig
        yig = ""
    })
}
>>>>>>> origin/master
