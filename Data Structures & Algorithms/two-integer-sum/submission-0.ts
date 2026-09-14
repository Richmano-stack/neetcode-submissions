class Solution {
    twoSum(nums: number[], target: number): number[] {
       const map : Record <number, number>= {};
       for (let i = 0; i < nums.length ; i++) {
          let diff = target - nums [i]
          if ( map[diff] !== undefined) {
            return [map[diff], i]
          } else {
            map[nums[i]]=i

          }
          
       }
       return []
    }  
}



