// Write a function called **twoHighest** that takes an array of numbers as its argument and returns the **two highest numbers within the array**.

// The returned value should be an array in the following format: `[secondHighest, highest]`

// The order of the numbers passed in could be any order.

// **Do not use the build in sort() method - the tests will fail!**

function twoHighest(arrNums) {
  // returns two highest in array
  // output: [secondHighest, firstHighest]
  let firstHighest = -Infinity,
    secondHighest = -Infinity;

  for (let num of arrNums) {
    if (num > firstHighest) {
      secondHighest = firstHighest;
      firstHighest = num;
    } else if (num > secondHighest && num !== firstHighest) {
      secondHighest = num;
    }
  }
  return [secondHighest, firstHighest];
}

twoHighest([1, 2, 10, 8]); // [8, 10]
twoHighest([6, 1, 9, 10, 4]); // [9,10]
twoHighest([4, 25, 3, 20, 19, 5]); // [20,25]
twoHighest([1, 2, 2]); // [2, 2];
console.log(twoHighest([1, 2, 10, 8]));
console.log(twoHighest([6, 1, 9, 10, 4]));
console.log(twoHighest([4, 25, 3, 20, 19, 5]));
console.log(twoHighest([1, 2, 2]));
