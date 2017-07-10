//We're going to store numbers in a tree. Each node in this tree will store a single digit (from 0 to 9), and each path from root to leaf encodes a non-negative integer.

//Given a binary tree t, find the sum of all the numbers encoded in it.

// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function digitTreeSum(t) {
    var path = [];
    return sumPath(t, [...path]);
}

function sumPath(t, path) {
    if (!t) {
        return 0;
    }
    path.push(t.value);
    if (!t.left && !t.right) {
       return parseInt(path.join(''));
    }
    return sumPath(t.left, [...path]) + sumPath(t.right, [...path]);
}
