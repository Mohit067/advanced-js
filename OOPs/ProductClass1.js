class Product {
    //data member
    name;
    price;
    rating;
    review;

    constructor (ProductName, ProductPrice, ProductRating, review){
        this.name = ProductName;
        this.price = ProductPrice;
        this.rating = ProductRating; 
        this.review = review;
    }

    addToCard () {
        console.log("product added to card")
    }

    removeFromCard () {
        console.log("product remove from card")
    }
}

let iphone = new Product("iphone15", 100000, 4.5, "great");
console.log(iphone);