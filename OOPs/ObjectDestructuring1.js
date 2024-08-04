const product = {
    diveceName : "samsung",
    divecePrice : 23823
};


const productItem = {
    company : "sing",
    contory : "usa",
    ...product // to add another object in current object [(...) --> spread operator]
};
console.log(productItem);

// output -->
/**
 * {
 * company: 'sing',
 * contory: 'usa',
 * diveceName: 'samsung',
 * divecePrice: 23823
}
 */