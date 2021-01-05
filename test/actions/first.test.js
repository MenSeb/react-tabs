import { first } from 'actions';
import { firstChild, state } from '../';

describe('first', () => {
    it('updates the state with the first tab', () => {
        expect(
            first(state, { target: { parentNode: { firstChild } } }),
        ).toMatchObject({
            ...state,
            idTab: firstChild.id,
            target: firstChild,
        });
    });
});
