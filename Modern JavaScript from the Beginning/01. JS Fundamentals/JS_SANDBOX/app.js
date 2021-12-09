// // var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith'
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'helo';
// console.log(greeting);

// letters, numbers, _, $
// can not start with a number

// Let
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// CONST
// const name = 'john';
// console.log(name);
// Can not reassign
// const name = 'sara';
// Have to assign a value
// const greeting = 'sara';
// console.log(greeting);


// const person = {
//     name: 'John',
//     age: 30
// }

// person.name = 'sara';
// person.age = 32;

// // console.log(person);

// const numbers = [1, 2, 3, 4, 5];
// numbers.push(6);

// console.log(numbers);

/*
//PRIMITIVE
// String
const name = 'John Doe';
// Number
const age = 45;
// Boolean
const hasKids = true;
// Null
const car = null;
// Undefined
let test;
// Symbol
const sym = Symbol();


// REFERENCE TYPES - Objects
// Array
const hobbies = ['movies', 'music'];
// Object literal
const address = {
    city : 'Comilla',
    division: 'CTG'
}

const today = new Date();


console.log(typeof name);
console.log(typeof age);
console.log(typeof hasKids);
console.log(typeof car);
console.log(typeof test);
console.log(typeof sym);
console.log(typeof hobbies);
console.log(typeof address);
console.log(today);
console.log(typeof today);


let val;

// Number to string
val = String (5);
val = String (3+3);
// Boolean to string
val = String(true);
// Date to String
val = String(new Date());
// Array to string
val = String([1,2,3,4]);
// toString
val = (5).toString();
val = (true).toString();

// String to number
val = Number('2');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1,2,3]);

val = parseInt('100.30');
val = parseFloat('100.31');



// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(2));



const val1 = '5';
const val2 = '6';
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);


const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.5);
val = Math.floor(2.7);
val = Math.sqrt(49);
val = Math.abs(-4);
val = Math.pow(4, 3);
val = Math.min(2,23,31,1,3,5);
val = Math.max(2,23,31,1,3,5);
val = Math.ceil(3.01);
val = Math.random();
val = Math.floor(Math.random() * 10 + 1);

console.log(val);

*/

/*
const firstName = 'Abdullah';
const lastName = 'Jobaer';
const age = 24;
const str = 'Hello there my name is jobaer'
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad';
val += ' Traversy';

val = 'Hello, my name is ' + firstName + ' ' + lastName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toUpperCase().concat(' ', lastName.toUpperCase());

val = firstName[3]

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('ll');

// charAt()
val = firstName.charAt('3');
// Get last char
val = firstName.charAt(firstName.length -3);

// substring()
val = firstName.substring(0, 6);
val = firstName.substring(5, -4);

// slice is very similar to substring
val = firstName.slice(0, 6);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('jobaer', 'Robin');

// includes()
val = str.includes('is')

console.log(val);

*/ 

/*
const name = 'John';
const age = 35;
const job = 'Web Developer';
const city = 'Miami';
let html;

// Without template strings (es5)
html = '<ul>' +
       '<li>Name: ' + name + '</li>' +
       '<li>Age: ' + age + '</li>' +
       '<li>Job: ' + job + '</li>' +
       '<li>City: ' + city + '</li>' +
       '</ul>';


function hello() {
    return 'hello';
}

// With template strings (es6)
 html = `
    <ul>
        <li>Name: ${name} </li>
        <li>Age: ${age} </li>
        <li>Job: ${job} </li>
        <li>City: ${city} </li>
        <li> ${2 + 4} </li>
        <li> ${hello()} </li>
        <li> ${age > 30 ? 'Over 30' : 'Under 30'} </li>
    </ul>
`;


document.body.innerHTML = html;

*/

/*

// 012 ARRAYS ARRAY METHODS
// Create some Arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(23, 42, 55, 66, 77, 88);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get the length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[5]
val = numbers[0]
// Insert into array
numbers[2] = 100;
//Find index of value
val = numbers.indexOf(36);
/*
// MUTATING ARRAYS
// Add on to end
numbers.push(250);
// Add to front
numbers.unshift(250);
// Take off from end
numbers.pop();
// Take off from front
numbers.shift();
// Splice values
numbers.splice(1,3);
// Reverse
numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
// val = numbers.sort();
/*
// use the "compare function"
val = numbers.sort(function(x,y){
    return x - y;
});

// Reverse sort
val = numbers.sort(function(x,y){
    return y-x;
});
*/

/*
// Find
function over50(num) {
    return num > 50;
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);
*/

