"use strict";
// array
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
console.log(sequence.pop());
console.log(sequence);
// squirrel
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
console.log(day1.events[2]);
// object
let objectA = { a: 1, b: 2 };
console.log(objectA);
Object.assign(objectA, { b: 3, c: 4 });
console.log(objectA);
console.log(typeof (objectA));
// array
const myArray = [0, 1, 2];
console.log(myArray);
myArray.unshift(-1);
myArray.unshift(-2);
console.log(`Add item to the head: [${myArray}] \(len:${myArray.length}\)`);
const newArray = myArray.concat([100, 200]);
console.log(newArray);
console.log([1, 2, 3, 2, 1].indexOf(2));
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// slice: start index inclusive, end index exclusive
console.log([0, 1, 2, 3, 4].slice(2, 4));
console.log([0, 1, 2, 3, 4].slice(2));
// string
console.log("coconut".indexOf("u"));
console.log(String(6).padStart(3, "0"));
// rest parameters
function myMaxNumbers(name, ...numberList) {
    let result = -Infinity;
    for (let n of numberList) {
        if (n > result) {
            result = n;
        }
    }
    return result;
}
console.log(myMaxNumbers("coconut", -3, 4, 54, -35));
console.log(myMaxNumbers("palm tree", -3, -4, -54, -35, -200, -300));
// spread out the array
let numbers = [-5, -1, -7];
console.log(myMaxNumbers("beach", 30, ...numbers, 20));
let words = ["never", "fully"];
// with spreading
console.log(["will", ...words, "understand"]);
// no spreading
console.log(["will", words, "understand"]);
// If a property is added multiple times, the last value 
// to be added wins:
let coordinates = { x: 10, y: 0 };
console.log({ ...coordinates, y: 5, z: 1 });
console.log({ ...coordinates, yy: 55, zz: 11 });
console.log(Math.random());
