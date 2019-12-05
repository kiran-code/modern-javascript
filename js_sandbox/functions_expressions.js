console.log('Function Declarations and Expressions');

// FUNCTION DECLARATIONS

// In ES5
function greetES5(firstName, lastName){
  if( firstName === undefined ) { 
    firstName = 'John';
  }
  if( lastName === undefined ) { 
    lastName = 'Doe';
  }
  // console.log('Hallo');
  return 'Hallo' + ' ' + firstName +' '+lastName;
}
console.log(greetES5('Ravikiran', 'Yadava'));

// In ES6
function greetES6(firstName = 'John', lastName = 'Doe'){
  // console.log('Hallo');
  return 'Hallo' + ' ' + firstName +' '+lastName;
}
console.log(greetES6('Ravikiran', 'Yadava'));


// FUNCTION EXPRESSION

const square = function(x = 3) {
  return x * x;
}

console.log(square(8));

// IMMIDIATLEY INVOCABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//   console.log('IIFEs Ran');
// })();

(function(name){
  console.log(`Hallo ${name}`);
})('Ravikiran');

// PROPERTY METHODS

const todo = {
  add: function() {
    console.log('Add a todo items');
  },
  edit: function(id) {
    console.log(`Edit todo item ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo');
}

todo.add();
todo.edit(19);
todo.delete();