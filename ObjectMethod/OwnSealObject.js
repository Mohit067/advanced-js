const product = {
    name : "i phone 14 pro max",
    company : "Apple",
    price : 124000,
    color : "red"
}

function customSeal (product){
    let keys = Object.keys(product);
    for(let i=0; i<keys.length; i++){
        Object.defineProperty(product, keys[i], {configurable: false});//this will stop deletion
    }
    Object.preventExtensions(product); // this will stop addition of new key value pair

    product.name = "samsung";//updation allowed
    console.log(Object.entries(product));
}

customSeal(product);
console.log(Object.isSealed(product)); // true
console.log(Object.isFrozen(product)); // false