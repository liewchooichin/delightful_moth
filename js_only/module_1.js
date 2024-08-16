// module "module_1.js"
"use strict"

function cube(x) {
    return x * x * x;
  }
  
const foo = Math.PI + Math.SQRT2;

const graph = {
    options: {
      color: "white",
      thickness: "2px",
    },
    
    draw() {
      console.log("From graph draw function");
      console.log(`Options: ${this.options.color}, ${this.options.thickness}`);
    },
  };
  
export { cube, foo, graph };
  