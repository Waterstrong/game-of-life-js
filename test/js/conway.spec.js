import {expect} from 'chai';
import nextGeneration from '../../src/js/conway.js';

describe('Test Conway Game of Life for cell with less than two alive neighbours', () => {
    const allDead = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    it('should next state be all dead given the grid with zero alive cell', () => {
        assertNextGeneration(nextGeneration(allDead), allDead);
    });

    it('should next state be dead given the grid with one alive cell has zero alive neighbours', () => {
        const current = [
            [1, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        assertNextGeneration(nextGeneration(current), allDead);
    });

    it('should next state be dead given the grid with one alive cell has one alive neighbours', () => {
        const current = [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 0]
        ];

        assertNextGeneration(nextGeneration(current), allDead);
    });
});

describe('Test Conway Game of Life for cell with exact two alive neighbours', () => {
    it('should next state remain alive given the grid with one alive cell has two alive neighbours', () => {
        const current = [
            [0, 0, 0],
            [1, 1, 1],
            [0, 0, 0]
        ];
        let expectNext = [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0]
        ];

        assertNextGeneration(nextGeneration(current), expectNext);
    });

    it('should next state remain dead given the grid with one dead cell has two alive neighbours', () => {
        const current = [
            [0, 0, 0],
            [1, 0, 1],
            [0, 0, 0]
        ];
        const expectNext = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        assertNextGeneration(nextGeneration(current), expectNext);
    });
});

describe('Test Conway Game of Life for cell with exact three alive neighbours', () => {
    it('should next state be alive given the grid with one alive cell has three alive neighbours', () => {
        const current = [
            [0, 1, 0],
            [0, 1, 1],
            [0, 1, 0]
        ];
        const expectNext = [
            [0, 1, 1],
            [1, 1, 1],
            [0, 1, 1]
        ];

        assertNextGeneration(nextGeneration(current), expectNext);
    });

    it('should next state be alive given the grid with one dead cell has three alive neighbours', () => {
        const current = [
            [1, 1, 0],
            [0, 0, 0],
            [0, 1, 0]
        ];
        const expectNext = [
            [0, 0, 0],
            [1, 1, 0],
            [0, 0, 0]
        ];

        assertNextGeneration(nextGeneration(current), expectNext);
    });
});

describe('Test Conway Game of Life for cell with more than three alive neighbours', () => {
    it('should next state be dead given the grid with one alive cell has four alive neighbours', () => {
        const current = [
            [0, 1, 0],
            [1, 1, 1],
            [0, 1, 0]
        ];
        const expectNext = [
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1]
        ];

        assertNextGeneration(nextGeneration(current), expectNext);
    });

    it('should next state be dead given the grid with one dead cell has four alive neighbours', () => {
        const current = [
            [0, 1, 0],
            [1, 0, 1],
            [0, 1, 0]
        ];
        const expectNext = [
            [0, 1, 0],
            [1, 0, 1],
            [0, 1, 0]
        ];

        assertNextGeneration(nextGeneration(current), expectNext);
    });
});

describe('Test Conway Game of Life for grid is a non-standard rectangle grid', () => {
    it('should next state be correct given the non-standard grid on both row and column', () => {
        const current = [
            [1, 0, 0, 1],
            [1, 0, 0],
            [0, 1]
        ];

        const expectNext = [
            [0, 0, 0, 0],
            [1, 1, 0],
            [0, 0]
        ];

        assertNextGeneration(nextGeneration(current), expectNext);
    });
});


const assertNextGeneration = (next, expectNext) => {
    expect(next).to.be.an('array');
    expect(next).to.deep.equal(expectNext);
};