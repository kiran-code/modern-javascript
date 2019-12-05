  // Data Types in Javascript
  // Primitive and Reference Types

  // Primitive
  
  // String
  var text = "sometext";
  console.log(typeof text);
  
  // Number
  var age = 31;
  console.log(typeof age);
  
  // Boolean
  var hasKids = false;
  console.log(typeof hasKids);
  
  // Null
  var car = null;
  console.log(typeof car);
  
  // Undefined
  var life;
  console.log(typeof life);
  
  // Symbol
  const sym = Symbol();
  var varSymbol = Symbol();
  console.log(typeof sym, typeof varSymbol);

  // REFERENCE TYPES
  // ARRAYS
  const hobbies = ['coding', 'reading books'];
  console.log(typeof hobbies);

  //OBJECT LITERAL
  const address = {
    city: 'Siruguppa',
    state: 'Karnataka',
    zip: 583121
  }

  console.log('Type of Object literal ', typeof address);

  const today = new Date();
  console.log(today);
  console.log(typeof today);
