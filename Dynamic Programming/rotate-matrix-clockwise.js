function rotateMatrixClockWise(matrix) {
    let result = [];
    let lastIndex = matrix.length;
    for (let i = 0; i <= lastIndex; i++) {
        result.push(matrix.map(ar => ar[lastIndex - i]));
    }

    return result;
}

console.log(rotateMatrixClockWise([[1,2,3],
                                   [4,5,6],
                                   [7,8,9]]));