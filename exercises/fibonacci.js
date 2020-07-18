// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fibWithMemo(index) {
  const memo = {};

  const calc = num => {
      if(num === 1 || num === 2) {
          return 1;
      }
      if(memo[num]) {
          return memo[num];
      } else {
          memo[num] = calc(num - 1) + calc(num - 2);
          return memo[num];
      }
  }
  return calc(index);
}

function fib(index) {
    const result = [1,1];

    for(let i = 2; i<=index; i++) {
        result[i] = result[i-1] + result[i-2]
    }


    return result[index-1];
}

module.exports = fib;
