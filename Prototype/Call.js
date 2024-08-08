const obj = {
    firstName : "moht",
    greet : function(){
        console.log("hello, my name is", this.firstName);
    }
}
obj.greet();
//hello, my name is moht

const newObje = {firstName : "Rohit"}
obj.greet.call(newObje);
//hello, my name is Rohit





const objj = {
   secondName : "sahu",
   greet : function(welcome, help){
        console.log("hey, ", this.secondName, welcome, help)
   }
}
// objj.greet("welcome","how may i help you");
const newObjee = {secondName : "Rohit"}
objj.greet.call(newObjee, "welcome","how may i help you");
//hey,  Rohit welcome how may i help you






const objjj = {
    secondName : "sahu",
    greet : function(welcome, help){
         console.log("hey, ", this.secondName, welcome, help)
    }
 }
 // objj.greet("welcome","how may i help you");
 const newObjeee = {thirdName : "Rohit"}
 objjj.greet.call();
 // hey,  undefined undefined undefined
