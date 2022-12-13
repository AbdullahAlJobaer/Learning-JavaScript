
//S5L43 Write your first function parameter

const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"

function greetUser(greeting) {
    welcomeEl.textContent = greeting + "Per Harald Borgen"
}

greetUser("Welcome back, ")