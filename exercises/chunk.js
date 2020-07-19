// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Option 1
function chunk1(array, size) {
  const container = [];
  while (array.length) {
    container.push(array.splice(0, size));
  }
  return container;
}

// Option 2
function chunk2(array, size) {
  const chunked = [];
  let last;
  for(let el of array) {
    last = chunked[chunked.length - 1];
    // if last doesn't exist (on first run)
    // or if it's already full needed length
    if(!last || last.length === size) {
      chunked.push([el]);
    } else {
      last.push(el)
    }
  }
  return chunked;
}

// Option 3
function chunk3(array, size) {
  const chunked = [];
  let index = 0;
  while(index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

module.exports = chunk3;
