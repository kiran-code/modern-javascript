const firstName = "ravikiran";
const lastName = "Yadava";
const age = 31;
const str = 'Hallo Mein name ist Ravikiran';
const tags = 'NodeJS, JS, Java, Spring, AWS, CSS, SASS'; 

let val = firstName + lastName;

// Concatenation
val = firstName + ' '+ lastName;

// Append
val = firstName;
val += ' ';
val += lastName;

val = 'Hallo, Ich bin '+ firstName + ' und ich bin '+ age;

// Escaping 
val = "I can't wait to finish this courses";
val = 'I can\'t wait to finish this courses';


val = firstName.length;

// String methods
val = firstName.concat(' ', lastName);

  // Change case
  val = firstName.toLocaleLowerCase();
  val = firstName.toLocaleUpperCase();

  // Index of a character
  val = firstName.indexOf('r');
  val = firstName.lastIndexOf('r');

  // Character at index i
  val = firstName.charAt(6);

  // Get the last character
  val = firstName.charAt(firstName.length - 1);

  // Pull substring out of a string substring()
  val = firstName.substring(0,4);
  
  // Slice()
  val = firstName.slice(0,4);
  val = firstName.slice(-5);

  // Split() Splits the method into an array when separated by a delimiter 
  val = str.split(' ');
  val = tags.split(',');

  // Replace()
  val = str.replace('Ravikiran','Lavi');

  // includes()
  val = str.includes('Ravikiran');
  console.log(val, str, firstName);