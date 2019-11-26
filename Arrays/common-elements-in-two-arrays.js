/*
 * @Author: Venkat Lankalapalli 
 * @Date: 2019-11-26 15:42:36 
 * @Last Modified by:   Venkat Lankalapalli 
 * @Last Modified time: 2019-11-26 15:42:36 
 * 
 * @param arr1 sorted array
 * @param arr2 sorted array
 * return array of common elements in both arrays
*/
function findCommonElements(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            i++
        } else if (arr1[i] > arr2[j]) {
            j++
        } else {
            result.push(arr1[i]);
            i++
            j++
        }
    }
    return result;
}

exports.findCommonElements = findCommonElements;