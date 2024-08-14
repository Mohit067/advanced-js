function creatTimer (time, timerId){
    console.log("creating a new timer with id ", timerId);
    setTimeout (() => {
        console.log(`Timer ${timerId} is done`)
    }, time);
    console.log("creat a new timer with id ", timerId , "successfully done");
}
console.log("code is start");
creatTimer(2000, 1);
creatTimer(0, 2);

console.log("loop is running");
for(let i=0; i<1000000000; i++){
    // some ccode is  running
}
console.log("loop is done");
console.log("code is end");


/*
code is start
creating a new timer with id  1
creat a new timer with id  1 successfully done
creating a new timer with id  2
creat a new timer with id  2 successfully done
loop is running
loop is done
code is end
Timer 2 is done
Timer 1 is done
*/