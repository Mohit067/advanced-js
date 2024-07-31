function fun() {
    console.log(x);
    let x = 20;
    console.log(x);
}
fun();

// output -->
// ReferenceError: Cannot access 'x' before initialization


// because let and const are block scope variable
