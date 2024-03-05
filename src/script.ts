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

// let add: (num1: number, num2: number) => number

// add = (a: number, b: number) => {
//     return a + b

// }

// console.log(add(4, 6))

// // add(4,7)



// //ex:2
// let calculation: (num1: number, num2: number, z: string) => number

// calculation = (a: number, b: number, action: string) => {

//     if (action === 'add') {
//         return a + b
//     } else {
//         return a - b
//     }

// }

// console.log(calculation(11, 4, 'minus'))




// // ex:3
// let userDetails: (id: number | string, userInfo: {
//     name: string,
//     age: number
// }) => void;


// userDetails = (id: number | string, user: { name: string, age: number }) => {
//     console.log(`id: ${id} and user name is ${user.name} and age is ${user.age}`)


// }

// userDetails(2, { name: "Ridoy", age: 24 })













// video - 9: classes
//ex:1


// class Player {
//     name: string;
//     age: number;
//     country: string;


//     constructor(n: string, a: number, c: string) {
//         this.name = n;
//         this.age = a;
//         this.country = c
//     }

//     play() {
//         console.log(`${this.name} from ${this.country} is playing.`)
//     }

// }

// const tamim = new Player("Tamim", 35, "Bangladesh")
// const maxwell = new Player("MaxWell", 32, "Australia")

// const players: Player[] = []

// players.push(tamim)
// players.push(maxwell)

// console.log("players: ", players)

// tamim.name = "Tamim Iqbal"
// console.log(tamim.name)












video - 10: Access Modifires
// //ex:1

// class Player {
//     private name: string;
//     public age: number;
//     readonly country: string;


//     constructor(n: string, a: number , c: string){
//         this.name = n;
//         this.age = a;
//         this.country = c
//     }

//     play(){
//         console.log(`${this.name} from ${this.country} is playing.`)
//     }

// }

// const tamim = new Player("Tamim",35,"Bangladesh")
// const maxwell = new Player("MaxWell",32,"Australia")

// const players: Player[] = []

// players.push(tamim)
// players.push(maxwell)

// console.log("players: ",players)

// // tamim.name = "Tamim Iqbal"
// // console.log(tamim.name)

// tamim.age = 42
// console.log(tamim.age)

// // tamim.country = "England"
// console.log(tamim.country)




//ex:2
// shortcut

// class Player {

//     constructor(private name: string,
//         public age: number,
//         readonly country: string) { }

//     play() {
//         console.log(`${this.name} from ${this.country} is playing.`)
//     }

// }

// const tamim = new Player("Tamim", 35, "Bangladesh")
// const maxwell = new Player("MaxWell", 32, "Australia")

// const players: Player[] = []

// players.push(tamim)
// players.push(maxwell)

// console.log("players: ", players)

// // tamim.name = "Tamim Iqbal"
// // console.log(tamim.name)

// tamim.age = 42
// console.log(tamim.age)

// // tamim.country = "England"
// console.log(tamim.country)






// video - 11: Module systems
// //ex:1
// import export

















//video :12
// interface

//object base interface
// interface Rectangele {
//     width: number;
//     length: number;
// }

// function drawRectangle(options: Rectangele) {
//     let width = options.width;
//     let length = options.length;
// }

// let threeDRectangle = {
//     width: 30,
//     length: 20,
//     height: 15
// }
// drawRectangle(threeDRectangle)





// class base interface
import { isPlayer } from './interface/isPlayer'
class Player implements isPlayer {

    constructor(
        public name: string,
        public age: number,
        public country: string) { }

    play() {
        console.log(`${this.name} from ${this.country} is playing.`)
    }

}

const tamim = new Player("Tamim", 35, "Bangladesh")
let maxwell: isPlayer;
maxwell = new Player("maxwell", 12, "Australia")

const players: Player[] = []

players.push(tamim)
players.push(maxwell)
