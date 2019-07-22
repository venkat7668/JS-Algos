/*
 * @param arr : Array of integers
 * @param k   : Integer sum
 * return array of integers that are equal to given sum
*/

function findElsEqSum(arr, n, sum, r = []) {

    if (sum == 0) {
        console.log(r)
        return r;
    }

    if (n == 0 && sum < 0) {
        return;
    }

    findElsEqSum(arr, n - 1, sum, r);
    let store = [...r];
    store.push(arr[n - 1]);
    findElsEqSum(arr, n - 1, sum - arr[n - 1], store);
}

console.log(findElsEqSum([1, 3, 4, 8, 12], 5, 12));