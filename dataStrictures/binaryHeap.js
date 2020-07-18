// category of tree
// max heap with some basic methods
// in max head children are smaller then the parent but structures in no
// particular order otherwise - no guarantee between the siblings
// Ex. used for Priority Queue or graph traversal

// Storing binary heap in an array
// for an index of n, the left child will be in 2n+1
// and the right child in 2n+2

// if any child node at index no
// its parent is at index (n-1)/2 - floored

class MaxBinaryHeap {
    constructor(initial = []){
      this.values = [];
      if (initial.length) {
        initial.forEach(val => this.add(val))
      }
    }
    // add to the end and then bubble up to the correct place
    add(val) {
      this.values.push(val);
      let currentValIndex = this.values.length - 1;
      let parentIdx = this.parentIdx(currentValIndex);
  
      while(this.values[parentIdx] < this.values[currentValIndex]) {
        currentValIndex = this.swap(parentIdx, currentValIndex);
        parentIdx = this.parentIdx(currentValIndex);
      }
    }
  
    extractMax() {
      const max = this.values.shift();
      const tail = this.values.pop();
      this.values.unshift(tail);
      let currentIdx = 0;
      let childIdx = this.biggestChildIdx(currentIdx);
      while(this.values[currentIdx] < this.values[childIdx]) {
        currentIdx = this.swap(childIdx, currentIdx);
        childIdx = this.biggestChildIdx(currentIdx);
      }
      return max;
    }
  
    swap(id1, id2){
      const temp = this.values[id1];
      this.values[id1] = this.values[id2];
      this.values[id2] = temp;
      return id1;
    }
  
    parentIdx(id) { 
       return Math.floor((id - 1) / 2);
    }
    biggestChildIdx(id) {
      const first = 2 * id + 1;
      const second = 2 * id + 2;
      if(first <= this.values.length && second <= this.values.length) {
        return this.values[first] > this.values[second] ? first : second;
      }
      if(first > this.values.length || second > this.values.length) {
        return second > this.values.length ? -1 : first;
      }
      return -1;
    }
  }
  // [1,8,45,6,12,84,52,33,4]
  const heap = new MaxBinaryHeap([1,8,45,6,12,84,52,33,4])
  heap.add(10)
  heap.add(0)
  heap.add(110)
  const res = heap.extractMax();
  console.log(res);
  console.log(heap);