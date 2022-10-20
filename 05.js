// Write a code which can give grades to students according to theirs scores:
// a. 80-100, A
// b. 70-79, B
// c. 60-69, C
// d. 50-59, D
// e. 0-49, F

let grade = 59;

if(80 <= grade && grade < 100)
    console.log('Grade: A');
else if(70 <= grade && grade < 80)
    console.log('Grade: B');
else if(60 <= grade && grade < 70)
    console.log('Grade: C');
else if(50 <= grade && grade < 60)
    console.log('Grade D');
else if(0 <= grade && grade < 50)
    console.log('Grade F')