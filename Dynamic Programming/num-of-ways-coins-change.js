/**
 * @author Venkat Lankalapalli
 * @email venkat7668[@]gmail.com
 * @create date 2019-07-01 12:58:13
 * @modify date 2019-07-01 12:58:13
 * @desc This algorithm retuns total ways to get the 
 *       change with given coins list for given target.
 * Example : coins:[1,2,3], target: 5.
 *           [1,1,1,1,1], [1,1,1,2], [1,1,3], [2,3], [1,2,2]
 *         Total ways : 5;
 */

function getTotalWaysCoinChange(coins, target) {
    let amount = new Array(target + 1).fill(0);
    amount[0] = 1;

    for (let coin = 0; coin <= coins.length; coin++) {
        for (let a = 1; a <= target; a++) {
            if (a >= coins[coin]) {
                amount[a] += amount[a - coins[coin]]
            }
        }
    }

    return amount[target]
}

function getTotalWaysCoinChange_v2(arr, n, target) {
    if (n == 0 || target < 0) {
        return 0;
    }

    if (target == 0) {
        return 1
    }

    return getTotalWaysCoinChange_v2(arr, n - 1, target) + getTotalWaysCoinChange_v2(arr, n, target - arr[n - 1]);
}

console.log(getTotalWaysCoinChange([2, 3, 4, 1], 6));