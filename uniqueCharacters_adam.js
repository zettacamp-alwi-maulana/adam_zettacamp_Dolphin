function hasUniqueCharacters(str) {
  const checkchar = {};

  for (let char of str) {
    if (checkchar[char]) {
      return false;
    } else {
      checkchar[char] = 1;
    }
  }
  return true;
}
console.log(hasUniqueCharacters("abcdefg")); 
console.log(hasUniqueCharacters("hello")); 
console.log(hasUniqueCharacters("kakiku")); 
