// Strict mode
// JavaScript can be made a little stricter by enabling strict mode. This
// can done by putting the string "use strict" at the top of a file or a
// function body.

"use strict";

function canYouSpotTheProblem() {    
    for (let counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
    }
}

class Person {
    name= "";

    constructor(name) {
        this.name = name;
    }
    toString() {
        return `"Person: ${this.name}"`
    }
}

let p = new Person("Mary");
console.log(p);

// for ... in
// The for...in statement iterates over all enumerable 
// string properties of an object.
const object = { a: "1", b: "2", c: "3" };
debugger;
console.log("With for...in");
for (const key in object) {
  console.log(`${key}: ${object[key]}`);
}
console.log("With for...of");
try {
  for (const item of object) {
    console.log(item); // TypeError: object is not iterable
  }
} catch(err) {
    console.log(err.);
} finally {
  console.log("for...of cannot be used to iterate objects.")
}


// Labeled statement
let str = '';

loop1: for (let i = 0; i < 5; i++) {
    debugger;
  if (i === 1) {
    continue loop1;
  }
  str = str + i;
}

console.log(str);
// Expected output: "0234"