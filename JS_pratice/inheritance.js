class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}
class Rabbit extends Animal{
     name = "rabbit";
     run(){
        console.log(`This ${this.name} is runninng!`);
     }
}

class Fish extends Animal{
    name = "Fish";
    swim(){
        console.log(`This ${this.name} is swimming!`);
    }
}

class Hawk extends Animal{
    name = "Hawk";
    fly(){
        console.log(`This ${name} is flying!`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();
// rabbit.alive = false;
console.log(rabbit.alive);
fish.eat();
fish.sleep();

console.log(hawk.alive);
hawk.eat();
hawk.sleep();

fish.swim();
hawk.fly();
rabbit.run();