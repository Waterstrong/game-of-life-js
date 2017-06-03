const NEIGHBOR_OFFSET = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
];

const nextGeneration = (grid) =>
    grid.map((row, rowIndex) =>
        row.map((cell, colIndex) =>
            getNextState(grid[rowIndex][colIndex], getAliveNeighborNumber([rowIndex, colIndex], grid))));

const getAliveNeighborNumber = (position, grid) =>
    NEIGHBOR_OFFSET.map(offset => toState(offset, position, grid)).reduce((result, state) => result + state, 0);

const toState = (offset, position, grid) => {
    const newRow = position[0] + offset[0];
    const newColumn = position[1] + offset[1];
    return withinGrid(newRow, newColumn, grid) ? grid[newRow][newColumn] : 0;
};

const getNextState = (currentState, aliveNeighborNumber) => [0, 0, currentState, 1, 0, 0, 0, 0][aliveNeighborNumber];

const withinGrid = (row, column, grid) => row >= 0 && row < grid.length && column >= 0 && column < grid[row].length;

export default nextGeneration;