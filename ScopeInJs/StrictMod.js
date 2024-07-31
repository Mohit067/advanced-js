// If we use strict mode in js then we prevnt on Autoglobal scoping

"use strict";
var teacher = "mohit";

function fun () {
    teacher = "rohit";
    content = "JS";
    console.log("wow" ,  teacher ,content );
}

console.log(teacher);
fun();
console.log(content);


/**
 * output -->
 * mohit
 * ReferenceError
 */