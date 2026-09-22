class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const seen : Set <string> = new Set ()

        for (let row = 0 ; row < 9 ; row ++){
            for (let col = 0 ; col <9 ; col ++){
                const val = board[row][col]
                const rowKey = val + "in row" + row
                const colKey = val + "in col" + col
                const boxKey = val + "in box" + Math.floor(row/3)+"-"+Math.floor(col/3)

                if (board[row][col] === '.') continue

                if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
                    return false 
                } else {
                    seen.add(rowKey)
                    seen.add(colKey)
                    seen.add(boxKey)
                }
            }
        }



        return true
    }
}
