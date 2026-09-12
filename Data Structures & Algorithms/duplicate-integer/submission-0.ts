class Solution {
    hasDuplicate(nums: number[]): boolean {
        const box = new Set<number>();
        
        for (const num of nums) {
            if (box.has(num)) {
                return true;
            }
            
            box.add(num);
        }
        
        return false;
    }
}