/*
function hello(){
    console.log("Hello");
}
hello();
hello1();
const hello1 = function(){
    console.log(`Hello `);
}
hello();
*/

// Arrow function
const hello2 = () =>console.log("Hello2");
hello2();

// mutilpe statements,
const hello3 = (name,age) => {console.log(`Hello ${name}`)
                        console.log(`you are ${age}`)};
hello3("kumar",19);


setTimeout(function hai(){
    console.log("Hai");
} , 4000);

setTimeout( () => console.log("Hello"),3000);
