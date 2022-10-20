// Write a program which tells the number of days in a month.
let month = 8;

// Using switch case
console.log('Using switch case: ')
switch (month){
    case(1):
        console.log("No. of days: 31");
        break;
    case(2):
        console.log("No. of days: 28/29 on leap years");
        break;
    case(3):
        console.log("No. of days: 31");
        break;
    case(4):
        console.log("No. of days: 30");
        break;
    case(5):
        console.log("No. of days: 31");
        break;
    case(6):
        console.log("No. of days: 30");
        break;
    case(7):
        console.log("No. of days: 31");
        break;
    case(8):
        console.log("No. of days: 31");
        break;
    case(9):
        console.log("No. of days: 30");
        break;
    case(10):
        console.log("No. of days: 31");
        break;
    case(11):
        console.log("No. of days: 30");
        break;
    case(12):
        console.log("No. of days: 31");
        break;    
}

// Using if else conditional statement

console.log('\nAnother method: Using if else')

if(month==4||month==6||month==9||month==11)
    console.log("No. of days: 30");
else if(month==2)
    console.log("No. of days: 28/29 on leap years");
else
    console.log("No. of days: 31");