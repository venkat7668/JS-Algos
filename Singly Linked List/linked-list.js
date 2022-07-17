const Node = require('./list-node');

/* SINGLY LINKED LIST
 * push
 * pop
 * shift
 * unshift
 * insert
 * set
 * get
 * remove
 * reverse
 */

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0;
    }

    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
        this.size++;
    }

    pop(val) {
        const newTail = this.get(this.size - 1);
        const removedNode = this.tail;

        this.tail = newTail;
        this.tail.next = null;
        this.size--;

        return removedNode;
    }

    set(index, val) {
        this.get(index).data = val;
    }

    shift() {
        const removedNode = this.head;
        this.head = this.head.next;
        this.size--;
        return removedNode;
    }

    unshift(val) {
        const node = new Node(val);
        const oldHead = this.head;
        this.head = node;
        node.next = oldHead;
        this.size++
    }

    remove(index) {
        const prev = this.get(index - 1);
        const removedNode = prev.next;
        prev.next = prev.next.next;
        this.size--;

        return removedNode;
    }

    get(index) {
        if (index > this.size || index < 0) {
            throw new Error("Index is beyond the range");
        }

        if (index == 1) {
            return this.head
        } else if (index == this.size) {
            return this.tail;
        } else {
            let node = this.head;
            let count = 1;
            while (count != index) {
                node = node.next;
                count++
            }
            return node;
        }
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next, prev = null;
        while (node) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }
}

module.exports = LinkedList;