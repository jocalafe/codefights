
//Given a binary tree t and an integer s, determine whether there is a root to leaf path in t such that the sum of vertex values equals s.

// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

function hasPathWithGivenSum(t, s) {
  var leftoverSum;
  if (!t) {
    return s === 0;
  }
  leftoverSum = s - t.value;
  if( t.left && t.right || !t.left && !t.right) {
    return hasPathWithGivenSum(t.left, leftoverSum) || hasPathWithGivenSum(t.right, leftoverSum);
  } else if (t.left){
    return hasPathWithGivenSum(t.left, leftoverSum);
  } else {
    return hasPathWithGivenSum(t.right, leftoverSum);
  }
}
