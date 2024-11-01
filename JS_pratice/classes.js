/*
function product(name, price){
    this.name = name;
    this.price = price;

    this.displayProduct = function(){
        console.log(`product : ${name}`);
        console.log(`price: $${this.price}`);

    };

    this.calculateTotal = function(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;
const product1 = new product("Shirt" , 19.99);
product1.displayProduct();
*/

class product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    displauyProduct(){
        console.log(`product: ${this.name}`);
        console.log(`price : ${this.price}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}
const salesTax = 0.05;

const product1  =new product("shirt",19.99);
product1.displauyProduct();

const product2 = new product("pant" , 22.50);
product2.displauyProduct();

const product3 = new product("underwear" , 100.00);
product3.displauyProduct();

const Total = product1.calculateTotal(salesTax)
console.log(Total); //20.9895