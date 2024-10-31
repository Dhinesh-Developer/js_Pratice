let numbers = [1,2,3,4,5];
console.log(numbers); //NaN

let maximum = Math.max(...numbers) //5
console.log(maximum);

let minimum = Math.min(...numbers); //1
console.log(minimum);

let userName = "Dhinesh Kumar";
let letters = [...userName];
console.log(letters);
// ['D', 'h', 'i', 'n', 'e', 's', 'h', ' ', 'K', 'u', 'm', 'a', 'r']

let fruits = ["apple","orange","bannana"];
let newFruits = [...fruits]; // copying a array
console.log(newFruits);
console.log(fruits);