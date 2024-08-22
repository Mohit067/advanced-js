function manualException(){
    const randomNumber = Math.floor(Math.random()*100);
    if(randomNumber%2==0){
        return randomNumber;
    }
    else {
        throw "random number us odd";
    }
}
console.log(manualException);

function caller(){
    try{
        console.log("Risky code is running");
        const exception = manualException();
        console.log("Risky code working fine ", exception);
    } catch(err){
        console.log("bad luck we are in catch");
        console.log(err);
    }
}