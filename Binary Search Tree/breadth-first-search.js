const BFS = function (root) {
    let result = [];
    let queue = [root];

    while (queue.length) {
        const node = queue.pop();
        result.push(node.data);

        node.left && queue.push(node.left);
        node.right && queue.push(node.right)
    }

    return result;
}