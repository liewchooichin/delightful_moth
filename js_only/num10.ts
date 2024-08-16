// Arguments

"use strict";

function func1(a: number, b: number, c: number) {
    console.log(arguments[0]);
    // Expected output: 1
  
    console.log(arguments[1]);
    // Expected output: 2
  
    console.log(arguments[2]);
    // Expected output: 3
  }

  func1(100, 200, 300);

  // Arguments and parameters are not the same.
  function funcWithDefault(a = 55) {
    arguments[0] = 99; // updating arguments[0] does not also update a
    console.log(`param a = ${a}, args[0] = ${arguments[0]}`);
  }
  funcWithDefault(10); // 10
  
  function funcWithDefault2(a = 55) {
    a = 99; // updating a does not also update arguments[0]
    console.log(`param a = ${a}, args[0] = ${arguments[0]}`);
  }
  funcWithDefault2(10); // 10
  
  // An untracked default parameter
  function funcWithDefault3(a = 55) {
    console.log(`param a = ${a}, args[0] = ${arguments[0]}`);
    console.log(`Length of args: ${arguments.length}`);
  }
  funcWithDefault3(); // undefined; 0
  
  // Using the arguments array
  // But in Typescript, the parameters must be declared.
  function midpoint(...num_list: number[]) {
    return (
      (Math.min.apply(null, num_list) + Math.max.apply(null, num_list)) / 2
    )
    /**
     * Using original javascript arguments:
    return (
      (Math.min.apply(null, arguments) + Math.max.apply(null, arguments)) / 2
    );
    */
  }
  
  console.log(midpoint(3, 1, 4, 1, 5)); // 3
  