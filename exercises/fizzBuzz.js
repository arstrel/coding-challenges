// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// Option 1
function fizzBuzz1(n) {
  for (let i = 1; i <= n; i++) {
    let res = i;
    let isDivisibleByThree = false;
    if (i % 3 == 0) {
      isDivisibleByThree = true;
      res = 'fizz';
    }
    if (i % 5 == 0) {
      res = 'buzz';
      if (isDivisibleByThree) {
        res = 'fizzbuzz';
      }
    }
    console.log(res);
  }
}

// Option 2
function fizzBuzz2(n) {
  for (let i = 1; i <= n; i++) {
    // Same as i % 15 == 0
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('fizzbuzz');
      continue;
    }
    if (i % 3 == 0) {
      console.log('fizz');
      continue;
    }
    if (i % 5 == 0) {
      console.log('buzz');
      continue;
    }
    console.log(i);
  }
}

// Option 3
function fizzBuzz3(n) {
  for (let i = 1; i <= n; i++) {
    // Same as i % 15 == 0
    if (i % 15 == 0) {
      console.log('fizzbuzz');
    } else if (i % 3 == 0) {
      console.log('fizz');
    } else if (i % 5 == 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

module.exports = fizzBuzz3;
