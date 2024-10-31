const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotDog";
const food4 = "sushi";

function openFridge(...foods){
    console.log(...foods);
}

function getFood(...foods){
    return foods;
}
openFridge(food1,food2,food3,food4);
const foods = getFood(food1,food2,food3,food4);
console.log(foods);

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result +=number;
    }
    return result;
}
const total = sum(1,2,3,4,5);
console.log(`your total is $${total}`);

function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){ 
        result +=number;
    }
    return result/numbers.length;
}
const total1 = getAverage(1,2,3,4,5);
console.log(`your total is $${total1}`);