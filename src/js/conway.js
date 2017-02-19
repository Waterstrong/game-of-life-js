const gotoNextGeneration = (grid) => {
    return grid.map((row, rowIndex) => {
        return row.map((cell, colIndex) => {
            let aliveNeighborNumber = calculateAliveNeighborNumber(rowIndex, colIndex, grid);
            if (aliveNeighborNumber < 2 || aliveNeighborNumber > 3) {
                return 0;
            }
            if(aliveNeighborNumber === 3) {
                return 1;
            }
            return cell;
        });
    });
};

const NEIGHBOR_INDEX = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

const withinIndex = (rowIndex, colIndex, grid) => {
    return rowIndex >= 0 && rowIndex < grid.length
        && colIndex >= 0 && colIndex < grid[rowIndex].length;
};

const calculateAliveNeighborNumber = (rowIndex, colIndex, grid) => {
    return NEIGHBOR_INDEX.reduce((acc, val) => {
        let newRowIndex = rowIndex + val[0];
        let newColIndex = colIndex + val[1];
        return withinIndex(newRowIndex, newColIndex, grid) ? acc + grid[newRowIndex][newColIndex] : acc;
    }, 0);
};

module.exports = {
    gotoNextGeneration
};