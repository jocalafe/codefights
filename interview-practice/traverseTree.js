
//Note: Try to solve this task without using recursion, since this is what you'll be asked to do during an interview.

//Given a binary tree of integers t, return its node values in the following format:

//The first element should be the value of the tree root;
//The next elements should be the values of the nodes at height 1 (i.e. the root children), ordered from the leftmost to the rightmost one;
//The elements after that should be the values of the nodes at height 2 (i.e. the children of the nodes at height 1) ordered in the same way;
//Etc.

// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function traverseTree(t) {
  var res = [];
  var q = [];
  var currNode;
  if (t === null) {
    return res;
  }
  res.push(t.value);
  q.push(t);
  while(q.length > 0) {
    currNode = q.shift();
    if (currNode.left !== null) {
      q.push(currNode.left);
      res.push(currNode.left.value);
    }
    if (currNode.right !== null) {
      q.push(currNode.right);
      res.push(currNode.right.value);
    }
  }
  return res;
}
