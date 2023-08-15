// add whatever parameters you deem necessary - good luck!
// Write a function called **slice,** which accepts an array, and two numbers.

// The function should return a new array with the elements starting at the index of the first number and going until the index of the second number.

// If a third parameter is not passed to the function, it should slice until the end of the array by default.

// If the third parameter is greater than the length of the array, it should slice until the end of the array.

// Do not use the built in `Array.slice()` function!

function slice(array, num1, num2) {
  // return new array with elements starting from num1 to num2
  const final = [];

  if (num2 === undefined || num2 > array.length) {
    num2 = array.length;
  }

  for (let i = num1; i < num2; i++) {
    final.push(array[i]);
  }
  return final;
}

slice([1, 2, 3, 4, 5], 0, 2); // [1, 2]
slice([1, 2, 3, 4, 5], 2, 4); // [3, 4]
slice([1, 2, 3, 4, 5], 2); // [3, 4, 5]
slice([1, 2, 3, 4, 5], 2, 10); // [3, 4, 5]
console.log(slice([1, 2, 3, 4, 5], 0, 2));
console.log(slice([1, 2, 3, 4, 5], 2, 4));
console.log(slice([1, 2, 3, 4, 5], 2));
console.log(slice([1, 2, 3, 4, 5], 2, 10));
