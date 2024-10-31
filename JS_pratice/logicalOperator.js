// and
const temp = 200;
if(temp > 0 && temp<=30){
    console.log("Weather is good");
}
else{
    console.log("the weather is bad");
}

//or
const temp1 = 200;
if(temp <= 0 || temp>=30){
    console.log("Weather is BAD");
}
else{
    console.log("the weather is GOOD");
}

//not
const isSunny = true;
if(!isSunny){
    console.log("It is Sunny");
} else{
    console.log("It is rainy");
}