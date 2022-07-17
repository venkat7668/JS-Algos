const DFS_Preorder = function (root) {
    let result = [];

    function preOrder(node) {
        node.left && preOrder(node.left);
        result.push(node.data);
        node.right && preOrder(node.right)
    }
    preOrder(root)

    return result;
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
console.log(DFS_Preorder(tree))
module.exports = DFS_Preorder