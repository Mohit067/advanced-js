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

    getPrice () {
        return this.#price;
    }


    setPrice (p){
        if(p>0) {
            this.#price = p;
        } else {
            console.log("invalid price");
        }
    }

    displayProducr () {
        console.log("product display", this.#name, this.#price, this.rating, this.review);
    }
}




let iphone = new Product("iphone15", 100000, 4.5, "great");
console.log(iphone);


iphone.setPrice(10);
iphone.displayProducr();
// output --> product display iphone15 10 4.5 great


iphone.setPrice(-10);
iphone.displayProducr();
// output --> 
// invalid price
// product display iphone15 100000 4.5 great


console.log(iphone.getPrice());
/** output -->
 * getPrice() only  for read item
 * 100000
 */

