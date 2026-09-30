class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {

        const sortedArray = nums.sort((a, b) => a - b)

        let result =[]

        for ( let i = 0 ; i < sortedArray.length ; i++) {

            if ( sortedArray[i] === sortedArray[i-1]) continue
            
            let left = i + 1
            let right = sortedArray.length -1

            while ( left < right ) {

/*                 if ( sortedArray [left] === sortedArray[left - 1] && sortedArray [right] ===               sortedArray[right + 1]) continue */

                if ( sortedArray [left] + sortedArray [right] === - sortedArray [i]) {
                    const valid = [sortedArray[left] , sortedArray[right], sortedArray[i]]
                    result.push(valid)
                    left ++
                    right --

                    while (sortedArray [left] === sortedArray[left - 1]) {
                        left++
                    }

                    while (sortedArray [right] === sortedArray[right + 1]) {
                        right --
                    }
                } else if ( sortedArray [left] + sortedArray [right] < -sortedArray [i]) {
                    left ++
                } else {
                    right --
                }
            }

        }

        return result
    }
}
