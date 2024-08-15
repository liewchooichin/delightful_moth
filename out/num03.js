/**
 * Optional property access
 * When you aren’t sure whether a given value produces an object, but
 * still want to read a property from it when it does, you can use a variant
 * of the dot notation:
 *     object?.property.
 */
var _a, _b, _c;
var city = {
    cityName: "Lahore",
    cityCountry: "Pakistan",
    cityFood: ["FoodA", "FoodB", "FoodC"],
};
console.log((_a = city.cityName) === null || _a === void 0 ? void 0 : _a.length);
console.log(city === null || city === void 0 ? void 0 : city.cityName);
console.log(city === null || city === void 0 ? void 0 : city.cityCountry);
console.log((_b = city.cityFood) === null || _b === void 0 ? void 0 : _b[1]);
console.log(((_c = city.cityFood) === null || _c === void 0 ? void 0 : _c[10]) === undefined ? "No value" : "Some food name");
console.log((city === null || city === void 0 ? void 0 : city.cityPopulation) === undefined ? "No population" : "xxx number");
// JSON
// Encode an object to JSON
var cityString = JSON.stringify(city);
console.log(cityString);
console.log(typeof (cityString)); // type is string
// Decode the JSON to 
var cityObject = JSON.parse(cityString);
console.log(cityObject);
console.log(typeof (cityObject)); // type is object
// Turn it into an Object class
var cityObjectType = new Object(cityObject);
var test = cityObjectType.hasOwnProperty("cityName");
console.log("Has name: ".concat(test));
// Array, forEach
var vegeArray = ["Brocolli", "Cauliflower", "Spinach", "XiaoBaiCai", "Brinjal", "Banana"];
var magicNumArry = [-5, -4, -20, -1, -55, -74];
vegeArray.forEach(function (value) {
    console.log("".concat(value, " is delicious."));
});
var newVege = vegeArray.map(function (x) { return x + " is yummy."; });
console.log(vegeArray);
console.log(newVege);
console.log("Type of newVege: ".concat(typeof (newVege)));
var regex = /[Bb]/g;
var testMatch1 = vegeArray.filter(function (x) { return x.match(regex); });
console.log(testMatch1);
