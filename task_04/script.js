function compareString (string1, string2) {
  if (string1 == string2) {
    return true;
  } else {
    return false;
  }
}

console.log(compareString("Lviv", "Kyiv"));
console.log(compareString("Lviv", "Lviv"));
console.log(compareString("Lviv", "lviv"));
