// * DOM Manipulation
// const getClassItem = document.getElementsByClassName("get-item")[0]
// const getIdItem = document.getElementById("get-item")
// const divElement = document.querySelectorAll("div")[0]

// * Adding Event Listener, Getting item by class name and id
// getClassItem.addEventListener("click", (event) => {
// * TextContent --> It changes elements text content
//     getClassItem.textContent = "Got Element By Class Name"
// * It adds class 'color' to element and toggle it which means turn off and on
//     getClassItem.classList.toggle("color")
// * It adds class 'color' to element
// getClassItem.classList.add("color")
// * It removes class 'color' to element
// getClassItem.classList.remove("color")
// })

// * Change text content of element and toggle class color on element
// getIdItem.addEventListener("click", (event) => {
//     getIdItem.textContent = "Got Element By ID"
//     getIdItem.classList.toggle("color")
// })

// * innerHTML --> !Not recommended changes its html property/element
// getIdItem.innerHTML = "<h1>This replace its inner HTML</h1>"

// * firstElementChild --> selects first child of element
// console.log(divElement.firstElementChild)
// console.log(divElement.firstChild);

// * lastElementChild --> selects last child of element
// console.log(divElement.lastElementChild)
// console.log(divElement.lastChild);

// * classList --> It return classes list which is associated to element
// console.log(getIdItem.classList);

// * setAttribute --> Setting attribute to div element of class="red" that adds css property
// divElement.setAttribute("class","red")

// * getAttribute --> It get attribute of element where you require to specify which attribute you want
// console.log(divElement.getAttribute("class"))

// * CreateElement --> You can also create element inside select element
// document.body.onload = addElement;
// function addElement() {
//     // create a new div element
//     const newDiv = document.createElement("div");
//     // and give it some content
//     const newContent = document.createTextNode("Hi there and greetings!");
//     // add the text node to the newly created div
//     newDiv.appendChild(newContent);
//     // add the newly created element and its content into the DOM
//     document.body.insertBefore(newDiv, divElement);
// }

// * JavaScript Types
// 1) Number
// 2) String
// 3) Boolean
// 4) Undefined
// 5) Null
// 6) Symbol
// 7) Object

// document.write("<h1>This is written from JavaScript</h1>")

// * Alert Message
// alert("This is alert message")

// * Returns type of any variable/object
// const bde = "This is BDE"
// console.log(typeof (bde));

// * Prompt ask question which returns answer string
// const answer = prompt("This is question")
// console.log(answer);

// * Variables
// * This is constant variable
// const name = "Joe"
// * This is mutable variable
// let age = 22
// * This is also mutable variable. It is old way to declare variable before ES6. It has many drawbacks.
// var gender = "Male"

// * It is used to debug code inside chrome or browser. It acts as block point of debugger.
// debugger

// * Slice string --> splits string from start position to end position defined in function
// const str = "This is string slicing"
// console.log(str.slice(2, 11));

// * Get String length
// const str = "This will get string length counting each character"
// console.log(str.length);

// * Change string to upper cased
// const str = "this will be upper cased"
// console.log(str.toUpperCase());

// * Change string to lower cased
// const str = "THIS WILL BE LOWER CASED"
// console.log(str.toLowerCase());

// * Mathematics operations
// * Square Root
// console.log(Math.sqrt(12));

// * Power of value1 by value2
// console.log(Math.pow(3,2));

// * Generate Random number limit of 6
// console.log(Math.random() * 6);

// * Round down value or floor value
// console.log(Math.floor(Math.random() * 6 + 1));

// * Creating Arrays
// const arr = ["Jaby", "Brandon", "Jeff", "Josh"]
// console.log(arr);
// * Adding value in array
// arr.push("Joe")
// console.log(arr);
// * Deleting value from array
// arr.pop("Josh")
// console.log(arr);

// * Ternary Operator
// const condition = true
// const ternary = condition ? "This is true" : "This is false"
// console.log(ternary);

// * Function Syntax
// * Arrow Function
// const arrow = (val1, val2) => {
//     return val1 + val2
// }
// console.log(arrow(12, 55));
// * Oneliner Arrow Function
// const square = (x) => x ** 2
// console.log(square(12));

// * Normal Function
// function name(params) {
//     return
// }

// * Variable Function
// const varFun = function (v1, v2) {
//     return v1 * v2
// }
// console.log(varFun(12, 3))

// * Anonymous Function
// console.log((function (v1, v2) {
//     return v1 / v2
// })(12, 4))
// OR
// function(){
//     body;
// }

