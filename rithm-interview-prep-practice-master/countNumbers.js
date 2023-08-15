// Write a function called **countNumbers**, which accepts an array of strings. The function should return a count of the number of strings in the array that can be successfully converted into a number. For example, the string "1" can be successfully converted to the number 1, but the string "hello" cannot be converted into a number.

function countNumbers(arrStrings) {
  // return count of strings that can be turned into number
  let count = 0;

  for (let i = 0; i < arrStrings.length; i++) {
    const str = arrStrings[i].trim();
    if (str !== "" && !isNaN(Number(str))) {
      count++;
    }
  }
  return count;
}

countNumbers(["a", "b", "3", "awesome", "4"]); // 2
countNumbers(["32", "55", "awesome", "test", "100"]); // 3
countNumbers("[]"); // 0
countNumbers(["4", "1", "0", "NaN"]); // 3
countNumbers(["7", "12", "a", "", "6", "8", " "]); // 4

console.log(countNumbers(["", "", "", "", ""]));
console.log(countNumbers(["32", "55", "awesome", "test", "100"]));
console.log(countNumbers("[]"));
console.log(countNumbers(["4", "1", "0", "NaN"]));
console.log(countNumbers(["7", "12", "a", "", "6", "8", " "]));
