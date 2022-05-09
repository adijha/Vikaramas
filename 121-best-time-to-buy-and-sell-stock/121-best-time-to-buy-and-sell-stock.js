/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy=0
    let sell=1
    let bestProfit=0
    
    while(sell<prices.length){
        if(prices[buy]<prices[sell]){
            let profit=prices[sell]-prices[buy]
            bestProfit=Math.max(profit,bestProfit)
        }else{
            buy=sell
        }
        sell++
    }
    return bestProfit
};