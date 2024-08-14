var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// array
var sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
console.log(sequence.pop());
console.log(sequence);
// squirrel
var day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
console.log(day1.events[2]);
// object
var objectA = { a: 1, b: 2 };
console.log(objectA);
Object.assign(objectA, { b: 3, c: 4 });
console.log(objectA);
console.log(typeof (objectA));
// array
var myArray = [0, 1, 2];
console.log(myArray);
myArray.unshift(-1);
myArray.unshift(-2);
console.log("Add item to the head: [".concat(myArray, "] (len:").concat(myArray.length, ")"));
var newArray = myArray.concat([100, 200]);
console.log(newArray);
console.log([1, 2, 3, 2, 1].indexOf(2));
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// slice: start index inclusive, end index exclusive
console.log([0, 1, 2, 3, 4].slice(2, 4));
console.log([0, 1, 2, 3, 4].slice(2));
// string
console.log("coconut".indexOf("u"));
console.log(String(6).padStart(3, "0"));
// rest parameters
function myMaxNumbers(name) {
    var numberList = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numberList[_i - 1] = arguments[_i];
    }
    var result = -Infinity;
    for (var _a = 0, numberList_1 = numberList; _a < numberList_1.length; _a++) {
        var n = numberList_1[_a];
        if (n > result) {
            result = n;
        }
    }
    return result;
}
console.log(myMaxNumbers("coconut", -3, 4, 54, -35));
console.log(myMaxNumbers("palm tree", -3, -4, -54, -35, -200, -300));
// spread out the array
var numbers = [-5, -1, -7];
console.log(myMaxNumbers.apply(void 0, __spreadArray(__spreadArray(["beach", 30], numbers, false), [20], false)));
var words = ["never", "fully"];
// with spreading
console.log(__spreadArray(__spreadArray(["will"], words, true), ["understand"], false));
// no spreading
console.log(["will", words, "understand"]);
// If a property is added multiple times, the last value 
// to be added wins:
var coordinates = { x: 10, y: 0 };
console.log(__assign(__assign({}, coordinates), { y: 5, z: 1 }));
console.log(__assign(__assign({}, coordinates), { yy: 55, zz: 11 }));
