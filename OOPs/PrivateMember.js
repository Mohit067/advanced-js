class Product {
    //data member
    #name;
    #price;
    rating;
    review;

    constructor (ProductName, ProductPrice, ProductRating, review){
        this.#name = ProductName;
        this.#price = ProductPrice;
        this.rating = ProductRating; 
        this.review = review;
    }

    addToCard () {
        console.log("product added to card")
    }

    removeFromCard () {
        console.log("product remove from card")
    }

    displayProducr () {
        console.log("product display", this.#name, this.#price, this.rating, this.review);
    }
}
let iphone = new Product("iphone15", 100000, 4.5, "great");
console.log(iphone);  // we can't access private member of class outside of class

// iphone.#name = "samsung"; // error
// console.log(iphone);


iphone.displayProducr();
/**
 * output --> 
 * product display iphone15 100000 4.5 great..
 * we can access here because displayProducr() is inside of class
 * and we can access private member in class anywhere
 */


// if we do this 
iphone.name = "samsung";
//iska matlab h ki ham ek new brand key value pair bana rhe h iphone mai.
// aur is name aur class ke name mai koi relation nhi  h
console.log(iphone);
/**
 * output --> 
 * Product {
 * rating: 4.5,
 * review: 'great'
 * name: 'samsung'
}
 */