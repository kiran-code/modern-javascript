const name = 'Ravikiran';
const age = 31;
const job = 'Web Developer';
const city = 'Siruguppa';
let html1, html2;

function hello() {
  return "hello";
}

// Without template literals introduced in ES6
html1 = '<ul> '
            + '<li>Name: '+ name+ ' </li>' 
            + '<li>Age: '+ age+ ' </li>' 
            + '<li>Job: '+ job+ ' </li>' 
            + '<li>City: '+ city+ ' </li>' +
        '</ul>';

document.body.innerHTML = html1;

// With template strings or literals

html2 = `
        <ul>
          <li>Name: ${name}</li>
          <li>Age: ${age}</li>
          <li>Job: ${job}</li>
          <li>City: ${city}</li>
          <li>${2 + 3}</li>
          <li>${hello()}</li>
          <li>${age > 30 ? 'Over 30': 'Under 30'}</li>
          </ul>
        ` 

document.body.innerHTML = html2;