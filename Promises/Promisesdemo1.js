const pr = new Promise((res, rej) => {
    console.log("welcome to the promises world");
    for(let i=0; i<10000000000; i++){}
});
console.log("we are outside");
console.log(pr);