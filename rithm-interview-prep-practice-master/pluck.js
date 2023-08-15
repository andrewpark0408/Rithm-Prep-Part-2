// Write a function called **pluck**, which takes an array of objects and the name of a key.

// The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.

function pluck(arrObj, keyName) {
  let final = [];

  for (let obj of arrObj) {
    if (obj.hasOwnProperty(keyName)) {
      final.push(obj[keyName]);
    } else {
      final.push(undefined);
    }
  }
  return final;
}

pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }], "name");
// ["Tim", "Matt", "Elie"]

pluck(
  [
    { name: "Tim", isBoatOwner: true },
    { name: "Matt", isBoatOwner: false },
    { name: "Elie" },
  ],
  "isBoatOwner"
); // [true, false, undefined]

console.log(
  pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }], "name")
);
console.log(
  pluck(
    [
      { name: "Tim", isBoatOwner: true },
      { name: "Matt", isBoatOwner: false },
      { name: "Elie" },
    ],
    "isBoatOwner"
  )
);
