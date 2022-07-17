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

let tree = {
    data: 1,
    left: {
        data: 2,
        left: {
            data: 4
        },
        right: {
            data: 5
        }
    },
    right: {
        data: 3,
        left: {
            data: 6
        },
        right: {
            data: 7
        }
    }
}
console.log(hasPath(tree, 10))
module.exports = hasPath;