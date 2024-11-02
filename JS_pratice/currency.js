/*
// Format currency.
let number = 123456.789;
// number = number.toLocaleString(undefined); //default locale
number = number.toLocaleString("de-DE");  //123.456,789
console.log(number); //123,456.789 default locale
*/

let number = 123456.789;
// number = number.toLocaleString("en-US"); //123,456.789
console.log(number);
number = number.toLocaleString("hi-IN");
console.log(number); //1,23,456.789

let num = 123456.789;
num = num.toLocaleString("en-US",{style:"currency",currency:"USD"});
console.log(num); //$123,456.79
