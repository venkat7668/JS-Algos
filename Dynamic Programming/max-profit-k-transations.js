function maxProfitKtransations(prices, k) {
    let profit = [];
    let n = prices.length;

    for (let t = 0; t <= k; t++) {
        profit[t] = [0]

    }
    
    for (let d = 0; d < n; d++) {
        profit[0][d] = 0
    }

    for (let t = 1; t <= k; t++) {
        let cur_dif = Number.MIN_VALUE;
        for (let d = 1; d < n; d++) {
            cur_dif = Math.max(cur_dif, profit[t - 1][d - 1] - prices[d - 1]);
            profit[t][d] = Math.max(profit[t][d - 1], prices[d] + cur_dif)
        }
    }

    return profit[k][n - 1]
}
console.log(maxProfitKtransations([12, 14, 17, 10, 14, 13, 12, 15], 3))