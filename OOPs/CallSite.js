// // example 1
// let obj = {
//     x : 10,
//     y : 20,
//     fn : function(){
//         console.log(this.x , this.y)
//     }
// }
// obj.fn(); 

// /**
//  * output --> 
//  * 10 20
//  * here  obj is a call site
//  * because we call fn() who  is under the obj object
//  */



// // example 2

// let objj = {
//     a : 11,
//     b : 13,
//     c : object = {
//         a : 50,
//         fnn : function(){
//             console.log(this.a , this.b)
//         }
//     }
// }
// objj.c.fnn();

// /**
//  * output -->
//  * 50 undefine
//  * here [c] is a call site for fn() function 
//  */


// // example 3
// let objjj = {
//     x : 20,
//     y : 30,
//     fn : function (){
//         x = 10;
//         y = 40; // auto  global ban jayenge kyuki koi formal declaration nhi h
//         const arrow = () => {
//             console.log(this.x , this.y)
//             console.log(x,y);
//         }
//         arrow();
//     }
// }
// objjj.fn();
// console.log(x);
// console.log(y);
// /**
//  * output --> 
//  * 20 30
//  *10 40
//  *10
//  *40
//  */



// example 4
const obj = {
    x : 10,
    y : 20,
    fn : () => {
        console.log(this, this.x , this.y);
    }
}
obj.fn();
/**
 * output --> 
 * {} undefined undefined
 * first this --> window object ko refer krega
 * this.x --> undefined because of  arrow functionn
 * this.y --> undefined
 */