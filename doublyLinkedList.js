class Node {
    constructor(val) {
      this.val = val;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    push(val) {
      const node = new Node(val);
      if(this.head) {
        const temp = this.tail;
        this.tail = node;
        this.tail.prev = temp;
        temp.next = this.tail;
      } else {
        this.head = node;
        this.tail = this.head;
        
      }
      this.length++;
      return this.length;
    }
  
    pop() {
      const temp = this.tail;
      switch (this.length) {
       case 0:
        return false;
       case 1:
        this.head = null;
        this.tail = null;
        break;
       default:
        this.tail = this.tail.prev;
        this.tail.next = null;
        break;
     }
        this.length--; 
        temp.prev = null;
        return temp;
    }
  
    get(index) {
      if(index >= this.length || index < 0) return false;
      let node = this.head;
      let middle = Math.floor(this.length/2);
      if(index < middle) {
        for(let i=0;i<middle;i++) {
          if(i === index) {
            return node;
          }
          node = node.next;
        }
      } else {
        for(let i=middle;i<this.length; i++) {
          if(i === index) {
            return node;
          }
          node = node.next;
        
      }
      }
    }
  
    set(index, val) {
      const node = this.get(index);
      if(node) {
        node.val = val;
        return true;
      } 
      return false;
    }
  
    shift() {
      if(this.length === 0) return false;
      const temp = this.head;
      if(this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.length--;
      temp.next = null;
      return temp;
    }
  
    unshift(val) {
      if(this.length === 0) return this.push(val);
      const temp = this.head;
      const node = new Node(val);
      this.head = node;
      this.head.next = temp;
      this.length++;
      return this.length;
    }
  
    insert(index, val) {
      if(index === 0) return !!this.unshift(val);
      if(index === this.length - 1) return !!this.push(val);
      if(index < 0 || index >= this.length) return false;
  
      const pre = this.get(index - 1);
      if(pre) {
        const post = pre.next;
        const node = new Node(val);
        pre.next = node;
        node.prev = pre;
        node.next = post;
        post.prev = node;
        return true;
      }
      return false;
    }
  
    remove(index) {
      if(index < 0 || index >= this.length) return false;
      if(index === this.length - 1) return !!this.pop();
      if(index === 0) return !!this.shift();
  
      const node = this.get(index);
      const pre = node.prev;
      const post = node.next;
      pre.next = post;
      post.prev = pre;
      return true;
    }
  
    reverse() {
      let temp = this.head;
      this.head = this.tail;
      this.head.prev = null;
      this.tail = temp;
      // this.tail.next = null;
      let prev = null;
      let next = null;
  
      for(let i=0;i<this.length;i++) {
        next = temp.next;
        temp.next = prev;
        prev = temp;
        temp = next;
      }
    }
  }
  
  const test = new DoublyLinkedList;
  test.push(1);
  test.push(2);
  test.push(3);
  
  console.log(test.reverse());
  console.log('-=-=-=-=-=-')
  console.log('result', test);
  // console.log(JSON.stringify(test, null, 2))