const isBST = function (root) {
    if (root.left && root.left.data > root.data) {
        return false
    }
    if (root.right && root.right.data < root.data) {
        return false;
    }
    if ((root.left && !isBST(root.left)) || (root.right && !isBST(root.right))) {
        return false
    }

    return true;
}

module.exports = isBST;