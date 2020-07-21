// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = [];
    for(let i = 0; i<n; i++) {
        results.push([]);
    }
  
    let counter = 1;
    let startRow = 0;
    let endRow = n - 1;
    let startCol = 0;
    let endCol = n - 1;
    // comments for matrix(3)
    while (startCol <= endCol && startRow <= endRow) {
      for (let i = startCol; i <= endCol; i++) {
          // loops 3 times. 
          // first go: inserts 1,2 at [row 0, col 0], [row 0, col 1], [row 0, col 2]
          // at the end of first go counter == 4
        results[startRow][i] = counter;
        counter++; 
      }
      startRow++; // 1
      for(let i = startRow; i <= endRow; i++) {
          // loops 2 times.
          // first go inserts 4,5 at [row 1, col 2], [row 2, col 2]
          // at the end of forst go counter == 6
          results[i][endCol] = counter;
          counter++;
      }
      endCol--; // 1
      for(let i = endCol; i >= startCol; i--) {
          // loops from 2 times. from 1 to 0
          // first go inserts 6,7 at [row 2, col 1], [row 2, col 0]
          // at the end of the first go counter == 8
          results[endRow][i] = counter;
          counter++;
      }
      endRow--; // 1
      for(let i = endRow; i >= startRow; i--) {
          // loops 1 time
          // first go inserts 8 at [row 1, col 0]
          // at the end of the first go counter == 9
          results[i][startCol] = counter;
          counter++;
      }
      startCol++;
  
    }
    return results;
  }
  
  module.exports = matrix;
  