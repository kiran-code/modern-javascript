const numbers1 = [100, 45, 3,5,2,11,78,54];
const numbers2 = new Array(3,4,53,22,19,96);

const fruits = ['Banana', 'Apple', 'Orange', 'Pear'];
const mixed = [3, 'Hello', true, undefined, null, {a: 1, b:3}, new Date()];

console.log('Original array ',numbers1);


let val;


// Array length
val =  numbers2.length;

// Check if it is an Array?
val = Array.isArray(numbers2);

// Value at an index in array

val = numbers1[3];

// Arrays are not immutable even though are declared with const
  // So we can insert into them and modify the original array
val = numbers1.push(12); // push() method inserts a value at                             // the end of the array
val = numbers1[1] = 1000;

// Find index of a value
val = numbers1.indexOf(1000);

// Adding value at the end of an array
numbers1.push(500);

// Adding value at the front of an array
numbers1.unshift(2000);

// Taking off an element from the end of an array
numbers1.pop();


// Taking off an element from the front of an array
numbers1.shift();


// Splice method
// numbers2.splice(1,2);

// Reverse
numbers1.reverse();

// Concate arrays
val = numbers2.concat(numbers1);

// Sort arrays
val = fruits.sort();
val = numbers1.sort();

// Use compare() function to sort an array of numbers
val = numbers1.sort(function(x,y) {
  return x-y;
});


// Use compare() function to sort an array of numbers in reverse order

val = numbers1.sort(function(x,y) {
  return y-x;
});


// Find an element of an array that meets a condition

function under50(num) {
  return num < 50;
}

val = numbers2.find(under50);

console.log(numbers1);
console.log(val);
