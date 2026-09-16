class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {

        let encoded = ''
        for (let i = 0; i < strs.length; i ++) {
            encoded = encoded +strs[i].length+"#"+strs[i]
        }
        return encoded 
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let decoded : string [] = [];
        let i = 0 ;

        while (i < str.length) {
            const delimiterIndex = str.indexOf("#", i);
            const length = Number(str.slice(i, delimiterIndex));
            const start = delimiterIndex + 1 ;

            const word = str.slice(start, start + length)

            decoded.push(word)

            i = start + length

        }

        return decoded 
    }
}