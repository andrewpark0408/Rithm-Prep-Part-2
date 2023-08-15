// Write a function called **entries,** which accepts an object and returns an array of arrays of key-value pairs.

// In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.

// Do not use the built in `Object.entries()` function!

function entries(objectEntries) {
  //output: array of arrays
  let final = [];

  for (let key in objectEntries) {
    final.push([key, objectEntries[key]]);
  }
  return final;
}

let objec = { a: 1, b: 2, c: 3 };
entries(objec);
// [["a",1], ["b",2], ["c",3]]

let objec2 = { first: "Matt", last: "Lane", isDogOwner: true };
entries(objec2);
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]

let objec3 = {};
entries(objec3); // []
console.log(entries(objec));
console.log(entries(objec2));
console.log(entries(objec3));
