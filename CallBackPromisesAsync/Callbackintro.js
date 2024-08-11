//let arr = [1,2,3,4];

//arr.map(function f() {});//arr.map() --> Higher order function
                        // function f() {} // callback function 

/**
*  aise function jisme ham argument mai ek function pass 
   kr skte h aur wah ise use kr ske to use (higher order functin) bolte h

*  aur jo function in (higher order functio) ke argument mai pass hote h 
   unhe [callback] bolte h
 */



// own map function
let arr = [1,2,3,4];
function myMap(arr, fn){
    result = [];
    for(let i=0; i<arr.length; i++){
        result.push(fn(arr[i], i));
    }
    return result;
}

console.log(myMap(arr, function f(item){
    return item**2;
}))