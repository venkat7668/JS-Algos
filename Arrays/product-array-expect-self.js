/*
 * Given an integer array nums, return an array answer such that answer[i]
 * is equal to the product of all the elements of nums except nums[i].
 * 
 * input:  [2, 1, 3, 4]
 * output: [12, 24, 8, 6]
 * Time complexity : O(n) 
 */

function productExpectSelf(arr) {
    let len = arr.length;
    let prefixAr = [1];
    let surfixAr = [];
    let result = [];
    surfixAr[len - 1] = 1

    for (let i = 1; i < len; i++) {
        prefixAr[i] = prefixAr[i - 1] * arr[i - 1]
    }

    for (let i = len - 2; i >= 0; i--) {
        surfixAr[i] = surfixAr[i + 1] * arr[i + 1]
    }

    for (let i = 0; i < len; i++) {
        result[i] = prefixAr[i] * surfixAr[i]
    }

    return result
}

console.log(productExpectSelf([3, 6, 9]))