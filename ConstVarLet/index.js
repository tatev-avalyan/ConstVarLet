// import {Const} from './Const'
// var funcs = [];
// for (var i = 0; i < 10; i++) {
//     funcs.push((function(value) {
//         return function() {
//             console.log(value);
// } }(i)));
// }
// funcs.forEach(function(func) {
//     func();     // outputs 0, then 1, then 2, up to 9
// });

// var funcs = [];
// // throws an error after one iteration
// for (const i = 0; i < 10; i++) {
//     funcs.push(function() {
//         console.log(i);
// }); }




// const person = {
//     name: "Nicholas"
// };
// // works
// person.name = "Greg";
// console.warn(person.name)
// // throws an error
// // person = {
// //     name: "Greg"
// // };

// let aLet;
// console.log(aLet); //
// aLet = 10;
// console.log(aLet);//10



// var ncz = "Hi!";
// console.log(window.ncz);
// console.log("ncz" in window);
// console.log(window.ncz === ncz);



// let value = 5;
// function getValue() {
//     return value++;
// }
// function add(first, second = getValue()) {
//     return first + second;
//    }
// console.log(add(1, 1));
// console.log(add(1));
// console.log(add(1));
// console.log(add(1));

(function mixArgs(first, second) {
    "use strict";
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    first = "c";
    second = "d"
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
})("asgdjhv",6152721)

