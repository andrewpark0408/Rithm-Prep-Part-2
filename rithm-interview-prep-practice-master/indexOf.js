//rite a function called **indexOf,** which accepts an array and a number.

// The function should return the first index at which the value exists or `-1` if the value is not found.

// Do not use the built in `Array.indexOf()` function!

// Examples:

function indexOf(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) return i;
  }
  return -1;
}

let arr = [5, 10, 15, 20];
indexOf(arr, 20); // 3

let arr2 = [1, 2, 3, 4, 5];
indexOf(arr2, 2); // 1

let arr3 = [1, 2];
indexOf(arr3, 10); // -1
