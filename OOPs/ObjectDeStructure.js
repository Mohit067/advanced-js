// object destructing how i get a object key value pair only 
const product = {
    diveceName : "samsung",
    divecePrice : 23823
};
//console.log(diveceName); // error

const {diveceName , divecePrice} = product;
console.log(diveceName);
// output --> samsung


/**
 * const {diveceName , divecePrice} = product;
 * this means
 * const diveceName = product.diveceName;
 * const divecePrice = product.divecePrice;
 */