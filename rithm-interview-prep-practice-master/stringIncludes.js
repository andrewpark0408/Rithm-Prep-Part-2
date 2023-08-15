function stringIncludes(word, letter) {
  return word.split("").some((ele) => ele === letter);
}
stringIncludes("awesome", "e"); // true
stringIncludes("awesome", "z"); // false
