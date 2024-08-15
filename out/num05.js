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
    name = "";
    constructor(name) {
        this.name = name;
    }
    toString() {
        return `"Person: ${this.name}"`;
    }
}
let p = new Person("Mary");
console.log(p);
const object = { a: "1", b: "2", c: "3" };
debugger;
for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}
