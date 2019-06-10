/**
 * @author Venkat Lankalapalli
 * @email venkat7668[@]gmail.com
 * @create date 2019-06-09 15:44:16
 * @modify date 2019-06-09 15:44:16
 * @desc finding n queens safe positions on n*n board (Queens should not attack on each other)
 *       Time complexity : O(n*n)
 *       Space complexity: O(n*n)
 *        
 */

//queensPos = [{ col: 0, row: 0 }]
let queenPos = [];
let hasSol = nQueens(8, 0, queenPos);
console.log("Has Solution :", hasSol);
console.log(queenPos);

function nQueens(n, row, positions) {
    if (n == row) {
        return true;
    }
    for (let col = 0; col < n; col++) {
        if (isSafeCell(row, col, positions)) {
            positions[row] = { col: col, row: row };
            if (nQueens(n, row + 1, positions)) {
                return true
            }
        }
    }
    return false;
}

function isSafeCell(row, col, positions) {
    for (let queen = 0; queen < row; queen++) {
        if (positions[queen].col == col
            || positions[queen].row == row
            || positions[queen].col - positions[queen].row == col - row
            || positions[queen].col + positions[queen].row == col + row) {
            return false;
        }
    }
    return true;
}
