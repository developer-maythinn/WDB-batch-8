// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }

let colors = ["white", "black", "pink", "green", "red", "yellow"];
// console.log(colors[0])
// console.log(colors[1])
// console.log(colors[2])
// console.log(colors[3])

// console.log(colors.length)

// for(let i = 0; i < colors.length; i++){
//     console.log(colors[i])
// }

// for(let color of colors){
//     console.log(color)
// }

// let str1 = "John";
// for(let i of str1){
//     console.log(i)
// }


let person = {
    name: "John",
    age: 20,
    city: "Ygn",
    color: "brown"
}
// console.log(person["name"])
// console.log(person["age"])
// console.log(person["city"])

for(let i in person){
    console.log(person[i])
}