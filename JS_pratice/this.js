const person1 = {
    name : "sponebob",
    favFood : "hamburgers",
    sayHello : function(){console.log(`hai i am ${this.name}`)},
    eat : function(){console.log(`${this.name} is eating ${this.favFood}`)},
}

const person2 = {
    name : "patrick",
    favFood : "pizza",
    sayHello : function(){console.log(`hai i am ${this.name}`)},
    eat : function(){console.log(`${this.name} is eating ${this.favFood}`)},
}
person1.sayHello(); // hai i am sponebob
person1.eat(); //sponebob is eating hamburgers
person2.eat();