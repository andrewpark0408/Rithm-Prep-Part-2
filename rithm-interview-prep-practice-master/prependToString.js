const prependToString = (str1, str2) => {
  return str2 + str1;
};

prependToString("awesome", "very"); // 'veryawesome'
prependToString("world", "hello "); // 'hello world'
prependToString("nothing", ""); // 'nothing'
