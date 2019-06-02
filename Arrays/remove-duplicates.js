/* 
This algorithm removes duplicate items from given array
Time complexity : O(n)
Space complexity: 3
*/
exports.removeDuplicates = function (arr) {
    const seen = {};
    let result = [];
    let i = 0, len = arr.length;
    for (; i < len; i++) {
        if (!seen[arr[i]]) {
            result.push(arr[i])
            seen[arr[i]] = true;
        }
    }
    return result;
}

exports.removeDuplicatesWithSet = function (arr) {
    return [...new Set(arr)];
}