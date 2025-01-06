// function greet(){
//     console.log("Hello")
// }
// greet();

// const greet = function(){
//     console.log("Hello")
//     return "rice";

// }
// console.log(greet())

// const sum = function (num1 = 1, num2 = 5) {// parameter
//   //   let num1 = 10;
//   //   let num2 = 20;
//   console.log(num1, num2);
//   return num1 + num2;
// };
// console.log(sum(20, 1));
// console.log(sum(10, 5));
// console.log(sum(30, 50));
// console.log(sum(10));
// console.log(sum());

// const greet = function(name = "MT"){
//     return `Hello ${name}`

// }
// console.log(greet())
// console.log(greet("May"))
// console.log(greet("Ju"))

// (function (name) {
//   console.log("Hello " + name);
// })("John");


// console.log(username)
// let username = "John";

// Hoisting
let username = myFunc();

function myFunc() {
    console.log("Hello")
}