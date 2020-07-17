class Node {
    constructor(val){
      this.val = val;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(val) {
      const newNode = new Node(val);
      this.length++;
  
      if(!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      return this;
    }
  
    pop() {
      if(this.length === 0) return;
  
      let pre = this.head; 
      let temp = this.head.next;
      
      while (temp.next != null) {
        pre = pre.next;
        temp = temp.next;
      }
      this.tail = pre;
      pre.next = null;
      this.length--;
  
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
  
      return temp;
    }
  
    shift() {
      if (this.length === 0) return;
      let temp = { val:this.head.val };
      this.head = this.head.next;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return temp;
    }
  
    unshift(val) {
      let newNode = new Node(val);
      if(!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return this;
    }
  
    get(num) {
      if(this.length <= num || num < 0) return;
      let temp = this.head;
  
      for(let i = 0; i<=num; i++) {
        if(i === num) {
          return temp;
        }
        temp = temp.next;
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
  
    insert(index, val) {
      let node = new Node(val);
      if(this.length < index || index < 0) return false;
      switch (index) {
        case 0:
          return !!this.unshift(val); 
        case this.length:
          return !!this.push(val);
        default:
          let pre = this.head;
          for(let i=0; i< index - 1; i++) {
            pre = pre.next;
          }
          let post = pre.next;
          pre.next = node;
          node.next = post;
          this.length++;
          break;
      }
      return true;
    }
  
    remove(index) {
      if(index < 0 || index > this.length - 1) return false;
      switch(index) {
        case 0:
          return !!this.shift();
        case this.length - 1:
          return !!this.pop();
        default:
          const pre = this.get(index - 1);
          const target = pre.next;
          pre.next = target.next;
          this.length--;
          break;
      }
      return true;
    }
  
    reverse() {
      let node = this.head;
      this.head = this.tail;
      this.tail = node;
      let prev = null;
      let next = null;
  
    for(let i=0;i<this.length;i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  
      return this;
    }
  }
  
  
  
  const x = new SinglyLinkedList()
  x.push('how')
  x.push('are')
  x.push('you')
  x.push('doing')
  x.push('today')
  console.log(x.reverse())
  console.log('result', JSON.stringify(x, null, 2))
  