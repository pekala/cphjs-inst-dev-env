/* eslint-env jest */
import getSomething from './lib/bundle.es';

describe('Testing works', () => {
    it('should allow assertions', () => {
        const something = getSomething();
        expect(something).toEqual(expect.stringContaining('Hello'));
    });
});
