class product {
    static x = 10;

    constructor (builder) {
        this.name =  builder.name;
        this.price = builder.price;
    }
}
let p = new product({
    name : "iphone15",
    price : 100000
})
console.log(p);
console.log(p.x); // output --> undefined
console.log(product.x); // output --> 10 

// static class se associated h isliye wah class se hi  accessable hai
