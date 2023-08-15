// add whatever parameters you deem necessary - good luck!
function max(array) {
  const sortedArray = array.slice();
  sortedArray.sort((a, b) => a - b);
  return sortedArray[sortedArray.length - 1];
} // 7 // 12 // 6

console.log(max([5, 1, 4, 7, 1, 2]));
console.log(max([3, 4, 12, 1, 8]));
console.log(max([-1, 6, 3, 2.2, -10, -4]));
