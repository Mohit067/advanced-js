const pr = new Promise((res, rej) => {
    console.log("welcome to the promises world");
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random()*100);
        console.log(randomNumber);
        if(randomNumber % 2 === 0){
            //even
            res(randomNumber);
        } else {
            //odd
            rej(randomNumber);
        }
    }, 5000);
});
console.log(pr);
console.log("we are outside");

/*
welcome to promises world

Promise {<pending>}
    [[Prototype]]: Promise
    [[PromiseState]]: "fulfilled"
    [PromiseResult]]: undefined

we are outside
58

*/