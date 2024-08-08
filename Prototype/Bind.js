let obj = {
    name : "sahu",
    greet : function (welcome, help){
        console.log("hellow", this.name, welcome, help);
    }
}
let newObj = {name : "Mohit"};
f = obj.greet.bind(newObj);  


// ƒ (welcome, help){     // only this is the key feature of this function, it will give us a function
//         console.log("hellow", this.name, welcome, help);
//     }


let x = f("welcome to the jungle" , "how may i help YOU");
//hellow Mohit welcome to the jungle how may i help YOU
console.log(x);