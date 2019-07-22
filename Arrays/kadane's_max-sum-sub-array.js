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
    let ans = arr[0];
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        ans = Math.max(arr[i], ans + arr[i]);
        sum = Math.max(ans, sum)
        console.log(ans, sum);
    }

    return sum;
}

console.log(maxSubArraySum([1,3,-4,1,4,-2]))
