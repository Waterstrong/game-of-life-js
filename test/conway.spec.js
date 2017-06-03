import {expect} from 'chai';
import gotoNextGeneration from '../src/js/conway.js';

describe('Test Conway Game of Life', () => {
    it('should next state be all dead given the grid with zero alive cell', () => {
        let current = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        assertNextGeneration(gotoNextGeneration(current), current);
    });

    it('should next state be all dead given the grid with one cell has less than two alive neighbours', () => {
        let current = [
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [0, 0, 0, 1]
        ];

        let expectNext = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];

        assertNextGeneration(gotoNextGeneration(current), expectNext);
    });

    it('should next state remain given the grid with one alive or dead cell has two alive neighbours', () => {
        let current = [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ];
        let expectNext = [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0]
        ];

        assertNextGeneration(gotoNextGeneration(current), expectNext);
    });

    it('should next state be alive given the grid with one alive or dead cell has three alive neighbours', () => {
        let current = [
            [0, 1, 0],
            [0, 1, 1],
            [0, 1, 0]
        ];
        let expectNext = [
            [0, 1, 1],
            [1, 1, 1],
            [0, 1, 1]
        ];

        assertNextGeneration(gotoNextGeneration(current), expectNext);
    });

    it('should next state be dead given the grid with one alive cell has more than three alive neighbours', () => {
        let current = [
            [0, 1, 0],
            [1, 1, 1],
            [0, 1, 0]
        ];
        let expectNext = [
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1]
        ];

        assertNextGeneration(gotoNextGeneration(current), expectNext);
    });

    it('should next state be dead given the grid with one dead cell has more than three alive neighbours', () => {
        let current = [
            [0, 1, 0],
            [1, 0, 1],
            [0, 1, 0]
        ];
        let expectNext = [
            [0, 1, 0],
            [1, 0, 1],
            [0, 1, 0]
        ];

        assertNextGeneration(gotoNextGeneration(current), expectNext);
    });

    it('should next state be correct given the nonstandard grid on both row and column', () => {
        let current = [
            [1, 0, 0, 1],
            [1, 0, 0],
            [0, 1]
        ];

        let expectNext = [
            [0, 0, 0, 0],
            [1, 1, 0],
            [0, 0]
        ];

        assertNextGeneration(gotoNextGeneration(current), expectNext);
    });

    const assertNextGeneration = (next, expectNext) => {
        expect(next).be.instanceof(Array);
        expect(next.toString()).to.equal(expectNext.toString());
    };
});