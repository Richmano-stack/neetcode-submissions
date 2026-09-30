class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let buyPrice = prices [0]

        let maxProfit = 0

        for ( let i = 1 ; i < prices.length ; i ++) {
            const sellingPrice = prices [i]

            const currentProfit = sellingPrice - buyPrice

            if (currentProfit > 0) { 
                maxProfit = Math.max(currentProfit, maxProfit)
            } else {
                buyPrice = sellingPrice
            }
        }

        return maxProfit
    }
}
