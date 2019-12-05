const person = {
  firstName: 'Ravikiran',
  lastName: 'Yadava',
  age: 31,
  email: 'ravikiran@gmail.com',
  hobbies: ['coding', 'music'],
  address: {
    city: 'siruguppa',
    state: 'Karnataka'
  },
  getBirthYear: function (){
    return 1988;
  },
  getBirthYearThis: function (){
    return 2019 - this.age;
  }
}

let val;

val = person;

val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.address;
val = person.address.state;
val = person.getBirthYear();
val = person.getBirthYearThis();

console.log(val);

const family = [
  {name: 'kittu', age: 31},
  {name: 'vijji', age: 28},
  {name: 'mom', age: 58},
  {name: 'dad', age: 60},
  {name: 'mowgli', age: 1}
]

for(let i = 0; i < family.length; i++) {
  console.log(family[i].name);
}