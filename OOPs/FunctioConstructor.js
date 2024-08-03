// class jaise facility rakhne  ke liye function constructor 
// in onder verson of  js. there are no  class keywords so we use this for blue priting 
function Product (n, p, d) {// this is a function
    this.name = n;
    this.price = p;
    this.discription = d;

    this.displayProducr = function () { // function expression
        console.log("name :",this.name,"price :", this.price, "discription :", this.discription);
    }

} 
let iphone = new Product("iphone15", 100000, "great");
iphone.displayProducr();
// output --> Product { name: 'iphone15', price: 100000, discription: 'great' }
