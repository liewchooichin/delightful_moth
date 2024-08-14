/**
 * Loop
 */
// Print a chessboard grid
function chessGrid(size) {
    // print info
    console.log("Chessboard size: ".concat(size));
    var oneRow = "";
    for (var k = 0; k < size; k++) {
        oneRow += "__"; // start of row
    }
    for (var i = 0; i < size; i++) {
        oneRow += "\n|"; // start of row
        for (var j = 0; j < size; j++) {
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
        for (var k = 0; k < size; k++) {
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
    for (var i = 1; i <= 45; i++) {
        var div3 = false;
        var div5 = false;
        if ((i % 3) == 0) {
            div3 = true;
            console.log("Fizz", " (".concat(i, ")"));
        }
        if ((i % 5) == 0) {
            div5 = true;
            console.log("Buzz", " (".concat(i, ")"));
        }
        if (div3 && div5) {
            console.log("FizzBuzz", " (".concat(i, ")"));
        }
    }
}
// call fizzBuzz
//fizzBuzz();
function function_increment() {
    var i = 0;
    console.log("Start value of ".concat(i));
    while (i < 5) {
        console.log("i = ".concat(i++));
    }
    console.log("End value of ".concat(i));
    // ++i
    i = 0;
    while (i < 5) {
        console.log("i = ".concat(++i));
    }
    console.log("End value of ".concat(i));
}
