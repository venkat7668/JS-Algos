/*
 * @param arr : Array of integers
 * @param sum : Ingeger
 * return start index and end index of sub array
 * 
 */

function findSubArrEqSum(arr, sum) {
    /* Initialize curr_sum as value of first element 
       and starting point as 0 */
    let current_sum = arr[0],
        start = 0,
        len = arr.length;
    /* Add elements one by one to current_sum and if the curr_sum exceeds the 
      sum, then remove starting element */
    for (let i = 1; i <= len; i++) {
        // If current_sum exceeds the sum, then remove the starting elements
        while (current_sum > sum && start < i - 1) {
            current_sum = current_sum - arr[start];
            start++
        }

        if (sum == current_sum) {
            return [start, i - 1]
        }
        current_sum += arr[i];
    }

    return -1;

}

console.log(findSubArrEqSum([2, 3, 4, 9, 10], 15));