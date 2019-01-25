/* 
    This algorithm finds the 2 elements in the given array that upto given sum

    @arr: sorted array
    @sum: integer

    time complexity: O(n)
    space complexity: 2
*/

exports.twoNumbersSum = function (arr, sum) {
    let l = 0,
        r = arr.length;
    while (l < r) {
        if (arr[l] + arr[r] == sum) {
            return [arr[l], arr[r]];
        } else if (arr[l] + arr[r] < sum) {
            l++
        } else {
            r--
        }
    }
    return []
}