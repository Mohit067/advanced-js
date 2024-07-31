var teacher = "rohit";

function fun () {
    var teacher = "Aman";
    console.log("student name is" , teacher);
}

function gun () {
    var student = "mohit";
    console.log( student , teacher);
}
fun();
gun();

/**
 * output -->
 * student name is Aman
 * mohit rohit
 */