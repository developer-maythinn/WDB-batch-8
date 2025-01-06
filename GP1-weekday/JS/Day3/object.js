// let user = {     // an object
//     name: "John",  // by key "name" store value "John"
//     age: 30,      // by key "age" store value 30
//     parent: {
//         fatherName: "Job",
//         motherName: "Rose"

//     }
//   };

//   console.log(user.age, user.parent.motherName)
//   console.log(user["age"], user["parent"]["motherName"])

// let myObj = new Object();
// myObj.name = "John";
// myObj.age = 20;

// delete myObj.age;
// console.log(myObj)

// class myFruit {
//     constructor(name, price) {
//         this.fruit = name;
//         this.price = price;
//     }
// }

// function myFruit(name, price) {
//     this.fruit = name;
//     this.price = price;
// }

// let myObj = new myFruit("Apple", "$20");
// console.log(myObj)

// const user = {
//   name: "May",
// };
// // user = {
// //     age: 20
// // }
// user.name = "MT";
// console.log(user.name);

// let user = {
//   name: "May",
// }; // reference
// let admin = user;

// console.log(admin === user);

// let a = {};
// let b = {};
// console.log(a === b) // false

// let user = {
//   name: "May",
// };
// let admin = user;

// admin.name = "Rose";

// console.log("user", user);
// console.log("admin", admin);

let user = {
  name: "May",
  age: 20,
};

let clone = {};

for (let i in user) {
  clone[i] = user[i];
}
clone.name = "Rose";
console.log("user", user);
console.log("clone", clone);
