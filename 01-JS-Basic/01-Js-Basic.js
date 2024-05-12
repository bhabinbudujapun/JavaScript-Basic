// Declare firstName, lastName, country, city, age, isMarried, year variable and assign
// value to it and use the typeof operator to check different data types.

let firstName = "Bhabin";
let lastName = "Pun";
let country = "Nepal";
let city = "Kathmandu";
let age = 23;
let isMarried = "Single";
let years = 2022;

console.log(`
variable    - datatype 
firstname   - ${typeof firstName}
lastname    - ${typeof lastName}
country     - ${typeof country}
city        - ${typeof city}
age         - ${typeof age}
isMarried   - ${typeof isMarried}
year        - ${typeof years}
`);

// three JavaScript statements which provide truthy value.

let a = 88;
let b = 77;

console.log("truthy value: ");
Tstatement1 = a > b;
console.log(Tstatement1);
Tstatement2 = a != b;
console.log(Tstatement2);
Tstatement3 = a % 2 == 0;
console.log(Tstatement3);

// three JavaScript statements which provide falsy value.

console.log("\nfalsy value: ");
Fstatement1 = a < b;
console.log(Fstatement1);
Fstatement1 = a == b;
console.log(Fstatement1);
Fstatement1 = b % 2 == 0;
console.log(Fstatement1);

// Figure out the result of the following expressions first without using console.log().
// After you decide the result confirm it by using console.log()

// My answer without using console.log()
// a. true, b. false, c. true, d. true, e. false
// f. true, g. true, h. false, i. true, j. true

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));

//Answer:
// a. true, b. false, c. true, d. true, e. false
// f. true, g. true, h. false, i. true, j. true

// Write a code which can give grades to students according to theirs scores:
// a. 80-100, A
// b. 70-79, B
// c. 60-69, C
// d. 50-59, D
// e. 0-49, F

let grade = 59;

if (80 <= grade && grade < 100) console.log("Grade: A");
else if (70 <= grade && grade < 80) console.log("Grade: B");
else if (60 <= grade && grade < 70) console.log("Grade: C");
else if (50 <= grade && grade < 60) console.log("Grade D");
else if (0 <= grade && grade < 50) console.log("Grade F");

// Create a human readable time format using the Date time object
// a. YYYY-MM-DD HH:mm
// b. DD-MM-YYYY HH:mm
// c. DD/MM/YYYY HH:mm

let date = new Date();

let year = date.getUTCFullYear();
let month = date.getMonth();
let day = date.getDay();
let hours = date.getHours();
let minute = date.getMinutes();

month += 1;
day += 1;

console.log(year + "-" + month + "-" + day + " " + hours + ":" + minute);
console.log(day + "-" + month + "-" + year + " " + hours + ":" + minute);
console.log(day + "/" + month + "/" + year + " " + hours + ":" + minute);

// Write a program which tells the number of days in a month.
let months = 8;

// Using switch case
console.log("Using switch case: ");
switch (months) {
  case 1:
    console.log("No. of days: 31");
    break;
  case 2:
    console.log("No. of days: 28/29 on leap years");
    break;
  case 3:
    console.log("No. of days: 31");
    break;
  case 4:
    console.log("No. of days: 30");
    break;
  case 5:
    console.log("No. of days: 31");
    break;
  case 6:
    console.log("No. of days: 30");
    break;
  case 7:
    console.log("No. of days: 31");
    break;
  case 8:
    console.log("No. of days: 31");
    break;
  case 9:
    console.log("No. of days: 30");
    break;
  case 10:
    console.log("No. of days: 31");
    break;
  case 11:
    console.log("No. of days: 30");
    break;
  case 12:
    console.log("No. of days: 31");
    break;
}

// Using if else conditional statement

console.log("\nAnother method: Using if else");

if (months == 4 || months == 6 || months == 9 || months == 11)
  console.log("No. of days: 30");
else if (months == 2) console.log("No. of days: 28/29 on leap years");
else console.log("No. of days: 31");
