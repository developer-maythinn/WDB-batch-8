// for(let i = 0; i <= 5; i++){
//     console.log(i)
// }

// let user = {
//     name: "John",
//     age: 20,
//     color: "white",
//     fruit: "apple"
// }

// for(let key in user){
//     // console.log(key)
//     console.log(user[key])
// }

// *****************************

// let fruits = ["apple", "orange", "mango", "lemon"];
// for(let fruit of fruits){
//     console.log(fruit)
// }

// let username = "John";
// for(let str of username){
//     console.log(str)
// }
// ****************************
let text = "";
for (i = 0; i < 10; i++) {
  if (i === 3) {
    // break;
    continue
  }
  text +=  i;
}
console.log(text);
