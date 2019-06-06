/*
Write  a function called "convertObjectToList" which converts an object literal into an array of arrays, like this:
Argument:
{
  name: 'Holly',
  age: 35,
  role: 'producer'
}
Return value:
[['name', 'Holly'], ['age', 35], ['role', 'producer']]

Note that your function should be able to handle ANY object like this, not just the exact sample provided above.

E.g., it should also be able to handle this, or any other object containing simple key-value pairs.
{
  species: 'canine',
  name: 'Bowser',
  weight: 45
}

Starter Code:
*/

function convertObjectToList(obj) {
  // your code here
  let arr = [];

  for (let prop in obj) {

    arr.push([prop,obj[prop]]);

  } //end for

  return arr;

}

console.log(convertObjectToList({ species: 'canine', name: 'Bowser', weight: 45 }));
console.log(convertObjectToList({ name: 'Holly', age: 35, role: 'producer' }));