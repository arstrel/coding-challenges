// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('../dataStrictures/stack');

class Queue {
  constructor() {
    this.middleman = new Stack();
    this.queue = new Stack();
  }
  add(val) {
    this.middleman.push(val);
  }
  peek() {
    while (this.middleman.peek()) {
      this.queue.push(this.middleman.pop());
    }
    const temp = this.queue.peek();
    while (this.queue.peek()) {
      this.middleman.push(this.queue.pop());
    }
    return temp;
  }
  remove() {
    while (this.middleman.peek()) {
      this.queue.push(this.middleman.pop());
    }
    const temp = this.queue.pop();
    while (this.queue.peek()) {
      this.middleman.push(this.queue.pop());
    }
    return temp;
  }
}

module.exports = Queue;
