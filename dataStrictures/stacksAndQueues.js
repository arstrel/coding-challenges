class Node {
    constructor(val){
      this.val = val;
      this.next = null;
      this.prev = null;
    }
  }
  
  
  /*
  Typically for stacks the props are size, start and last
  And the implementation is very similar to shift and unshift in singly
  linked list
  */
  class Stack {
    constructor(){
      this.length = 0;
      this.head = null;
      this.tail = null;
    }
  
    push(val){
      const node = new Node(val);
      if(this.length === 0) {
        this.head = node;
        this.tail = node;
      }
      if(this.length === 1) {
        this.head.next = node;
        node.prev = this.head;
        this.tail = node;
      } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
      this.length++;
    }
  
    pop() {
      if(this.length <= 0) return false;
      if(this.length === 1 ) {
        this.tail = null;
        const temp = this.head;
        this.head = null;
        this.length--;
        return temp;
      } 
      const temp = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
      return temp;
    }
  }
  
  let test = new Stack;
  test.push('1');
  test.push('2');
  test.push('3');
  test.push('4');
  // console.log(test.pop());
  // console.log('=-=-==-=-=-=-=-')
  // console.log(test)
  
  class Queue {
    constructor(){
      this.size = 0;
      this.first = null;
      this.last = null;
    }
  
    enqueue(val) {
      const node = new Node(val);
      if(this.size === 0) {
        this.first = node;
        this.last = node;
      } else {
        this.last.next = node;
        this.last = node;
      }
      this.size++;
    }
    dequeue() {
      if(this.size <= 0) return false;
        const node = this.first;
      if(this.size === 1) {
        this.first = null;
        this.last = null;
      } else {
        this.first = this.first.next;
        this.first.prev = null;
      }
      this.size--;
      return node;
    }
  }
  
  let q = new Queue;
  q.enqueue('first');
  q.enqueue('second');
  q.enqueue('third');
  let res = q.dequeue();
  console.log(res);
  console.log('-=-=-=-=-=')
  console.log(q)