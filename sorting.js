// bubble sort
const bubbleSort = arr => {
    const swap = (arr, id1, id2) => {
      [arr[id1], arr[id2]] = [arr[id2], arr[id1]];
    }
    let noSwap = false;
    for (let i = arr.length - 1; i > 0; i--) {
      noSwap = true;
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1)
          noSwap = false;
        }
        console.log(arr[j], arr[j + 1])
      }
      if (noSwap) break;
    }
    return arr
  }
  // bubbleSort([8,5,2,4,7,9,2,3,4,5,0,6])
  // bubbleSort([8,1,2,3,4,5,6,7,9,10,22,12])
  
  // selection sort
  const selectionSort = arr => {
    const swap = (arr, id1, id2) => {
      let temp = arr[id1];
      arr[id1] = arr[id2];
      arr[id2] = temp;
    }
    for (let pointer = 0; pointer < arr.length; pointer++) {
      let idOfMin = pointer;
      for (let i = pointer + 1; i < arr.length; i++) {
        if (arr[i] < arr[idOfMin]) {
          idOfMin = i;
        }
      }
  
      if (pointer != idOfMin) {
        swap(arr, pointer, idOfMin)
      }
    }
    return arr;
  }
  
  // selectionSort([-1, 0, 4, 3, 2, 6, 7, 1])
  
  const insertionSort = arr => {
    const swap = (arr, id1, id2) => {
      [arr[id1], arr[id2]] = [arr[id2], arr[id1]]
    }
      for (let i=1; i<arr.length; i++) {
        let current = arr[i];
        for (var j = i-1; j>=0 && arr[j] > current; j--) {
          arr[j+1] = arr[j];
        }
        arr[j+1] = current;
      }
  return arr;
  }
  
  // insertionSort([5,3,4,2,11,22,33,6,8,45])
  
  // merge sort - merging function 
  const merge = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j<arr2.length) {
      if(arr2[j] < arr1[i]) {
        result.push(arr2[j]);
        j++;
      } else {
        result.push(arr1[i]);
        i++;
      }
    }
    // same thing
    //  if (i == arr1.length) {
    //    result = result.concat(arr2.slice(j))
    //  } else {
    //    result = result.concat(arr1.slice(i))
    //  }
    while (i<arr1.length) {
      result.push(arr1[i]);
      i++;
    }
    while (j<arr2.length) {
      result.push(arr2[j]);
      j++;
    }
    return result;
  }
  // merge([2,14,99,100], [1,10,50])
  
  const mergeSort = arr => {
    if(arr.length <= 1) return arr;
  
    let halfPoint = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, halfPoint))
    let right = mergeSort(arr.slice(halfPoint))
    
    return merge(left, right)
  }
  // mergeSort([10,2,6,8,22,66,55,48,9,54,23,95,63])
  
  // quick sort
  const pivot = (arr, start = 0, end = arr.length-1) => {
     const swap = (arr, id1, id2) => {
      [arr[id1], arr[id2]] = [arr[id2], arr[id1]]
    }
  
    let pivot = arr[start];
    let swapIdx = start;
  
    for(let i = start+1;i<=end;i++) {
      if(pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
    swap(arr, start, swapIdx)
    return swapIdx;
  }
  
  // pivot([4,8,2,1,5,7,6,3]) 
  // 3
  
  const quickSort = (arr, left = 0, right = arr.length-1) => {
    if(left < right) {
      let pivotIndex = pivot(arr, left, right);
      //left 
      quickSort(arr, left, pivotIndex-1);
  
      //right
      quickSort(arr, pivotIndex+1, right);
    }
    
    return arr;
  }
  // quickSort([4,8,2,1,5,7,6,3])
  
   // Radix sort, non comparisone sort 
   // returns a digit at a given position in a number in reverse
   // 12345 position 0 is 5
   const getDigit = (num, place) => {
     // can also do 
    //    const digit = num.toString().split('').reverse()[place];
    //    return digit ? Number(digit) : 0 
     return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
   }
  // how many times do we need to run the sorting
  // how long is the number
  const digitCount = num => {
    // also can do 
    // if (num === 0) return 1;
    // Math.floor(Math.log10(Math.abs(num))) + 1;
    return num.toString().length;
  }
  const mostDigits = arr => {
    return Math.max(...arr.map(s=>digitCount(s)))
  }
  // mostDigits([1,12,236,4587,45781,2, 12345])
  const radixSort = arr => {
    const maxDigitsCount = mostDigits(arr);
  
    for (let k=0; k<maxDigitsCount; k++) {
      const buckets = Array.from({length: 10}, () => []);
        
        for(let j=0;j<arr.length;j++) {
          let bucketNumber = getDigit(arr[j],k)
          buckets[bucketNumber].push(arr[j])
          console.log(`index: ${j}; value: ${arr[j]}; bucket#: ${bucketNumber}`)
        }
        
      console.log(`run: ${k+1}, arr: ${arr}`)
      arr = [].concat(...buckets)
    }
    return arr;
  }
  // radixSort([12, 2, 435, 34, 9845, 23, 345, 5467])