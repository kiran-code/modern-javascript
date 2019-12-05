console.log("scopes in Javascript");

var a = 1;
let b = 2;
const c = 3;

(function(){
  var a = 4; 
  let b = 5;
  const c = 6;
  console.log('Function Scope', a, b, c);
})();

console.log('Global Scope ', a, b, c);

z = 10;

if( z === 10 ) {
  var a = 4;
  let b = 5; 
  const c = 6;
  console.log('Block Scope ', a, b, c);
} 

console.log('Global Scope ', a, b, c);


for(var a = 0; a < 10; a++){
  console.log(`loop ${a}`);
}

console.log('Global scope ', a, b, c);

// let and CONST have block level scope , var has function scope 
