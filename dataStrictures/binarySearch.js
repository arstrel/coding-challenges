// binary search
const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
  
    while(arr[middle] !== target && start <= end) {
      if(target < arr[middle]) end = middle - 1;
      if(target > arr[middle]) start = middle + 1;
      middle = Math.floor((start + end) / 2);
    }
    if(start > end) {
      return -1
    } else {
      return middle;
    }
  }
  
  // binarySearch([1,2,3,4,5,6,7], 6)
  
  // substring search
  const substringSearch = (inputString, pattern) => {
    let counter = 0;
    for (let i=0; i<inputString.length; i++) {
      for (let j=0; j<pattern.length; j++) {
        if (inputString[i + j] !== pattern[j]) break;
        if (j === pattern.length -1) counter++
      }
    }
    return counter;
  }
  
  substringSearch('haha said harold in hamburg', 'ha')