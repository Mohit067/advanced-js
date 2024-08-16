console.log("start");

setTimeout(() => {
    console.log("time 1 is done");
}, 500);

const pr = new Promise ((res , rej) => {
    console.log("Executor callback triggred by Promise constructor");
    setTimeout(() => {
        let randomNumber = Math.floor(Math.random()*100);
        console.log(randomNumber);
        if(randomNumber % 2 === 0){
            res(randomNumber);
        } else {
            rej(randomNumber);
        }
    }, 2000);
});

pr.then(function f() {console.log("function f execute")}, function g(){console.log("functio g execute")});
pr.then(function h() {console.log("function h execute")}, function i(){console.log("functio i execute")});

for(let i=0; i<10000000000; i++){};
console.log("End");