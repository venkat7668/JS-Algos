/**
 * @author Venkat Lankalapalli
 * @email venkat7668[@]gmail.com
 * @create date 2019-06-19 21:16:48
 * @modify date 2019-06-19 21:16:48
 * @desc Kadane's algorithm to find max sum sub array 
 * Time complexity : O(n)
 * space complexity: O(2)
 */

function maxSubArraySum(arr) {
    let cur_sum = 0;
    let best_sum = 0;
    for (let i = 0; i < arr.length; i++) {
        cur_sum = Math.max(0, cur_sum + arr[i]);
        best_sum = Math.max(cur_sum, best_sum);
    }

    return best_sum;
}

console.log(maxSubArraySum([1,3,-4,1,4,-2]))
