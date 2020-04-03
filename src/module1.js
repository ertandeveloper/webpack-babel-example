// module.exports.test1 = function test1() {
//     console.log("Test1");
// }
// module.exports.test2 = function test2() {
//     console.log("Test2");
// }

/*
module.exports = {
    name: "Ertan",
    test1: function () {
        console.log("Test 1");
    },
    person:{
      name:"Ertan",
      mail:"ertandonnmez@gmail.com"
    }
}*/


//ES6 Modules
export const name = "Ertan";

export function test() {
    console.log("Test Fonksiyonu");
}

export class Person {
    static test() {
        console.log("Person Test");
    }
}

export const employee = {
    name:"Ertan",
    salary:"00000",
}

export default class Deneme {
    static deneme(){
        console.log("deneme");
    }
}