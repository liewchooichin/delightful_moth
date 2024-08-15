// asyn and async function*

"use strict"

function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
}
  
async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
}
  
asyncCall();
  
// The async function* declaration creates a binding 
// of a new async generator function to a given name.
async function* foo() {
    yield await Promise.resolve('a');
    yield await Promise.resolve('b');
    yield await Promise.resolve('c');
}
  
let str = '';

async function generate() {
    for await (const val of foo()) {
        str = str + val;
    }
    console.log(str);
}

generate();
// Expected output: "abc"

// const, catch
const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // Expected output: TypeError: invalid assignment to const 'number'
  // (Note: the exact output may be browser-dependent)
}

console.log(number);
// Expected output: 42