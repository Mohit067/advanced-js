//js is used this operation internally 
//logicat not

let x = (3+1);
console.log(!x);//false

let y = "";
console.log(!y);//true


/** in case of boolean
Argument Type   Result

Undefined  	    Return false.
Null	        Return false.
Boolean	        Return argument.
Number	        If argument is +0, -0, or NaN, return false; otherwise return true.
String	        If argument is the empty String (its length is zero), return false; otherwise return true.
Symbol	        Return true.
Object	        Return true.
 */