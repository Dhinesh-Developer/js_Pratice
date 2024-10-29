const pi = 3.14159;
let radius;
let circumference;

/*

pi = 4.265; // cannot change the value; because the value is const
// radius = window.prompt(`Enter the radius of a circle: `);
radius = Number(radius);
circumference = 2*pi*radius;

console.log(circumference); //12.56636
*/

document.getElementById("myB").onclick=function(){
    document.getElementById("myText").ariaValueMax;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("myH3").textContent = circumference;
}