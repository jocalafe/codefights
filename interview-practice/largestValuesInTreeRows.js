
//You have a binary tree t. Your task is to find the largest value in each row of this tree. In a tree, a row is a set of nodes that have equal depth. For example, a row with depth 0 is a tree root, a row with depth 1 is composed of the root's children, etc.

//Return an array in which the first element is the largest value in the row with depth 0, the second element is the largest value in the row with depth 1, the third element is the largest element in the row with depth 2, etc.

//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function largestValuesInTreeRows(t) {
  var largestValues = [];
  var queue = [];
  var queueSize = 1;
  var currNode;
  var max = 0;
  if (!t) {
    return largestValues;
  }
  queue.push(t);
  while (queue.length > 0) {
    max = -1000;
    for (i = 0; i < queueSize; i += 1) {
      currNode = queue.shift();
      max = max < currNode.value ? currNode.value : max;
      if (currNode.left) {
        queue.push(currNode.left);
      }
      if (currNode.right) {
        queue.push(currNode.right);
      }
    }
    largestValues.push(max);
    queueSize = queue.length;
  }
  return largestValues;
}
