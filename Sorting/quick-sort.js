exports.quickSort = function (arr) {
    if (arr.length < 2) {
        return arr;
    }

    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];

    for (let i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i])
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort([1, 4, 3, 2, 6, 4]));