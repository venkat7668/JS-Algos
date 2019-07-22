/**
 * @author Venkat Lankalapalli
 * @email venkat7668[@]gmail.com
 * @create date 2019-06-20 21:32:05
 * @modify date 2019-06-20 21:32:05
 * @desc Find minimum path to reach end of the element.
 *       minimumCostPath[0][0] = costMatrix[0][0]
 *       if(j>0) first column
 *       minimumCostPath[0][j] = minimumCostPath[0][j-1] + costMatrix[0][j]
 *       if(i>0) first row
 *       minimumCostPath[i][0] = minimumCostPath[i-1][0] + costMatrix[i][0]
 *       
 *       minimumCostPath[i][j] = min(minimumCostPath[i-1][j], minimumCostPath[i][j-1]) + costMatrix[i][j]
 *       finally 
 *       return minimumCostPath[row-1][col-1]
 */


function findMinCostPathToEnd(costMatrix) {

    let minimumCostPath = [];
    let row = costMatrix.length;
    let col = costMatrix[0].length

    let sum = 0;
    for (let j = 0; j < row; j++) {
        minimumCostPath[j] = [];
        minimumCostPath[j][0] = sum + costMatrix[j][0]
        sum = minimumCostPath[j][0];
    }

    sum = 0;
    for (let i = 0; i < col; i++) {
        minimumCostPath[0][i] = sum + costMatrix[0][i];
        sum = minimumCostPath[0][i];
    }


    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            minimumCostPath[i][j] = Math.min(minimumCostPath[i - 1][j], minimumCostPath[i][j - 1]) + costMatrix[i][j];
        }
    }
    console.log(minimumCostPath[row - 1][col - 1])
    return minimumCostPath[row - 1][col - 1];
}

findMinCostPathToEnd([
                    [1, 5, 7],
                    [4, 3, 2],
                    [1, 2, 1]
                    ]);