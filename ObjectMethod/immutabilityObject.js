// here are the method whose are make better immutable to (const) variable

// const basically not purely immutable it reduse re-assignment of variable

// const obj = {
//     x : 20,
//     y : 30
// }
// const obj = {
//     z : 49;
// }
// console.log(Object.entries(obj));  // show an error because we can not re-assign 




// we can make object fully immutable


// 1. Object.Sealed method
const obje = {
    x : 20,
    y : 30
}
Object.seal(obje);
obje.z = 49; // cannot add in obj

obje.x = 60; //  update in obj

console.log(Object.entries(obje)); // output --> [ [ 'x', 60 ], [ 'y', 30 ] ]






// //2. using Object.freeze method
// const obj = {
//     x : 20,
//     y : 30
// }
// Object.freeze(obj);
// obj.z = 49; // cannot add in obj
// obj.x = 60; // cannot update in obj
// console.log(Object.entries(obj));  // output --> [ [ 'x', 20 ], [ 'y', 30 ] ]





//3.  Object.preventExtensions method
const product = {
    name : "i phone 14 pro max",
    company : "Apple",
    price : 124000,
    color : "red"
}
Object.preventExtensions(product);
product.quality = "good"; // cannot add anything in object
delete product.name; // we can delete in object
console.log(Object.entries(product)); 

// output --> [
                //     [ 'company', 'Apple' ],
                //     [ 'price', 124000 ],
                //     [ 'color', 'red' ],
                //     [ 'quality', 'good' ]
// ]





//4. Object.defineProperties method

const animal = {
    name : "dog",
    color : "black"
}

Object.defineProperty(animal, 'name' , {writable: false}); // it happen only with specific key value pair like (name)
animal.name = 'cat'; // updatation not allowed

console.log(Object.entries(animal));

Object.defineProperty(animal, 'color', {configurable: false}); // it happen only with specific key value pair like (color)
delete animal.color; // deletion not allowed

console.log(Object.entries(animal));

// output --> [
                //     [ 'name', 'dog' ],
                //     [ 'color', 'black' ]
// ]    