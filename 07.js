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

console.log(year+"-"+month+"-"+day+" "+hours+":"+minute)
console.log(day+"-"+month+"-"+year+" "+hours+":"+minute)
console.log(day+"/"+month+"/"+year+" "+hours+":"+minute)