// * Maps or JSON
// const map = {
//     key: "value"
// }
// console.log(map);
// OR
// const mapArray = [{
//     name: "Brandon",
//     age: 21
// }, {
//     name: "Joe",
//     age: 32
// }, {
//     name: "Sean",
//     age: 47
// }]
// console.log(mapArray);

// * Template String --> String concatination
// const name = "Jeff"
// const print = `My name is ${name}`
// console.log(print);

// * Loops --> Iterate through each item of array
// const array = ["Mathiew", "Shane", "Andriew", "Greg", "Shida"]
// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
// }

// * ForEach Loop
// array.forEach(item => {
//     console.log(item);
// })

// * For of loop
// for (item of array) {
//     console.log(item);
// }

// * Map Array --> It can return values also of loop.
// array.map(item =>{
//     console.log(item);
// })

// * Filter Array --> It filters array through condition you define return value inside new array
// const res = array.filter(item => item === "Shane")
// console.log(res);

// * Reduce Array --> It reduces array to single value and returns it.
// const array1 = [1, 2, 3, 4];
// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//     (previousValue, currentValue) => previousValue + currentValue,
//     initialValue
// );
// console.log(sumWithInitial);
// // expected output: 10

// * For in loop --> It iterate over keys of map/json
// const object = { a: 1, b: 2, c: 3 };
// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

// * flatmap --> It works like flat but it can also iterate.
// const arr1 = [1, 2, [3], [4, 5], 6, []];
// const flattened = arr1.flatMap(num => num);
// console.log(flattened);
// // expected output: Array [1, 2, 3, 4, 5, 6]

// * find --> It also iterate but it compares and return first value
// const array = ["Mathiew", "Shane", "Sean", "Andriew", "Greg", "Shida"]
// const result = array.find(item =>item === "Sean")
// console.log(result);

// * findIndex --> It finds index of searched item and also iterates
// const array = ["Mathiew", "Shane", "Sean", "Andriew", "Greg", "Shida"]
// const result = array.findIndex(item => item === "Shida")
// console.log(result);

// * Type Coercion --> Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another.
// * Strict comparition '==='
// const val1 = 12
// const val2 = "12"
// console.log(val1 === val2); // False
// * Loose comparition '=='
// console.log(val1 == val2); // True

// * Object Oriented Programming (OOPS)
// class Test {
//     // This is object inside class scope
//     learn = "Learning JavaScript"
//     // Class constructor
//     constructor() {
//         console.log("This will execute first because its constructor");
//     }
//     // Class method/function
//     method() {
//         console.log("This is Method of class");
//     }
//     print() {
//         // Accessing variable/object declared in class scope
//         console.log(this.learn);
//     }
// }

// Creating new object of class
// const object = new Test()
// object.method()
// object.print()

// * Spread Operator | Clone Object
// const source = ["Computer", "Maths", "DBMS", "OS"]
// const dest = [...source, "Networking"]
// console.log(source);
// console.log(dest);

// * Destructuring Object (map/json)
// const users = {
//     name: "Joe",
//     profile: "Web Developer",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptates!"
// }
// const { name } = users
// console.log(name);

// * Array Includes --> To check weather specified value exist or not returns result in boolean
// const arr = ["Computer", "Maths", "DBMS", "OS", "Networking", "Web Development"]
// const res = arr.includes("OS")
// const res = arr.includes("SQL")
// console.log(res);

// * Spaces and Padding --> PadStart and PadEnd
// * PadStart
// const str1 = '5';
// console.log(str1.padStart(2, '0'));
// // expected output: "05"
// const fullNumber = '2034399002125581';
// const last4Digits = fullNumber.slice(-4);
// // It require string greater number of character than current
// const maskedNumber = last4Digits.padStart(fullNumber.length, '*');
// console.log(maskedNumber);
// // expected output: "************5581"

// *PadEnd
// const str1 = 'Breaded Mushrooms';
// console.log(str1.padEnd(25, '.'));
// // expected output: "Breaded Mushrooms........"
// const str2 = '200';
// console.log(str2.padEnd(5));
// // expected output: "200  "

// * Object keys --> It covert JSON/Map/Dictionary to array of keys
// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
// };
// console.log(Object.keys(object1));

// * Object Values --> It converts Map/JSON to array which has values
// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
// };
// console.log(Object.values(object1));

