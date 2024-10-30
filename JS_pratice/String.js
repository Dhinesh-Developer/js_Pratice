let username = "Kumar";
console.log(username.charAt(3));

console.log(username.indexOf("a"));
console.log(username.lastIndexOf("k"));
console.log(username.length); //5

// removing the white space begin and end not between.
console.log(username.trim());
console.log(username.toUpperCase()); //KUMAR
console.log(username.toLowerCase()); //kumar
console.log(username.repeat(3)); //KumarKumarKumar
console.log(username.startsWith(" "));  // false boolean
console.log(username.endsWith("r")); //true
console.log(username.includes("a")); // true

let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-","");  //1234567890

phoneNumber = phoneNumber.padStart(15,"0");  //000001234567890

phoneNumber = phoneNumber.padEnd(15,"0"); //123456789000000
console.log(phoneNumber); 

