class TwoStacksQueue {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }
    enQueue(el) {
        this.s1.push(el);
    }
    deQueue() {
        if (!this.s2.length) {
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop());
            }
        }
        return this.s2.pop();
    }
}

let q1 = new TwoStacksQueue();
q1.enQueue(1);
q1.enQueue(2)
console.log(q1.deQueue());
console.log(q1.deQueue());
