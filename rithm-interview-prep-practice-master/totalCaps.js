// /Write a function called **totalCaps,** which accepts an array of strings and returns the total number of capitals in each of the strings. Do **not** convert the array into a string.

function totalCaps(arr) {
  let count = 0;

  for (let string of arr) {
    for (let char of string) {
      if (char >= "A" && char <= "Z") count++;
    }
  }
  return count;
}

totalCaps(["AwesomE", "ThIngs", "hAppEning", "HerE"]); // 8
totalCaps(["Elie", "Matt", "Tim"]); // 3
totalCaps(["hello", "world"]); //
console.log(totalCaps(["AwesomE", "ThIngs", "hAppEning", "HerE"]));
console.log(totalCaps(["Elie", "Matt", "Tim"]));
console.log(totalCaps(["hello", "world"]));
