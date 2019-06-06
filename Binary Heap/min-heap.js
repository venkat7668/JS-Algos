function MinHeap() {
    this.data = [];
}

MinHeap.prototype.insert = function (val) {
    this.data.push(val);
    this.bubbleUp(this.data.length - 1);
}
MinHeap.prototype.bubbleUp = function (index) {
    let data = this.data;
    while (index > 0) {
        let parentIndex = Math.floor(index / 2);
        if (data[index] < data[parentIndex]) {
            swap(data, index, parentIndex)
        }
        index = parentIndex
    }

}
MinHeap.prototype.extractMin = function () {
    let min = this.data[0];
    this.data[0] = this.data.pop();
    this.bubbleDown(0);
    return min;
}

MinHeap.prototype.bubbleDown = function (index) {
    while (true) {
        let leftChild = (index * 2) + 1
        let rightChild = leftChild + 1;
        let data = this.data;
        let swapIndex = null;

        if (data[leftChild] && data[index] > data[leftChild]) {
            swapIndex = leftChild
        }

        if (data[rightChild] && data[leftChild] && data[index] > data[leftChild] && data[leftChild] > data[rightChild]) {
            swapIndex = rightChild;
        }

        if (!swapIndex) {
            break;
        }

        swap(data, index, swapIndex);
        index = swapIndex;
    }
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

let mh = new MinHeap();
mh.insert(10);
mh.insert(9);
mh.insert(3);
mh.insert(12);
console.log(mh.data);
console.log(mh.extractMin())
console.log(mh.data);