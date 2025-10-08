
// FAULTY CALCULATOR

console.log("shayan")
let random = Math.random

let a = prompt("ENTER THE FIRST NUMBER")
let c = prompt("ENTER THE OPERATOR")
let b = prompt("ENTER THE SECOND NUMBER")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if (random>0.1) {
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
} 
else {
    c = obj[c]
    
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}


