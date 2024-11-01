// setTimeout(callback,delay);
// clearTimeout() = can cancel a timeout before if triggers.

/*
function sayHello(){
    window.alert("Hello");

}
setTimeout(sayHello,3000);

setTimeout(function(){window.alert("Hello")},3000);
*/

/*

const timeoutId =  setTimeout(() => window.alert("Hello"), 3000);
clearTimeout(timeoutId);
*/

function startTimer(){
    setTimeout(() =>window.alert("Hello"),3000);
}

let timeoutId;
function clearTimer(){
    clearTimeout(timeoutId);
    console.log("Cleared");
}