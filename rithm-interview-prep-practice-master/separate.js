// /Given an array of 'dogs', 'cats', and 'water', write a function called **separate,** which returns a new array so that the dogs are separated from the cats by water. **Make sure that cats always come first in the array.**

// You can assume that the array will always at least three elements, and that there'll always be at least one dog, one cat, and one water to work with.

function separate(arr) {
  let catCount = 0;
  let waterCount = 0;
  let dogCount = 0;

  for (let item of arr) {
    if (item === "cat") catCount++;
    else if (item === "water") waterCount++;
    else if (item === "dog") dogCount++;
  }
  let result = [];

  for (let i = 0; i < catCount; i++) {
    result.push("cat");
  }

  result.push("water");
  waterCount--;

  for (let i = 0; i < dogCount; i++) {
    result.push("dog");
  }

  for (let i = 0; i < waterCount; i++) {
    result.push("water");
  }

  return result;
}

separate(["dog", "cat", "water"]); // ['cat','water','dog']

separate(["dog", "cat", "water", "cat"]); // ['cat', 'cat', 'water', 'dog'])

separate(["cat", "cat", "water", "dog", "water", "cat", "water", "dog"]);
console.log(separate(["dog", "cat", "water"]));
console.log(separate(["dog", "cat", "water", "cat"]));
console.log(
  separate(["cat", "cat", "water", "dog", "water", "cat", "water", "dog"])
);
