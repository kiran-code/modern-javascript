// alert("Hello World!");
/*
 multi line comments
 */

 console.log('Hello console');
 console.log(123);
 console.log(true);
//  var greeting = 'Hello';
//  console.log(greeting);

 console.log([1,2,3,4]);
 console.log({a:1, b: 2});
 console.table({a:1, b:2, c:3});
 console.error('This is an error');
 console.clear();
 console.warn('This is a warning');

 console.time('Hello');
  console.log('Hello world!');
  console.log('Hello world!');
  console.log('Hello world!');
  console.log('Hello world!');
  console.log('Hello world!');
  console.log('Hello world!');
  console.log('Hello world!');
  console.log('Hello world!');
  console.log('Hello world!');
  console.log('Hello world!');
  console.log('Hello world!');
  console.log('Hello world!');
  console.log('Hello world!');
  console.log('Hello world!');
console.timeEnd('Hello');

console.clear();


/*********************Variables ********************************/
// var, let, const

var name = "Henry the 5th";
console.log(name);

name = "John the 2nd";
console.log(name);

var greeting;
console.log(greeting);

greeting = "Hello";
console.log(greeting);

// multiWordVars

var firstName = "ravikiran" // camelCase
var first_name = "ravikiran" // underscore
var FirstName = "ravikiran" // Pascal case
var firstname = "ravikiran" // Not recommended

// let 
let lastName = "Yadava";
console.log(lastName);


// CONST can mutate If it is not a primitive value like and ARRAY or an OBJECT 
// Const  // We have to assign the const while declaring it and we can not reassign it later once declared and defined
const company = "scoopweb";
console.log(company);


// Using const to define an Object
const Person = {
  name: 'ravikira',
  age: 31
}

console.log(Person);

Person.name = "Ravikiran Yadava";
console.log(Person);

const numbers = [1,2,3,4,5];
console.log(numbers);

numbers.push(6);
console.log(numbers);

// we can not do this
// numbers = [7.8];