// Write a function called **`includes`** which accepts a `collection`, a `value`, and an optional starting `index`. The function should return `true` if the `value` exists in the collection when we search starting from the starting `index`. Otherwise, it should return `false`.

// The collection can be a string, an array, or an object. If the collection is a string or array, the third parameter is a starting index for where to search from. If the collection is an object, the function searches for the value among values in the object; since objects have no sort order, the third parameter is ignored.

const includes = (collection, value, index = 0) => {
  if (Array.isArray(collection) || typeof collection === "string") {
    for (let i = index; i < collection.length; i++) {
      if (collection[i] === value) {
        return true;
      }
    }
  } else if (typeof collection === "object") {
    for (let key in collection) {
      if (collection[key] === value) {
        return true;
      }
    }
  }
  return false;
};

includes([1, 2, 3], 1); // true
includes([1, 2, 3], 1, 2); // false
includes([1, 2, 3], 6); // false

includes({ a: 1, b: 2 }, 1); // true
includes({ a: 1, b: 2 }, "a"); // false

includes("abcd", "b"); // true
includes("abcd", "e"); // false
includes("abcd", "a", 2); // false
