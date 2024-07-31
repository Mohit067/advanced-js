var currStudent = "mohit";
console.log("start");
console.log(bestfriend); // here are error because bestfriend is not define

function fun () {
    var currStudentInfo = "ms2020";
    bestfriend = "rohit";
    console.log(`best friend is ${currStudentInfo} of ${bestfriend}`);
}
fun();

console.log("end");

// output -->
// start
// ReferenceError: bestfriend is not defined