/*
const person = {
    fullName : "spongebob",
    age : 30,
    isStudent : true,
    hobbies : ["karata","jelyyFishing","cooking"],
    address:{
        street : "124 conch st.",
        city : "bikini bottom",
        country: "Int. Water"
    }
}


console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
// console.log(person.address);
console.log(person.address.street);


for(const property in person.address){
    console.log(person.address[property]);
}
*/
class person{
    constructor(name, age,...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new person("spongebob",30,"124 conch st.",
    "bikinni Bottom","Int. Water");

    
const person2 = new person("patrick",40,"123 beasr st.",
    "west Bottom","Int. air");

    console.log(person1.address);
    console.log(person2.address);
    console.log(person1.name);
    console.log(person2.age);