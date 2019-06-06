const hasPath = function (root, sum) {
    if (!root || !sum) return;
    let ans = false;

    let subSum = sum - root.data;

    if (subSum == 0 && !root.left && !root.right) {
        return true;
    }

    if (root.left) {
        ans = ans || hasPath(root.left, subSum);
    }

    if (root.right) {
        ans = ans || hasPath(root.right, subSum);
    }

    return ans;
}

module.exports = hasPath;