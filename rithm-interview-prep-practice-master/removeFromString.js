const removeFromString = (string, index, amount) => {
  return string.slice(0, index) + string.slice(index + amount);
};

removeFromString("Elie", 2, 2); // 'El'
removeFromString("Elie", 0, 1); // 'lie'
removeFromString("Rithm School", 0, 6); // 'School'
removeFromString("Rithm School", 2, 4); // 'RiSchool'
removeFromString("Rithm School", 6, 400); // 'Rithm '
