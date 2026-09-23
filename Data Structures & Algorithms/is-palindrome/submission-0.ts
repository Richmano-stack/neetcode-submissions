class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        
        const cleanStr = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
        const sArray = cleanStr.split("");

        let left = 0
        let right = sArray.length -1

        while (left<right){
            if (sArray[left]!==sArray[right]) {
                return false
            } 
            left++;
            right--;


        }
        return true
    }
}
