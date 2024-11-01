function hello(){
    console.log("hello");
}

const hello1 = function(){
    console.log("hello");
}
setTimeout(function(){
    console.log("Hello1");
},3000);


const numbers = [1,2,3,4,5,6];
const squares = numbers.map(square);
console.log(squares);
function square(element){
    return Math.pow(element, 2);
}

// Function expressions.
const cubes = numbers.map(function cube(element){
    return Math.pow(element,3);
});
console.log(cubes);
