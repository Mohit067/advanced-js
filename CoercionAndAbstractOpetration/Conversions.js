// this is a part of coercion and abstact operation
// in this conversion js internally call the functions

// how to conver a string in  number
let x = "234";
console.log(+x);//234
console.log(Number(x));//234
console.log(parseInt(x));//234
console.log(parseFloat(x));//234.0


//convert into  a string
console.log(String(x));//'234'



//check value in form of boolean
console.log(!!x);//true



console.log(String(-0));//'0'
console.log(0);//'0'



console.log(NaN == NaN);//false
console.log(NaN === NaN);//false



console.log(Infinity);//Infinity
console.log(-Infinity);//-Infinity
console.log(Infinity == Infinity);//true
console.log(Infinity === Infinity);//true


console.log(isNaN(NaN));// true
console.log(isNaN("Mohit")); // true


console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("Mohit")); // false




console.log(0 == -0); // true
console.log(0 === -0); // true
// this function check 0 and -0 is equal or not
console.log(Object.is(0, -0)); // false




let P = 10;
console.log(P.toString()); // '10'
console.log(P.valueOf()); // 10

//10.toString(); // showing  syntax error
(10).toString(); // '10'
