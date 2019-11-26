/*
 * @Author: Venkat Lankalapalli 
 * @Date: 2019-11-26 15:45:33 
 * @Last Modified by:   Venkat Lankalapalli 
 * @Last Modified time: 2019-11-26 15:45:33 
 */

function maxProfit(arr) {
    if (!arr.length) {
        return 0;
    }

    let result = -Infinity;
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result = Math.max(result, arr[i] - min);
        min = Math.min(min, arr[i])
    }

    return result;

}

console.log(maxProfit([10,2,11]))