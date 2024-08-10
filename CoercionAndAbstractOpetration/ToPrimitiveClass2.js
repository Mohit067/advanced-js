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
let q = new Product("samsung", 23431);

console.log(p > q);//false  //this is because of  valueOf function in class



