// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

// Option 1
// more defensive 
function fromLast1(list, n) {
    let slow = list.getFirst();
    let fast = list.getFirst();
    const advanceFast = () => {
      for (let i = 0; i < n; i++) {
        if (!fast.next) {
          return false;
        }
        fast = fast.next;
      }
      return true;
    };
  
    if (advanceFast()) {
      while (fast.next) {
        fast = fast.next;
        slow = slow.next;
      }
    }
    return slow;
  }
  
  // Option 2
  // according to the terms of the task n is always within
  // the bounds of the list
  function fromLast2(list, n) {
    let slow = list.getFirst();
    let fast = list.getFirst();
  
    // same as 
    /*
      while (n > 0) {
          fast = fast.next;
          n--;
      }
    */
    for (let i = 0; i < n; i++) {
      fast = fast.next;
    }
  
    while (fast.next) {
      fast = fast.next;
      slow = slow.next;
    }
  
    return slow;
  }
  
  module.exports = fromLast2;
  