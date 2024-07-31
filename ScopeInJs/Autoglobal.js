var teacher = "mohit";

function fun () {
    teacher = "rohit";
    content = "JS";
    console.log("wow" , content , teacher);
}
fun();
console.log(teacher);
console.log(content);

/**
 * output -->
 * wow JS rohit
 * rohit
 * JS
 */