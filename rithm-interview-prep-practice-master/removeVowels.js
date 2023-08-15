// /Write a function called **removeVowels** which will accept a string and return a new string with all the vowels removed. You should not consider "y" to be a vowel.

function removeVowels(stringVowels) {
  let vowels = "aeiouAEIOU";
  let result = "";

  for (let i = 0; i < stringVowels.length; i++) {
    if (!vowels.includes(stringVowels[i])) {
      result += stringVowels[i];
    }
  }
  return result;
}

removeVowels("Hello!"); // "Hll!"
removeVowels("Tomatoes"); // "Tmts"
removeVowels("Reverse Vowels In The String"); // "Rvrs Vwls n Th Strng"
removeVowels("aeiou"); // ""
removeVowels("why try, shy fly?"); // "why try, shy fly?"
console.log(removeVowels("Reverse Vowels In The String"));
