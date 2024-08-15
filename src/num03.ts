/** 
 * Optional property access
 * When you aren’t sure whether a given value produces an object, but
 * still want to read a property from it when it does, you can use a variant
 * of the dot notation: 
 *     object?.property.
 */

const city = {
    cityName: "Lahore",
    cityCountry: "Pakistan",
    cityFood: ["FoodA", "FoodB", "FoodC"],
}
console.log(city.cityName?.length);
console.log(city?.cityName);
console.log(city?.cityCountry);
console.log(city.cityFood?.[1]);
console.log(city.cityFood?.[10]===undefined? "No value": "Some food name");
console.log(city?.cityPopulation===undefined? "No population": "xxx number");

// JSON
// Encode an object to JSON
const cityString = JSON.stringify(city);
console.log(cityString);
console.log(typeof(cityString)); // type is string
// Decode the JSON to 
const cityObject = JSON.parse(cityString);
console.log(cityObject);
console.log(typeof(cityObject)); // type is object
// Turn it into an Object class
const cityObjectType: Object = new Object(cityObject);
let test = cityObjectType.hasOwnProperty("cityName");
console.log(`Has name: ${test}`);

// Array, forEach
const vegeArray: string[] = ["Brocolli", "Cauliflower", "Spinach", "XiaoBaiCai", "Brinjal", "Banana"];
const magicNumArry: number[] = [-5, -4, -20, -1, -55, -74];
vegeArray.forEach((value)=>{
    console.log(`${value} is delicious.`);
})
const newVege: string[] = vegeArray.map(
    (x) => x + " is yummy."
)
console.log(vegeArray);
console.log(newVege);
console.log(`Type of newVege: ${typeof(newVege)}`);

const regex = /[Bb]/g;
const testMatch1: string[] = vegeArray.filter(
    (x) => x.match(regex)
)
console.log(testMatch1);