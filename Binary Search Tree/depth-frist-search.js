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

module.exports = DFS_Preorder