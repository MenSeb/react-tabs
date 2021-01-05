import { first } from 'actions';
import { firstChild, state, target } from '../';

describe('first', () => {
    it('updates the state with the first tab', () => {
        expect(first(state, { target })).toMatchObject({
            ...state,
            idTab: firstChild.id,
            target: firstChild,
        });
    });
});
