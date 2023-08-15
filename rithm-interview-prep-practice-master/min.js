// add whatever parameters you deem necessary - good luck!
function min(array) {
  const sortedArray = array.slice();
  sortedArray.sort((a, b) => a - b);
  return sortedArray[0];
}

min([5, 1, 4, 7, 1, 2]); // 1
min([-1, 6, 3, 2.2, -10, -4]); // -10
console.log(min([5, 1, 4, 7, 1, 2]));
console.log(min([-1, 6, 3, 2.2, -10, -4]));
