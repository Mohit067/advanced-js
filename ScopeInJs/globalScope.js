let x = 10;

function gun(){
    console.log(x);
}

function fun(){
    for(let i=9; i<x; i++){}
}
fun();
console.log(x); //we can access here the value of x