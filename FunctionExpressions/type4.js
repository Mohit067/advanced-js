// IIFE --> immediately invoke function


( function fun (x) {
    console.log("IIFE calling ..." , x);
})(10);

// output -->
// IIFE calling ... 10



// Example
(   function cube(x) {
        console.log(x**3);
    }    )(10)
