/*
 * @Author: Venkat Lankalapalli
 * @Date: 2019-11-26 14:37:30 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-11-26 15:03:00
 * @Disc: Given matrix, find a minimum cost path to reach bottom right corner, from top left corner.
 */

function findMinPath(m) {
    let result = [];
    let rows = m.length;
    let cols = m[0].length;

    //fill all rows and cols with zero value
    for (let row = 0; row < rows; row++) {
        result[row] = new Array(cols).fill(0);
    }

    result[0][0] = m[0][0];
    //fill first row with accumulated previous value
    for (let col = 1; col < cols; col++) {
        result[0][col] = result[0][col - 1] + m[0][col];
    }

    //fill first column with accumulated previous value
    for (let row = 1; row < rows; row++) {
        result[row][0] = result[row - 1][0] + m[row][0]
    }

    //fill minimum path value in the respective location
    for (let row = 1; row < rows; row++) {
        for (let col = 1; col < cols; col++) {
            result[row][col] = m[row][col] + Math.min(result[row - 1][col], result[row][col - 1]);
        }
    }

    return result[rows - 1][cols - 1]
}



console.log(findMinPath([
    [1,2,3],
    [1,2,3],
    [1,2,3],
    [1,2,3]
]))