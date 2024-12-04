// const arrayItems = [1, 2, 3];
// let firstItem = arrayItems[0];
// let secondItem = arrayItems[1];

// // array destructuring
// const [firstEle, secondEle, thirdEle, fourthEle] = arrayItems;
// console.log(firstEle, secondEle, thirdEle, fourthEle);

// *****************************************

// default parameter, rest, spread

// function sum(num1 = 1, num2 = 2) { // default parameter
//     return num1 + num2
// }
// console.log(sum(2, 3))
// console.log(sum())

// ********** spread
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// console.log([222, ...arr1, ...arr2, 33])

// ******** rest
function rest(a, b, ...c) {
  console.log(a, b, c);
}
rest(1, 2, 3, 4, 5);
