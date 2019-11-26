const Node = require('./tree-node');

class BST {
    constructor() {
        this.root = null;
    }

    insert(val, root) {

        if (!root) {
            if (!this.root) {
                this.root = new Node(val);
                return;
            }
            root = this.root;
        }

        const child = root.data > val ? "left" : "right";
        if (root[child]) {
            this.insert(val, root[child])
        } else {
            root[child] = new Node(val);
        }
    }

    find(val, root) {
        if (root) {
            if (!this.root) {
                return;
            }
            root = this.root;
        }

        if (root.data == val) {
            return root;
        }

        const child = root.data < val ? "right" : "left";

        if (root[child]) {
            return this.find(val, root[child])
        } else {
            throw new Error(`value: ${val} not found in BST`);
        }

    }

    getMin(root) {
        let node = root;
        while (node.left) {
            node = node.left
        }
        return node;
    }

    remove(val, root) {
        if (!root) {
            root = this.root;
        }

        if (root.data > val) {
           this.remove(val, root.left)
        } else if (root.data < val) {
            this.remove(val, root.right)
        } else {
            // case 1: no childern
            if (!root.right && !root.left) {
                root = null
            }
            // case 2: with left child
            else if (!root.right) {
                root = root.left;                
            }
            // case 3: with right child
            else if (!root.left) {
                root = root.right;
            }
            // case 4: with Both childern
            else {
                let succesor = this.getMin(root.right);
                root.data = succesor.data;
                root.right = this.remove(succesor.data, root.right);
            }
        }
        return root;
    }
}
module.exports = BST