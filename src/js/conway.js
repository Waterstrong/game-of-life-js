const NEIGHBOR_INDEX = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
];

const gotoNextGeneration = (grid) => {
    return grid.map((row, rowIndex) => {
        return row.map((cell, colIndex) => {
            let aliveNeighborNumber = calculateAliveNeighborNumber(rowIndex, colIndex, grid);
            return getNextState(grid[rowIndex][colIndex], aliveNeighborNumber);
        });
    });
};

const getNextState = (currentState, aliveNeighborNumber) =>
    [0, 0, currentState, 1, 0, 0, 0, 0][aliveNeighborNumber];

const calculateAliveNeighborNumber = (rowIndex, colIndex, grid) =>
    NEIGHBOR_INDEX
        .map(position => transformIndexToState(rowIndex + position[0], colIndex + position[1], grid))
        .reduce((result, state) => result + state, 0);

const transformIndexToState = (rowIndex, colIndex, grid) =>
    withinIndex(rowIndex, colIndex, grid) ? grid[rowIndex][colIndex] : 0;

const withinIndex = (rowIndex, colIndex, grid) =>
    rowIndex >= 0 && rowIndex < grid.length && colIndex >= 0 && colIndex < grid[rowIndex].length;

export default gotoNextGeneration;