const fruits = [{name:"apple", color: "red",calories: 95}, 
    {name:"banana", color: "yellow",calories: 45}, 
    {name:"orange", orange: "red",calories: 50}, 
    {name:"coconut", color: "white",calories: 76}, 
    {name:"guava", color: "light green",calories: 98}];

console.log(fruits[0]);

// fruits.pop();
fruits.push({name: "graphes", color: "purple", calories:62});
console.log(fruits);

fruits.slice(1, 2);
console.log(fruits)

// -------for Each ------

fruits.forEach(fruit => console.log(fruit));
fruits.forEach(fruit => console.log(fruit.calories));

const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);
const fruitColor = fruits.map(fruit => fruit.color);
console.log(fruitColor);
const fruitCalories= fruits.map(fruit => fruit.calories);
console.log(fruitCalories);

// -------filter()-----

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellowFruits);

const lowCalFruits = fruits.filter(fruit => fruit.calories < 70);
console.log(lowCalFruits);