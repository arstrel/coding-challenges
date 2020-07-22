// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;
class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
  }
  class QueueFromScratch {
    constructor() {
      this.size = 0;
      this.first = null;
      this.last = null;
    }
    add(val) {
      const node = new Node(val);
      if(this.size === 0) {
          this.first = node;
          this.last = node;
      } else {
          this.last.next = node;
          this.last = node;
      }
      this.size++;
      return this;
    }
    remove() {
      if(this.size === 0) {
          return undefined;
      }
      const node = this.first;
      if(this.size === 1) {
          this.first = null;
          this.last = null;
      } else {
          this.first = this.first.next;
      }
      this.size--;
      return node.val;
    }
  }
  
  class Queue {
      constructor(){
          this.data = [];
      }
      add(val) {
          this.data.unshift(val);
          return this.data.length;
      }
      remove() {
          return this.data.pop();
      }
      peek() {
          return this.data[this.data.length - 1];
      }
  }
  
  module.exports = Queue;
  