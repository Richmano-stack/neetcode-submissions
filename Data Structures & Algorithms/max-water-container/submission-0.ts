class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {

        let left = 0
        let right = heights.length - 1
        let currentArea = 0

        while ( left < right ) {
            const area = (right - left)* Math.min(heights[right] , heights[left])
            currentArea = Math.max (area, currentArea)

            if ( heights[left] < heights[right]) {
                left ++
            } else {
                right --
            }

        }

        return currentArea
    }
}
