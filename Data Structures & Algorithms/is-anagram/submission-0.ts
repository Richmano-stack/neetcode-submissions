class Solution {
    isAnagram(s: string, t: string): boolean {

        if (s.length !== t.length) {
            return false
        };

        const letterCounts = {}

        for (const char of s) {
            if (letterCounts [char] === undefined) {
                letterCounts [char] = 1
            } else {
                letterCounts [char] = letterCounts [char] + 1
            }
        }

        for (const char of t) {
            if ( letterCounts [char]===undefined || letterCounts [char]===0) {
                return false
            } 

            letterCounts[char] = letterCounts[char] - 1
        }
        return true
    }
}
