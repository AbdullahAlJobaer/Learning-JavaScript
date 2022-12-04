/*
//S5L5 Refactor to addEventListener

let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function(){
    console.log("Button Clicked!");
})
*/

/*
//S5L7 Your turn to refactor

let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function(){
    console.log("Button Clicked!");
})

*/

/*
//S5L8 Create the myLeads array and inputEl

// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function(){
    console.log("Button Clicked!");
})
*/

/*
//S5L10 Push to the myLeads array

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function(){
    myLeads.push("www.awesomelead.com");
    console.log(myLeads);
})
*/

/*
//S5L11 Push the value from the input field

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    console.log(myLeads);
})
*/

/*
//S5L12 Use a for loop to logout leads

let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    console.log(myLeads);
})

// Log out the items in the myLeads array using a for loop

for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i]);
}

*/

/*
//S5L14 Render the leads in the unordered list

let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    console.log(myLeads);
})

// Log out the items in the myLeads array using a for loop

for (let i = 0; i < myLeads.length; i++) {
    ulEl.textContent += myLeads[i] + " "

}

*/

/*
//S5L15 How to render <li> elements with innerHTML

let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    console.log(myLeads);
})

for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

}
*/

/*

//S5L19 Use createElement() and append() instead of innerHTML

let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    console.log(myLeads);
})

for (let i = 0; i < myLeads.length; i++) {
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    // create element
    // set text content
    // append to ul

    const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)
}
*/

/*
//S5L20 Improving the performance of our app

let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    console.log(myLeads);
})

let listItems = ""

for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>"
}

ulEl.innerHTML = listItems
*/

//S5L21 Create the render function

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    renderLeads()
})

function renderLeads() {
    let listItems = ""

    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>"
    }

    ulEl.innerHTML = listItems
}