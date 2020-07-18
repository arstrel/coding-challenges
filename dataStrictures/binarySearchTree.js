class Node {
    constructor(val) {
      this.value = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(val) {
      const node = new Node(val);
      if(!this.root) {
        this.root = node;
        return this;
      }
      let current = this.root;
      
      while(current) {
        if(val === current.value) {
          return {
            success: false,
            reason: 'Duplicate number',
          };
        }
        if(val > current.value) {
          if(current.right){
             current = current.right
          } else {
            current.right = node;
            return this;
          }
        } else {
          if(current.left) {
            current = current.left
          } else {
            current.left = node;
            return this;
          }
        }
      }
    }
  
    includes(val){
      if(!this.root) {
        return false;
      }
      let current = this.root;
      while(current) {
        if(current.value === val) {
          return true;
        }
        if(val > current.value) {
          current = current.right;
        } else {
          current = current.left;
        }
      }
      return false;
    }
  }
  
  const tree = new BinarySearchTree;
  tree.insert(20);
  // console.log(tree.insert(20))
  tree.insert(35);
  tree.insert(30);
  tree.insert(25);
  tree.insert(19);
  tree.insert(15);
  tree.insert(12);
  tree.insert(21);
  tree.insert(33);
  tree.insert(17);
  // console.log(JSON.stringify(tree, null, 1))
  // tree.includes(17)
  /*
          20
      19      35
    15      30 
  12  17  25  33 
         21
  */
  
  // traverse a tree breadth first
  const traverseTreeBreadthFirst = (tree) => {
    const queue = [];
    const nodesVisited = [];
    queue.unshift(tree.root);
    while(queue.length){
      let temp = queue.pop();
      nodesVisited.push(temp.value);
      if(temp.left) {
        queue.unshift(temp.left);
      }
      if(temp.right) {
        queue.unshift(temp.right);
      }
    }
    return nodesVisited;
  };
  
  // console.log('-=-=-=-= visited', traverseTreeBreadthFirst(tree));
  
  // depth First Pre-order
  // first element in the array would be tree root
  const traverseDepthFirst = (tree) => {
    const nodesVisited = [];
  
    const DFSHelper = node => {
        nodesVisited.push(node.value);
        if(node.left) {
          DFSHelper(node.left);
        }
        if(node.right) {
          DFSHelper(node.right);
        }
    }
  
    DFSHelper(tree.root);
    return nodesVisited;
  };
  
  console.log('-=-=-=-=- depth first PRE', traverseDepthFirst(tree));
  // depth first post order
   const DFSPostOrder = (tree) => {
     const data = [];
     const traverse = node => {
       if(node.left) traverse(node.left)
       if(node.right) traverse(node.right)
       data.push(node.value);
     }
    traverse(tree.root);
    return data
   }
   console.log('-=-=-=-=- depth first POST', DFSPostOrder(tree));
  
  // depth first in order
  // sorted data
   const DFSInOrder = (tree) => {
     const data = [];
     const traverse = node => {
       node.left && traverse(node.left)
       data.push(node.value);
       node.right && traverse(node.right)
     }
    traverse(tree.root);
    return data
   }
   console.log('-=-=-=-=- depth first IN', DFSInOrder(tree));
  
   // tree > binary tree > binary search tree