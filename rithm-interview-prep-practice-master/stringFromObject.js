// Write a function called **stringFromObject** that generates a string from an object's key/value pairs.

// The format should be "key = value, key = value".

// Each key/value pair should be separated by a comma and space except for the last pair.

function stringFromObject(objecty) {
  let result = "";

  for (let key in objecty) {
    result += `${key} = ${objecty[key]}, `;
  }
  result = result.slice(0, -2);
  return result;
}

stringFromObject({ a: 1, b: "2" });
// "a = 1, b = 2"

stringFromObject({ name: "Elie", job: "Instructor", isCatOwner: false });
// "name = Elie, job = Instructor, isCatOwner = false"

stringFromObject({}); //
console.log(stringFromObject({ a: 1, b: "2" }));
console.log(
  stringFromObject({ name: "Elie", job: "Instructor", isCatOwner: false })
);
