let fruits = ["apple","orange", "banana", "coconut"];
fruits.sort();
console.log(fruits);

let numbers = [1, 10, 9, 5, 4, 7, 8, 3, 2, 6];
// numbers.sort((a,b) => a-b);
numbers.sort((a,b) => b-a);
console.log(numbers);

const people = [{name : "spongeBob" , age  :30, gpa:3.0},
    {name : "patrick" , age  :20, gpa:4.0},
    {name : "sandy" , age  :42, gpa:4.2}
    ,{name : "matrix" , age  :27, gpa:4.7}
]
people.sort((a,b) => b.age-a.age);
people.sort((a,b) => a.gpa-b.gpa);
console.log(people);