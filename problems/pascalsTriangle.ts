 export const generate = (numRows: number): number[][] => {
    if (numRows < 1) {
        return []
    }
    //   1
    //  1 1
    // 1 2 1
    //1 3 3 1//
    //1 4 6 4 1//
    let numRowValues: number[][] = []

    for (let i = 0; i < numRows; i++) {
        numRowValues.push([]);
        const numCols = i + 1;
        for (let j = 0; j < numCols; j++) {
            if (j === 0 || j === numCols-1) {
                numRowValues[i][j] = 1
            } else {
            numRowValues[i][j] = numRowValues[i-1][j-1] + numRowValues[i-1][j];
            }
        }      
    }
    console.log(numRowValues)
    return numRowValues
}

