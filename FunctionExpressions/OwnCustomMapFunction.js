const arr = [1,2,3,4,5];
function customFun (arr , fun){ // custom map function
    const result = [];

    for(let i=0; i<arr.length; i++){
        result.push(fun(arr[i]));
    }
    return result;
}

const values = customFun(arr , function fun(element) {
    if(element == 1) return 1;
    else return element * fun(element-1);
})
console.log(values);