class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {

        let charCount = new Map()
        let maxFreq = 0 
        let left = 0 
        let maxLen = 0

        for (let right = 0 ; right < s.length ; right ++) {
            charCount.set(s[right] , (charCount.get(s[right]) || 0) + 1 )
            maxFreq = Math.max(maxFreq, charCount.get(s[right]))
            const len = right - left + 1

            const isValid = len - maxFreq <= k

            if (!isValid) {
                charCount.set(s[left] , charCount.get(s[left]) - 1) 
                left ++ 
            }

            maxLen = Math.max (maxLen, right - left + 1)

        }

        return maxLen
}

}