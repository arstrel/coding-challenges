// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Option 1
function palindrome1(str) {
    const reverse = (s) => {
      return s.split("").reverse().join("");
    };
    return str === reverse(str);
  }
  
  // Option 2
  function palindrome2(str) {
    let pointerA = 0;
    let pointerB = str.length - 1;
    let midPoint = Math.floor(str.length / 2);
    for (let i = 0; i <= midPoint; i++) {
      if (str[pointerA] != str[pointerB]) {
        return false;
      }
      pointerA++;
      pointerB--;
    }
  
    return true;
  }
  
  // Option 3
  function palindrome3(str) {
    const strArr = str.split("");
    return strArr.every((char, i, self) => char === self[self.length - i - 1]);
  }
  
  module.exports = palindrome3;
  