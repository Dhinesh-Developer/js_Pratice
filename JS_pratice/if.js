/*
let age = 25;
if(age >= 18){
    console.log("You are old enough to enter this site");
}
else{
    console.log("you must be 18+ to enter this site");
}
//if else
let time = 14;
if(time < 12){
    console.log("Good morning!");
}else{
    console.log("Good afternoon");
}
// boolean type
let isStudent = false;
if(isStudent){
    console.log("you are a student");
}else{
    console.log("you are not a student");
}
// nested if
let age1 =25;
let hasLicense = false;
if(age >= 16){
    console.log("You are old enough to drive");
    if(hasLicense)
    {
        console.log("You have your license");
    }else{
        console.log("you do not have a license");
    }
}else{
    console.log("You must to be 16+ to have a license");
}


// else if
let age2 = 18;
if(age>=18){
    console.log("you are old enough to enter this site");
}
else if(age < 0){
    console.log("your age cant to be below 0");
}
else if(age >=100){
    console.log("You are 100 olt to enter this site");
}
else{
    console.log("you must to be 18+ to enter this site");
}
*/

// pratice
var age;
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
mySubmit.onclick = function(){
    age  = myText.value;
    age = Number(age);
    if(age>=18){
        
        resultElement.textContent=`you are old enough to enter this site`;
    }
    else if(age < 0){
        resultElement.textContent = `your age cant to be below 0`;
    }
    else if(age >=100){
        resultElement.textContent=`You are 100 olt to enter this site`;
    }
    else{
        resultElement.textContent=`you must to be 18+ to enter this site`;
    }
}
