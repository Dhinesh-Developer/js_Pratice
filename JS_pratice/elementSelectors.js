
/*

const myheading = document.getElementById("my-heading");
myheading.style.backgroundColor = "yellow";
myheading.style.textAlign = "center";
myheading.style.border = "5px solid black";
myheading.style.borderRadius = "15px";
myheading.style.transition = " transform 10px 10% 25%


console.log(fruits);
fruits[0].style.backgroundColor = "aqua";
fruits[1].style.backgroundColor = "green";
fruits[2].style.backgroundColor = "red";

for(let fruit in fruits){
    fruit.style.backgroundColor = "yellow";
}

Array.from(fruits).forEach(fruit =>{
    fruit.style.backgroundColor = "banana";
})
*/

const h4Elemsnts = document.getElementsByTagName("h4");
console.log(h4Elemsnts);
h4Elemsnts[0].style.backgroundColor = "yellow";

for(let h4Elemsnt of h4Elemsnts){
    h4Elemsnt.style.backgroundColor = "green";
}

const liElements = document.getElementsByTagName("li");
for(let liElement of liElements){
    liElement.style.backgroundColor = "pink";
}

Array.from(h4Elemsnts).forEach(h4Elemsnts =>{
    h4Elemsnts.style.backgroundColor = "yellow";
});

Array.from(liElements).forEach(liElements =>{
    liElements.style.backgroundColor = "blue";
});


const element = document.querySelector(".fruits");
element.style.backgroundColor=  "lightgreen";

const foods = document.querySelectorAll(".fruits");
fruits[0].style.backgroundColor = "black";