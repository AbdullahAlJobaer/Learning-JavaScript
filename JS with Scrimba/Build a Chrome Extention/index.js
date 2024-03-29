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

/*
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
*/

/*
//S5L22 Clear the input field

let myLeads = []
let inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = ""
    renderLeads();
    
})

function renderLeads() {
    let listItems = ""

    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>"
    }

    ulEl.innerHTML = listItems
}
*/

/*
//S5L23 Add the <a> tag

let myLeads = []
let inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = ""
    renderLeads();
    
})

function renderLeads() {
    let listItems = ""

    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li> <a href=' " + myLeads[i] + " ' target = '_blank'>" + myLeads[i] + "</a></li>"
    }

    ulEl.innerHTML = listItems
}

*/


/*
//S5L34 Strings-Arrays in local storage

let myLeads = `["www.barcalead.com"]`
let inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
myLeads.push("www.rmalead.com")
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
console.log(myLeads);




inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = ""
    renderLeads();
    
})

function renderLeads() {
    let listItems = ""

    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li> 
            <a href= '${myLeads[i]}' +  target = '_blank'> ${myLeads[i]} </a>
        </li>
        `
    }

    ulEl.innerHTML = listItems
}
*/

/*
//S5L35 Save the leads to localStorage

let myLeads = []
let inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")



inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads();

    console.log(localStorage.getItem("myLeads"));
    
})

function renderLeads() {
    let listItems = ""

    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li> 
            <a href= '${myLeads[i]}' +  target = '_blank'> ${myLeads[i]} </a>
        </li>
        `
    }

    ulEl.innerHTML = listItems
}
*/

/*
//S5L36 Get the leads from localStorage

let myLeads = []
let inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

console.log(leadsFromLocalStorage);


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads();

    console.log(localStorage.getItem("myLeads"));
    
})

function renderLeads() {
    let listItems = ""

    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li> 
            <a href= '${myLeads[i]}' +  target = '_blank'> ${myLeads[i]} </a>
        </li>
        `
    }

    ulEl.innerHTML = listItems
}
*/

/*
//S5L39 Checking localStorage before rendering

let myLeads = []
let inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads();

    console.log(localStorage.getItem("myLeads"));
    
})

function renderLeads() {
    let listItems = ""

    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li> 
            <a href= '${myLeads[i]}' +  target = '_blank'> ${myLeads[i]} </a>
        </li>
        `
    }

    ulEl.innerHTML = listItems
}
*/

/*
//S5L41 Make the delete button work

let myLeads = []
let inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    renderLeads()   
})


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads();

    console.log(localStorage.getItem("myLeads"));
    
})

function renderLeads() {
    let listItems = ""

    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li> 
            <a href= '${myLeads[i]}' +  target = '_blank'> ${myLeads[i]} </a>
        </li>
        `
    }

    ulEl.innerHTML = listItems
}
*/

/*
//S5L48 Refactor renderLeads() to use a parameter

let myLeads = []
let inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// Refector the function so that it takes a parameter, leads, that it uses
// instead of the global myLeads variable. Remember to update all invocations 
// of the function as well.

function render(leads) {
    let listItems = ""

    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li> 
            <a href= '${leads[i]}' +  target = '_blank'> ${leads[i]} </a>
        </li>
        `
    }

    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)   
})


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads);

    console.log(localStorage.getItem("myLeads"));
    
})
*/
/*
//S5L49 Create the tabBtn

let myLeads = []
let inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// 1. Grab the SAVE TAB button and store it in a tabBtn variable
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
tabBtn.addEventListener("click", function(){
    console.log(tabs[0].url);
})

function render(leads) {
    let listItems = ""

    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li> 
            <a href= '${leads[i]}' +  target = '_blank'> ${leads[i]} </a>
        </li>
        `
    }

    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)   
})


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads);

    console.log(localStorage.getItem("myLeads"));
    
})
*/

/*
//S5L50 Save the tab url

let myLeads = []
let inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

tabBtn.addEventListener("click", function(){
    // Save the url instead of logging it out
    console.log(tabs[0].url);
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

function render(leads) {
    let listItems = ""

    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li> 
            <a href= '${leads[i]}' +  target = '_blank'> ${leads[i]} </a>
        </li>
        `
    }

    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)   
})


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads);

    console.log(localStorage.getItem("myLeads"));
    
})
*/

//S5L52 Use the Chrome API to get the tab

let myLeads = []
let inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    }) 
})

function render(leads) {
    let listItems = ""

    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li> 
            <a href= '${leads[i]}' +  target = '_blank'> ${leads[i]} </a>
        </li>
        `
    }

    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)   
})


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads);

    console.log(localStorage.getItem("myLeads"));    
})


/*

    RECAP
    - const
    - addEventListener()
    - innerHTML
    - input.value
    - function parameters
    - template strings
    - localStorage
    - The JSON object
    - Objects in arrays
    
*/