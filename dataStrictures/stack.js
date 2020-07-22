// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
    }
  }
  
  class StackFromScratch {
    constructor() {
      this.start = null;
      this.last = null;
      this.size = 0;
    }
    push(val) {
      const node = new Node(val);
      if (this.size === 0) {
        this.start = node;
        this.last = node;
      }
      if (this.size === 1) {
        this.start.next = node;
        node.prev = this.start;
        this.last = node;
      } else {
        node.prev = this.last;
        this.last.next = node;
        this.last = node;
      }
      return this.size++;
    }
    peek() {
        if(this.size === 0) {
            return undefined;
        }
        return this.last.val;
    }
    pop() {
        if(this.size <= 0) {
            return undefined;
        }
        if(this.size === 1) {
            this.last = null;
            const temp = this.start;
            this.start = null;
            this.size = 0;
            return temp.val;
        }
        const temp = this.last;
        this.last = this.last.prev;
        this.last.next = null;
        this.size--;
        return temp.val;
    }
  }
  
  class Stack {
      constructor(){
          this.data = [];
      }
      push(val) {
         return this.data.push(val);
      }
      pop() {
          return this.data.pop();
      }
      peek() {
          if(!this.data.length) {
              return undefined;
          }
          return this.data[this.data.length - 1];
      }
  }
  
  module.exports = Stack;
  