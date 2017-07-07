
//Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in l, since this is what you'll be asked to do during an interview.

//Given a singly linked list of integers, determine whether or not it's a palindrome.

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
  var currNode;
  var arrList = [];
  var i = 0, j;

  if(l === null || l.next === null){
    return true;
  }
  currNode = l;
  while(currNode !== null) {
    arrList.push(currNode.value);
    currNode = currNode.next;
  }
  j = arrList.length - 1;
  while (j > i) {
    if (arrList[j] !== arrList[i]) {
      return false;
    }
    j -= 1;
    i += 1;
  }
  return true;
}
