// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(val, children = []) {
      this.data = val;
      this.children = children;
    }
    add(val) {
      this.children.push(new Node(val));
    }
    remove(val) {
      this.children = this.children.filter((node) => node.data !== val);
    }
  }
  
  class Tree {
    constructor() {
      this.root = null;
    }
    traverseBF(fn = () => {}) {
      const queue = [this.root];
      const visited = [];
      let current;
      while (queue.length) {
        current = queue.pop();
        current.children.forEach((element) => {
          queue.unshift(element);
        });
        visited.push(current);
        fn(current);
      }
      return visited;
    }
    traverseDFRecursive(fn = () => {}) {
      const visited = [];
  
      const DFHelper = (node) => {
        visited.push(node);
        fn(node);
        node.children.forEach((element) => {
          DFHelper(element);
        });
      };
      DFHelper(this.root);
      return visited;
    }
    // DF traverse iterative
    traverseDF(fn) {
      const arr = [this.root];
      let current;
      while (arr.length) {
        current = arr.shift();
        arr.unshift(...current.children);
        fn(current);
      }
    }
  }
  
  module.exports = { Tree, Node };
  