// Write a function called **keys,** which accepts an object and returns an array of all of the keys in the object.

// Do not use the built in `Object.keys()` function!

function keys(obj) {
  const keys = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
}

let obj = { a: 1, b: 2, c: 3 };
keys(obj); // ["a", "b", "c"]

let obj2 = { first: "Matt", last: "Lane" };
keys(obj2); // ["first", "last"]

let obj3 = {};
keys(obj3); // []
console.log(keys(obj));
console.log(keys(obj2));
console.log(keys(obj3));
