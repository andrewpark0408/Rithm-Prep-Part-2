// Write a function called **squareEvenNumbers** which accepts an array and returns the sum of all of the even numbers in the array squared.

function squareEvenNumbers(array) {
  return array.reduce((a, b) => {
    if (b % 2 === 0) {
      return a + b ** 2;
    }
    return a;
  }, 0);
}

squareEvenNumbers([1, 2, 3, 4, 5]); // 20
squareEvenNumbers([1, 3, 5, 7]); // 0
squareEvenNumbers([5, 6, 7]); // 36
console.log(squareEvenNumbers([1, 2, 3, 4, 5]));
console.log(squareEvenNumbers([1, 3, 5, 7]));
console.log(squareEvenNumbers([5, 6, 7]));
