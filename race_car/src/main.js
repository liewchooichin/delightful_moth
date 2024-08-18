/**
 * Main script for the race car.
 * Move the car left when key A or a is pressed.
 * Move the car right when key D or d is pressed.
 */

/**
 * Get the necessary id const
 */
const road = document.querySelector("#road");
road.width = 1200;

const myBanner = document.querySelector("#myBanner");
const car = document.querySelector("#car");

/**
 * Some info
 */
console.log(myBanner.clientWidth, myBanner.clientHeight);
console.log(road.width, road.height);
console.log(car.width, car.height);

/**
 * Event listener
 */
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

/**
 * Key press variables
 */
let rightPressed = false;
let leftPressed = false;

/**
 * keyDownHandler
 * @param {*} event 
 */
function keyDownHandler(event) {
  if (event.code === "KeyA") {
    // 0x001E KeyA
    rightPressed = true;
    console.log(`Down ${event.code}`);
  } else if (event.code === "KeyD") {
    // 0x0020 KeyD 
    leftPressed = true;
    console.log(`Down ${event.code}`);
  }
  if (event.code === "ArrowLeft") {
    // 0xE04B	ArrowLeft
    leftPressed = true;
    console.log(`Down ${event.code}`);
  } else if (event.code === "ArrowRight") {
    // 0xE04D	ArrowRight
    rightPressed = true;
    console.log(`Down ${event.code}`);
  }
}

/**
 * keyUpHandler
 * Detect A or D, Left or Right arrow.
 * @param {} event 
 */
function keyUpHandler(event) {
  if (event.code === "KeyA") {
    // 0x001E KeyA
    rightPressed = false;
    console.log(`Up ${event.code}`);
  } else if (event.code === "KeyD") {
    // 0x0020 KeyD 
    leftPressed = false;
    console.log(`Up ${event.code}`);
  }
  if (event.code === "ArrowLeft") {
    // 0xE04B	ArrowLeft
    leftPressed = false;
    console.log(`Up ${event.code}`);
  } else if (event.code === "ArrowRight") {
    // 0xE04D	ArrowRight
    rightPressed = false;
    console.log(`Up ${event.code}`);
  }
}