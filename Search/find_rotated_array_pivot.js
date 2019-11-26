function findRotatedArrayPivot(arr, low, high) {
    //not rotated array
    if (low > high) return -1;
    
    if (low == high) return low;

    let mid = Math.floor((low + high) / 2);

    if (mid < high && arr[mid] > arr[mid + 1]) {
        return mid;
    }

    if (mid > low && arr[mid] < arr[mid - 1]) {
        return mid - 1;
    }

    if (arr[low] > arr[mid]) {
        return findRotatedArrayPivot(arr, low, mid - 1);
    }

    return findRotatedArrayPivot(arr, mid + 1, high);
}