// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  const swap = (arr, id1, id2) => {
    [arr[id1], arr[id2]] = [arr[id2], arr[id1]];
  };
  let noSwap = false;
  for (let i = 0; i < arr.length; i++) {
    noSwap = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

// we are going to assume that the current element of array is the lowest in the array
function selectionSort(arr) {
  const swap = (arr, id1, id2) => {
    [arr[id1], arr[id2]] = [arr[id2], arr[id1]];
  };

  let idOfMin;
  for (let pointer = 0; pointer < arr.length; pointer++) {
    idOfMin = pointer;
    for (let i = pointer + 1; i < arr.length; i++) {
      if (arr[i] < arr[idOfMin]) {
        idOfMin = i;
      }
    }
    if (idOfMin != pointer) {
      swap(arr, pointer, idOfMin);
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const midPoint = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, midPoint));
  const right = mergeSort(arr.slice(midPoint));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  // one of the arrays, left or right would be empty at this point
  return [...result, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
