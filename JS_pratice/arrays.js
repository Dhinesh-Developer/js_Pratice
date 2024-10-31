let fruit = ["apple","banana","orange"];
console.log(fruit);
console.log(fruit[1]);
console.log(fruit[0]);

// fruit[1] = "coconut";
console.log(fruit);

fruit.push("coconut");
console.log(fruit);
fruit.pop();
console.log(fruit);
fruit.unshift("mango");
console.log(fruit);
fruit.shift();
console.log(fruit);

let numOfFruits = fruit.length;
let index = fruit.indexOf("mango");
console.log(index);

for(let i=0;i<=fruit.length;i++){
    console.log(fruit[i]);
}

for(let i=fruit.length;i>=0;i--){
    console.log(fruit[i]);
}

fruit.sort();
for(let fruits of fruit){
    console.log(fruits);
}

fruit.sort().reverse();
console.log(fruit);