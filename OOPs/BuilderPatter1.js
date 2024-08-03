class product {
    constructor (builder) {
        this.name = builder.name;
        if(builder.price > 0 && typeof builder.price == "number"){
            this.price = builder.price;
        } else {
            return {};
        }
        this.rating = builder.rating;
        this.review = builder.review;
    }
}
let a = new product ({
    name : "iphone15",
    price : -100000,
    rating : 4.5,
    review : "great"
})
console.log(a);
// output --> {}