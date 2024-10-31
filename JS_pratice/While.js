// let userName = "";
// // while(userName === ""){
//     console.log("You didn't enter your name");
// }
// console.log(`Hello ${userName}`);

/*
let userName = "";
while(userName ===""){
    // window.prompt("Enter the Name: ");
}
    console.log(`Hello ${userName}`);
*/

let userName ="";
do{
    userName = window.prompt("Enter the name: ");
}while(userName ==="" || userName === null)

console.log(`Hello ${userName}`);    
