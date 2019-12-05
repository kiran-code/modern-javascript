console.log('generalLoops');

// FOR loop

for ( let i = 0; i < 10; i++ ) {
  if( i === 3 ) {
    console.log('My Favorite number is ', i);
    continue;
   }

   if ( i === 7 ) {
     console.log('Breaking at ', i);
     break;
   }
  console.log('Number is ',i);
}

// WHILE loop
console.log('**********While loop********');

let i = 0;

while( i < 10 ) {
  console.log('Number ', i);
  if ( i === 2 ) {
    console.log('My favorite number is ',i);
    i++;
    continue;
  }

  if( i === 7 ){
    console.log('We do not work after 7');
    break;
  }
  i++;
}

// DO WHILE loop
console.log('******** do While loop******');

let j = 0;

do {
  console.log('Number ', j);
  if ( j === 3 ) {
    console.log('My favorite hour is 3 PM', j);
    j++;
    continue;
  }

  if ( j === 9 ) {
    console.log('I do like to go to bed at 9 PM ', j);
    break;
  }
  j++;
} while(j < 10)


// ITERATE THROUGH AN ARRAY 
console.log('*******ITERATE THROUGH AN ARRAY ******')
const cars = ['FORD', 'TOYOTA', 'NIRO', 'HONDA'];

for ( let i = 0; i < cars.length; i++ ) {
  console.log(cars[i])
}

console.log('***ITERATE THROUGH AN ARRAY using forEach****')
cars.forEach((car, index, array) => { // forEach takes an annonymous function
  console.log(`${index}: ${car} in [${array}]`);
});

console.log('***MAP****')

const users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Mark'},
  {id: 3, name: 'Henry'},
  {id: 4, name: 'Sara'}
]

const ids = users.map((user) => {
  return user.id;
});

const names = users.map((user) => {
  return user.name;
});

console.log(ids, names);

// FOR IN loop to parse through an object

const user = {
  firstName: 'Ravikiran',
  lastName : 'Yadava',
  age      : 31
}

for ( let x in user ) {
  console.log(`${x} : ${user[x]}`);
} 