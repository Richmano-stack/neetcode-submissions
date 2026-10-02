class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let mp = new Map()
        let left = 0
        let result = 0 

        for ( let right = 0 ; right < s.length ; right ++ ) {
            if ( mp.has(s[right])) {
                left = Math.max(mp.get(s[right]) +1 , left)
            } 

            mp.set(s[right], right)
            result = Math.max(result, right - left +1)

        }

        return result
    }
}
