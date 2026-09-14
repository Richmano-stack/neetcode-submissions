class Solution {

    groupAnagrams(strs: string[]): string[][] {
    
    const map : Record <string, string[]> = {};
    for (const word of strs) {
        const sortedWord = word.split('').sort().join('');

        if (map[sortedWord] === undefined ) {
            map[sortedWord] = []
        };

        map[sortedWord].push(word);
    }

    return Object.values(map);
        
    }
}
