// let user = {
//     name: "John",
//     age: 20
// }
// console.log(user.name)
// console.log(user.age)

// ****************

// let user = new Object();
// user.name = "John";
// user.address = "YGN"
// console.log(user)

// ****************

// function fruit(name, price) {
//     this.name = name;
//     this.price = price;

// }

// class fruit {
//     constructor(name, price) {
//         this.fruitName = name;
//         this.price = price;
//     }
// }

// let myFruit = new fruit("apple", "$10");
// console.log(myFruit)

// ****************

// let user = {
//   name: "John",
//   age: 30,
//   parent: {
//     fatherName: "Steve",
//     motherName: "Amelia",
//   },
// };
// console.log(user.parent.fatherName)

// document.getElementById("para").innerHTML = user.parent.fatherName;

// delete user.age;
// console.log(user)

// ****************

// const user = {
//     name: "John"
// }

// user.name = "Rose";
// console.log(user.name)

// ****************
// let user = {
//   name: "John",
// };
// let admin = user;

// admin.name = "Rose";
// console.log("user", user);
// console.log("admin", admin);

// let a = {};
// let b = a;
// console.log(a === b)

// ****************
let user = {
  name: "John",
  age: 20,
  address: "YGN"
};

let cloneObj = new Object();
for(let key in user){
    cloneObj[key] = user[key]
}
cloneObj.name = "Rose";
console.log("user", user)
console.log("cloneObj", cloneObj)
