console.log('WINDOW METHODS OBJECTS PROPERTIES');
console.log(window);

// const input = prompt();
// console.log(input);

// if(confirm('Are you sure?')) {
//   console.log('Confirmed');
// } else {
//   console.log('Declined');
// }


let val;

// Heights
val = window.outerHeight;
val = window.innerHeight;

// Widths
val = window.outerWidth;
val = window.innerWidth;


// Scroll points
val = window.scrollY;
val = window.scrollX;

// LOCATION OBJECT
val = window.location;
// window.location.reload();

val = window.location.port;
val = window.location.href;
val = window.location.search;
 
// window.location.href = 'http://scoopweb.io';

// HISTORY OBBJECT

// window.history.go(-3);
val = window.history.length;


// NAVIGATOR OBJECT

val = window.navigator;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.userAgent;


console.log(val);