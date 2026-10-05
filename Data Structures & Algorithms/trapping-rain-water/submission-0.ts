class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {

        let maxLeft = []
        let maxRight = []
        let currentMaxLeft = 0
        let currentMaxRight = 0
        let result = 0

        for (let i=0 ; i < height.length  ; i ++ ) {

            currentMaxLeft = Math.max(currentMaxLeft , height[i])
            maxLeft.push(currentMaxLeft)
        }

        for ( let i = height.length - 1 ; i >= 0 ; i -- ) {

            currentMaxRight = Math.max (currentMaxRight, height [ i])
            maxRight[i]=currentMaxRight
        }


        for ( let i = 0 ; i< height.length ; i ++ ) {
           let currentTrappedWatter = Math.min (maxLeft [i], maxRight[i]) - height [i]

           if (currentTrappedWatter < 0) {
                currentTrappedWatter = 0
           } 

           result = result + currentTrappedWatter
        }

        return result
    }
}
