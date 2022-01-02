/*

// 022 Examining The Document Object

let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
    console.log(script.getAttribute('src'));
});


console.log(val);



// 023 DOM Selectors For Single Elements

// document.getElementById()

console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// Change styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';



// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'green';
document.querySelector('li:nth-child(4)').textContent = 'Hellow World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';



// 024 DOM Selectors for Multiple Elements

// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');

console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);


// document.getElementsByTagName

let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

// Convert HTMl Collection into Array
lis = Array.from(lis);

lis.reverse();

lis.forEach(function(li, index){
    console.log(li.className);
    li.textContent = `${index}: Hello`;
});

console.log(lis);


// document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even');

liOdd.forEach(function(li, index){
    li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = '#f4f4f4';
}

console.log(items);




// 025 Traversing The Dom

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get Child Nodes (node list)
val = list.childNodes;
val = list.childNodes[1].nodeName;
val = list.childNodes[1].nodeType;


// Get Children Element Nodes (HTML collection)
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First Child
val = list.firstChild;
val = list.firstElementChild;

// Last Child
val = list.lastChild;
val = list.lastElementChild;

// Count Child Elements
val = list.childElementCount;

// Get Parent Node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.previousElementSibling;

// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;


console.log(val);

// 026 Creating Elements

// Create element
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'New-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';
// Add icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);


// 027 Removing Replacing Elements

// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'task-title';

// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASSES and ATTRIBUTE
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[1];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(val);


// 028 Event Listeners - The Event Object

// document.querySelector('.clear-tasks').addEventListener('click', 
// function(e){
//     console.log('Hello World');

//     //e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
    //console.log('Clicked');

    let val;
    
    val = e;

    // Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    //e.target.innerText = 'Hello';
    
    // Event type
    val = e.type;
    
    // Timestamp
    val = e.timeStamp;

    // Co-ordinates event relative to the window
    val = e.clientY;
    val = e.clientX;

    // Co-ordinates event relative to the element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
}



// 029 Mouse Events

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);

// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);

// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);

// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);

// Mouseenter
//card.addEventListener('mouseenter', runEvent);

// Mouseleave
//card.addEventListener('mouseleave', runEvent);

// Mouseover
//card.addEventListener('mouseover', runEvent);

// Mouseout
//card.addEventListener('mouseout', runEvent);

// Mousemove
card.addEventListener('mousemove', runEvent);


// Event Handler
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
*/


// 030 Keyboard Input Events

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent);

// Keyup
// taskInput.addEventListener('keyup', runEvent);

// Keypress
// taskInput.addEventListener('keypress', runEvent);

// Focus
// taskInput.addEventListener('focus', runEvent);

// Blur
// taskInput.addEventListener('blur', runEvent);

// Cut
// taskInput.addEventListener('cut', runEvent);

// Paste
// taskInput.addEventListener('paste', runEvent);

// input
// taskInput.addEventListener('input', runEvent);

// Change
select.addEventListener('change', runEvent);

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    console.log(e.target.value);

    // heading.innerText = e.target.value;

    // Get input value
    // console.log(taskInput.value);

    // e.preventDefault();
}

// 031 Event Bubbling Delegation

// EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click', 
// function() {
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click',
// function() {
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', 
// function() {
//     console.log('card')
// });

// document.querySelector('.col').addEventListener('click', 
// function() {
//     console.log('col')
// });


// EVENT DELEGATION

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //     console.log('delete-item');
    // }

    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('delete-item');
        e.target.parentElement.parentElement.remove();
    }

}