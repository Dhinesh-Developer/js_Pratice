
/*
function hello(){
    console.log("Hello !");
}
hello();

function goodBye(){
    console.log("Good Bye !");
}
goodBye();

function hello(){
    setTimeout(function(){
        console.log("Hello !");
    },3000);
}
*/

/*
hello(wait);
function leave(){
    console.log("leave");
}
hello(leave);

function wait(){
    console.log("Wait");
}
function goodBye(){
    console.log("Good Bye !");
}

function hello(callback){
    console.log("Hello !");
    callback();
}
hello(goodBye);
*/

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}
function displayConsole(){
    console.log(result);
}
sum(displayConsole, 1, 2);