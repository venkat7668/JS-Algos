function genTable(rows, cols) {
    /*
     * @rows : number of rows in the table
     * @cols : number of cols in the table
     * @return : matrix of numbers, as showed below
     * genTable(4, 5)
     * [ 
     *     [ 1, 5, 9, 13, 17 ],
     *     [ 2, 6, 10, 14, 18 ],
     *     [ 3, 7, 11, 15, 19 ],
     *     [ 4, 8, 12, 16, 20 ]
     * ]
    */
    let result = [];
    let cell = 1;
    for (let row = 0; row < rows; row++) {
        result.push([])
    }
    for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
            result[row][col] = cell++
        }
    }
    return result;
}