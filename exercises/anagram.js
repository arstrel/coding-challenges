// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Option 1
// not considering Upper case and special symbols
function anagrams1(stringA, stringB) {
  if (stringA.length != stringB.length) {
    return false;
  }
  const stack = stringA.split('');
  for (let char of stringB) {
    const index = stack.indexOf(char);
    if (index >= 0) {
      stack.splice(index, 1);
    }
  }
  return stack.length == 0;
}

// Option 2
// with one character map
function anagrams2(stringA, stringB) {
  const stringAMap = {};
  // pretty much the same as /[^\w]/ which is /[A-Za-z-0-9_]/
  const strippedA = stringA.replace(/[^\w]/gi, '').toLowerCase();
  const strippedB = stringB.replace(/[^a-z]/gi, '').toLowerCase();
  if (strippedA.length != strippedB.length) {
    return false;
  }
  // Make a map of stringA
  for (char of strippedA) {
    stringAMap[char] = stringAMap[char] + 1 || 1;
  }
  // for every letter in stringB substract from map
  // if there is a letter that is missing then
  // it is not an anagram
  for (char of strippedB) {
    if (!stringAMap[char]) {
      return false;
    }
    stringAMap[char]--;
  }
  // Check that no extra letters left
  for (let key in stringAMap) {
    if (stringAMap[key] != 0) {
      return false;
    }
  }
  return true;
}

// Option 3
// with two character maps
// comparing two objects
// with helper
function anagrams3(stringA, stringB) {
  // pretty much the same as /[^\w]/ which is /[A-Za-z-0-9_]/
  const strippedA = stringA.replace(/[^\w]/gi, '').toLowerCase();
  const strippedB = stringB.replace(/[^a-z]/gi, '').toLowerCase();
  if (strippedA.length != strippedB.length) {
    return false;
  }
  const createCharMap = (str) => {
    const map = {};
    for (let char of str) {
      if (map[char]) {
        map[char]++;
      } else {
        map[char] = 1;
      }
    }
    return map;
  };
  const mapA = createCharMap(strippedA);
  const mapB = createCharMap(strippedB);

  for (let key in mapA) {
    if (mapA[key] !== mapB[key]) {
      return false;
    }
  }
  return true;
}

// Option 4
// with sort
function anagrams4(stringA, stringB) {
  // pretty much the same as /[^\w]/ which is /[A-Za-z-0-9_]/
  const cleanString = (str) => {
    return str.replace(/[^\w]/gi, '').toLowerCase().split('').sort().join('');
  };
  const strippedA = cleanString(stringA);
  const strippedB = cleanString(stringB);
  if (strippedA !== strippedB) {
    return false;
  }
  return true;
}

module.exports = anagrams4;
