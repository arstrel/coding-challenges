// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// Option 1
function levelWidth1(root) {
    const breaker = 'line';
    let queue = [root, breaker];
    let result = [0];
    let i = 0;
    let node;
  
    while (queue.length > 1) {
      node = queue.shift();
      if (node === breaker) {
        i++;
        result[i] = 0;
        queue.push(breaker);
        continue;
      } else {
        result[i] = result[i] + 1;
      }
  
      for (let i = 0; i < node.children.length; i++) {
        queue.push(node.children[i]);
      }
    }
  
    return result;
  }
  
  // Same as option 1 but nicer
  function levelWidth2(root) {
    const breaker = 'line';
    let queue = [root, breaker];
    let result = [0];
  
    while (queue.length > 1) {
      const node = queue.shift();
      if (node === breaker) {
        result.push(0);
        queue.push(breaker);
      } else {
        queue.push(...node.children);
        result[result.length - 1]++;
      }
    }
  
    return result;
  }
  
  module.exports = levelWidth2;
  