// let, const & var

// var : Variable can be re-declared & updated. A global scope variable.

// let : Variable cannot be re-declared but can be updated. A block scope variable.

// const : Variable cannot be re-declared or updated. A block scope variable.


// {
//    var a = 5;
// }
// {
//     var a = 4;
// }
// console.log(a)                  global
// {
//     console.log(a)
// }


// {
//     let a = 5;
// }                              block

// let a=6;

// console.log(a)



// {
//     const a  = 5                     block
//     console.log(a);
// }

// console.log(a)  error 



// "use strict";   doesnt lert work no declearation 
// a = 4;
// console.log(a);