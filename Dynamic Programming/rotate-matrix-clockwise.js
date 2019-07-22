function rotateMatrixClockwise(matrix){
    let result = [];
    let lastIndex = matrix.length -1;
    for(let i = lastIndex; i>=0; i--){
        result.push(matrix.map(ar=>ar[lastIndex - i]))
    }
    return result
}
console.log(rotateMatrixClockwise([[1,2,3],
    [4,5,6],
    [7,8,9]]));