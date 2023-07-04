'use strict';

// 70 - Project: Guess my number intro
/*
console.log(document.querySelector(".message").textContent);
*/



// 72 - Selecting and Manipulating Elements
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "😎 Correct Number!";

console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 10;
document.querySelector(".score").textContent = 5;

document.querySelector(".guess").value = 10;
console.log(document.querySelector(".guess").value);
*/



// 73 - Handling Click Events

document.querySelector(".check").addEventListener
    ("click", function () {
        const guess = Number(document.querySelector(".guess").value)

        console.log(guess, typeof guess);

        if (!guess) {
            document.querySelector(".message").textContent = "No Number ⛔";
        }
    });