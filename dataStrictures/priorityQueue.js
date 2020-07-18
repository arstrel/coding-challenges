// priority queue with min bunary heap
// enqueue and dequeue

class Node {
    constructor(val, priority) {
      this.val = val;
      this.priority = priority;
    }
  }
  
  class PriorityQueue {
    constructor(initial = []) {
      this.values = [];
      if (initial.length) {
        initial.forEach(item => this.enqueue(item))
      }
    }
    // add to the end and then bubble up to the correct place
    enqueue({ val, priority }) {
      const newNode = new Node(val, priority);
      this.values.push(newNode);
      let currentValIndex = this.values.length - 1;
      let parentIdx = this.parentIdx(currentValIndex);
      let parent = parentIdx >= 0
        ? this.values[parentIdx]
        : { priority: undefined }
  
      let element = currentValIndex >= 0
        ? this.values[currentValIndex]
        : { priority: undefined }
  
      while (parent.priority > element.priority) {
        currentValIndex = this.swap(parentIdx, currentValIndex);
        parentIdx = this.parentIdx(currentValIndex);
        parent = parentIdx >= 0 ? this.values[parentIdx] : { priority: undefined }
        element = currentValIndex >= 0 ? this.values[currentValIndex] : { priority: undefined }
      }
    }
  
    dequeue() {
      const min = this.values.shift();
      const last = this.values.pop();
      this.values.unshift(last);
      let currentValIdx = 0;
      let childIdx = this.highestPriorityChildId(currentValIdx);
      let child = childIdx >= 0
        ? this.values[childIdx]
        : { priority: undefined }
  
      let element = currentValIdx >= 0
        ? this.values[currentValIdx]
        : { priority: undefined }
  
      while (child.priority < element.priority) {
        currentValIdx = this.swap(childIdx, currentValIdx);
        childIdx = this.highestPriorityChildId(currentValIdx);
        child = childIdx >= 0 ? this.values[childIdx] : { priority: undefined }
        element = currentValIdx >= 0 ? this.values[currentValIdx] : { priority: undefined }
      }
      return min;
    }
  
    swap(id1, id2) {
      const temp = this.values[id1];
      this.values[id1] = this.values[id2];
      this.values[id2] = temp;
      return id1;
    }
  
    parentIdx(id) {
      return Math.floor((id - 1) / 2);
    }
    highestPriorityChildId(id) {
      const first = 2 * id + 1;
      const second = 2 * id + 2;
  
      if (first < this.values.length && second < this.values.length) {
        
        return this.values[first].priority < this.values[second].priority 
        ? first : second;
      }
      if (first > this.values.length || second > this.values.length) {
        return second > this.values.length ? -1 : first;
      }
      return -1;
    }
  }
  
  const heap = new PriorityQueue();
  heap.enqueue({ val: 'one', priority: 3 })
  heap.enqueue({ val: 'one', priority: 1 })
  heap.enqueue({ val: 'one', priority: 4 })
  heap.enqueue({ val: 'one', priority: 6 })
  heap.enqueue({ val: 'one', priority: 2 })
  heap.enqueue({ val: 'one', priority: 0 })
  console.log(heap.dequeue());
  console.log(heap)