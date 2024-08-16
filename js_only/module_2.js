// module_2.js
"use strict"

import { cube, foo, graph } from "./module_1.js";

graph.options = {
  color: "cornflowerblue",
  thickness: "5px",
};

graph.draw(); // Logs "From graph draw function"
console.log(cube(3)); // 27
console.log(foo); // 4.555806215962888
