class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const n = matrix.length
        if ( n === 0) return false 
        const m = matrix[0].length

        let i = 0

        while ( i < n) {

            if ( matrix[i][m-1] < target ) {
                i ++
            } else if ( matrix[i][m-1] === target) {
                return true 
            } else {
                for ( let j = 0 ; j < m ; j ++) {
                    if ( matrix[i][j] === target ) {
                        return true
                    }
                }
                return false
            }
        }

        return false 
    
    }
}