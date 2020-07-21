// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Option 1 iterative
// with String.repeat
function steps1(n) {
    for (let line = 1; line <= n; line++) {
      let temp = '#'.repeat(line) + ' '.repeat(n - line);
      console.log(temp);
    }
  }
  
  // Option 2 iterative, nested loop
  function steps2(n) {
    for (let row = 0; row < n; row++) {
      let line = '';
      for (let column = 0; column < n; column++) {
        if (column <= row) {
          line += '#';
        } else {
          line += ' ';
        }
      }
      console.log(line);
    }
  }
  
  // Option 3 recursive
  function steps3(n) {
    function print(num) {
      if (num === 0) {
        return;
      }
      console.log('#'.repeat(n - num + 1) + ' '.repeat(num - 1));
      return print(num - 1);
    }
    print(n);
  }
  
  // Option 4 recursive with additional args
  function steps4(n, row = 0, line = '') {
    if (n === row) {
      return;
    }
    if (n == line.length) {
      console.log(line);
      return steps4(n, row + 1);
    }
    if(line.length <= row) {
        line += '#';
    } else {
        line += ' ';
    }
    steps4(n, row, line);
  }
  
  module.exports = steps4;
  