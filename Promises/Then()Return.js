const pr = new Promise(function fun(res , rej){
    setTimeout(() => {
        console.log("hello")
        res("mohit");
    }, 5000);
})

const p1 = pr.then(function gun(){
    return "HIII";
;})
console.log(p1);


/*
    hello
p1
    Promise {<fulfilled>: 'HIII'}
*/