// const person = {
//     name: "ishwor karki",
//     add : "sydney ",
//     bio(){
//         console.log(this) // this keyword referes to this object  now you can access via this.name even this.bio
//         // return ` hey this is ${name} form ${add}`
//     }
// }

// factory function -> makes easy to create multiple user - but what i all user dont want all property

// function aboutPerson (name,address) {
//     return {
//         name,
//         address,
//         bio() {
//             return `hey my name is ${this.name} i am form ${this.address}`
//         }
//     }
// }

// const ishwor = aboutPerson("ishwor","sydney")

// console.log(ishwor.bio())

// constructor Functions
// console.log(typeof String())

// function AboutPerson(name,address){
//     this.name=name,
//     this.address=address
// }
// //using prototype this bio function can be accessed when needed
// AboutPerson.prototype.bio = function () {
//     return `hey my name is ${this.name} i am form ${this.address}`;
// }

// const ishwor = new AboutPerson("ishowr","afdg")
// console.log(ishwor)

// classed based oops
// js is not fucn but dev can write oops

// class Person {
//     // constructor 
//     constructor(name,add){
//         this.name = name;
//         this.add = add;
//         this.key = "hello world"
//     }

//     bio(){
//         return `hey my name is ${this.name} i am form ${this.add}`;
//     }

//     nameUpper(){
//         this.name= this.name.toUpperCase()
//     }
// }

// // creating instance 
// const ishwor = new  Person("ishowr","karki"); 
// console.log(ishwor.nameUpper())
// console.log(ishwor.bio())


// this keyword 

// basicall in msot caaes this referest to the object where it is declared , and we use mostly this inside function , or say which object does that funciton belong   but  for arrow function it is different , this inside arrow means window 


// 4 pillars 

//Encapsulation
