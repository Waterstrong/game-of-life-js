import {expect} from 'chai';
import {foo} from '../src/js';

describe('test index function', () => {
    it('should test foo method', () => {
        expect(foo()).to.equal('foo');
    })
});
