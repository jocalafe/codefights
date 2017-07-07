
//Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in the list, since this is what you'll be asked to do during an interview.

//Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k.
// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

function removeKFromList(l, k) {
  var currNode;
  if (!l) {
    return l;
  }
  while (l.value === k) {
    if (l.next) {
      l = l.next;
    } else {
      return null;
    }
  }
  currNode = l;
  while (currNode.next) {
    if (currNode.next.value === k) {
      currNode.next = currNode.next.next;
      if (!currNode) {
        break;
      }
      continue;
    }
    currNode = currNode.next;
  }
  return l;
}

