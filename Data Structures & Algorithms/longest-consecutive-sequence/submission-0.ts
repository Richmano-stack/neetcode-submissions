class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {

        const numSet : Set<number> = new Set()

        for (let i=0 ; i < nums.length ; i++){
            numSet.add(nums[i])
        }


        let maxStreak = 0

        for (const num of numSet){
            if (!numSet.has(num-1)) {
                let currentNum = num
                let currentStreak = 1

                while (numSet.has(currentNum +1)){
                    currentNum++
                    currentStreak++
                }

                maxStreak = Math.max(maxStreak, currentStreak)
            }
        }








        return maxStreak
        
    }
}
