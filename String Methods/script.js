// *********************************************   STRING METHODS   *********************************************
let firstName = "Aman       ";
let lastName = "Sharma";

// 1. Concatenation
// let fullName = firstName + " " + lastName;
let fullName = firstName.concat(lastName);
console.log(fullName);

// 2. Append
firstName += " The Best Developer";
console.log(firstName);

// 3. Length
console.log(firstName.length);

// 4. Cases
console.log(firstName.toLocaleLowerCase());
console.log(firstName.toLocaleUpperCase());

// 5. Slice
console.log(firstName.slice(1, 4)); // Aman => man

// 6. Split & Join Method
console.log(firstName.split(""));
console.log(firstName.split(" ").join(""));

// 7. Includes
console.log(firstName.includes("A"));

// 8. Trim
console.log(firstName.trim()); // Remove Extra Space
