const PI = 3.14; // comparing to string
if(PI == "3.14"){
    console.log("This is PI");
}else{
    console.log("This is NOT PI");
}

//strictly equality
if(PI === 3.14){
    console.log("This is PI");
}else{
    console.log("This is NOT PI");
}

// Not equality
if(PI != "3.14"){
    console.log("This is NOT PI");
}else{
    console.log("This is  PI");
}

//strictly  Not equality
//const pi = 3.14; //This is NOT PI
const pi = "3.14"; // This is PI
if(pi !== "3.14"){
    console.log("This is NOT PI");
}else{
    console.log("This is  PI");
}