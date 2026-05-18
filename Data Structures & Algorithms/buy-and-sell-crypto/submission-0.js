class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let b = 0;
        let s= 1;
        let maxProfit = 0;

        while( s< prices.length){
            if(prices[s] > prices[b]){
            let profit = prices[s] - prices[b];
            maxProfit = Math.max(maxProfit,profit)
            }else{
                b = s;
            }
            s++
        }
        return maxProfit
    }
}
