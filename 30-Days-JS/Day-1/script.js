// // Write a single line comment which says, comments can make code readable

// // Write another single comment which says, Welcome to 30DaysOfJavaScript

// // Write a multiline comment which says, comments can make code readable, easy to reuse and informative

// // Create a variable.js file and declare variables and assign string, boolean, undefined and null data types

// // Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

// // Declare four variables without assigning values

// // Declare four variables with assigned values

// // Declare variables to store your first name, last name, marital status, country and age in multiple lines

// // Declare variables to store your first name, last name, marital status, country and age in a single line

// // Declare two variables myAge and yourAge and assign them initial values and log to the browser console.

// let a = "Aman";
// let b = true;
// let c = undefined;
// let d = null;
// let e = 25;

// console.log(
//   `String: ${a}, Boolean: ${b}, Undefined: ${c}, Null: ${d}, Number: ${e}`
// );
// console.log(
//   `String: ${typeof a}, Boolean: ${typeof b}, Undefined: ${typeof c}, Null: ${typeof d}, Number: ${typeof e}`
// );

// // let firstName = "Aman";
// // let lastName = "Sharma";
// // let maritalSatus = false;
// // let country = "India";
// // let age = 25;

// let firstName = "John",
//   lastName = "Doe",
//   maritalStatus = "single",
//   country = "USA",
//   age = 30;

// let word = "JavaScript";
// word[0] = "Y";

// console.log(word);

// Simple Note Making Fuction
let userNotes = [];

function notes() {
  let userInput;

  while (true) {
    userInput = prompt(
      "Enter your note and write 'stop' in the stop making notes"
    );

    if (userInput === null || userInput.toLocaleLowerCase() === "stop") {
      console.log(userNotes);
      break;
    }
    if (userInput.trim() !== "") {
      userNotes.push(userInput);
      console.log(userNotes);
    } else {
      console.log("Sahi se Note Likh BC");
    }
  }
}
