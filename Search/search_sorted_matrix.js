/*

Given an n x n matrix and a number x, find the position of x in the matrix if it is present in it. Otherwise, print “Not Found”.
In the given matrix, every row and column is sorted in increasing order. The designed algorithm should have linear time complexity.
*/

exports.search_sorted_matrix = function (matrix, x) {
    let row = 0;
    let column = matrix[row].length;
    const len = matrix.length;

    while (row < len && column > 0) {
        debug;
        if (matrix[row][column] == x) {
            return [row, column];
        } else if (matrix[row][column] < x) {
            row++;
        } else {
            column--;
        }
    }

    return -1;
}