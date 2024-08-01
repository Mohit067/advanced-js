//Anonymous function expression

const muFun = function (x) {
    console.log("calling .. anonymous function", x);
}
muFun(10);

// output -->
// calling .. anonymous function 10



// wrong exaple
// example 
const arrr = [1,2,3,4,5];
const returnValues =  arrr.map(function (n) {
    if(n==1) return 1;
    else return n*(n-1); // 
})
console.log(returnValues); // give wrong answer

// example 
const arr = [1,2,3,4,5];
const returnValue =  arr.map(function (n) {
    if(n==1) return 1;
    else return n*arguments.callee(n-1); // here the change
})
console.log(returnValue); // correct answer



/**
 * output -->
 * calling .. anonymous function 10
 *[ 1, 2, 6, 12, 20 ]
 *[ 1, 2, 6, 24, 120 ]
 */