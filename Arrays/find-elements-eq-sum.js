/*
 * @Author: Venkat Lankalapalli 
 * @Date: 2019-11-26 15:42:53 
 * @Last Modified by:   Venkat Lankalapalli 
 * @Last Modified time: 2019-11-26 15:42:53 
 * 
 * @param arr : Array of integers
 * @param sum : Integer sum
 * @param n   : Number of elements in the array
 * @param r   : Program passed param, Result cached array
 * return array of integers that are equal to given sum
*/

function findElsEqSum(arr, n, sum, r = []) {

    if (sum == 0) {
        console.log(r)
        return r;
    }

    if (n == 0 || sum < 0) {
        return;
    }

    findElsEqSum(arr, n - 1, sum, r);
    let store = [...r, arr[n - 1]];
    findElsEqSum(arr, n - 1, sum - arr[n - 1], store);
}

console.log(findElsEqSum([1, 3, 4, 8, 12], 5, 12));