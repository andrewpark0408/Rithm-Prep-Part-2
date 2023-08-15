// add whatever parameters you deem necessary - good luck!
function values(obj) {
  const values = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      values.push(obj[key]);
    }
  }
  return values;
}

let obje = { a: 1, b: 2, c: 3 };
values(obje); // [1,2,3]

let obje2 = { first: "Matt", last: "Lane", isDogOwner: true };
values(obje2); // ["Matt", "Lane", true]

let obje3 = {};
values(obje3); // []
console.log(values(obje));
console.log(values(obje2));
console.log(values(obje3));
