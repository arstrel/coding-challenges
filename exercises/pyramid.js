// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'

//   pyramid(3)
//  col   01234
//       '  #  ' row = 0
//       ' ### ' row = 1
//       '#####' row = 2
// String length = 5

// Option 1 with String.repeat
function pyramid1(n) {
  const totalLength = 2 * (n - 1) + 1;
  for (let row = 0; row < n; row++) {
    const numberOfHashtags = row * 2 + 1;
    const numeberOfSpaces = totalLength - numberOfHashtags;
    const halfSpaces = numeberOfSpaces / 2;
    const line =
      ' '.repeat(halfSpaces) +
      '#'.repeat(numberOfHashtags) +
      ' '.repeat(halfSpaces);
    console.log(line);
  }
}

// Option 2
// Iterative with building char by char
function pyramid2(n) {
    const lineLength = 2 * n - 1;
  for (let row = 1; row <= n; row++) {
    let line = '';
    for (let col = 1; col <= lineLength; col++) {
      if ((col >= n + 1 - row) && (col <= n - 1 + row)) {
        line += '#';
      } else {
        line += ' ';
      }
    }
    console.log(line);
  }
}

// Option 3
// Recursive
function pyramid3(n) {
    
}


module.exports = pyramid2;
