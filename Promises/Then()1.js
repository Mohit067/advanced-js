console.log("Start");
const p1 = new Promise (function cb(res , rej){
    console.log("promise p1 is done");
    setTimeout(() => {
        console.log("time of p1 is done");
        res(100);
    }, 500);
});
p1.then(function A(){console.log("execute A")}, function B() {console.log("execute B")});

setTimeout(function timerCB() {
    console.log("time 1 is done");
}, 2000);

const pr = new Promise (function prCB(res , rej){
    console.log("promise pr is done");
    const randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber);
    setTimeout(() => {
        if(randomNumber % 2 === 0){
            res(randomNumber);
        } else {
            rej(randomNumber);
        }
    }, 3000)
});

pr.then(function f(v){console.log("execute f",v)}, function g(v) {console.log("execute g",v)})
pr.then(function h(v){console.log("execute h",v)}, function i(v) {console.log("execute i",v)})

for(let i=0; i<10000000000; i++){}
console.log("end");