/*
// 013 OBJECT LITERALS

const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function() {
        return 2021 - this.age;
    }
}

let val;

val = person;
// Get specific value
val = person.firstName; // recommended
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.email;
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23},
    {name: 'Nancy', age: 20}
    
]

for(let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}

// 014 Dates Times

let val;

const today = new Date();
let birthday = new Date('3-5-1995 11:05:00');
birthday = new Date('March 05 1995');


val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(3);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(4);
birthday.setMinutes(20);
birthday.setSeconds(01);

console.log(birthday);

*/

/*

015 If Statements Comparison Operators

// if (something) {
//     do something
// }   else {
//     do something else
// }

const id = 100;



// EQUAL TO
if(id == 100) {
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// NOT EQUAL TO
if(id != 110) {
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// EQUAL TO VALUE & TYPE
if(id === 100) {
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// EQUAL TO VALUE & TYPE
if(id !== 100) {
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}


// Test if undefined
if(typeof id !== 'undefined') {
    console.log(`The ID is ${id}`);
} else {
    console.log('NO ID');
}



// GREATER ORR LESS THAN

if(id >= 111){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}



// IF ELSE
const color = 'blue'

if(color === 'red') {
    console.log('Color is red');
} else if(color === 'blue') {
    console.log('Color is blue');
} else {
    console.log('Color is not red or blue');
}



// LOGICAL OPERATORS
const name = 'Steve';
const age = 4;

// AND &&
if(age > 0 && age < 12){
    console.log(`${name} is child`);
} else if(age >=12 && age <=19){
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if(id === 10)
    console.log('CORRECT');
else
    console.log('INCORRECT');

*/

/*

// 016 Switches

const color = 'green';

switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

let day;

switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}`);

*/


/*

// 017 Functions Declarations Expressions

// FUNCTION DECLARATIONS
function greet(firstName = 'John', lastName = 'Doe'){
    //console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName
}

// console.log(greet());

// FUNCTIONS EXPRESSIONS

const square = function(x = 3){
    return x*x;
};

// console.log(square());

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS = IIFEs

// (function(){
//     console.log('IIFE ran..');
// })();


// (function(name){
//     console.log('Hello ' + name);
// })('Brad');


// PROPERTY METHODS

const todo = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);

    }
}

todo.delete = function(){
    console.log('Delete todo..');
}

todo.add();
todo.edit(2);
todo.delete();

*/

// 018 General Loops

/*
// FOR LOOP
for(let i = 0; i <= 10; i++) {
    if(i === 2) {
        console.log('Number 2 is my favorite');
        continue;
    }

    if(i === 5) {
        console.log('The loop stopped');
        break;
    }

    console.log('Number ' + i);
}


// WHILE LOOP
let i = 0;

while (i < 10) {
    console.log('Number ' + i);
    i++;
}



// DO WHILE
let i = 0;

do {
    console.log('Number ' + i);
    i++;
}
while(i <= 10);


// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for(let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}


const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

//FOR EACH
cars.forEach(function(car){ //Suggested method
    console.log(car);
});


// MAP
const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Sara'},
    {id: 3, name: 'Karen'},
];

const ids = users.map(function(user){
    return user.id;
});

const name = users.map(function(user){
    return user.name;
});

console.log(ids, name);


//FOR EACH again
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

cars.forEach(function(car, index){ //Suggested method
    console.log(`${index} : ${car}`);
});


// FOR IN LOOP
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for(let x in user) {
    console.log(`${x} : ${user[x]}`);
}



// 019 A Look at The Window Object

// WINDOW METHODS / OBJECTS / PROPERTIES


// Alert
//alert('Hello');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
if(confirm('Are you sure?')) {
    console.log('YES');
} else {
    console.log('NO');
}


let val;

// Outer height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Sroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.protocol;
val = window.location.search;

// Redirect
window.location.href = 'http://google.com';

//Reload
window.location.reload();


// History Object
window.history.go(2);
val = window.history.length;


// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);



// 020 Block Scope with let const

// Global Scope
var a = 1;
let b = 2;
const c = 3;

// function test() {
//     var a = 4;
//     let b = 5;
//     const c = 6;

//     console.log('Function Scope:', a, b, c);
// }

// test();

// if(true) {
//     // Block Scope
//     var a = 4;
//     let b = 5;
//     const c = 6;

//     console.log('If Scope:', a, b, c);
// }

for(var a  = 0; a < 10; a++) {
    console.log(`Loop: ${a}`);
}

console.log('Global Scope:', a, b, c);
*/
