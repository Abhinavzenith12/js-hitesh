// JavaScript is a dynamically typed language

// Primitive data types(call by value)
// These are predefined datatypes
// 7 types:- String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;// undefined

const id = Symbol('123');
const anotherId = Symbol('123');

const bigNumber = 34567890567n


// Non-primitve Data types(call by reference)
// These are user defined datatypes
// Array, Objects, Functions


// Arrays
const heros = ["Shaktiman", "Naagraj", "Doga"];

// Objects
let myObj = {
    name:"Abhinav",
    age: 23
}


// Function
const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof bigNumber);