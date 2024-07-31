var x = 10;

function fun () {
    var x = 20;
    console.log(x);
}
var x = 30;
fun();
console.log(x);

/**
 * output -->
 * 20
 * 30
 */

/**
 * firstly x = 10
 * in function x will change with 20
 * and then x = 30
 * in same scope values are assign to new values 
 * but in function there are assign a new value but only in funtion scope
 */
