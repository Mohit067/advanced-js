// apply is same as call function only 
// the difference is tha it take's only 2 parameter


const objj = {
    secondName : "sahu",
    greet : function(welcome, help){
         console.log("hey, ", this.secondName, welcome, help)
    }
}

const newObjee = {secondName : "Rohit"}
objj.greet.apply(newObjee, ["welcome","how may i help you"]);
//hey,  Rohit welcome how may i help you
 
 
 

