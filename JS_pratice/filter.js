/*
let numbers = [1,2,3,4,5,6,7];

let evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

function isEven(element){
    return element % 2===0;
}

let oddNumbers = numbers.filter(isOdd);
console.log(oddNumbers);

function isOdd(element){
    return element %2!==0;
}
*/

const ages = [16,17,18,19,20,60];
const adults = ages.filter(isAdult);
console.log(adults);
function isAdult(element){
    return element>=18;
}

const child = ages.filter(isChild);
console.log(child);
function isChild(element){
    return element<18;
}

const words = ["apple","banana","kiwi","orange","pomegrante","coconut"];
const shortWords = words.filter(getShortWords);
console.log(shortWords);
function getShortWords(element){
    return element.length <= 6;
}

const longWords = words.filter(getLongWords);
console.log(longWords);
function getLongWords(element){
    return element.length > 6;
}