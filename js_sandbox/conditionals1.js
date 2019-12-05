console.log('If else statements and Comparison operators');

const id = '100';
// const id1 = 1;
// Equal to

if (id == 100 ){
  console.log('Correct');
} else {
  console.log('Incorrect');
}

// Not Equal to 

if ( id != 101 ){
  console.log('Correct');
} else {
  console.log('Incorrect');
}


// Equal to value & type

if (id === 101 ){
  console.log('Correct');
} else {
  console.log('Incorrect');
}

// Check if a variable is defined

if (id) {
  console.log(`The ID is ${id}`);
} else {
  console.log('No ID');
}

console.log(typeof id1)

// Another way of checking if a variable is defined

// Test if undefined
if ( (typeof id) !== 'undefined' ) {
  console.log(`The ID is ${id}`);
} else {
  console.log('No ID');
}

// Greater than or lesser than
if(id > 200) {
  console.log('Greater');
} else {
  console.log('Lesser');
}


// IF ELSE IF

const color = 'Yellow';
if (color === 'red') {
  console.log('Color is red');
} else if (color === 'blue') {
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue');
}

// Logical operators

const name = 'Steve';
const age = 17;

// AND &&

if (age > 0 && age <= 12) {
  console.log(`${name} is a child`);
} else if (age > 12 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR || 

if( age < 16 || age > 65) {
  console.log(`${name} can not run in the race`);
} else {
  console.log(`${name} can run in the race`);
}

// TERNARY OPERATOR

const test = 300;
console.log(test === 300 ? 'CORRECT': 'INCORRECT');

// without braces

if (test === 300 )
  console.log('CORRECT');
else 
  console.log('INCORRECT');  