// * Object Entries --> It makes both key & Value seprate array
// const object1 = {
//     a: 'somestring',
//     b: 42
// };
// for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
// }
// console.log(Object.entries(object1));

// * Flat Array --> Its remove unnecessary scope of arrays, You can put number scopes you want to flat it down or remove array scope
// const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat());
// // expected output: [0, 1, 2, 3, 4]
// const arr2 = [0, 1, 2, [[[3, 4]]]];
// console.log(arr2.flat(2));
// // expected output: [0, 1, 2, [3, 4]]

// * Conditional Statement --> If condition meets then if or else-if block execute, if no condition meets then else block executes
// const value = true
// if (value) {
//     console.log("TRUE");
// } else {
//     console.log("False");
// }
// OR
// const maths = "33"
// if (maths >= 33 && maths < 100) {
//     console.log("You passed exams");
// } else {
//     console.log("You failed exams");
// }
// OR
// const subject = "Java"
// if (subject === "OS" || subject === "DBMS" || subject === "Networking") {
//     console.log("You are working on theory subject");
// } else if (subject === "Python" || subject === "Java" || subject === "Cpp") {
//     console.log("You are working programming languages");
// } else {
//     console.log("You subject is not part of semester or course");
// }

// * Trim string, trimStart and trimEnd --> Remove redundant spaces from string
// const text = "     trim remove redundant space from starting and ending     "
// console.log(text.trim());
// const text = "        trim start will remove redundant space from starting of string"
// console.log(text.trimStart());
// const text = "trim end will remove redundant space from ending of string        "
// console.log(text.trimEnd());

// * It converts array to key-value object (map/json)
// const entries = new Map([
//     ['foo', 'bar'],
//     ['baz', 42]
// ]);
// const obj = Object.fromEntries(entries);
// console.log(obj);

// * Exception Handling
// try {
//     throw Error("This is explicitly thrown error")
// } catch (error) {
//     console.log(error);
// } finally{
//     console.log("This will execute no matter what");
// }

// * SetTimeout (time thread) --> It set time and execute code of its block after defined time
// const timeout = setTimeout(() => {
//     console.log("This is timer function and will execute after 2 seconds.");
// }, 2000);

// * It removes setTimeout timer, if remove then setTimeout codeblock doesn't executes
// clearTimeout(timeout)

// * SetInterval --> This will execute codeblock of setInterval everytime after defined time infinitely
// const interval = setInterval(() => {
//     console.log("This will execute after every 1 second.");
// }, 1000);
// * To stop setInterval to execute infinitely we use clearInterval to clear its execution
// clearInterval(interval)

// * Importing and exporting modules
// * ES6 Syntax
// import name from module_name
// * Prior to ES6 (ES5 or earlier)
// const name = require("module_name")

// * Advance Function
// * Closures --> Closure is the combination of a function bundled together with references to its surrounding state. It gives you access to an outer function's scope from an inner function.
// function makeFunc() {
//     const name = 'Mozilla';
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }
// const myFunc = makeFunc();
// myFunc();

// * Currying --> Currying is a process in functional programming in which we can transform a function with multiple arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline.
// function multiply(x) {
//     return (y) => {
//         return (z) => {
//             return x * y * z
//         }
//     }
// }
// console.log(multiply(1)(2)(3)) // 6

// * Function composition --> It is an approach where the result of one function is passed on to the next function, which is passed to another until the final function is executed for the final result. Function compositions can be composed of any number of functions.
// const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
// const double = x => x * 2
// const square = x => x * x
// var output_final = compose(square, double)(2);
// console.log(output_final);
// OR
// const com = (f, g) => (a) => f(g(a))

// * Object of Function
// function info(name, age) {
//     this.name = name
//     this.age = age
// }
// const obj = new info("Jonas", 42)
// console.log(obj);

// * Promises
// function success() { console.log("Your promise got resolved") }
// function failed() { console.log("Your promise got rejected") }
// const myPromise = new Promise(async (resolve, reject) => {
//     setTimeout(() => {
//         // resolve()
//         reject()
//     }, 1000)
// });
// myPromise.then(success, failed)
// OR
// function myDisplayer(some) {
//     document.querySelector("body").innerHTML = some;
// }
// let myPromise = new Promise(function (myResolve, myReject) {
//     let x = 0;
//     // The producing code (this may take some time)
//     if (x == 0) {
//         myResolve("OK");
//     } else {
//         myReject("Error");
//     }
// });
// myPromise.then(
//     function (value) { myDisplayer(value); },
//     function (error) { myDisplayer(error); }
// );