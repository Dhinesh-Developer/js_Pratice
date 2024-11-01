/*
// Example 1
// swap the values of two variables.

let a = 1;
let b = 2;
[a,b] = [b,a];
console.log(a);
console.log(b);

// Example 2
// swap 2 elements in an array.
const colors = ["red","green","blue","black","white"];
[colors[0],colors[4]] = [colors[4],colors[0]];
console.log(colors);
*/

//-----Example 3------
//Assign array elements to variables.

const colors = ["red","green","blue","black","white"];
const [firstColor,secondColor,thirsColor ,...extraColor] = colors;
console.log(firstColor); //red
console.log(secondColor); //green
console.log(thirsColor); //blue
console.log(extraColor); // ['black', 'white']

//-----Example 4------
// Extract values from objects.

const person1 = {
    firstName:"spongebob",
    lastName : "sqarePants",
    age  :30,
    job : "Fry cook",
}
const person2 = {
    firstName:"patrick",
    lastName : "adam",
    age  :42,  
}
// const {firstName, lastName , age, job} = person1;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
//console.log(job);

const {firstName,lastName,age,job="umemployed"} = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
