// add whatever parameters you deem necessary - good luck!
function repeat(str, num) {
  // output: string; string repeated num times
  let count = 0,
    updatedStr = "";
  while (count < num) {
    updatedStr += str;
    count++;
  }
  return updatedStr;
}

repeat("Matt", 3); // 'MattMattMatt'
repeat("Elie", 2); // 'ElieElie'
repeat("Michael", 0); // ''
