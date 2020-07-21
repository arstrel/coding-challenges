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
      if (col >= n + 1 - row && col <= n - 1 + row) {
        line += '#';
      } else {
        line += ' ';
      }
    }
    console.log(line);
  }
}

// Option 3
// calculating a midpoint and adding
// row number of # around it
function pyramid3(n) {
  const columns = 2 * n - 1;
  const midpoint = Math.floor(columns / 2);
  for (let row = 0; row < n; row++) {
    let line = '';
    for (let col = 0; col < columns; col++) {
      // take a midpoint and add row number of # around it
      if (col >= midpoint - row && col <= midpoint + row) {
        line += '#';
      } else {
        line += ' ';
      }
    }
    console.log(line);
  }
}

// Option 4
// recursive
function pyramid4(n, row = 0, line = '') {
    if (row === n) {
      return;
    }
    const totalLength = 2 * n - 1;
    if (line.length === totalLength) {
      console.log(line);
      return pyramid4(n, row + 1);
    }
    const midpoint = Math.floor(totalLength / 2);
    let add;
    if (midpoint - row <= line.length && midpoint + row >= line.length) {
      add = '#';
    } else {
      add = ' ';
    }
    return pyramid4(n, row, line + add);
  }

module.exports = pyramid4;
