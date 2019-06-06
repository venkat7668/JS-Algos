/*
* Print total binary tree 
* At the end of the every level print $
* @param root 
*/
function print$AtLevelEnd(root) {
    let queue = [root];
    while (queue.length) {
        let n = queue.length;
        for (let i = 0; i < n; i++) {
            let node = queue.shift();
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
            console.log(node.data);
            if (n - 1 == i) {
                console.log("$");
            }
        }
    }
}