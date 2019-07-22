/**
 * @author Venkat Lankalapalli
 * @email venkat7668[@]gmail.com
 * @create date 2019-07-02 15:33:08
 * @modify date 2019-07-02 15:33:08
 * @desc least recent used cache
 */

class Node {
    constructor(key, val, next, prev) {
        this.key = key;
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class LRU {
    constructor(limit) {
        this.caches = {};
        this.limit = limit;
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    put(key, value) {
        if (!this.head) {
            this.head = this.tail = new Node(key, value);
        } else {
            this.checkLimit();
            let node = new Node(key, value, this.head);
            this.head.prev = node;
            this.head = node;
        }
        this.caches[key] = this.head;
        this.size++
    }

    get(key) {
        let node = this.caches[key];
        if (node) {
            this.remove(node);
            this.put(key, node.val);
            return node.val;
        }
        return null;


    }

    remove(node) {

        if (node.prev) {
            node.prev.next = node.next;
        } else {
            this.head = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        } else {
            this.tail = node.prev;
            this.tail.next = null;

        }

        delete this.caches[node.key]
        this.size--;
        return node;
    }

    checkLimit() {
        console.log(this.size, this.limit)
        if (this.size == this.limit) {
            this.remove(this.tail);
        }
    }

}


//usage 
const lru = new LRU(3);
lru.put('a',1)
lru.put('b',2)
lru.put('c',3)
lru.get('a')
lru.put('d',4)
lru.put('e',5)
lru.get('a')
lru.put('f',6)
console.log(lru.caches);