class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {

        let maxLeft = [0]
        let maxRight = [0]
        let currentMaxLeft = 0
        let currentMaxRight = 0
        let trappedWater = 0


        for ( let i = 1 ; i < height.length ; i ++) {
            currentMaxLeft = Math.max (currentMaxLeft , height[i - 1])
            maxLeft.push(currentMaxLeft)
        }

        const n = height.length

        for ( let i = n-2 ; i >= 0 ; i --) {
            currentMaxRight = Math.max ( currentMaxRight , height[i + 1])
            maxRight.unshift(currentMaxRight)
        }

        for ( let i = 0 ; i < height.length ; i ++ ) {
            trappedWater = trappedWater + (Math.min (maxLeft [i] , maxRight [i]) - height [i] < 0 ? 0 :  Math.min (maxLeft [i] , maxRight [i]) - height [i])
        }

        return trappedWater
    }
}
