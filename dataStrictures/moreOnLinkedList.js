// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, n = null) {
      this.data = data;
      this.next = n;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    insertFirst(val) {
      if (this.length === 0) {
        const node = new Node(val);
        this.head = node;
        this.tail = node;
      } else {
        const node = new Node(val);
        //   const node = new Node(val, this.head);
        const temp = this.head;
        this.head = node;
        this.head.next = temp;
        this.tail.next = null;
      }
      this.length++;
      return this;
    }
    size() {
      return this.length;
    }
    getFirst() {
      return this.head;
    }
    getLast() {
      return this.tail;
    }
    clear() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    removeFirst() {
      const temp = this.head;
      this.head = this.head.next;
      this.length--;
      return temp;
    }
    removeLast() {
      if (this.length === 0) {
        return undefined;
      }
      let temp = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else if (this.length === 2) {
        this.tail = this.head.next;
      } else {
        let prev = this.head;
        let current = this.head.next;
        while (current.next) {
          prev = prev.next;
          current = current.next;
        }
        temp = current;
        this.tail = prev;
        this.tail.next = null;
      }
      this.length--;
      return temp;
    }
    insertLast(val) {
      const node = new Node(val);
      if (this.length === 0) {
        this.head = node;
        this.tail = node;
      } else {
        const temp = this.tail;
        this.tail.next = node;
        this.tail = node;
      }
      this.length++;
      return this;
    }
    getAt(index) {
      if (index > this.length) {
        return null;
      } else if (index === 0) {
        return this.head;
      }
      let counter = 0;
      let record = this.head;
      while (counter != index) {
        record = record.next;
        counter++;
      }
      return record;
    }
    removeAt(index) {
      if (index < 0 || this.length === 0 || index >= this.length) {
        return false;
      }
      let record = null;
      if (index === 0) {
        record = this.head;
        this.removeFirst();
      } else if (index === this.length - 1) {
        record = this.tail;
        this.removeLast();
      } else if (index === 1) {
        record = this.head.next;
        this.head.next = record.next;
      } else {
        let prev = this.head;
        let current = this.head.next;
        let counter = 1;
        while (counter != index) {
          prev = prev.next;
          current = current.next;
          counter++;
        }
        record = current;
        prev.next = current.next;
      }
      return record;
    }
    insertAt(val, index) {
      if (index === 0) {
        this.insertFirst(val);
      } else if (index >= this.length) {
        this.insertLast(val);
      } else {
        let prev = this.head;
        let current = this.head.next;
        let counter = 0;
        const node = new Node(val);
        while (counter != index - 1) {
          prev = prev.next;
          current = current.next;
          counter++;
        }
        prev.next = node;
        node.next = current;
      }
    }
    forEach(fn) {
      if (this.length === 0) {
        return false;
      } else {
        let record = this.head;
        let index = 0;
        while (record) {
          fn(record, index);
          index++;
          record = record.next;
        }
      }
    }
    [Symbol.iterator]() {
      let index = -1;
      const ctx = this;
      const iter = {
        next() {
          index++;
          if (index >= ctx.length) {
            return { value: ctx.getAt(index), done: true };
          } else {
            return { value: ctx.getAt(index), done: false };
          }
        },
      };
  
      return iter;
    }
  }
  
  module.exports = { Node, LinkedList };
  