/**
Argument Type	    Result

Undefined	        Return NaN.
Null	            Return +0.
Boolean	            If argument is true, return 1. If argument is false, return +0.
Number	            Return argument (no conversion).
String	            See grammar and conversion algorithm below.
Symbol	            Throw a TypeError exception.
Object	            Apply the following steps:
                    {Let primValue be ? ToPrimitive(argument, hint Number).
                    Return ? ToNumber(primValue).}

*/

//Additon 
let x = 1+2;
console.log(x);//3

let y = '1' + 2;
console.log(y);//12

let z = 1 + '2';
console.log(z);//12

//substraction

let a = 5 - 1;
console.log(a);//4

let b = 1 - '2';
console.log(b);//-1

let c = '1' - 2;
console.log(c);//-1