console.log('Dates and Times in Javascript');

let val;

const today = new Date();
let birthday = new Date('06-24-1988 02:22:20');
birthday = new Date('June 24 1988');
birthday = new Date('6/24/1988');


val = today;
val = birthday;

val = today.getDate();
val = today.getMonth();
val = today.getDay();
val = today.getFullYear();
val = today.getUTCFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

console.log(val);

birthday.setMonth(2);
console.log('My Birthday ', birthday);