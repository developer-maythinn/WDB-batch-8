// let func1 = function () {
//   return "Hello";
// };
// let func = () => "Hello";
// console.log(func());

// let fruits = ["apple", "orange", "mango", "kiwi"];
// let result = fruits.forEach((fruit) => fruit )
// // let result = fruits.map((fruit) => fruit);
// console.log(result);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

const array1 = [5, 130, 12, 8, 44];
// const found = array1.find((element) => element > 10);
// console.log(found);
const isLargeNumber = array1.findIndex((element) => element > 13)
console.log(isLargeNumber)

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));

