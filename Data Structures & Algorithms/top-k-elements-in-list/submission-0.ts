class Solution {

    topKFrequent(nums: number[], k: number): number[] {
        const map : Record <number,number> = {}
        for ( const num of nums) {
            if (map[num]=== undefined){
                map[num]=1
            } else {
                map[num] = map[num] + 1
            }
        }

        const filteredNums = Object.entries(map).sort((a, b) => b[1] - a[1]);

        const result : number[] = [];

        for (let i=0 ; i < k ; i++ ) {
            result.push(Number(filteredNums[i][0]))
        };

        return result
    }
}