// add whatever parameters you deem necessary - good luck!
function countValues(array, number) {
  let counter = 0;
  array.forEach((ele) => {
    if (ele === number) counter++;
  });
  return counter;
}

countValues([4, 1, 4, 2, 3, 4, 4], 4); // 4
countValues([4, 1, 4, 2, 3, 4, 4], 100); // 0
countValues([], 1); // 0
console.log(countValues([4, 1, 4, 2, 3, 4, 4], 4));
console.log(countValues([4, 1, 4, 2, 3, 4, 4], 100));
console.log(countValues([], 1));
