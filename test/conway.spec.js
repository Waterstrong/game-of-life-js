import {expect} from 'chai';
import {gotoNextGeneration} from '../src/js/conway.js';

describe('Test Conway Game of Life', () => {
    it('should next state be the same given the grid with zero alive cell', () => {
        let current = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

        assertNextGeneration(gotoNextGeneration(current), current);
    });

    it('should next state be the all dead given the grid with less than two alive cells', () => {
        let current1 = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
        let current2 = [[0, 1, 0], [0, 1, 0], [0, 0, 0]];
        let expectNext = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

        [current1, current2].forEach((current) => {
            assertNextGeneration(gotoNextGeneration(current), expectNext);
        });
    });

    it('should next state be correct given the grid with one cell has two alive neighbours', () => {
        let current = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
        let expectNext = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];

        assertNextGeneration(gotoNextGeneration(current), expectNext);
    });

    it('should next state be correct given the grid with one cell has three alive neighbours', () => {
        let current = [[0, 1, 0], [0, 1, 1], [0, 1, 0]];
        let expectNext = [[0, 1, 1], [1, 1, 1], [0, 1, 1]];

        assertNextGeneration(gotoNextGeneration(current), expectNext);
    });

    const assertNextGeneration = (next, expectNext) => {
        expect(next).be.instanceof(Array);
        expect(next.toString()).to.equal(expectNext.toString());
    };
});