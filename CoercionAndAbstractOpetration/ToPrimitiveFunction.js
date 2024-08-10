let a = "my function is";
let b = function fun(){ return "fun"; } 
console.log(a+b);
//my function isfunction fun(){ return "fun"; }



let x = "my function is ";
let y = function fun(){};
y.toString = function() { return "fun" };
console.log(x+y); //my function is fun