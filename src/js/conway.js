const gotoNextGeneration = (grid) => {
    return grid.map((row, rowIndex) => {
        return row.map((cell, colIndex) => {
            let aliveNeighborNumber = calculateAliveNeighborNumber(rowIndex, colIndex, grid);
            if(aliveNeighborNumber < 2) {
                return 0;
            }
            return cell;
        });
    });
};

const calculateAliveNeighborNumber = (rowIndex, colIndex, grid) => {
    let aliveNeighborNumber = 0;
    for (let i = -1; i < 2; ++i) {
        for (let j = -1; j < 2; ++j) {
            if (i !== 0 && j !== 0) {
                let newRowIndex = rowIndex + i;
                let newColIndex = colIndex + j;
                if (newRowIndex >= 0 && newRowIndex < grid.length
                    && newColIndex >= 0 && newColIndex < grid[newRowIndex].length) {
                    if (grid[newRowIndex][newColIndex] === 1) {
                        ++aliveNeighborNumber;
                    }
                }

            }
        }
    }
    return aliveNeighborNumber;
};

module.exports = {
    gotoNextGeneration
};