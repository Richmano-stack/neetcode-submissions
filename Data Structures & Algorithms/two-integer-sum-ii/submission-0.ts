class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let left = 0
        const n = numbers.length
        let right = n-1
        let result = []

        while ( left < right ) {
            if ( numbers [left] + numbers [right] === target) {
                result = [ left + 1 , right + 1 ]
                return result
            } else if ( numbers [left] + numbers [right] > target ) {
                right --
            } else {
                left ++
            }

        }

        return []
    }
}
