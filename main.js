const bt5 = document.querySelector(".btn5");
const bt10 = document.querySelector(".btn10");
const bt15 = document.querySelector(".btn15");
const bt20 = document.querySelector(".btn20");
const hisob = document.querySelector(".hisob");
const lov = document.querySelector(".LOV");
const upp = document.querySelector(".UPP");
const num = document.querySelector(".NUM");
const sym = document.querySelector(".SYM");
const gg = document.querySelector(".gg");
const h1 = document.querySelector("h2");

function generateLover(son){
    let abs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"]
    let gen =  Math.floor(Math.random() * abs.length)
    if(son == 5) sum =  abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen]
    if(son == 10) sum = abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen];
    if(son == 15) sum = abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen];
    if(son == 20) sum = abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen]
    return sum
}
function generateUP(son){
    let abs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"]
    let gen =  Math.floor(Math.random() * abs.length)
    let sum = abs[gen] 
    if(son == 5) sum =  abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen]
    if(son == 10) sum = abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen];
    if(son == 15) sum = abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen];
    if(son == 20) sum = abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen]
    return sum
}
function generateSYM(son){
    let abs = ["A", "/", "*", "/", "-", "o", "+", "H", "i", "j", "K", "L"]
    let gen =  Math.floor(Math.random() * abs.length)
    let sum = abs[gen] 
    if(son == 5) sum =  abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen]
    if(son == 10) sum = abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen];
    if(son == 15) sum = abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen];
    if(son == 20) sum = abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen]
    return sum
}
function generateNUM(son){
    let gen =  Math.floor(Math.random() * 99)
    if(son == 5) sum =  abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen]
    if(son == 10) sum = abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen];
    if(son == 15) sum = abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen];
    if(son == 20) sum = abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen] + abs[gen]
    return sum
}

bt5.addEventListener("click", () => {
    hisob.innerText = 5;
    lov.addEventListener("click", () => {
        gg.addEventListener("click", () => {
            h1.innerText = generateLover(5)
        });
    });
})