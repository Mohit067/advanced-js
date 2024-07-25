function fun(){
    let x = 10; 
    console.log(x);
}
fun();

function gun(){
    for(let i=0; i<x; i++){
        console.log(x);  // ReferenceError: x is not defined
    }
}
gun();

console.log(x); //we cannot access here the value of x.  ReferenceError: x is not defined