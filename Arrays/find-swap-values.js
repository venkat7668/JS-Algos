/*
*   Sum Swap: Given two arrays of integers, find a pair of values (one value from each array) that you
*   can swap to give the two arrays the same sum.
*
*   EXAMPLE:
*   lnput:{4, 1, 2, 1, 1, 2}and{3, 6, 3, 3}
*   Output: {1, 3} 
*/
function findSwapValues(arr1, arr2) {
    let sum1 = getSum(arr1);
    let sum2 = getSum(arr2);
    let target = getTarget(sum1, sum2);

    return findDiff(arr1, arr2, target);

}

function findDiff(arr1, arr2, target) {
    let arr2Obj = arrToObj(arr2);
    let size = arr1.length;
    for (let i = 0; i < size; i++) {
        let dif = arr1[i] - target;
        console.log(arr1[i], target)
        if (arr2Obj[dif]) {
            console.log(dif, arr1[i])
            return [dif, arr1[i]];
        }
    }
}

function arrToObj(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = 1;
    }
    return obj;
}

function getSum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function getTarget(sum1, sum2) {
    if ((sum1 - sum2) % 2 != 0) return null;
    return (sum1 - sum2) / 2;
}

console.log(findSwapValues([4, 1, 2, 1, 1, 2], [3, 6, 3, 3]));