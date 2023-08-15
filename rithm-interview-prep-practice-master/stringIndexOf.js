function stringIndexOf(word, letter) {
  // loop through word and look for letter
  for (let i = 0; i < word.length; i++) {
    // if found: return index
    if (word[i] === letter)
      // if not: return -1
      return i;
  }
  return -1;
}

stringIndexOf("awesome", "e"); // 2
stringIndexOf("awesome", "z"); // -1
