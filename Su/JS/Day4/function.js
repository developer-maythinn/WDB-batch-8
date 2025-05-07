// function greet(){
//     console.log("Hello")
// }
// greet()

// *****************************

// let user = function(){
//     console.log("Hi")
// }
// user();

// *****************************

// (function(){
//     console.log("first")
// })()

// *****************************

// console.log(username);
// let username = "John";

// let admin = user();

// function user() {
//     console.log("user")
// }


// *****************************
// function sum() {
//     console.log(2 + 4)
//     return 2 + 4;
// }
// console.log(sum())

// function sum() {
//     let num1 = 10;
//     let num2 = 5;
//     let result = num1 + num2;
//     return result
// }

// *****************************
function sum(num1 = 1, num2 = 2) {
    console.log(num1, num2)
    let result = num1 + num2;
    return result
}

console.log(sum(2, 4))
console.log(sum(10, 14))
console.log(sum())