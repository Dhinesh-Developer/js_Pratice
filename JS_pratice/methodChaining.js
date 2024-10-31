// no method chaining
let userName = window.prompt("Enter the user name: ");
userName = userName.trim();
let letter = userName.charAt(0);
letter = letter.toUpperCase();

let extraChars = userName.slice(1);
extraChars = extraChars.toLowerCase();
userName = letter+extraChars;
console.log(userName);  //Kumar

// Method chaining.
userName = userName.trim().charAt(0).toUpperCase()+userName.trim().slice(1).toLowerCase();
console.log(userName); //Kumar