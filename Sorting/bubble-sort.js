exports.bubbleSort = function (arr) {
    let len = arr.length;
    while (len) {
        let isSwap = false;
        for (let i = 0; i < len; i++) {
            if (arr[i] > arr[i + 1]) {
                isSwap = true;
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            }
        }
        len = isSwap ? len-- : 0
    }
    return arr;
}

console.log(exports.bubbleSort([1, 2, 3, 5, 1, 9, 4, 0]))