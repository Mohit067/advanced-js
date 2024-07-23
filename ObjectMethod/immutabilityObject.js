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






//2. using Object.freeze method
const obj = {
    x : 20,
    y : 30
}
Object.freeze(obj);
obj.z = 49; // cannot add in obj
obj.x = 60; // cannot update in obj
console.log(Object.entries(obj));  // output --> [ [ 'x', 20 ], [ 'y', 30 ] ]