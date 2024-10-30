const fullName = "Dhinesh Kumar";
/*
let firstName = fullName.slice(0,7); //Dhinesh
let lastName = fullName.slice(8,13);  //Kumar

let firstChar = fullName.slice(0,1); //D
let lastChar = fullName.slice(-1); //r

console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);
*/

let firstName = fullName.slice(0,fullName.indexOf(" ")); //Dhinesh
console.log(firstName);
let lastName = fullName.slice(fullName.indexOf(" ")+1); //Kumar
console.log(lastName);

const email = "Kumar@gmail.com";
let username = email.slice(0,email.indexOf("@")); //kumar
console.log(username);
let extension = email.slice(email.indexOf("@")); //@gmail.com
console.log(extension);
