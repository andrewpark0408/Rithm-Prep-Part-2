// add whatever parameters you deem necessary - good luck!
function stringLastIndexOf(word, letter) {
  //  loop through word and find last instance of letter
  let wordRev = word.split("").reverse();
  for (let i = 0; i < word.length; i++) {
    if (wordRev[i] === letter) return word.length - 1 - i;
  }
  // return index
  return -1;
  // return -1
}

stringLastIndexOf("awesome", "e"); // 6
stringLastIndexOf("awesome", "z"); // -1
