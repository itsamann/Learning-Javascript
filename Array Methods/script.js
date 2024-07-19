// *********************************************   ARRAY METHODS   *********************************************
const fruits = [
  "Apples",
  "Pomegranate",
  "Mango",
  "Strawberries",
  "Pineapple",
  "Grapes",
];

console.log(fruits.length);

// 1. Push Method: It will add a new element to the end of an array and returns the new length of an array.
fruits.push("Banana");
console.log(fruits);

// 2. Pop Method: It removes the last element of an array and returns the removed element.
fruits.pop();
console.log(fruits);

// 3. Shift Method: It removes the first element of an array and returns the removed element.
fruits.shift();
console.log(fruits);

// 4. Unshift Method: It will add a new element to the start of an array and returns the new length of an array.
fruits.unshift("Orange");
console.log(fruits);

// 5. Concat Method: Join 2 or more arrays and returns a result.
const moreFruits = ["Tomato", "Potato", "Pututu"];
const newArray = fruits.concat(moreFruits);
console.log(newArray);

// 6. Include Method: Checks if an array contains a specified element.
const pl = ["Javascript", "Java", "C++", "Python", "Rust"];
const numbers = [2, 5, 1, 4, 3];

console.log(pl.includes("Javascript"));

// 7. Join Method: Join all the elements of an array into a string, seperated by a specified seperator.
console.log(pl.join("-"));

// 8. Reverse method: Reverse the elements in an array in place.
console.log(pl.reverse());

// 9. Slice Method: Selects the part of an array and returns the new array.
console.log(pl.slice(0, 1));

// 10. Sort Method: Sort the elements alphabeically in strings and in ascending order.
console.log(numbers.sort());
