class Product {
    constructor(n, p) {
        this.Name = n;
        this.price = p;
    }
    valueOf() {
        return this.p;
    }
}
let p = new Product("iphone", 12390);
let x = 19;
console.log(x-p);//NaN
// because in valueOf function give us undefine there are no value  of this.P
