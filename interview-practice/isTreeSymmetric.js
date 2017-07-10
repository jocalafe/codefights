
//Given a binary tree t, determine whether it is symmetric around its center, i.e. each side mirrors the other.

// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function isTreeSymmetric(t) {
    if (!t) {
        return true;
    }
    return compareNodes(t.left, t.right);
}

function compareNodes(left, right) {
    if (!left || !right) {
        return left === right;
    }
    return left.value === right.value && compareNodes(left.left, right.right)
        && compareNodes(left.right, right.left);
}
