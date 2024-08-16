"use strict";

  function isNumeric(x) {
    return ["number", "bigint"].includes(typeof x);
  }
  
  function sum(...values) {
    if (!values.every(isNumeric)) {
      throw new TypeError("Can only add numbers");
    }
    // try the parseFloat built-in function.
    console.log(parseFloat("4.500"));
    return values.reduce((a, b) => a + b);
    
  }
  
  console.log(sum(1, 2, 3)); // 6
  try {
    sum(1, 2, 3, 4, 5);
    sum("1", "2");
  } catch (err) {
    if(err instanceof TypeError)
        console.error("TypeError"); // TypeError: Can only add numbers
    else
        console.error("Some errors");
  }
  