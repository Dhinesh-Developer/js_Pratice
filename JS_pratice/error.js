//console.lag("Hello"); //TypeError: console.lag is not a function

//conole.lo(x); // x is not defined.
//network error.
//promise error.
//Security error.

/*
try{
    console.log(x);
}
catch(error){
    console.error("error");
}
finally{
    console.log("This is always execute");
}
console.log("You reached an end!");
*/

try{
    const dividend  =  Number(window.prompt("Enter a dividend"));
    const divisior = Number(window.prompt("Enter the divisior"));
    if(divisior ==0){
        throw new Error("you cant divide by zero!");
    }
    if(isNaN(dividend) || isNaN(divisior)){
        throw new Error("Value must be a number");
    }
    const result = dividend/divisior;
    console.log(result);
}catch(error){
    console.error(error);
}
finally{
    console.log("You reached an end");
}