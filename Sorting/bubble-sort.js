exports.bubbleSort = function (arr) {
    let len = arr.length;
    while (len) {
        for (let i = 0; i < len; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            }
        }
        len--;
    }
    return arr;
}

console.log(bubbleSort([1, 2, 3, 5, 1, 9, 4]))