// nested object 
let product = {
    name : "BMW",
    rating : 4,
    categories : {
        categoriesName : "xyz",
        categoriesId : 123
    }
};

// 1st way to access categoriesId
let {categories} = product;
let {categoriesId} = categories;
console.log(categoriesId);

// 2nd way to access categoriesName
let { categories : {categoriesName}} = product;
console.log(categoriesName);