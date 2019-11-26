/*
 * @Author: Venkat Lankalapalli 
 * @Date: 2019-11-22 15:40:20 
 * @Last Modified by: Venkat Lankalapalli
 * @Last Modified time: 2019-11-26 15:41:28
 */

function getChange(amount, coins) {
    //base cases
    if(amount <= 0 || coins.length == 0){
        return 0;
    }

    let result = {};
    for (let i = 0; i < coins.length; i++) {
        let iCoins = amount / coins[i];
        result[coins[i]] = Math.floor(iCoins);
        amount %= coins[i];

        if(!amount) break;
    }
    return result;
}

console.log(getChange(143, [25, 10, 5, 1]));