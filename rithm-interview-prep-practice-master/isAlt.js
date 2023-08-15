// Create a function `isAlt` that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

function isAlt(string) {
  // helper function to check if char is vowel
  function isVowel(char) {
    return ["a", "e", "i", "o", "u"].includes(char);
  }

  for (let i = 0; i < string.length - 1; i++) {
    if (isVowel(string[i]) === isVowel(string[i + 1])) {
      return false;
    }
  }
  return true;
}

isAlt("amazon"); // true
isAlt("apple"); // false
isAlt("banana"); // true
console.log(isAlt("amazon"));
console.log(isAlt("apple"));
console.log(isAlt("banana"));
