function fun(c, d){
    let m = 10;
    function gun() {
        console.log("addition of m and c is ", m + c);
    }
    return gun;
}
let obj = fun(50, 20);
console.log(obj());
console.dir(obj);