let val1 = 5;
let val2;

// Number to String Conversion

val1 = String(val1);
val2 = String(4+4);

console.log('val1 ',val1);
console.log('val2 ',val2);
console.log('typeof val1 ', typeof val1);
console.log('typeof val2 ',typeof val2);
console.log(' val1.length ',val1.length);
console.log(' val2.length ',val2.length);

// Boolean to String Conversion

let val3 = true;
console.log('Type of val3 before conversion ',typeof val3);
val3 = String(val3);
console.log('val3 ',val3);
console.log('Type of val3 after conversion ', typeof val3);
console.log(' val3.length ',val3.length);


// Date to String conversion
let val4 = new Date();
console.log('Type of val3 before conversion ',typeof val4);
val4 = String(val4);
console.log('val4 : ',val4);
console.log('Type of val4 after conversion ', typeof val4);
console.log(' val4.length ',val4.length);

// Array to String conversion
let val5 = [1,2,3,4,5];
console.log('Type of val5 before conversion ',typeof val5);
val5 = String(val5);
console.log('val5 : ',val5);
console.log('Type of val5 after conversion ', typeof val5);
console.log(' val5.length ',val5.length);

// String to Number Conversion
let val6 = '5';
console.log('Type of val6 before conversion', typeof val6);
val6 = Number(val6);
console.log('Type of val6 after conversion ', typeof val6);
console.log(val6.toFixed(10));

// Boolean to Number Conversion

let val7 = true;
let val8 = false;
console.log('Type of val7 and val8 before conversion', typeof val7, typeof val8);
val7 = Number(val7);
val8 = Number(val8);
console.log('Type of val7 and val8 after conversion ', typeof val7, typeof val8);
console.log(val7.toFixed(), val8.toFixed());

// Converting boolean, null, String, array to number

console.log(Number(true), Number(null), Number('Danke'), Number([1,2,3,4]));

// Converting String to int or float using the parseInt and parseFloat methods
console.log(parseInt('100'));
let val9 = '100.30';
console.log(typeof val9, val9);
val9 = parseFloat(val9);
console.log(typeof val9, val9);
val9 = val9.toFixed(3);
console.log(typeof val9, val9);


// Type Coercion
const a = 5;
const b = 10;
const sum = a + b;
console.log(sum);
console.log(typeof sum); 
