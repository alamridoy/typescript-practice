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
// const calculate = (a: number, b: number, c: string = "true") => {
//     return a + b
// }
// console.log(calculate(2, 7, "abc"))
//video - 7: type alises
// type stringOrNum = string | number
// type userType = { name: string; age: number }
// const userDetails = (
//     id: stringOrNum,
//     user: userType
// ) => {
//     console.log(`User id is ${id},name is ${user.name} and age is ${user.age}`)
// }
// userDetails(2, { name: "ridoy", age: 24 });
// const sayHello = (user: userType) => {
//     console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`)
// }
// sayHello({ name: "Raihan", age: 80 })
// video - 8: function signatures
//ex:1
let add;
add = (a, b) => {
    return a + b;
};
console.log(add(4, 6));
// add(4,7)
//ex:2
let calculation;
calculation = (a, b, action) => {
    if (action === 'add') {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(11, 4, 'minus'));
// ex:3
let userDetails;
userDetails = (id, user) => {
    console.log(`id: ${id} and user name is ${user.name} and age is ${user.age}`);
};
userDetails(2, { name: "Ridoy", age: 24 });
