// let fname = prompt("What is your First Name?");
// let lname =  prompt("What is your Last Name?");
// console.log("Welcome " + fname + " " + lname);

// let gender =  prompt("What is your Gender?");

// if (gender == "male" || gender == "Male") {
//     console.log("Hello Mr" + " " + fname + " " + lname);
// } else {
//     console.log("Hello Miss" + " " + fname + " " + lname);
// }

// let a = 0;
// for (a=0; a<=100; a++){
//     console.log(a)
// }

// let arr = [1, 3, 55, 54, 33, 434, 43, 454, 332, 9, 99, 889];
// for (let i = 0; i<arr.length; i++){
//     if (arr[i] % 2 == 0){
//         console.log(arr[i]);
//     }
// }

// function diceRoll() {
//   let diceValue = Math.floor(Math.random() * 6) + 1;
//   console.log(diceValue);
// }

// diceRoll();

// function avg(a, b, c) {
//   let agvSum = (a + b + c) / 3;
//   console.log(agvSum);
// }
// avg(20, 40, 60);

// function table(a) {
//   for (let i = a; i <= a * 10; i += a) {
//     console.log(i);
//   }
// }

// table(10);

// function getTotal(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

/* Write your code below. Good luck! 🙂 */

// const calcAverage = (a, b, c) => {
//   let avg = (a + b + c) / 3;
//   return avg;
// };

// let scoreDolphins = calcAverage(100, 200, 300);
// let scoreKoalas = calcAverage(50, 54, 49);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else {
//     console.log("No team wins...");
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(200, 450);

/* Write your code below. Good luck! 🙂 */

// function calcTip(bill) {
//   let tip;
//   if (bill >= 50 && bill <= 300) {
//     tip = bill * 0.15;
//   } else if (bill > 300) {
//     tip = bill * 0.2;
//   } else {
//     tip = 0;
//   }
//   return tip;
// }

// const user = calcTip(301);
// console.log(user);

// const aman = {
//   firstName: "Aman",
//   lastName: "Sharma",
//   job: "Student",
//   birthYear: 1999,
//   hasDriversLicense: false,

//   calcAge: function () {
//     this.age = 2024 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     const details = `${this.firstName} is a ${this.age}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//     return details;
//   },
// };

// aman.calcAge();

// // let addAman = prompt("What do you want to add in object?");
// aman.loction = "Canada";
// aman["instagram"] = "@its.amannn";
// aman["friends"] = ["Abhishek", "Karan", "Devansh"];

// console.log(aman);

// console.log(
//   `${aman.firstName} has ${aman.friends.length} friends, and his best friend is called ${aman.friends[0]}`
// );

// console.log(aman.getSummary());

/* Write your code below. Good luck! 🙂 */

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();
// console.log(mark, john);

// if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!`
//   );
// } else {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`
//   );
// }

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// /* Write your code below. Good luck! 🙂 */

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   const bill = tip + bills[i];
//   totals.push(bill);
// }

// console.log(bills);
// console.log(tips);
// console.log(totals);

// let money = 0;
// for (let i = 1; i <= 30; i++) {
//   money = i ** 2;
// }

// console.log(`You will have ${money} at day 30`);

// let money = 1; // Initial amount of money in Rs
// let totalMoney = money; // Initialize total money

// for (let day = 1; day <= 30; day++) {
//   totalMoney = totalMoney + money; // Add money earned on current day to total
//   money = money * 2; // Double the money for the next day
// }

// console.log(`Total money after 30 days: Rs ${totalMoney}`);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 448];
// largestNum = arr[0];

// for (i = 0; i <= arr.length; i++) {
//   if (arr[i] > largestNum) {
//     largestNum = arr[i];
//   }
// }

// console.log(largestNum);

// for (i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = "Lydia";
//   let age = 21;
// }

// sayHi();

let num;

do {
  num = prompt("Choose a number between 1-100");
} while (isNaN(num) || num < 1 || num > 100);

alert(
  `We are going to generate random numbers for you between 1 to ${num} and you have to choose a corrent one`
);

let randomNumber = Math.floor(Math.random() * num) + 1;
console.log("Random Number: ", randomNumber);

let guess;
do {
  guess = prompt(`Choose a Number between 1 to ${num}`);
  if (guess == randomNumber) {
    alert(
      `Congratulations you choice was ${guess} and the correct answer was ${randomNumber}`
    );
  } else {
    alert("try again");
  }
} while (guess != randomNumber);
