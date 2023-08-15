// Write a function called **minMaxKeyInObject** that accepts an object with numeric keys.\*

// The function should return an array with the following format: `[lowestKey, highestKey]`

function minMaxKeyInObject(objNum) {
  let keys = Object.keys(objNum).map(Number);
  let lowestKey = Math.min(...keys);
  let highestKey = Math.max(...keys);

  return [lowestKey, highestKey];
}

minMaxKeyInObject({ 2: "a", 7: "b", 1: "c", 10: "d", 4: "e" });
// [1, 10]
minMaxKeyInObject({ 1: "Elie", 4: "Matt", 2: "Tim" });
// [1, 4]
console.log(minMaxKeyInObject({ 2: "a", 7: "b", 1: "c", 10: "d", 4: "e" }));
console.log(minMaxKeyInObject({ 1: "Elie", 4: "Matt", 2: "Tim" }));
