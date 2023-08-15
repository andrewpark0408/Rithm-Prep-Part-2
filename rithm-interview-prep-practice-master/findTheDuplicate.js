// Write a function called **findTheDuplicate** which accepts an array of numbers containing a single duplicate. The function returns the number which is a duplicate or undefined if there are no duplicates.

function findTheDuplicate(arrNums) {
  let dupe = [];

  for (let i = 0; i < arrNums.length; i++) {
    if (dupe.includes(arrNums[i])) {
      return arrNums[i];
    }
    dupe.push(arrNums[i]);
  }
  return undefined;
}

findTheDuplicate([1, 2, 1, 4, 3, 12]); // 1
findTheDuplicate([6, 1, 9, 5, 3, 4, 9]); // 9
findTheDuplicate([2, 1, 3, 4]); // undefined

console.log(findTheDuplicate([1, 2, 1, 4, 3, 12]));
console.log(findTheDuplicate([6, 1, 9, 5, 3, 4, 9]));
console.log(findTheDuplicate([2, 1, 3, 4]));
