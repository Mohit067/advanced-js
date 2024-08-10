// let x = {};
// console.log(x.toString());//return [object , Object]
// console.log(x.valueOf());//return same to same object  {}


// let y = {a : 10};
// console.log(y.toString());//[object Object]
// console.log(y.valueOf())//{ a: 10 }


// let z = {p:10, q:20, toString : function(){return 100}};
// console.log(z.toString());//100
// console.log(z.valueOf())
// /**
//     { p: 10, q: 20, toString: [Function: toString] }
// */


let X = 10;
let Y = {
    B : 10,
};
console.log(X-Y);  //NaN 


let P = 10;
let Q = {
    B : 10,
    toString : function (){return 100;},
};
console.log(P-Q);  // -90

let M = 10;
let N = {
    B : 10,
    toString : function (){return 100;},
    valueOf : function() {return '3000';}
};
console.log(M-N);  //  -2990
