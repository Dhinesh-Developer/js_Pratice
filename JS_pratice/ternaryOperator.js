let age = 18;
let message = age>=18?"you're an adult":"You are a minor";
console.log(message);

let time = 16;
let greetings = time<12?`Good morning!`:`Good afternoon`;
console.log(greetings);

//boolean
let isStudent = true;
let message1 = isStudent?`you are a student`:` you are not a student`;
console.log(message1);


// getting a discount if amount greater than 100 dollar
let purchaseAmount = 125;
let discount = purchaseAmount>=100?10:0;
console.log(discount);
console.log(`your total is $${purchaseAmount-purchaseAmount * (discount/100)}`)