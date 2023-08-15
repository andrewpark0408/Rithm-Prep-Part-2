// add whatever parameters you deem necessary - good luck!

// Write a function called **lastIndexOf,** which accepts an array and a number.

// The function should return the last index at which the value exists, or `-1` if the value is not found.

function lastIndexOf(array, number) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === number) {
      return i;
    }
  }
  return -1;
}

lastIndexOf([1, 2, 3, 4], 2); // 1
lastIndexOf([1, 2, 3, 4, 2], 2); // 4
lastIndexOf([1, 2, 3, 4], 22); // -1
