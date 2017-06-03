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

const gotoNextGeneration = (grid) =>
    grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
            const aliveNeighborNumber = calculateAliveNeighborNumber(rowIndex, colIndex, grid);
            return getNextState(grid[rowIndex][colIndex], aliveNeighborNumber);
        }));

const getNextState = (currentState, aliveNeighborNumber) =>
    [0, 0, currentState, 1, 0, 0, 0, 0][aliveNeighborNumber];

const calculateAliveNeighborNumber = (rowIndex, colIndex, grid) =>
    NEIGHBOR_INDEX
        .map(position => transformIndexToState(position, rowIndex, colIndex, grid))
        .reduce((result, state) => result + state, 0);

const transformIndexToState = (position, rowIndex, colIndex, grid) => {
    const newRowIndex = rowIndex + position[0];
    const newColIndex = colIndex + position[1];
    return withinIndex(newRowIndex, newColIndex, grid) ? grid[newRowIndex][newColIndex] : 0;
};


const withinIndex = (rowIndex, colIndex, grid) =>
rowIndex >= 0 && rowIndex < grid.length && colIndex >= 0 && colIndex < grid[rowIndex].length;

export default gotoNextGeneration;