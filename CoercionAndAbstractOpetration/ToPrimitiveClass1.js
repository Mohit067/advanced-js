class Product {
    constructor(n, p) {
        this.Name = n;
        this.price = p;
    }
    valueOf() {
        return 1000;
    }
}
let p = new Product("iphone", 12390);
let x = 19;
console.log(x-p);  //-981