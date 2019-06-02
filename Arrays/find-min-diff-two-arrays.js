/* 
    This Algorithm finds min difference between two arrays elements
    @ arr1: Sorted Array
    @ arr2: Sorted Array
    @ return: number
*/
exports.findMinDifTwoArraysElements = function (arr1, arr2) {
    const m = arr1.length;
    const n = arr2.length;

    let a = 0;
    let b = 0;
    let result = Number.MAX_VALUE;
    while (a < m && b < n) {
        let temp = Math.abs(arr1[a] - arr2[b]);
        if (temp < result) {
            result = temp;
        }

        if (arr1[a] < arr2[b]) {
            a++
        } else {
            b++
        }
    }

    return result;
}