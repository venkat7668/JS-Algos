
/*
  This algorithm finds 3 elements in given array that are equals to given sum

  @arr: Sorted Array
  @sum: Integer
*/
exports.threeNumbersSum = function (arr, sum) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        let l = i + 1;
        let r = len - 1;
        while (l < r) {
            if (arr[i] + arr[l] + arr[r] == sum) {
                return [arr[i], arr[l], arr[r]];
            } else if (arr[i] + arr[l] + arr[r] < sum) {
                l++
            } else {
                r--
            }
        }
    }
    return []
}