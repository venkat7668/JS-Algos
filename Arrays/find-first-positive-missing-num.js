/*
 * @Author: Venkat Lankalapalli 
 * @Date: 2021-02-26 01:00:02 
 * @Last Modified by: Venkat Lankalapalli
 * @Last Modified time: 2021-02-26 01:12:49

 * Problem: Find smallest positive number that is missing from the array. Space complexity O(1)
 * Ex     : [5, 3, 4, 6, 7, 1, 2, 9] : Smallest number missing in this array is 8 in range of 1 to 9
 * Video  :  https://www.youtube.com/watch?v=-lfHWWMmXXM
 */

function findMissingSmallestNumber(arr) {

    let len = arr.length;

    for (let i = 1; i < len + 1; i++) {
        while (i != arr[i - 1] && arr[i - 1] <= len - 1) {
            swap(arr, i - 1, arr[i - 1] - 1);
        }
    }

    for (let j = 1; j < len + 1; j++) {
        if (j != arr[j - 1]) {
            console.log(" Missing number is " + j)
        }
    }
}

function swap(arr, i, j) {
    let x = arr[i]
    arr[i] = arr[j]
    arr[j] = x;
}

findMissingSmallestNumber([5, 3, 4, 6, 7, 1, 2, 9])