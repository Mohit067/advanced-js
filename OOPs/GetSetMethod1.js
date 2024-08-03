class Product {
    //data member
    #name;
    #price;
    #rating;
    review;

    constructor (ProductName, ProductPrice, ProductRating, review){
        this.#name = ProductName;
        this.#price = ProductPrice;
        this.#rating = ProductRating; 
        this.review = review;
    }

    get rating () {
        console.log("getter called");
        return this.#rating;
    }
    set rating (r) {
        if(r > 5) {
            console.log("invalid rating");
            return;
        } else {
            this.#rating = r;
        }
    }


    displayProducr () {
        console.log("product display", this.#name, this.#price, this.rating, this.review);
    }
}




let iphone = new Product("iphone15", 100000, 4.5, "great");
console.log(iphone);
// output --> Product { review: 'great' }



iphone.rating = 3; // setter called 
console.log(iphone.rating); // getter called
iphone.displayProducr();

/**
 * output --> 
 *   getter called
 *   3
 *   getter called
 *   product display iphone15 100000 3 great 
 */