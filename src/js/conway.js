const gotoNextGeneration = (grid) => {
    return grid.map((row) => {
        return row.map((cell) => {
            return cell;
        });
    });
};

module.exports = {
    gotoNextGeneration
};