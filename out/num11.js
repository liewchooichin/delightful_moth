// RegExp
"use strict";
const re1 = new RegExp("abc");
let result = re1.test("coabcco");
console.log(`Result: ${result}`); // true
// match a date and time format like 01-30-2003 15:20
const re2 = new RegExp(/\d{2}-\d{2}-\d{4} \d{2}:\d{2}/);
result = re2.test("20-08-2024 13:30");
console.log(`Result: ${result}`); // true
result = re2.test("20-08-24 13:30");
console.log(`Result: ${result}`); // false
// groups
const re3 = new RegExp(/(boo)+(moo)+/, "i"); // case insensitive
let s1 = "moo";
let match = re3.exec(s1); //null
console.log(`${s1}: ${match}`);
s1 = "boo";
match = re3.exec(s1); //null
console.log(`${s1}: ${match}`);
s1 = "boomoo";
match = re3.exec(s1); //boomoo,boo,moo
console.log(`${s1}: ${match}`);
s1 = "boopppmoomooppp";
match = re3.exec(s1); //null
console.log(`${s1}: ${match}`);
// quoted text
const re4 = new RegExp(/[^'"][$'"]/);
s1 = "a single quote \' end \'";
result = re4.test(s1);
console.log(`${s1}: ${result}`); // true
s1 = "a double quote \" end \"";
result = re4.test(s1);
console.log(`${s1}: ${result}`); // true
s1 = "not a quote ? end ?";
result = re4.test(s1);
console.log(`${s1}: ${result}`); // false
s1 = "a double quote \" end single quote \'";
result = re4.test(s1);
console.log(`${s1}: ${result}`); // true
s1 = "a double quote \" ";
result = re4.test(s1);
console.log(`${s1}: ${result}`); // true
s1 = "a single quote \' ";
result = re4.test(s1);
console.log(`${s1}: ${result}`); // true
// replace
console.log("Borobudur".replace(/[ou]/, "a"));
console.log("Borobudur".replace(/[ou]/g, "a"));
