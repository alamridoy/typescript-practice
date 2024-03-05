"use strict";
// variable declearation
// let playerName = "Ridoy11"
// console.log(playerName)
// playerName = 66
// console.log(playerName)
// function
// function sum(a: number, b: number) {
//     return a + b
// }
// console.log(sum(23, 2))
// array
// let fruits = ["Apple", 1, true]
// fruits.push(44)
// object
// let person = {
//     name: "Ridoy",
//     age: 24,
//     isCoder: true
// }
// console.log(person)
// video - 6: function type
// let myFunc : Function;
// myFunc = ()=>{
//     console.log("Hello this is function")
// }
// myFunc()
// const testFunc = (a:string,b:string, c:number = 0)=>{
//    console.log(`Hello ${a} and ${b} and ${c}`)
// }
// testFunc('2','5',9)
const calculate = (a, b, c = "true") => {
    return a + b;
};
console.log(calculate(2, 7, "abc"));
