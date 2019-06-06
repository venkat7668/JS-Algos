exports.selectionSort = function (arr) {
    let result = [];
    while (arr.length) {
        let minIndex = getMin(arr);
        result.push(...arr.splice(minIndex, 1));
    }

    return result;
}

function getMin(arr) {
    let min = arr[0];
    let minIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
            minIndex = i;
        }
    }

    return minIndex;
}

console.log(selectionSort([1, 4, 2, 6, 3, 8, 4, 9, 5]));