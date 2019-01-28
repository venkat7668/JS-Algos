exports.binarySearch = function (arr, x) {
    let l = 0;
    let r = arr.length;
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] == x) {
            return mid;
        } else if (arr[mid] > x) {
            r = mid - 1;
        } else {
            l = mid + 1
        }
    }
    return -1;
}