// Suppose 1 dollar is equal to 82.23 Indian rupee, 
// create a program which converts dollars to rupees.

const ic = 82.23;
let amt = 5;

let dlr = (ic * amt).toFixed(2);

console.log(`Ic${amt} is equivalent $${dlr} Dollor`);