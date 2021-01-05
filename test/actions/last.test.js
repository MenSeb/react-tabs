import { last } from 'actions';
import { lastChild, state } from '../';

describe('last', () => {
    it('updates the state with the last tab', () => {
        expect(
            last(state, { target: { parentNode: { lastChild } } }),
        ).toMatchObject({
            ...state,
            idTab: lastChild.id,
            target: lastChild,
        });
    });
});
