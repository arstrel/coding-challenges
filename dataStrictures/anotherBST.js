// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  
    insertIterative(data) {
      const node = new Node(data);
      let current = this;
      while (current) {
        if (current.data === node.data) {
          return false;
        }
        if (node.data > current.data) {
          // insert to the right
          if (current.right) {
            current = current.right;
          } else {
            current.right = node;
            return this;
          }
        } else {
          // insert to the left
          if (current.left) {
            current = current.left;
          } else {
            current.left = node;
            return this;
          }
        }
      }
    }
  
    // insert recursive
    insert(data) {
      const node = new Node(data);
      if (this.data === data) {
        return false;
      }
      if (data > this.data) {
        // pass to the right node
        if (this.right) {
          this.right.insert(data);
        } else {
          this.right = node;
          return this;
        }
      } else {
        // pass to the left node
        if (this.left) {
          this.left.insert(data);
        } else {
          this.left = node;
          return this;
        }
      }
    }
  
    containsIterative(data) {
      let current = this;
      while (current) {
        if (current.data === data) {
          return current;
        }
        if (data > current.data) {
          current = current.right;
        } else {
          current = current.left;
        }
      }
      return null;
    }
  
    // Recursive
    contains(data) {
      if (this.data === data) {
        return this;
      }
      if (data > this.data && this.right) {
        return this.right.contains(data);
      } else if (data < this.data && this.left) {
        return this.left.contains(data);
      }
      return null;
    }
  }
  
  module.exports = Node;
  