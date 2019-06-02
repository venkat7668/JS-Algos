//this only works with sorted arrays
exports.sumOfPaireSortedArr = function (arr, sum) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let tempSum = arr[left] + arr[right];
        if (tempSum > sum) {
            right--
        } else if (tempSum < sum) {
            left++
        } else {
            return [left, right]
        }
    }
    return -1;
}

exports.sumOfpairUnsortedArr = function (arr, sum) {
    let cache = {};
    for (let i = 0; i < arr.length; i++) {
        if (cache[arr[i]] != undefined) {
            return [cache[arr[i]], i]
        }
        cache[sum - arr[i]] = i
    }
    return -1
}