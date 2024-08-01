function fun(fn) {
    const arr = [1,2,3,4,5];
    fn(arr);
}
fun(function gun(arr) {
    console.trace("call stack startin...");
})

/**
 * output -->
 * call stack starting
 * at gun (/home/user/advanced-js/FunctionExpressions/CallStackExample.js:7:13)
 * at fun (/home/user/advanced-js/FunctionExpressions/CallStackExample.js:4:5)
 */


function funn(fn) {
    const arrr = [1,2,3,4,5];
    fn(arrr);
}
fun(function (arrr) {
    console.trace("call stack starting..");
})

/**
 * output -->
 * call stack starting
 * at <anonymous> (/home/user/advanced-js/FunctionExpressions/CallStackExample.js:7:13)
 * at fun (/home/user/advanced-js/FunctionExpressions/CallStackExample.js:4:5)
 */