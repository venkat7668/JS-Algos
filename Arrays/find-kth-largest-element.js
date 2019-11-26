/*function findKthLargestEl(arr, k, left, right) {
    if (right - left == k) {
        console.log("hello", left, right)
        //return arr[right - left];
    }
    let pivot = right - left;
    let leftArr = [];
    let rightArr = [];
    for (let i = left; i < right; i++) {
        if (arr[pivot] > arr[i]) {
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i])
        }
    }
    if (rightArr.length >= k) {
        return findKthLargestEl(arr, k, leftArr.length, right);
    } else if (leftArr.length >= k) {
        return findKthLargestEl(arr, k, left, right - rightArr.length - 1);
    } else {
        console.log("world")
        return arr[pivot]
    }
}*/


function findKthLargestEl(arr, k) {
    let heap = new MinHeap(k);

    for (let i = 0; i < arr.length; i++) {
        heap.insert(arr[i])
    }

    return heap.extractMin();
}

function MinHeap(size) {
    this.size = size;
    this.heap = [];
}

MinHeap.prototype.insert = function (num) {
    this.heap.push(num);
    this.bubbleup(this.heap.length - 1);

    if (this.heap.length > this.size) {
        this.extractMin();
    }
}

MinHeap.prototype.extractMin = function () {
    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return min;
}

MinHeap.prototype.bubbleDown = function (index) {
    while (true) {
        let chid = index + 1 * 2;
        let sibling = chid - 1;
        let toSwap = null;

        // swap smaller number at zero index
        if (this.heap[index] > this.heap[chid]) {
            toSwap = chid;
        }
        if (this.heap[index] > this.heap[sibling] || (this.heap[chid] &&
            this.heap[chid] > this.heap[sibling])) {
            toSwap = sibling;
        }

        if (!toSwap) {
            break;
        }

        //swap
        [this.heap[index], this.heap[toSwap]] = [this.heap[toSwap], this.heap[index]];
        index = toSwap;
    }

}
MinHeap.prototype.bubbleup = function (childIndex) {

    while (childIndex > 0) {
        let parentIndex = Math.floor((childIndex + 1) / 2) - 1;

        if (this.heap[childIndex] < this.heap[parentIndex]) {
            //swap
            [this.heap[childIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[childIndex]];
        }
        childIndex = parentIndex;
    }
}

console.log(findKthLargestEl([3, 2, 11, 4, 5, 8, 23], 3));