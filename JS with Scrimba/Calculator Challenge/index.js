let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")

function add() {
    //console.log("Add function selected");
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}

function multiply() {
    //console.log("Multiply function selected");
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
}

function divide() {
    //console.log("Divide function selected");
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
}

function subtract() {
    //console.log("Subtract function selected");
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}