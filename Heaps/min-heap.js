class MinHeap {
    constructor() {
        this.data = [];
    }

    insert(num) {
        this.data.push(num);
        this.bubbleUp(this.data.length - 1);
    }

    extractMin() {
        let min = this.data[0];
        this.data[0] = this.data.pop();
        this.bubbleDown(0);
    }

    bubbleDown(index) {
        while (true) {
            let chid = (index + 1) * 2;
            let sibling = chid - 1;
            let toSwap = null;

            // swap smaller number at zero index
            if (this.data[index] > this.data[chid]) {
                toSwap = chid;
            }
            if (this.data[index] > this.data[sibling] || (this.data[chid] &&
                this.data[chid] > this.data[sibling])) {
                toSwap = sibling;
            }

            if (!toSwap) {
                break;
            }

            //swap
            [this.data[index], this.data[toSwap]] = [this.data[toSwap], this.data[index]];
            index = toSwap;
        }
    }

    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index + 1) / 2) - 1;
            //console.log( this.heap[childIndex], this.heap[parentIndex]);
            if (this.data[index] < this.data[parentIndex]) {
                //swap
                [this.data[index], this.data[parentIndex]] = [this.data[parentIndex], this.data[childIndex]];
            }
            index = parentIndex;
        }
    }
}