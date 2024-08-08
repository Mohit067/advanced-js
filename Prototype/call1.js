let name = "mohit";
let obj = {
    name : "neetu",
    greet : function (){
        console.log("hello", this.name);
    }
}
obj.greet.call();
//hello mohit
//because if we don't pass any parameter 
//in call function then it will give us global scope object