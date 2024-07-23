const product = {
    name : "i phone 14 pro max",
    company : "Apple",
    price : 124000,
    color : "red"
}
Object.freeze(product);
console.log(Object.isFrozen(product)); // true
console.log(Object.isSealed(product)); // true


const animal = {
    name : "dog",
    color : "black"
}

Object.seal(animal);
console.log(Object.isSealed(animal)); // true
console.log(Object.isFrozen(animal)); // false