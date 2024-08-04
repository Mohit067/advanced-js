function Product(n) {
    this.name = n;
}

Product.prototype
//{}constructor: ƒ Product(n)[[Prototype]]: Object


Product.prototype.display = function () { console.log(this);}
Product.prototype
//{display: ƒ}


p = new Product("mac")
p.display();
//Product {name: 'mac'}name: "mac"[[Prototype]]: Object

Product.prototype.display = function () { console.log("something" ,this);}//we are doing modify
Product.prototype
//{display: ƒ}


Product.prototype.display();
//something {display: ƒ}display: ƒ ()constructor: ƒ Product(n)[[Prototype]]: Object
