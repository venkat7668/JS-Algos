const BFS = function (root) {
    let result = [];
    let queue = [root];

    while (queue.length) {
        const node = queue.pop();
        result.push(node.data);

        root.left && queue.push(root.left);
        root.right && queue.push(root.right)
    }

    return result;
}