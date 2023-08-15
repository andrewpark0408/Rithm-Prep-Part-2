function charAt(string, index) {
  for (let i = 0; i < string.length; i++) {
    if (index >= string.length) return "";
  }
  return string[index];
}

charAt("awesome", 2); // 'e'
charAt("awesome", 12); // ''
