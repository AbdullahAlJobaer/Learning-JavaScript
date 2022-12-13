
/*
//S5L44 Functions with multiple parameters

const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"

function greetUser(greeting, name) {
    welcomeEl.textContent = `${greeting}, ${name}`
}

greetUser("Welcome back", "Per Harald Borgen!")
*/

//S5L45 Numbers as functions parameters

// Create a function, add(), that adds two numbers together and returns the sum

function add(num1, num2) {
    return num1 + num2
}

console.log( add(3, 4) );
console.log( add(9, 102) );
