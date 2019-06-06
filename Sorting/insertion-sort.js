exports.insertion_sort = function (arr) {
    let i = 0, j = 0, value;
    for (; i < arr.length; i++) {
        j = i - 1;
        value = arr[i];
        while (j >= 0 && arr[j] > value) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = value;
    }
    return arr;
}