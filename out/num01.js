"use strict";
/**
 * Loop
 */
// Print a chessboard grid
function chessGrid(size) {
    // print info
    console.log(`Chessboard size: ${size}`);
    let oneRow = "";
    for (let k = 0; k < size; k++) {
        oneRow += "__"; // start of row
    }
    for (let i = 0; i < size; i++) {
        oneRow += "\n|"; // start of row
        for (let j = 0; j < size; j++) {
            //i=even row, j=even col
            if (i % 2 == 0 && j % 2 == 0)
                oneRow += " |";
            //i=even row, j=odd col
            if (i % 2 == 0 && j % 2 == 1)
                oneRow += "#|";
            //i=odd row, j=even col
            if (i % 2 == 1 && j % 2 == 0)
                oneRow += "#|";
            //i=odd row, j=odd col
            if (i % 2 == 1 && j % 2 == 1)
                oneRow += " |";
        }
        // print a newline
        oneRow += "\n";
        // print the separator
        for (let k = 0; k < size; k++) {
            oneRow += "--"; // end of row
        }
    }
    // print the row
    console.log(oneRow);
}
// call chessGrid
chessGrid(8);
/**
 * For num divisible by 3, print Fizz,
 * For num divisible by 5, print Buzz,
 * For num divisible by 3 and 5, print FizzBuzz.
 */
function fizzBuzz() {
    for (let i = 1; i <= 45; i++) {
        let div3 = false;
        let div5 = false;
        if ((i % 3) == 0) {
            div3 = true;
            console.log("Fizz", ` (${i})`);
        }
        if ((i % 5) == 0) {
            div5 = true;
            console.log("Buzz", ` (${i})`);
        }
        if (div3 && div5) {
            console.log("FizzBuzz", ` (${i})`);
        }
    }
}
// call fizzBuzz
//fizzBuzz();
function function_increment() {
    let i = 0;
    console.log(`Start value of ${i}`);
    while (i < 5) {
        console.log(`i = ${i++}`);
    }
    console.log(`End value of ${i}`);
    // ++i
    i = 0;
    while (i < 5) {
        console.log(`i = ${++i}`);
    }
    console.log(`End value of ${i}`);
}
