// immutable means we cannot  change, update, delete or add something in variable or object
// example const

const x = 10;

x = 100;

console.log(x); // here are showing assignment error

// with const we can add or update somethin in  object..
// so it is tricky to handlwe immutability in  object..

const product = {
    name : "i phone 14 pro max",
    company : "Apple",
    price : 124000,
    color : "red"
}

product.name = "i phone 14";
console.log(product.name); //  output --> i phone 14

product.quality = "good";
console.log(Object.entries(product));

// output --> [
                //[ 'name', 'i phone 14' ],
                //[ 'company', 'Apple' ],
                //[ 'price', 124000 ],
                //[ 'color', 'red' ],
                //[ 'quality', 'good' ]
 //         ]
