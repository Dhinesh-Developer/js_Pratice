/*
class Mathutil{
    static PI = 3.14159;
    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}
// const Mathutil1 = new Mathutil();
console.log(Mathutil.PI); //3.14159
console.log(Mathutil.getDiameter(10)); //20
console.log(Mathutil.getCircumference(10)); //62.8318
console.log(Mathutil.getArea(10)); //314.159
*/

class User{
    static userCount = 0;
    constructor(userName){
        this.userName = userName;
        User.userCount++;
    }
    sayHello(){
        console.log(`Hello ,my userName is ${this.userName}`);
    }
}
const user1 = new User("spongebob");
console.log(user1.userName);
console.log(User.userCount);

const user2 = new User("patrick");
const user3 = new User("sandy");
console.log(user2.userName);
console.log(user3.userName);
user1.sayHello();