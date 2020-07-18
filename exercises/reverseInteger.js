// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Option 1
function reverseInt1(n) {
    const isNegative = n < 0;
    const reverse = (num) => Number(`${num}`.split('').reverse().join(''));
    if (!isNegative) {
      return reverse(n);
    }
    const nonNegativeStr = `${n}`.substr(1);
    return Number(`-${reverse(nonNegativeStr)}`);
  }
  
  // Option 2
  function reverseInt2(n) {
    const reversed =  n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);
  }
  
  module.exports = reverseInt2;
  