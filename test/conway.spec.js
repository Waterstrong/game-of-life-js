import {expect} from 'chai';
import {gotoNextGeneration} from '../src/js/conway.js';

describe('Test Conway Game of Life', () => {
    it('should next state be the same given the grid with zero alive cell', () => {
        let current = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

        let next = gotoNextGeneration(current);

        expect(next).to.be.instanceof(Array);
        expect(next.toString()).to.equal(current.toString());
    });

    it('should next state be the all dead given the grid with less than two alive cells', () => {
        let current1 = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
        let current2 = [[0, 1, 0], [0, 1, 0], [0, 0, 0]];
        let expectNext = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

        [current1, current2].forEach((current) => {
            let next = gotoNextGeneration(current);
            expect(next).be.instanceof(Array);
            expect(next.toString()).to.equal(expectNext.toString());
        });
    });
});