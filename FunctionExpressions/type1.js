// named function expression

const myFun = function fun(x) {
    console.log("calling..." , x);
}
myFun(10);

// output -->
// calling ... 10



// example 
const arr = [1,2,3,4,5];
const returnValue =  arr.map(function factorial(n) {
    if(n==1) return 1;
    else return n*factorial(n-1);
})
console.log(returnValue);

/**
 * output -->
 * calling... 10
 *[ 1, 2, 6, 24, 120 ]
 */
