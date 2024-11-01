/*
function outer(){
    let message = "Hello";
    function inner(){
        console.log(message);
    }
}
message = "Goodbye";
outer();
*/


function createCounter(){
    let count = 0;
    function increment(){
       count++;
       console.log(`count increased to ${count}`);
    }
    function getCount(){
        return count;
    }
    return {increment};
}
// increment();
const counter = createCounter();
counter.increment();
counter.increment();
counter.count = 0;
console.log(counter.count);

console.log(`The current count is ${counter.getCount()}`);
