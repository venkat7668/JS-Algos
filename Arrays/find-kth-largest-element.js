function findKthLargestEl(arr, k, left, right) {
    if (right - left == k) {
        console.log("hello", left, right)
        return arr[right - left];
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
}
console.log(findKthLargestEl([3, 2, 11, 4], 1, 0, 3));