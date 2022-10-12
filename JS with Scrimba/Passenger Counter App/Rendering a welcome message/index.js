/*
//S1L22 Render a welcome message

let welcomeEl = document.getElementById("welcome-el")

let name = "Jobaer"
let greeting = "Welcome back, "


welcomeEl.innerText = greeting + name
*/

// S1L23 Improve the message with string concatenation

let welcomeEl = document.getElementById("welcome-el")

let name = "Jobaer"
let greeting = "Welcome back, "


welcomeEl.innerText = greeting + name

welcomeEl.innerText += " 👋"