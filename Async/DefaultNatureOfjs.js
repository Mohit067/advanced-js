setTimeout(function f() {
    console.log("hello");
}, 10);

setTimeout(function f() {
    console.log("wow");
}, 5);


for(let i=0; i<10000000000; i++){
    
}
console.log("main thread");

/**
main thread
wow
hello

[Done] exited with code=0 in 16.176 seconds

 */