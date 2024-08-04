const product = {
    diveceName : "samsung",
    divecePrice : 23823
};


const {diveceName : Name1 , divecePrice} = product;
//console.log(diveceName); // error
console.log(Name1);


// one more method to access values from object
with (product) {
    console.log(Name1 , divecePrice);
}
with (product) {
    console.log(diveceName , divecePrice);
}

// output -->
/**
 * samsung
 * 23823
 */
