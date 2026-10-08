class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {

        let i = 0 
        let j = s1.length
        const sortedS1 = [...s1].sort().join('')

        if (s1.length > s2.length) return false 

        while (j <= s2.length) {
            const slicedS2 = s2.slice(i , j)
            const sortedS2 = [...slicedS2].sort().join('')

            if (sortedS1 === sortedS2) {
                return true
            }
        
            i ++
            j++
        }

        return false 
        
    }
}
