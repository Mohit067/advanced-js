class product {
    #name;
    #price;

    constructor (builder) {
        this.#name = builder.name;
        this.#price = builder.price;
    } 

    displayProduct () {
        console.log("product display", this.#name, this.#price);
    }

    static get builder(){
        class builder{
            constructor(){
                this.name = "";
                this.price = 0;
            }
            setName (incomingName) {
                this.name = incomingName;
                return this;
            }
            setPrice (incomingPrice) {
                this.price = incomingPrice;
                return this;
            }
            build(){
                return new product(this);
            }
        }
        return new builder (); // attention here
    }
}
        

const  p = product.builder // attention here
        .setName("mohit")
        .setPrice(2344020344)
        .build();

        
p.displayProduct();


