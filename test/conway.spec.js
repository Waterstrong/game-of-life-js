import {expect} from 'chai';
import {gotoNextGeneration} from '../src/js/conway.js';

describe('Test Conway Game of Life', () => {
    it('should next state be the same given the grid with zero alive cell', () => {
        let current = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

        let next = gotoNextGeneration(current);

        expect(next).to.be.instanceof(Array);
        expect(next.toString()).to.equal(current.toString());
    });
});